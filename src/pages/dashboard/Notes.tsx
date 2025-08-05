import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import GlassCard from '@/components/ui/glass-card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  StickyNote, 
  Plus, 
  Search, 
  Brain, 
  Tags, 
  Clock,
  Edit3,
  Trash2,
  Sparkles,
  Filter,
  Star
} from 'lucide-react';

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'React Hooks Overview',
      content: 'useState, useEffect, useContext are the most commonly used hooks. useState manages component state, useEffect handles side effects like API calls...',
      tags: ['React', 'Frontend', 'JavaScript'],
      createdAt: '2024-01-15',
      isStarred: true,
      aiSummary: 'Core React hooks for state and effect management'
    },
    {
      id: 2,
      title: 'Data Structures Study',
      content: 'Arrays, Linked Lists, Stacks, Queues, Trees, Graphs. Time complexity analysis for each operation...',
      tags: ['DSA', 'Programming', 'Algorithms'],
      createdAt: '2024-01-14',
      isStarred: false,
      aiSummary: 'Fundamental data structures and their complexities'
    },
    {
      id: 3,
      title: 'Database Normalization',
      content: '1NF, 2NF, 3NF, BCNF. Reducing redundancy and improving data integrity through proper table design...',
      tags: ['Database', 'SQL', 'Backend'],
      createdAt: '2024-01-13',
      isStarred: false,
      aiSummary: 'Database design principles for optimal structure'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '', tags: '' });

  const allTags = Array.from(new Set(notes.flatMap(note => note.tags)));
  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || note.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleCreateNote = () => {
    if (newNote.title && newNote.content) {
      const note = {
        id: Date.now(),
        title: newNote.title,
        content: newNote.content,
        tags: newNote.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        createdAt: new Date().toISOString().split('T')[0],
        isStarred: false,
        aiSummary: 'AI summary will be generated...'
      };
      setNotes([note, ...notes]);
      setNewNote({ title: '', content: '', tags: '' });
      setIsCreateDialogOpen(false);
    }
  };

  const toggleStar = (id: number) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, isStarred: !note.isStarred } : note
    ));
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Smart Notes</h1>
            <p className="text-muted-foreground">AI-powered note taking and organization</p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary mt-4 md:mt-0">
                <Plus className="h-4 w-4 mr-2" />
                Create Note
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Note</DialogTitle>
                <DialogDescription>
                  Add a new note with AI-powered features
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Input
                  placeholder="Note title..."
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                />
                <Textarea
                  placeholder="Write your note content..."
                  value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                  rows={6}
                />
                <Input
                  placeholder="Tags (comma separated)"
                  value={newNote.tags}
                  onChange={(e) => setNewNote({ ...newNote, tags: e.target.value })}
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateNote} className="gradient-primary">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Create with AI
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-md bg-background"
          >
            <option value="">All Tags</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* AI Features Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start">
              <Brain className="h-4 w-4 mr-2" />
              AI Summarize All
            </Button>
            <Button variant="outline" className="justify-start">
              <Tags className="h-4 w-4 mr-2" />
              Smart Tag Suggestions
            </Button>
            <Button variant="outline" className="justify-start">
              <Sparkles className="h-4 w-4 mr-2" />
              Related Topics
            </Button>
          </div>
        </GlassCard>
      </motion.div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card hover:glow-accent transition-all duration-300 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{note.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {note.createdAt}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleStar(note.id)}
                    className={note.isStarred ? 'text-yellow-500' : ''}
                  >
                    <Star className={`h-4 w-4 ${note.isStarred ? 'fill-current' : ''}`} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {note.content}
                </p>
                
                <div className="p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <div className="flex items-center mb-1">
                    <Brain className="h-3 w-3 mr-1 text-accent" />
                    <span className="text-xs font-medium text-accent">AI Summary</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{note.aiSummary}</p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {note.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit3 className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <div className="text-center py-12">
          <StickyNote className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No notes found</h3>
          <p className="text-muted-foreground">Create your first note to get started</p>
        </div>
      )}
    </div>
  );
};

export default Notes;