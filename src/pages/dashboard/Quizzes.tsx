import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GlassCard from '@/components/ui/glass-card';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Trophy, 
  Target, 
  Clock, 
  Star,
  Play,
  BookOpen,
  TrendingUp,
  Zap,
  Award,
  BarChart3
} from 'lucide-react';

interface Quiz {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: number;
  duration: string;
  rating: number;
  completed: boolean;
  score?: number;
  aiGenerated?: boolean;
  weaknessTarget?: boolean;
}

const Quizzes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const quizzes: Quiz[] = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      description: 'Test your knowledge of JavaScript basics including variables, functions, and scope',
      category: 'Programming',
      difficulty: 'Beginner',
      questions: 20,
      duration: '25 mins',
      rating: 4.8,
      completed: true,
      score: 85,
      aiGenerated: false
    },
    {
      id: 2,
      title: 'React Hooks Mastery',
      description: 'Advanced quiz on React hooks, custom hooks, and state management',
      category: 'Frontend',
      difficulty: 'Advanced',
      questions: 15,
      duration: '30 mins',
      rating: 4.9,
      completed: false,
      aiGenerated: true,
      weaknessTarget: true
    },
    {
      id: 3,
      title: 'Data Structures & Algorithms',
      description: 'Comprehensive test on arrays, linked lists, trees, and sorting algorithms',
      category: 'DSA',
      difficulty: 'Intermediate',
      questions: 25,
      duration: '45 mins',
      rating: 4.7,
      completed: true,
      score: 78
    },
    {
      id: 4,
      title: 'Database Design Principles',
      description: 'Quiz on normalization, indexing, and query optimization',
      category: 'Database',
      difficulty: 'Intermediate',
      questions: 18,
      duration: '35 mins',
      rating: 4.6,
      completed: false,
      aiGenerated: true
    },
    {
      id: 5,
      title: 'System Design Basics',
      description: 'Test your understanding of scalability, load balancing, and architecture',
      category: 'System Design',
      difficulty: 'Advanced',
      questions: 12,
      duration: '40 mins',
      rating: 4.8,
      completed: false
    }
  ];

  const categories = ['all', ...Array.from(new Set(quizzes.map(q => q.category)))];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesCategory = selectedCategory === 'all' || quiz.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || quiz.difficulty === selectedDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const completedQuizzes = quizzes.filter(q => q.completed);
  const averageScore = completedQuizzes.length > 0 
    ? Math.round(completedQuizzes.reduce((sum, q) => sum + (q.score || 0), 0) / completedQuizzes.length)
    : 0;

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Smart Quizzes</h1>
            <p className="text-muted-foreground">Adaptive learning with AI-generated questions</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Brain className="h-4 w-4 mr-2" />
              AI Quiz Generator
            </Button>
            <Button className="gradient-primary">
              <Zap className="h-4 w-4 mr-2" />
              Quick Quiz
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Quizzes Taken', value: completedQuizzes.length.toString(), icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
          { title: 'Average Score', value: `${averageScore}%`, icon: Trophy, color: 'from-green-500 to-emerald-500' },
          { title: 'Study Streak', value: '7 days', icon: Target, color: 'from-purple-500 to-pink-500' },
          { title: 'Rank', value: '#234', icon: Award, color: 'from-orange-500 to-red-500' },
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

      {/* AI Insights Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Brain className="h-5 w-5 mr-2 text-accent" />
              AI Performance Insights
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                <span className="font-medium">Strength Areas</span>
              </div>
              <p className="text-sm text-muted-foreground">JavaScript, React basics</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <Target className="h-4 w-4 mr-2 text-red-500" />
                <span className="font-medium">Improvement Areas</span>
              </div>
              <p className="text-sm text-muted-foreground">Advanced React patterns, System Design</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <Zap className="h-4 w-4 mr-2 text-blue-500" />
                <span className="font-medium">Recommended</span>
              </div>
              <p className="text-sm text-muted-foreground">React Hooks, Database concepts</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
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
        <div>
          <label className="block text-sm font-medium mb-2">Difficulty</label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 border rounded-md bg-background"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>
                {difficulty === 'all' ? 'All Levels' : difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz, index) => (
          <motion.div
            key={quiz.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card hover:glow-accent transition-all duration-300 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1 flex items-center">
                      {quiz.title}
                      {quiz.aiGenerated && (
                        <Brain className="h-4 w-4 ml-2 text-accent" />
                      )}
                      {quiz.weaknessTarget && (
                        <Target className="h-4 w-4 ml-1 text-red-500" />
                      )}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{quiz.category}</Badge>
                      <Badge 
                        variant="secondary" 
                        className={`${getDifficultyColor(quiz.difficulty)} text-white`}
                      >
                        {quiz.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {quiz.questions} questions
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {quiz.duration}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    {quiz.rating}
                  </div>
                </div>

                {quiz.completed && quiz.score && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Your Score</span>
                      <span className="font-medium">{quiz.score}%</span>
                    </div>
                    <Progress value={quiz.score} className="h-2" />
                  </div>
                )}

                {quiz.aiGenerated && (
                  <div className="p-2 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <div className="flex items-center text-xs text-accent">
                      <Brain className="h-3 w-3 mr-1" />
                      AI-Generated based on your weak areas
                    </div>
                  </div>
                )}

                <Button 
                  className={`w-full ${quiz.completed ? 'variant-outline' : 'gradient-primary'}`}
                  variant={quiz.completed ? 'outline' : 'default'}
                >
                  <Play className="h-4 w-4 mr-2" />
                  {quiz.completed ? 'Retake Quiz' : 'Start Quiz'}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;