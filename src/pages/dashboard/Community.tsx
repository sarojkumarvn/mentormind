import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import GlassCard from '@/components/ui/glass-card';
import { 
  Users, 
  Search, 
  Plus, 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown,
  Bookmark,
  Clock,
  Eye,
  TrendingUp,
  Flame,
  Star
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const discussions = [
    {
      id: 1,
      title: 'Best practices for React state management in 2024',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
        role: 'Senior Developer'
      },
      category: 'React',
      tags: ['react', 'state-management', 'redux', 'zustand'],
      votes: 42,
      replies: 18,
      views: 324,
      timeAgo: '2 hours ago',
      isBookmarked: false,
      excerpt: 'I\'ve been working with React for 5 years and have seen the ecosystem evolve. Here are my thoughts on the current state management landscape...'
    },
    {
      id: 2,
      title: 'How to prepare for FAANG system design interviews?',
      author: {
        name: 'Michael Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
        role: 'Software Engineer'
      },
      category: 'Interview Prep',
      tags: ['system-design', 'faang', 'interview', 'preparation'],
      votes: 156,
      replies: 45,
      views: 1204,
      timeAgo: '6 hours ago',
      isBookmarked: true,
      excerpt: 'After landing offers at Google and Meta, I want to share my system design interview preparation strategy...'
    },
    {
      id: 3,
      title: 'Data Science roadmap for beginners - Your thoughts?',
      author: {
        name: 'Emily Johnson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
        role: 'Data Scientist'
      },
      category: 'Data Science',
      tags: ['data-science', 'python', 'machine-learning', 'roadmap'],
      votes: 89,
      replies: 32,
      views: 756,
      timeAgo: '1 day ago',
      isBookmarked: false,
      excerpt: 'I\'ve created a comprehensive roadmap for aspiring data scientists. Would love to get feedback from the community...'
    },
    {
      id: 4,
      title: 'Remote work tips for new developers',
      author: {
        name: 'David Park',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
        role: 'Full Stack Developer'
      },
      category: 'Career',
      tags: ['remote-work', 'productivity', 'work-life-balance'],
      votes: 73,
      replies: 28,
      views: 542,
      timeAgo: '2 days ago',
      isBookmarked: false,
      excerpt: 'Working remotely as a developer comes with unique challenges. Here are some tips I\'ve learned over the past 3 years...'
    },
  ];

  const categories = [
    { name: 'All', count: 245, active: true },
    { name: 'React', count: 67, active: false },
    { name: 'Interview Prep', count: 89, active: false },
    { name: 'Data Science', count: 34, active: false },
    { name: 'Career', count: 55, active: false },
  ];

  const topContributors = [
    {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face',
      posts: 42,
      reputation: 1520,
      speciality: 'System Design'
    },
    {
      name: 'Lisa Wang',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face',
      posts: 38,
      reputation: 1340,
      speciality: 'Frontend'
    },
    {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      posts: 35,
      reputation: 1180,
      speciality: 'Backend'
    },
  ];

  const tabs = [
    { id: 'trending', label: 'Trending', icon: Flame },
    { id: 'latest', label: 'Latest', icon: Clock },
    { id: 'popular', label: 'Popular', icon: TrendingUp },
    { id: 'unanswered', label: 'Unanswered', icon: MessageSquare },
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
            <h1 className="text-3xl font-heading font-bold mb-2">Community</h1>
            <p className="text-muted-foreground">Connect, learn, and share with fellow developers</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              New Discussion
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Search and Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search discussions..."
                className="pl-10"
              />
            </div>
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center"
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div
                    key={category.name}
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                      category.active ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/10'
                    }`}
                  >
                    <span className="text-sm font-medium">{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Top Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={contributor.avatar} alt={contributor.name} />
                      <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{contributor.name}</p>
                      <p className="text-xs text-muted-foreground">{contributor.speciality}</p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{contributor.posts} posts</span>
                        <span>•</span>
                        <span>{contributor.reputation} rep</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Discussions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3"
        >
          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="hover:glow-accent transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                      <AvatarFallback>{discussion.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1 hover:text-accent transition-colors">
                            {discussion.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                            <span>{discussion.author.name}</span>
                            <span>•</span>
                            <span>{discussion.author.role}</span>
                            <span>•</span>
                            <Badge variant="outline" className="text-xs">
                              {discussion.category}
                            </Badge>
                            <span>•</span>
                            <span>{discussion.timeAgo}</span>
                          </div>
                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                            {discussion.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {discussion.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="icon">
                          <Bookmark className={`h-4 w-4 ${discussion.isBookmarked ? 'fill-current text-accent' : ''}`} />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{discussion.votes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{discussion.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{discussion.views}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" className="flex items-center">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            Upvote
                          </Button>
                          <Button size="sm" variant="outline">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Discussions
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;