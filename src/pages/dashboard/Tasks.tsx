import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import GlassCard from '@/components/ui/glass-card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  CheckSquare, 
  Plus, 
  Clock, 
  AlertCircle, 
  Brain,
  Calendar,
  Timer,
  Star,
  ArrowRight,
  Zap
} from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'progress' | 'completed';
  dueDate: string;
  aiPriority?: number;
  estimatedTime?: string;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Complete React Authentication',
      description: 'Implement login, signup, and protected routes',
      priority: 'high',
      status: 'progress',
      dueDate: '2024-01-20',
      aiPriority: 95,
      estimatedTime: '4 hours'
    },
    {
      id: 2,
      title: 'Study Database Indexing',
      description: 'Learn about B-tree indexes and query optimization',
      priority: 'medium',
      status: 'todo',
      dueDate: '2024-01-22',
      aiPriority: 78,
      estimatedTime: '2 hours'
    },
    {
      id: 3,
      title: 'Practice LeetCode Problems',
      description: 'Solve 5 medium difficulty problems',
      priority: 'low',
      status: 'completed',
      dueDate: '2024-01-18',
      aiPriority: 65,
      estimatedTime: '3 hours'
    }
  ]);

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium' as const,
    dueDate: ''
  });

  const handleCreateTask = () => {
    if (newTask.title && newTask.dueDate) {
      const task: Task = {
        id: Date.now(),
        title: newTask.title,
        description: newTask.description,
        priority: newTask.priority,
        status: 'todo',
        dueDate: newTask.dueDate,
        aiPriority: Math.floor(Math.random() * 100),
        estimatedTime: '2 hours'
      };
      setTasks([...tasks, task]);
      setNewTask({ title: '', description: '', priority: 'medium', dueDate: '' });
      setIsCreateDialogOpen(false);
    }
  };

  const moveTask = (taskId: number, newStatus: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusTasks = (status: Task['status']) => 
    tasks.filter(task => task.status === status);

  const TaskColumn = ({ 
    title, 
    status, 
    tasks, 
    color 
  }: { 
    title: string; 
    status: Task['status']; 
    tasks: Task[]; 
    color: string;
  }) => (
    <Card className="glass-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <div className={`w-3 h-3 rounded-full ${color} mr-2`} />
            {title}
          </CardTitle>
          <Badge variant="secondary">{tasks.length}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 border rounded-lg hover:bg-accent/10 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <h4 className="font-medium text-sm">{task.title}</h4>
                <Badge 
                  variant="secondary" 
                  className={`${getPriorityColor(task.priority)} text-white text-xs`}
                >
                  {task.priority}
                </Badge>
              </div>

              {task.description && (
                <p className="text-xs text-muted-foreground">{task.description}</p>
              )}

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {task.dueDate}
                </div>
                {task.estimatedTime && (
                  <div className="flex items-center">
                    <Timer className="h-3 w-3 mr-1" />
                    {task.estimatedTime}
                  </div>
                )}
              </div>

              {task.aiPriority && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs">
                    <Brain className="h-3 w-3 mr-1 text-accent" />
                    <span className="text-accent">AI Priority: {task.aiPriority}%</span>
                  </div>
                </div>
              )}

              <div className="flex gap-1">
                {status !== 'todo' && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => moveTask(task.id, 'todo')}
                    className="text-xs"
                  >
                    To Do
                  </Button>
                )}
                {status !== 'progress' && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => moveTask(task.id, 'progress')}
                    className="text-xs"
                  >
                    Progress
                  </Button>
                )}
                {status !== 'completed' && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => moveTask(task.id, 'completed')}
                    className="text-xs"
                  >
                    Complete
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Smart Tasks</h1>
            <p className="text-muted-foreground">AI-powered task management and prioritization</p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary mt-4 md:mt-0">
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
                <DialogDescription>
                  Add a task with AI-powered prioritization
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Input
                  placeholder="Task title..."
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
                <Input
                  placeholder="Description (optional)..."
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
                <Select value={newTask.priority} onValueChange={(value: any) => setNewTask({ ...newTask, priority: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low Priority</SelectItem>
                    <SelectItem value="medium">Medium Priority</SelectItem>
                    <SelectItem value="high">High Priority</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateTask} className="gradient-primary">
                  <Zap className="h-4 w-4 mr-2" />
                  Create Task
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* AI Insights Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">85%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">3.2h</div>
              <div className="text-sm text-muted-foreground">Avg. Task Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">12</div>
              <div className="text-sm text-muted-foreground">Tasks This Week</div>
            </div>
            <Button variant="outline" className="h-auto p-4">
              <div className="text-center">
                <Brain className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">AI Suggestions</div>
              </div>
            </Button>
          </div>
        </GlassCard>
      </motion.div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TaskColumn
          title="To Do"
          status="todo"
          tasks={getStatusTasks('todo')}
          color="bg-blue-500"
        />
        <TaskColumn
          title="In Progress"
          status="progress"
          tasks={getStatusTasks('progress')}
          color="bg-yellow-500"
        />
        <TaskColumn
          title="Completed"
          status="completed"
          tasks={getStatusTasks('completed')}
          color="bg-green-500"
        />
      </div>
    </div>
  );
};

export default Tasks;