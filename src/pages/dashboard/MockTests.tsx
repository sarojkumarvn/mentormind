import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GlassCard from '@/components/ui/glass-card';
import { Progress } from '@/components/ui/progress';
import { 
  ClipboardList, 
  Clock, 
  Trophy, 
  BarChart3, 
  Play, 
  Code,
  Brain,
  Calculator,
  Users,
  Star
} from 'lucide-react';

const MockTests = () => {
  const [activeTab, setActiveTab] = useState('available');

  const testCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      tests: [
        {
          title: 'JavaScript Fundamentals',
          difficulty: 'Beginner',
          duration: '30 mins',
          questions: 25,
          rating: 4.8,
          taken: false,
        },
        {
          title: 'React.js Advanced',
          difficulty: 'Advanced',
          duration: '45 mins',
          questions: 30,
          rating: 4.9,
          taken: false,
        },
        {
          title: 'Data Structures & Algorithms',
          difficulty: 'Intermediate',
          duration: '60 mins',
          questions: 20,
          rating: 4.7,
          taken: true,
          score: 85,
        },
      ]
    },
    {
      title: 'Aptitude & Reasoning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      tests: [
        {
          title: 'Logical Reasoning',
          difficulty: 'Intermediate',
          duration: '40 mins',
          questions: 35,
          rating: 4.6,
          taken: true,
          score: 92,
        },
        {
          title: 'Numerical Ability',
          difficulty: 'Beginner',
          duration: '30 mins',
          questions: 30,
          rating: 4.5,
          taken: false,
        },
        {
          title: 'Verbal Reasoning',
          difficulty: 'Intermediate',
          duration: '35 mins',
          questions: 25,
          rating: 4.7,
          taken: false,
        },
      ]
    },
    {
      title: 'Company Specific',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      tests: [
        {
          title: 'Google SWE Assessment',
          difficulty: 'Advanced',
          duration: '90 mins',
          questions: 40,
          rating: 4.9,
          taken: false,
        },
        {
          title: 'Amazon Leadership',
          difficulty: 'Intermediate',
          duration: '60 mins',
          questions: 35,
          rating: 4.8,
          taken: false,
        },
        {
          title: 'Meta Coding Challenge',
          difficulty: 'Advanced',
          duration: '75 mins',
          questions: 25,
          rating: 4.9,
          taken: true,
          score: 78,
        },
      ]
    },
  ];

  const recentResults = [
    {
      test: 'Data Structures & Algorithms',
      score: 85,
      maxScore: 100,
      date: '2 days ago',
      difficulty: 'Intermediate',
    },
    {
      test: 'Logical Reasoning',
      score: 92,
      maxScore: 100,
      date: '1 week ago',
      difficulty: 'Intermediate',
    },
    {
      test: 'Meta Coding Challenge',
      score: 78,
      maxScore: 100,
      date: '2 weeks ago',
      difficulty: 'Advanced',
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
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
            <h1 className="text-3xl font-heading font-bold mb-2">Mock Tests</h1>
            <p className="text-muted-foreground">Practice with real-world assessments</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
            <Button className="gradient-primary">
              <Play className="h-4 w-4 mr-2" />
              Quick Test
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Tests Taken', value: '23', icon: ClipboardList, color: 'from-blue-500 to-cyan-500' },
          { title: 'Average Score', value: '85%', icon: Trophy, color: 'from-green-500 to-emerald-500' },
          { title: 'Time Spent', value: '28h', icon: Clock, color: 'from-purple-500 to-pink-500' },
          { title: 'Rank', value: '#156', icon: Star, color: 'from-orange-500 to-red-500' },
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

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Test Categories */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Available Tests</CardTitle>
              <CardDescription>Choose from our comprehensive test library</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {testCategories.map((category, categoryIndex) => (
                  <div key={category.title}>
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {category.tests.map((test, testIndex) => (
                        <motion.div
                          key={test.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: (categoryIndex * 0.1) + (testIndex * 0.05) }}
                          className="p-4 border rounded-lg hover:bg-accent/10 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <h4 className="font-medium mr-2">{test.title}</h4>
                                <Badge 
                                  variant="secondary" 
                                  className={`${getDifficultyColor(test.difficulty)} text-white`}
                                >
                                  {test.difficulty}
                                </Badge>
                                {test.taken && (
                                  <Badge variant="outline" className="ml-2">
                                    Score: {test.score}%
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                                <span className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {test.duration}
                                </span>
                                <span>{test.questions} questions</span>
                                <span className="flex items-center">
                                  <Star className="h-3 w-3 mr-1 text-yellow-500" />
                                  {test.rating}
                                </span>
                              </div>
                            </div>
                            <Button size="sm" variant={test.taken ? "outline" : "default"}>
                              {test.taken ? 'Retake' : 'Start Test'}
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                Recent Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentResults.map((result, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{result.test}</h4>
                      <Badge 
                        variant="secondary"
                        className={getDifficultyColor(result.difficulty) + ' text-white'}
                      >
                        {result.difficulty}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Score</span>
                        <span className="font-medium">{result.score}/{result.maxScore}</span>
                      </div>
                      <Progress value={(result.score / result.maxScore) * 100} className="h-2" />
                      <p className="text-xs text-muted-foreground">{result.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card mt-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calculator className="h-4 w-4 mr-2" />
                  Practice Calculator
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Test Recommendations
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Performance Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default MockTests;