import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import GlassCard from '@/components/ui/glass-card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Brain, 
  Plus, 
  RotateCcw, 
  Star,
  BookOpen,
  Target,
  Shuffle,
  Play,
  Eye,
  EyeOff,
  Zap,
  Calendar,
  TrendingUp
} from 'lucide-react';

interface Flashcard {
  id: number;
  front: string;
  back: string;
  category: string;
  difficulty: number;
  lastReviewed?: string;
  nextReview?: string;
  repetitions: number;
  easeFactor: number;
  interval: number;
  aiGenerated?: boolean;
}

const Flashcards = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([
    {
      id: 1,
      front: 'What is the time complexity of binary search?',
      back: 'O(log n) - Binary search divides the search space in half with each comparison, resulting in logarithmic time complexity.',
      category: 'Algorithms',
      difficulty: 2,
      lastReviewed: '2024-01-15',
      nextReview: '2024-01-17',
      repetitions: 3,
      easeFactor: 2.5,
      interval: 2,
      aiGenerated: false
    },
    {
      id: 2,
      front: 'What is useState in React?',
      back: 'useState is a React Hook that lets you add state to functional components. It returns an array with the current state value and a function to update it.',
      category: 'React',
      difficulty: 1,
      lastReviewed: '2024-01-16',
      nextReview: '2024-01-18',
      repetitions: 1,
      easeFactor: 2.6,
      interval: 1,
      aiGenerated: true
    },
    {
      id: 3,
      front: 'What is database normalization?',
      back: 'Database normalization is the process of organizing data to minimize redundancy and improve data integrity by dividing large tables into smaller, related tables.',
      category: 'Database',
      difficulty: 3,
      lastReviewed: '2024-01-14',
      nextReview: '2024-01-19',
      repetitions: 5,
      easeFactor: 2.8,
      interval: 5,
      aiGenerated: true
    }
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studyMode, setStudyMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newCard, setNewCard] = useState({ front: '', back: '', category: '' });

  const categories = ['all', ...Array.from(new Set(flashcards.map(card => card.category)))];
  
  const filteredCards = flashcards.filter(card => 
    selectedCategory === 'all' || card.category === selectedCategory
  );

  const dueCards = flashcards.filter(card => {
    if (!card.nextReview) return true;
    return new Date(card.nextReview) <= new Date();
  });

  const handleCreateCard = () => {
    if (newCard.front && newCard.back && newCard.category) {
      const card: Flashcard = {
        id: Date.now(),
        front: newCard.front,
        back: newCard.back,
        category: newCard.category,
        difficulty: 1,
        repetitions: 0,
        easeFactor: 2.5,
        interval: 1,
        aiGenerated: false
      };
      setFlashcards([...flashcards, card]);
      setNewCard({ front: '', back: '', category: '' });
      setIsCreateDialogOpen(false);
    }
  };

  const handleCardResponse = (quality: number) => {
    const card = filteredCards[currentCardIndex];
    if (!card) return;

    // Spaced repetition algorithm (simplified SM-2)
    let newEaseFactor = card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (newEaseFactor < 1.3) newEaseFactor = 1.3;

    let newInterval;
    let newRepetitions;

    if (quality < 3) {
      newRepetitions = 0;
      newInterval = 1;
    } else {
      newRepetitions = card.repetitions + 1;
      if (newRepetitions === 1) {
        newInterval = 1;
      } else if (newRepetitions === 2) {
        newInterval = 6;
      } else {
        newInterval = Math.round(card.interval * newEaseFactor);
      }
    }

    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + newInterval);

    const updatedCard = {
      ...card,
      repetitions: newRepetitions,
      easeFactor: newEaseFactor,
      interval: newInterval,
      lastReviewed: new Date().toISOString().split('T')[0],
      nextReview: nextReview.toISOString().split('T')[0]
    };

    setFlashcards(flashcards.map(c => c.id === card.id ? updatedCard : c));
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const startStudySession = () => {
    setStudyMode(true);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const currentCard = filteredCards[currentCardIndex];

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Smart Flashcards</h1>
            <p className="text-muted-foreground">Spaced repetition learning with AI assistance</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Card
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Create New Flashcard</DialogTitle>
                  <DialogDescription>
                    Add a new flashcard to your study collection
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Input
                    placeholder="Front side (question/prompt)..."
                    value={newCard.front}
                    onChange={(e) => setNewCard({ ...newCard, front: e.target.value })}
                  />
                  <Textarea
                    placeholder="Back side (answer/explanation)..."
                    value={newCard.back}
                    onChange={(e) => setNewCard({ ...newCard, back: e.target.value })}
                    rows={4}
                  />
                  <Input
                    placeholder="Category (e.g., React, Algorithms)..."
                    value={newCard.category}
                    onChange={(e) => setNewCard({ ...newCard, category: e.target.value })}
                  />
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreateCard} className="gradient-primary">
                    Create Card
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button className="gradient-primary" onClick={startStudySession}>
              <Play className="h-4 w-4 mr-2" />
              Start Study
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Study Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Total Cards', value: flashcards.length.toString(), icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
          { title: 'Due Today', value: dueCards.length.toString(), icon: Calendar, color: 'from-red-500 to-pink-500' },
          { title: 'Study Streak', value: '12 days', icon: Target, color: 'from-green-500 to-emerald-500' },
          { title: 'Mastery Rate', value: '78%', icon: TrendingUp, color: 'from-purple-500 to-indigo-500' },
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start">
              <Brain className="h-4 w-4 mr-2" />
              Generate from Notes
            </Button>
            <Button variant="outline" className="justify-start">
              <Zap className="h-4 w-4 mr-2" />
              AI Study Plan
            </Button>
            <Button variant="outline" className="justify-start">
              <Shuffle className="h-4 w-4 mr-2" />
              Smart Review
            </Button>
          </div>
        </GlassCard>
      </motion.div>

      {studyMode ? (
        /* Study Mode Interface */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-2xl">
            <div className="text-center mb-6">
              <Badge variant="secondary" className="mb-2">
                {currentCardIndex + 1} of {filteredCards.length}
              </Badge>
              <h3 className="text-lg font-semibold">
                {currentCard?.category || 'Study Session'}
              </h3>
            </div>

            <div className="relative h-96 perspective-1000">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard?.id}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full absolute preserve-3d cursor-pointer"
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  {/* Front Side */}
                  <Card className="absolute inset-0 backface-hidden glass-card">
                    <CardContent className="h-full flex flex-col justify-center items-center p-8">
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">
                          {isFlipped ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                        </div>
                        <h2 className="text-xl font-medium">{currentCard?.front}</h2>
                        <p className="text-sm text-muted-foreground">
                          Click to reveal answer
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Back Side */}
                  <Card className="absolute inset-0 backface-hidden rotate-y-180 glass-card">
                    <CardContent className="h-full flex flex-col justify-center p-8">
                      <div className="text-center space-y-4">
                        <h2 className="text-lg font-medium mb-4">Answer:</h2>
                        <p className="text-base leading-relaxed">{currentCard?.back}</p>
                        {currentCard?.aiGenerated && (
                          <Badge variant="secondary" className="mt-4">
                            <Brain className="h-3 w-3 mr-1" />
                            AI Generated
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {isFlipped && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center"
              >
                <p className="text-sm text-muted-foreground mb-4">How well did you know this?</p>
                <div className="flex justify-center gap-2">
                  <Button variant="outline" onClick={() => handleCardResponse(1)} className="text-red-600">
                    Again
                  </Button>
                  <Button variant="outline" onClick={() => handleCardResponse(3)} className="text-yellow-600">
                    Hard
                  </Button>
                  <Button variant="outline" onClick={() => handleCardResponse(4)} className="text-green-600">
                    Good
                  </Button>
                  <Button variant="outline" onClick={() => handleCardResponse(5)} className="text-blue-600">
                    Easy
                  </Button>
                </div>
              </motion.div>
            )}

            <div className="mt-6 flex justify-center gap-4">
              <Button variant="outline" onClick={() => setStudyMode(false)}>
                End Session
              </Button>
              <Button variant="outline" onClick={() => setIsFlipped(!isFlipped)}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Flip Card
              </Button>
            </div>
          </div>
        </motion.div>
      ) : (
        /* Browse Mode */
        <div className="space-y-6">
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

          {/* Flashcards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card hover:glow-accent transition-all duration-300 h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary">{card.category}</Badge>
                      {card.aiGenerated && (
                        <Brain className="h-4 w-4 text-accent" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Question:</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {card.front}
                      </p>
                    </div>
                    
                    <div className="text-xs text-muted-foreground space-y-1">
                      {card.lastReviewed && (
                        <div>Last reviewed: {card.lastReviewed}</div>
                      )}
                      {card.nextReview && (
                        <div>Next review: {card.nextReview}</div>
                      )}
                      <div>Repetitions: {card.repetitions}</div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="h-3 w-3 mr-1" />
                      Study Card
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcards;