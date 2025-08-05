import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import GlassCard from '@/components/ui/glass-card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Route, 
  CheckCircle, 
  Clock, 
  Download, 
  Star,
  Code,
  Database,
  Brain,
  Smartphone,
  Globe,
  BarChart3
} from 'lucide-react';

const Roadmaps = () => {
  const [selectedPath, setSelectedPath] = useState('frontend');

  const careerPaths = {
    frontend: {
      title: 'Frontend Development',
      icon: Globe,
      description: 'Build modern web applications with React, Vue, and Angular',
      color: 'from-blue-500 to-cyan-500',
      progress: 65,
      steps: [
        { title: 'HTML & CSS Fundamentals', completed: true, duration: '2 weeks' },
        { title: 'JavaScript ES6+', completed: true, duration: '3 weeks' },
        { title: 'React.js Framework', completed: true, duration: '4 weeks' },
        { title: 'State Management (Redux)', completed: false, duration: '2 weeks' },
        { title: 'TypeScript', completed: false, duration: '2 weeks' },
        { title: 'Testing & Deployment', completed: false, duration: '2 weeks' },
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Database,
      description: 'Master server-side technologies and database management',
      color: 'from-green-500 to-emerald-500',
      progress: 40,
      steps: [
        { title: 'Node.js Fundamentals', completed: true, duration: '3 weeks' },
        { title: 'Express.js Framework', completed: true, duration: '2 weeks' },
        { title: 'Database Design', completed: false, duration: '3 weeks' },
        { title: 'RESTful APIs', completed: false, duration: '2 weeks' },
        { title: 'Authentication & Security', completed: false, duration: '2 weeks' },
        { title: 'Cloud Deployment', completed: false, duration: '2 weeks' },
      ]
    },
    datascience: {
      title: 'Data Science',
      icon: BarChart3,
      description: 'Analyze data and build machine learning models',
      color: 'from-purple-500 to-pink-500',
      progress: 25,
      steps: [
        { title: 'Python Programming', completed: true, duration: '3 weeks' },
        { title: 'Statistics & Mathematics', completed: false, duration: '4 weeks' },
        { title: 'Data Manipulation (Pandas)', completed: false, duration: '3 weeks' },
        { title: 'Data Visualization', completed: false, duration: '2 weeks' },
        { title: 'Machine Learning', completed: false, duration: '6 weeks' },
        { title: 'Deep Learning', completed: false, duration: '4 weeks' },
      ]
    },
    aiml: {
      title: 'AI/ML Engineering',
      icon: Brain,
      description: 'Build intelligent systems and neural networks',
      color: 'from-orange-500 to-red-500',
      progress: 15,
      steps: [
        { title: 'Python & Mathematics', completed: true, duration: '4 weeks' },
        { title: 'Machine Learning Algorithms', completed: false, duration: '5 weeks' },
        { title: 'Deep Learning & Neural Networks', completed: false, duration: '6 weeks' },
        { title: 'Computer Vision', completed: false, duration: '4 weeks' },
        { title: 'Natural Language Processing', completed: false, duration: '4 weeks' },
        { title: 'MLOps & Deployment', completed: false, duration: '3 weeks' },
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Create native and cross-platform mobile applications',
      color: 'from-indigo-500 to-purple-500',
      progress: 30,
      steps: [
        { title: 'Mobile Development Basics', completed: true, duration: '2 weeks' },
        { title: 'React Native', completed: false, duration: '4 weeks' },
        { title: 'Native iOS (Swift)', completed: false, duration: '5 weeks' },
        { title: 'Native Android (Kotlin)', completed: false, duration: '5 weeks' },
        { title: 'App Store Deployment', completed: false, duration: '1 week' },
        { title: 'Performance Optimization', completed: false, duration: '2 weeks' },
      ]
    },
  };

  const currentPath = careerPaths[selectedPath as keyof typeof careerPaths];

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Career Roadmaps</h1>
            <p className="text-muted-foreground">Choose your path and track your progress</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
            <Button className="gradient-primary">AI Recommendations</Button>
          </div>
        </div>
      </motion.div>

      {/* Path Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Select Career Path</h3>
            <Select value={selectedPath} onValueChange={setSelectedPath}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Choose a career path" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(careerPaths).map(([key, path]) => (
                  <SelectItem key={key} value={key}>
                    <div className="flex items-center">
                      <path.icon className="h-4 w-4 mr-2" />
                      {path.title}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Path Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${currentPath.color} mr-4`}>
                  <currentPath.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{currentPath.title}</h2>
                  <p className="text-muted-foreground">{currentPath.description}</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Overall Progress</span>
                  <span className="font-semibold">{currentPath.progress}%</span>
                </div>
                <Progress value={currentPath.progress} className="h-3" />
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-lg font-semibold">4.8/5</p>
                    <p className="text-sm text-muted-foreground">Community Rating</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-lg font-semibold">16-20 weeks</p>
                    <p className="text-sm text-muted-foreground">Estimated Duration</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Roadmap Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Route className="h-5 w-5 mr-2" />
              Learning Path
            </CardTitle>
            <CardDescription>Step-by-step guide to master {currentPath.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentPath.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center p-4 rounded-lg border transition-colors ${
                    step.completed 
                      ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800' 
                      : 'hover:bg-accent/10'
                  }`}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`p-2 rounded-full ${
                      step.completed 
                        ? 'bg-green-500 text-white' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step.completed ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <div className="flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {step.completed ? (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    ) : (
                      <Button size="sm" variant="outline">
                        Start Learning
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Additional Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard>
          <h3 className="text-lg font-semibold mb-4">Recommended Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 justify-start">
              <div className="text-left">
                <p className="font-medium">Interactive Tutorials</p>
                <p className="text-sm text-muted-foreground">Hands-on coding practice</p>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 justify-start">
              <div className="text-left">
                <p className="font-medium">Video Courses</p>
                <p className="text-sm text-muted-foreground">Expert-led explanations</p>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 justify-start">
              <div className="text-left">
                <p className="font-medium">Practice Projects</p>
                <p className="text-sm text-muted-foreground">Build real applications</p>
              </div>
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Roadmaps;