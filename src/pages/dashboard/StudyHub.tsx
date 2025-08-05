import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import GlassCard from '@/components/ui/glass-card';
import { 
  BookOpen, 
  Play, 
  Clock, 
  CheckCircle, 
  Star,
  FileText,
  Video,
  Code,
  Target,
  Calendar,
  TrendingUp,
  Filter,
  Search
} from 'lucide-react';

const StudyHub = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const courses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'Sarah Chen',
      duration: '42 hours',
      lessons: 156,
      level: 'Intermediate',
      rating: 4.9,
      students: 15420,
      progress: 68,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
      category: 'Frontend',
      tags: ['React', 'JavaScript', 'Web Development'],
      description: 'Master React from basics to advanced concepts including hooks, context, and performance optimization.'
    },
    {
      id: 2,
      title: 'System Design Fundamentals',
      instructor: 'Michael Rodriguez',
      duration: '28 hours',
      lessons: 89,
      level: 'Advanced',
      rating: 4.8,
      students: 8930,
      progress: 0,
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
      category: 'Backend',
      tags: ['System Design', 'Architecture', 'Scalability'],
      description: 'Learn to design scalable systems used by tech giants like Google, Facebook, and Amazon.'
    },
    {
      id: 3,
      title: 'Machine Learning with Python',
      instructor: 'Dr. Emily Johnson',
      duration: '65 hours',
      lessons: 234,
      level: 'Beginner',
      rating: 4.9,
      students: 23450,
      progress: 25,
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop',
      category: 'Data Science',
      tags: ['Python', 'ML', 'Data Science'],
      description: 'Complete guide to machine learning from basics to advanced algorithms and real-world applications.'
    },
  ];

  const learningPaths = [
    {
      title: 'Frontend Developer',
      courses: 8,
      duration: '6 months',
      difficulty: 'Beginner to Advanced',
      progress: 45,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Data Scientist',
      courses: 12,
      duration: '8 months',
      difficulty: 'Intermediate to Advanced',
      progress: 20,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Full Stack Engineer',
      courses: 15,
      duration: '10 months',
      difficulty: 'Beginner to Advanced',
      progress: 60,
      color: 'from-green-500 to-emerald-500'
    },
  ];

  const recentActivity = [
    {
      type: 'course',
      title: 'React Hooks Deep Dive',
      action: 'Completed lesson',
      time: '2 hours ago',
      icon: Video,
    },
    {
      type: 'quiz',
      title: 'JavaScript Fundamentals Quiz',
      action: 'Scored 92%',
      time: '1 day ago',
      icon: CheckCircle,
    },
    {
      type: 'project',
      title: 'Portfolio Website',
      action: 'Started project',
      time: '2 days ago',
      icon: Code,
    },
    {
      type: 'note',
      title: 'API Design Patterns',
      action: 'Added notes',
      time: '3 days ago',
      icon: FileText,
    },
  ];

  const studyStats = [
    {
      title: 'Courses Enrolled',
      value: '12',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Hours Studied',
      value: '156',
      icon: Clock,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Certificates',
      value: '8',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Streak',
      value: '23 days',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    },
  ];

  const getDifficultyColor = (level: string) => {
    switch (level) {
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
            <h1 className="text-3xl font-heading font-bold mb-2">Study Hub</h1>
            <p className="text-muted-foreground">Your personalized learning center</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Search Courses
            </Button>
            <Button className="gradient-primary">
              <Target className="h-4 w-4 mr-2" />
              Set Goals
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Study Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {studyStats.map((stat, index) => (
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
        {/* Courses and Learning Paths */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          {/* Tab Navigation */}
          <div className="flex space-x-2 mb-6">
            <Button
              variant={activeTab === 'courses' ? 'default' : 'outline'}
              onClick={() => setActiveTab('courses')}
            >
              My Courses
            </Button>
            <Button
              variant={activeTab === 'paths' ? 'default' : 'outline'}
              onClick={() => setActiveTab('paths')}
            >
              Learning Paths
            </Button>
            <Button
              variant={activeTab === 'browse' ? 'default' : 'outline'}
              onClick={() => setActiveTab('browse')}
            >
              Browse All
            </Button>
          </div>

          {activeTab === 'courses' && (
            <div className="space-y-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="hover:glow-accent transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-32 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                          </div>
                          <Badge 
                            variant="secondary"
                            className={`${getDifficultyColor(course.level)} text-white`}
                          >
                            {course.level}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {course.duration}
                          </span>
                          <span>{course.lessons} lessons</span>
                          <span className="flex items-center">
                            <Star className="h-3 w-3 mr-1 text-yellow-500" />
                            {course.rating}
                          </span>
                          <span>{course.students.toLocaleString()} students</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {course.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {course.progress > 0 && (
                          <div className="space-y-2 mb-3">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <Button size="sm" className={course.progress > 0 ? '' : 'gradient-primary'}>
                            <Play className="h-4 w-4 mr-2" />
                            {course.progress > 0 ? 'Continue' : 'Start Course'}
                          </Button>
                          <Badge variant="outline">{course.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'paths' && (
            <div className="space-y-4">
              {learningPaths.map((path, index) => (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="hover:glow-accent transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-lg bg-gradient-to-r ${path.color}`}>
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{path.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <span>{path.courses} courses</span>
                          <span>{path.duration}</span>
                          <span>{path.difficulty}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{path.progress}%</span>
                          </div>
                          <Progress value={path.progress} className="h-2" />
                        </div>
                      </div>
                      <Button size="sm">
                        {path.progress > 0 ? 'Continue Path' : 'Start Path'}
                      </Button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          {/* Recent Activity */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <activity.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                      <p className="text-xs text-accent">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Study Schedule */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium">React Hooks</p>
                    <p className="text-xs text-muted-foreground">2:00 PM - 3:30 PM</p>
                  </div>
                  <Badge variant="outline">Scheduled</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Algorithm Practice</p>
                    <p className="text-xs text-muted-foreground">4:00 PM - 5:00 PM</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    In Progress
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium">System Design</p>
                    <p className="text-xs text-muted-foreground">6:00 PM - 7:30 PM</p>
                  </div>
                  <Badge variant="outline">Upcoming</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Take Notes
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Code className="h-4 w-4 mr-2" />
                  Practice Coding
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="h-4 w-4 mr-2" />
                  Review Bookmarks
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default StudyHub;