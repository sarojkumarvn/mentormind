import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import GlassCard from '@/components/ui/glass-card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Brain, 
  Plus, 
  Share, 
  Download,
  Eye,
  Edit3,
  Trash2,
  Zap,
  Network,
  Lightbulb,
  Target,
  GitBranch,
  Layers
} from 'lucide-react';

interface MindMap {
  id: number;
  title: string;
  description: string;
  category: string;
  nodes: number;
  connections: number;
  createdAt: string;
  lastModified: string;
  aiGenerated?: boolean;
  collaborative?: boolean;
  thumbnail?: string;
}

const MindMaps = () => {
  const [mindMaps, setMindMaps] = useState<MindMap[]>([
    {
      id: 1,
      title: 'React Ecosystem Overview',
      description: 'Comprehensive map of React libraries, tools, and concepts',
      category: 'Frontend',
      nodes: 25,
      connections: 18,
      createdAt: '2024-01-15',
      lastModified: '2024-01-16',
      aiGenerated: false,
      collaborative: true
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      description: 'Core concepts and algorithms in machine learning',
      category: 'AI/ML',
      nodes: 32,
      connections: 28,
      createdAt: '2024-01-14',
      lastModified: '2024-01-15',
      aiGenerated: true,
      collaborative: false
    },
    {
      id: 3,
      title: 'System Design Patterns',
      description: 'Common patterns and principles in system architecture',
      category: 'System Design',
      nodes: 18,
      connections: 15,
      createdAt: '2024-01-13',
      lastModified: '2024-01-14',
      aiGenerated: false,
      collaborative: true
    },
    {
      id: 4,
      title: 'Database Concepts',
      description: 'SQL, NoSQL, and database design principles',
      category: 'Database',
      nodes: 22,
      connections: 19,
      createdAt: '2024-01-12',
      lastModified: '2024-01-13',
      aiGenerated: true,
      collaborative: false
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newMindMap, setNewMindMap] = useState({ title: '', description: '', category: '' });

  const categories = ['all', ...Array.from(new Set(mindMaps.map(map => map.category)))];
  
  const filteredMindMaps = mindMaps.filter(map => 
    selectedCategory === 'all' || map.category === selectedCategory
  );

  const handleCreateMindMap = () => {
    if (newMindMap.title && newMindMap.category) {
      const mindMap: MindMap = {
        id: Date.now(),
        title: newMindMap.title,
        description: newMindMap.description,
        category: newMindMap.category,
        nodes: 1,
        connections: 0,
        createdAt: new Date().toISOString().split('T')[0],
        lastModified: new Date().toISOString().split('T')[0],
        aiGenerated: false,
        collaborative: false
      };
      setMindMaps([mindMap, ...mindMaps]);
      setNewMindMap({ title: '', description: '', category: '' });
      setIsCreateDialogOpen(false);
    }
  };

  const totalNodes = mindMaps.reduce((sum, map) => sum + map.nodes, 0);
  const totalConnections = mindMaps.reduce((sum, map) => sum + map.connections, 0);
  const aiGeneratedCount = mindMaps.filter(map => map.aiGenerated).length;

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Mind Maps</h1>
            <p className="text-muted-foreground">Visual knowledge mapping with AI assistance</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Brain className="h-4 w-4 mr-2" />
              AI Generator
            </Button>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gradient-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Map
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Create New Mind Map</DialogTitle>
                  <DialogDescription>
                    Start a new mind map to organize your knowledge
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Input
                    placeholder="Mind map title..."
                    value={newMindMap.title}
                    onChange={(e) => setNewMindMap({ ...newMindMap, title: e.target.value })}
                  />
                  <Input
                    placeholder="Description (optional)..."
                    value={newMindMap.description}
                    onChange={(e) => setNewMindMap({ ...newMindMap, description: e.target.value })}
                  />
                  <Input
                    placeholder="Category (e.g., Frontend, AI/ML)..."
                    value={newMindMap.category}
                    onChange={(e) => setNewMindMap({ ...newMindMap, category: e.target.value })}
                  />
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreateMindMap} className="gradient-primary">
                    Create Map
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Total Maps', value: mindMaps.length.toString(), icon: Network, color: 'from-blue-500 to-cyan-500' },
          { title: 'Total Nodes', value: totalNodes.toString(), icon: Layers, color: 'from-green-500 to-emerald-500' },
          { title: 'Connections', value: totalConnections.toString(), icon: GitBranch, color: 'from-purple-500 to-pink-500' },
          { title: 'AI Generated', value: aiGeneratedCount.toString(), icon: Brain, color: 'from-orange-500 to-red-500' },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="hover:glow-accent transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* AI Features Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Brain className="h-5 w-5 mr-2 text-accent" />
              AI-Powered Features
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start">
              <Lightbulb className="h-4 w-4 mr-2" />
              Generate from Notes
            </Button>
            <Button variant="outline" className="justify-start">
              <Target className="h-4 w-4 mr-2" />
              Auto-Connect Concepts
            </Button>
            <Button variant="outline" className="justify-start">
              <Zap className="h-4 w-4 mr-2" />
              Suggest Relationships
            </Button>
          </div>
        </GlassCard>
      </motion.div>

      {/* Category Filter */}
      <div className="flex gap-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border rounded-md bg-background"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      {/* Mind Maps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMindMaps.map((mindMap, index) => (
          <motion.div
            key={mindMap.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card hover:glow-accent transition-all duration-300 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1 flex items-center">
                      {mindMap.title}
                      {mindMap.aiGenerated && (
                        <Brain className="h-4 w-4 ml-2 text-accent" />
                      )}
                      {mindMap.collaborative && (
                        <Share className="h-4 w-4 ml-1 text-blue-500" />
                      )}
                    </CardTitle>
                    <Badge variant="secondary">{mindMap.category}</Badge>
                  </div>
                </div>
                <CardDescription>{mindMap.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Mind Map Preview */}
                <div className="h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border-2 border-dashed border-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <Network className="h-8 w-8 text-accent mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Mind Map Preview</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-2 bg-accent/5 rounded">
                    <div className="font-semibold text-accent">{mindMap.nodes}</div>
                    <div className="text-xs text-muted-foreground">Nodes</div>
                  </div>
                  <div className="text-center p-2 bg-accent/5 rounded">
                    <div className="font-semibold text-accent">{mindMap.connections}</div>
                    <div className="text-xs text-muted-foreground">Connections</div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  <div>Created: {mindMap.createdAt}</div>
                  <div>Modified: {mindMap.lastModified}</div>
                </div>

                {mindMap.aiGenerated && (
                  <div className="p-2 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <div className="flex items-center text-xs text-accent">
                      <Brain className="h-3 w-3 mr-1" />
                      AI-generated mind map
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit3 className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-3 w-3" />
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

      {/* Interactive Canvas Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Network className="h-5 w-5 mr-2" />
              Interactive Canvas
            </CardTitle>
            <CardDescription>
              Click on any mind map above to open it in the interactive canvas editor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-background to-accent/5 rounded-lg border-2 border-dashed border-accent/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Network className="h-12 w-12 text-accent mx-auto" />
                <div>
                  <h3 className="font-medium">Interactive Mind Map Editor</h3>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop nodes, create connections, and collaborate in real-time
                  </p>
                </div>
                <Button className="gradient-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Start Creating
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default MindMaps;