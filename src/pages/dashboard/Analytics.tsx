import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/ui/glass-card';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock, 
  Trophy,
  Brain,
  Code,
  Users,
  Calendar,
  Download,
  Filter
} from 'lucide-react';

const Analytics = () => {
  const performanceMetrics = [
    {
      title: 'Overall Score',
      value: '87%',
      change: '+5%',
      trend: 'up',
      icon: Trophy,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Test Average',
      value: '82%',
      change: '+3%',
      trend: 'up',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Study Time',
      value: '124h',
      change: '+12h',
      trend: 'up',
      icon: Clock,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Rank',
      value: '#156',
      change: '+23',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    },
  ];

  const skillBreakdown = [
    { skill: 'JavaScript', score: 92, progress: 92, color: 'bg-yellow-500' },
    { skill: 'React', score: 88, progress: 88, color: 'bg-blue-500' },
    { skill: 'Node.js', score: 75, progress: 75, color: 'bg-green-500' },
    { skill: 'Python', score: 85, progress: 85, color: 'bg-purple-500' },
    { skill: 'Data Structures', score: 79, progress: 79, color: 'bg-red-500' },
    { skill: 'System Design', score: 68, progress: 68, color: 'bg-indigo-500' },
  ];

  const weeklyActivity = [
    { day: 'Mon', tests: 3, study: 4, interviews: 1 },
    { day: 'Tue', tests: 2, study: 6, interviews: 0 },
    { day: 'Wed', tests: 4, study: 3, interviews: 2 },
    { day: 'Thu', tests: 1, study: 5, interviews: 1 },
    { day: 'Fri', tests: 3, study: 2, interviews: 0 },
    { day: 'Sat', tests: 2, study: 7, interviews: 1 },
    { day: 'Sun', tests: 1, study: 4, interviews: 0 },
  ];

  const strengths = [
    'Problem Solving',
    'Code Quality',
    'Communication Skills',
    'Time Management'
  ];

  const improvements = [
    'System Design',
    'Advanced Algorithms',
    'Database Optimization',
    'Leadership Skills'
  ];

  const recentAchievements = [
    {
      title: 'JavaScript Master',
      description: 'Scored 90%+ in 5 consecutive JavaScript tests',
      date: '2 days ago',
      icon: Code,
    },
    {
      title: 'Consistent Learner',
      description: '30-day study streak completed',
      date: '1 week ago',
      icon: Calendar,
    },
    {
      title: 'Interview Pro',
      description: 'Completed 10 AI interviews with 85%+ average',
      date: '2 weeks ago',
      icon: Brain,
    },
    {
      title: 'Community Helper',
      description: 'Helped 50+ students in discussions',
      date: '3 weeks ago',
      icon: Users,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Track your learning progress and performance</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="hover:glow-accent transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className={`text-xs ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color}`}>
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skill Breakdown */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Skill Performance
              </CardTitle>
              <CardDescription>Your performance across different skill areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillBreakdown.map((skill, index) => (
                  <motion.div
                    key={skill.skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-sm text-muted-foreground">{skill.score}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.progress} className="h-3" />
                      <div 
                        className={`absolute left-0 top-0 h-3 rounded-full ${skill.color}`}
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <achievement.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-accent mt-1">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Weekly Activity & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Weekly Activity</CardTitle>
              <CardDescription>Your learning activity over the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyActivity.map((day, index) => (
                  <div key={day.day} className="flex items-center justify-between">
                    <span className="text-sm font-medium w-12">{day.day}</span>
                    <div className="flex-1 mx-4">
                      <div className="flex space-x-1 h-4">
                        <div 
                          className="bg-blue-500 rounded"
                          style={{ width: `${(day.tests / 5) * 100}%` }}
                          title={`${day.tests} tests`}
                        />
                        <div 
                          className="bg-green-500 rounded"
                          style={{ width: `${(day.study / 8) * 100}%` }}
                          title={`${day.study}h study`}
                        />
                        <div 
                          className="bg-purple-500 rounded"
                          style={{ width: `${(day.interviews / 3) * 100}%` }}
                          title={`${day.interviews} interviews`}
                        />
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground w-16 text-right">
                      {day.tests + day.study + day.interviews} total
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-4 mt-4 text-xs">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded mr-1" />
                  Tests
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded mr-1" />
                  Study (hrs)
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded mr-1" />
                  Interviews
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Strengths & Improvements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
              <CardDescription>Personalized feedback based on your performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-green-600 mb-3">Your Strengths</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {strengths.map((strength, index) => (
                      <div key={index} className="text-sm bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                        {strength}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-blue-600 mb-3">Areas for Improvement</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {improvements.map((improvement, index) => (
                      <div key={index} className="text-sm bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                        {improvement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;