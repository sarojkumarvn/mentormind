import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GlassCard from '@/components/ui/glass-card';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Video, 
  Mic, 
  Play, 
  Pause, 
  Square, 
  Volume2,
  Eye,
  MessageSquare,
  BarChart3,
  Clock,
  Star,
  Trophy
} from 'lucide-react';

const AIInterview = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);

  const interviewTypes = [
    {
      title: 'Technical Interview',
      description: 'Coding problems and system design questions',
      duration: '45-60 mins',
      difficulty: 'Advanced',
      color: 'from-blue-500 to-cyan-500',
      questions: 8,
    },
    {
      title: 'Behavioral Interview',
      description: 'Situational and behavioral questions',
      duration: '30-45 mins',
      difficulty: 'Intermediate',
      color: 'from-green-500 to-emerald-500',
      questions: 12,
    },
    {
      title: 'Product Manager',
      description: 'Product sense and analytical thinking',
      duration: '45-60 mins',
      difficulty: 'Advanced',
      color: 'from-purple-500 to-pink-500',
      questions: 10,
    },
    {
      title: 'Data Science',
      description: 'Statistics, ML, and data analysis',
      duration: '60-75 mins',
      difficulty: 'Advanced',
      color: 'from-orange-500 to-red-500',
      questions: 15,
    },
  ];

  const recentInterviews = [
    {
      type: 'Technical Interview',
      date: '2 days ago',
      score: 85,
      feedback: 'Strong problem-solving skills',
      duration: '48 mins',
    },
    {
      type: 'Behavioral Interview',
      date: '1 week ago',
      score: 92,
      feedback: 'Excellent communication',
      duration: '32 mins',
    },
    {
      type: 'Product Manager',
      date: '2 weeks ago',
      score: 78,
      feedback: 'Good analytical thinking',
      duration: '55 mins',
    },
  ];

  const currentQuestion = "Tell me about a challenging project you worked on and how you handled the obstacles you encountered.";
  const tips = [
    "Maintain eye contact with the camera",
    "Speak clearly and at a moderate pace",
    "Use the STAR method for behavioral questions",
    "Think out loud during technical problems"
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
            <h1 className="text-3xl font-heading font-bold mb-2">AI Interview Practice</h1>
            <p className="text-muted-foreground">Practice with AI-powered mock interviews</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
            <Button className="gradient-primary">
              <Brain className="h-4 w-4 mr-2" />
              AI Feedback
            </Button>
          </div>
        </div>
      </motion.div>

      {!interviewStarted ? (
        <>
          {/* Interview Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Choose Interview Type</CardTitle>
                <CardDescription>Select the type of interview you want to practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interviewTypes.map((type, index) => (
                    <motion.div
                      key={type.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 border rounded-lg hover:bg-accent/10 transition-colors cursor-pointer"
                      onClick={() => setInterviewStarted(true)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${type.color}`}>
                          <Brain className="h-6 w-6 text-white" />
                        </div>
                        <Badge 
                          variant="secondary"
                          className={`${getDifficultyColor(type.difficulty)} text-white`}
                        >
                          {type.difficulty}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-2">{type.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {type.duration}
                        </span>
                        <span>{type.questions} questions</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Interviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Recent Interviews
                </CardTitle>
                <CardDescription>Your interview history and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInterviews.map((interview, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{interview.type}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{interview.date}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="flex items-center">
                              <Star className="h-3 w-3 mr-1 text-yellow-500" />
                              Score: {interview.score}%
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {interview.duration}
                            </span>
                          </div>
                          <p className="text-sm text-accent mt-2">{interview.feedback}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      ) : (
        <>
          {/* Interview Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Video Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <GlassCard className="h-96">
                <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
                  {/* Mock Video Feed */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-24 w-24 text-gray-600" />
                  </div>
                  
                  {/* Recording Indicator */}
                  {isRecording && (
                    <div className="absolute top-4 left-4 flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                      Recording
                    </div>
                  )}

                  {/* Controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                    <Button
                      size="icon"
                      variant={isRecording ? "destructive" : "default"}
                      className="rounded-full"
                      onClick={() => setIsRecording(!isRecording)}
                    >
                      {isRecording ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full">
                      <Mic className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </GlassCard>

              {/* Current Question */}
              <GlassCard className="mt-4">
                <h3 className="text-lg font-semibold mb-3">Current Question</h3>
                <p className="text-muted-foreground mb-4">{currentQuestion}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    Time remaining: 5:30
                  </div>
                  <Button size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Skip Question
                  </Button>
                </div>
              </GlassCard>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Progress */}
              <GlassCard>
                <h3 className="font-semibold mb-3">Interview Progress</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Question 3 of 8</span>
                    <span>37.5%</span>
                  </div>
                  <Progress value={37.5} className="h-2" />
                </div>
              </GlassCard>

              {/* Real-time Feedback */}
              <GlassCard>
                <h3 className="font-semibold mb-3">AI Feedback</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Eye Contact</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Good</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Speaking Pace</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">Perfect</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Confidence</span>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Moderate</Badge>
                  </div>
                </div>
              </GlassCard>

              {/* Tips */}
              <GlassCard>
                <h3 className="font-semibold mb-3">Interview Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* End Interview */}
              <Button 
                variant="destructive" 
                className="w-full"
                onClick={() => setInterviewStarted(false)}
              >
                End Interview
              </Button>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIInterview;