import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import GlassCard from '@/components/ui/glass-card';
import { 
  PenTool, 
  Search, 
  Plus, 
  Calendar, 
  Clock, 
  Eye,
  Heart,
  MessageSquare,
  Bookmark,
  TrendingUp,
  Filter,
  Star
} from 'lucide-react';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('latest');

  const blogPosts = [
    {
      id: 1,
      title: 'Mastering React Hooks: A Complete Guide for 2024',
      excerpt: 'Dive deep into React Hooks and learn how to build more efficient and cleaner React applications. We\'ll cover useState, useEffect, custom hooks, and advanced patterns.',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
        role: 'Senior Frontend Developer'
      },
      category: 'React',
      tags: ['react', 'hooks', 'javascript', 'frontend'],
      publishedAt: '2024-01-15',
      readTime: '8 min read',
      likes: 124,
      comments: 18,
      views: 2340,
      featured: true,
      coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'System Design Interview: Building a URL Shortener',
      excerpt: 'Learn how to design a scalable URL shortening service like bit.ly. We\'ll cover database design, caching strategies, and handling millions of requests.',
      author: {
        name: 'Michael Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
        role: 'Software Engineer'
      },
      category: 'System Design',
      tags: ['system-design', 'scalability', 'architecture'],
      publishedAt: '2024-01-12',
      readTime: '12 min read',
      likes: 89,
      comments: 25,
      views: 1890,
      featured: false,
      coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Machine Learning in Production: Lessons Learned',
      excerpt: 'Real-world insights from deploying ML models at scale. Common pitfalls, monitoring strategies, and best practices for ML operations.',
      author: {
        name: 'Emily Johnson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
        role: 'ML Engineer'
      },
      category: 'Machine Learning',
      tags: ['machine-learning', 'mlops', 'production'],
      publishedAt: '2024-01-10',
      readTime: '15 min read',
      likes: 156,
      comments: 32,
      views: 3210,
      featured: true,
      coverImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'The Future of Web Development: Trends to Watch',
      excerpt: 'Explore upcoming trends in web development including Web3, edge computing, and new frameworks that will shape the industry.',
      author: {
        name: 'David Park',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
        role: 'Full Stack Developer'
      },
      category: 'Technology',
      tags: ['web-development', 'trends', 'future'],
      publishedAt: '2024-01-08',
      readTime: '6 min read',
      likes: 73,
      comments: 15,
      views: 1560,
      featured: false,
      coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
    },
  ];

  const categories = [
    { name: 'All', count: 156, active: true },
    { name: 'React', count: 34, active: false },
    { name: 'System Design', count: 28, active: false },
    { name: 'Machine Learning', count: 22, active: false },
    { name: 'Career', count: 45, active: false },
    { name: 'Technology', count: 27, active: false },
  ];

  const featuredAuthors = [
    {
      name: 'Dr. Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face',
      articles: 42,
      followers: 1520,
      speciality: 'AI & Machine Learning'
    },
    {
      name: 'Lisa Wang',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face',
      articles: 38,
      followers: 1340,
      speciality: 'Frontend Development'
    },
    {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      articles: 35,
      followers: 1180,
      speciality: 'Backend & DevOps'
    },
  ];

  const tabs = [
    { id: 'latest', label: 'Latest' },
    { id: 'trending', label: 'Trending' },
    { id: 'featured', label: 'Featured' },
    { id: 'following', label: 'Following' },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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
            <h1 className="text-3xl font-heading font-bold mb-2">Blog</h1>
            <p className="text-muted-foreground">Discover insights, tutorials, and industry knowledge</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="gradient-primary">
              <PenTool className="h-4 w-4 mr-2" />
              Write Article
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
                placeholder="Search articles..."
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
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 space-y-6"
        >
          {/* Categories */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
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

          {/* Featured Authors */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Star className="h-5 w-5 mr-2" />
                Featured Authors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {featuredAuthors.map((author, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={author.avatar} alt={author.name} />
                      <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{author.name}</p>
                      <p className="text-xs text-muted-foreground">{author.speciality}</p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{author.articles} articles</span>
                        <span>•</span>
                        <span>{author.followers} followers</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Blog Posts */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3"
        >
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className={`hover:glow-accent transition-all duration-300 cursor-pointer ${
                  post.featured ? 'border-2 border-accent/50' : ''
                }`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Cover Image */}
                    <div className="relative">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover rounded-lg"
                      />
                      {post.featured && (
                        <Badge className="absolute top-2 left-2 bg-accent">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline">{post.category}</Badge>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{formatDate(post.publishedAt)}</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 hover:text-accent transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                            <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{post.author.name}</p>
                            <p className="text-xs text-muted-foreground">{post.author.role}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="ghost">
                            <Heart className="h-4 w-4 mr-1" />
                            Like
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Bookmark className="h-4 w-4 mr-1" />
                            Save
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
              Load More Articles
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;