import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Brain, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Clock, 
  Target,
  Award,
  Calendar,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import GlassCard from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    {
      title: 'Mock Tests Taken',
      value: '23',
      change: '+12%',
      trend: 'up',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Interviews',
      value: '8',
      change: '+5%',
      trend: 'up',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Study Hours',
      value: '124',
      change: '+8%',
      trend: 'up',
      icon: Clock,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Achievements',
      value: '15',
      change: '+3%',
      trend: 'up',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    },
  ];

  const recentActivities = [
    {
      type: 'test',
      title: 'JavaScript Fundamentals Quiz',
      score: '85%',
      time: '2 hours ago',
      icon: BarChart3,
    },
    {
      type: 'interview',
      title: 'Mock Technical Interview',
      score: '92%',
      time: '1 day ago',
      icon: Brain,
    },
    {
      type: 'study',
      title: 'React Components Guide',
      score: 'Completed',
      time: '2 days ago',
      icon: BookOpen,
    },
    {
      type: 'community',
      title: 'Posted in Data Structures',
      score: '5 likes',
      time: '3 days ago',
      icon: Users,
    },
  ];

  const upcomingTasks = [
    { title: 'Complete System Design Mock', due: 'Today', priority: 'high' },
    { title: 'Review Algorithm Problems', due: 'Tomorrow', priority: 'medium' },
    { title: 'Finish React Roadmap', due: 'This Week', priority: 'low' },
    { title: 'Join Career Fair Event', due: 'Next Week', priority: 'medium' },
  ];

  const skillProgress = [
    { skill: 'JavaScript', progress: 85, color: 'bg-yellow-500' },
    { skill: 'React', progress: 72, color: 'bg-blue-500' },
    { skill: 'Node.js', progress: 68, color: 'bg-green-500' },
    { skill: 'Python', progress: 91, color: 'bg-purple-500' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Welcome back, John!</h1>
            <p className="text-muted-foreground">Ready to continue your career journey?</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/dashboard/ai-interview">
              <Button className="gradient-primary">Start AI Interview</Button>
            </Link>
            <Link to="/dashboard/mock-tests">
              <Button variant="outline">Take Mock Test</Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
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
                  <p className={`text-xs ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your latest learning activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/10 transition-colors">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <activity.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{activity.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Tasks */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="text-sm font-medium">{task.title}</p>
                      <p className="text-xs text-muted-foreground">{task.due}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      task.priority === 'high' ? 'bg-red-500' :
                      task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Skill Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Skill Progress
            </CardTitle>
            <CardDescription>Your current skill levels and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillProgress.map((skill, index) => (
                <div key={skill.skill} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.skill}</span>
                    <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <GlassCard>
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/dashboard/roadmaps">
              <Button variant="outline" className="w-full justify-start h-auto p-4">
                <div className="text-left">
                  <p className="font-medium">View Roadmaps</p>
                  <p className="text-sm text-muted-foreground">Explore career paths</p>
                </div>
              </Button>
            </Link>
            <Link to="/dashboard/community">
              <Button variant="outline" className="w-full justify-start h-auto p-4">
                <div className="text-left">
                  <p className="font-medium">Join Community</p>
                  <p className="text-sm text-muted-foreground">Connect with peers</p>
                </div>
              </Button>
            </Link>
            <Link to="/dashboard/analytics">
              <Button variant="outline" className="w-full justify-start h-auto p-4">
                <div className="text-left">
                  <p className="font-medium">View Analytics</p>
                  <p className="text-sm text-muted-foreground">Track your progress</p>
                </div>
              </Button>
            </Link>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Dashboard;