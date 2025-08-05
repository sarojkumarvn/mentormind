import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import GlassCard from '@/components/ui/glass-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Star,
  Bookmark,
  Search,
  Filter,
  Bell,
  Building,
  Users,
  TrendingUp,
  Brain,
  Target,
  AlertCircle
} from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: 'Entry' | 'Mid' | 'Senior';
  salary: string;
  postedAt: string;
  description: string;
  tags: string[];
  isBookmarked: boolean;
  matchScore?: number;
  aiRecommended?: boolean;
  remote: boolean;
}

const JobsBoard = () => {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: 'Mid',
      salary: '$80,000 - $120,000',
      postedAt: '2 days ago',
      description: 'Join our dynamic team to build cutting-edge web applications using React, TypeScript, and modern frontend technologies.',
      tags: ['React', 'TypeScript', 'JavaScript', 'CSS'],
      isBookmarked: true,
      matchScore: 95,
      aiRecommended: true,
      remote: true
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: 'Senior',
      salary: '$100,000 - $150,000',
      postedAt: '1 day ago',
      description: 'Lead the development of our platform using Node.js, React, and cloud technologies. Perfect for someone who loves both frontend and backend challenges.',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      isBookmarked: false,
      matchScore: 88,
      aiRecommended: true,
      remote: false
    },
    {
      id: 3,
      title: 'React Developer',
      company: 'Digital Agency',
      location: 'New York, NY',
      type: 'Contract',
      experience: 'Mid',
      salary: '$75 - $100/hour',
      postedAt: '3 days ago',
      description: 'Work on exciting client projects building responsive web applications. Strong React and modern JavaScript skills required.',
      tags: ['React', 'JavaScript', 'Redux', 'Material-UI'],
      isBookmarked: false,
      matchScore: 82,
      aiRecommended: false,
      remote: true
    },
    {
      id: 4,
      title: 'Junior Frontend Developer',
      company: 'EduTech Solutions',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: 'Entry',
      salary: '$60,000 - $80,000',
      postedAt: '1 week ago',
      description: 'Great opportunity for a junior developer to grow their skills in a supportive environment. Work on educational technology products.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      isBookmarked: true,
      matchScore: 75,
      aiRecommended: false,
      remote: false
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'AI Innovations',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: 'Mid',
      salary: '$90,000 - $130,000',
      postedAt: '4 days ago',
      description: 'Apply machine learning and statistical analysis to solve complex business problems. Python and ML expertise required.',
      tags: ['Python', 'Machine Learning', 'TensorFlow', 'Pandas'],
      isBookmarked: false,
      matchScore: 70,
      aiRecommended: true,
      remote: true
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);
  const [showOnlyAIRecommended, setShowOnlyAIRecommended] = useState(false);

  const jobTypes = ['all', 'Full-time', 'Part-time', 'Contract', 'Internship'];
  const experienceLevels = ['all', 'Entry', 'Mid', 'Senior'];
  const locations = ['all', ...Array.from(new Set(jobs.map(job => job.location)))];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === 'all' || job.type === selectedType;
    const matchesExperience = selectedExperience === 'all' || job.experience === selectedExperience;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesBookmark = !showOnlyBookmarked || job.isBookmarked;
    const matchesAI = !showOnlyAIRecommended || job.aiRecommended;

    return matchesSearch && matchesType && matchesExperience && matchesLocation && matchesBookmark && matchesAI;
  });

  const toggleBookmark = (jobId: number) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, isBookmarked: !job.isBookmarked } : job
    ));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time': return 'bg-green-500';
      case 'Part-time': return 'bg-blue-500';
      case 'Contract': return 'bg-purple-500';
      case 'Internship': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case 'Entry': return 'bg-green-500';
      case 'Mid': return 'bg-yellow-500';
      case 'Senior': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const aiRecommendedJobs = jobs.filter(job => job.aiRecommended);
  const bookmarkedJobs = jobs.filter(job => job.isBookmarked);
  const averageMatchScore = Math.round(jobs.reduce((sum, job) => sum + (job.matchScore || 0), 0) / jobs.length);

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Jobs Board</h1>
            <p className="text-muted-foreground">AI-powered job recommendations tailored for you</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Job Alerts
            </Button>
            <Button className="gradient-primary">
              <Brain className="h-4 w-4 mr-2" />
              AI Recommendations
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Total Jobs', value: jobs.length.toString(), icon: Briefcase, color: 'from-blue-500 to-cyan-500' },
          { title: 'AI Recommended', value: aiRecommendedJobs.length.toString(), icon: Brain, color: 'from-purple-500 to-pink-500' },
          { title: 'Bookmarked', value: bookmarkedJobs.length.toString(), icon: Bookmark, color: 'from-green-500 to-emerald-500' },
          { title: 'Avg. Match', value: `${averageMatchScore}%`, icon: Target, color: 'from-orange-500 to-red-500' },
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
              AI Career Insights
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                <span className="font-medium">Hot Skills</span>
              </div>
              <p className="text-sm text-muted-foreground">React, TypeScript, Node.js</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-4 w-4 mr-2 text-blue-500" />
                <span className="font-medium">Skill Gaps</span>
              </div>
              <p className="text-sm text-muted-foreground">Cloud platforms, DevOps</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <Target className="h-4 w-4 mr-2 text-purple-500" />
                <span className="font-medium">Recommended</span>
              </div>
              <p className="text-sm text-muted-foreground">Frontend Developer roles</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search jobs, companies, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map(type => (
                <SelectItem key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedExperience} onValueChange={setSelectedExperience}>
            <SelectTrigger>
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent>
              {experienceLevels.map(level => (
                <SelectItem key={level} value={level}>
                  {level === 'all' ? 'All Levels' : level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(location => (
                <SelectItem key={location} value={location}>
                  {location === 'all' ? 'All Locations' : location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            variant={showOnlyBookmarked ? "default" : "outline"}
            onClick={() => setShowOnlyBookmarked(!showOnlyBookmarked)}
          >
            <Bookmark className="h-4 w-4 mr-2" />
            Bookmarked
          </Button>

          <Button 
            variant={showOnlyAIRecommended ? "default" : "outline"}
            onClick={() => setShowOnlyAIRecommended(!showOnlyAIRecommended)}
          >
            <Brain className="h-4 w-4 mr-2" />
            AI Picks
          </Button>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card hover:glow-accent transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold flex items-center">
                          {job.title}
                          {job.aiRecommended && (
                            <Brain className="h-4 w-4 ml-2 text-accent" />
                          )}
                          {job.remote && (
                            <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-800">
                              Remote
                            </Badge>
                          )}
                        </h3>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <Building className="h-4 w-4 mr-1" />
                          <span className="font-medium">{job.company}</span>
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {job.matchScore && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {job.matchScore}% match
                          </Badge>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleBookmark(job.id)}
                        >
                          <Bookmark className={`h-4 w-4 ${job.isBookmarked ? 'fill-current text-yellow-500' : ''}`} />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Badge 
                          variant="secondary" 
                          className={`${getTypeColor(job.type)} text-white mr-2`}
                        >
                          {job.type}
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className={`${getExperienceColor(job.experience)} text-white`}
                        >
                          {job.experience}
                        </Badge>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-3 w-3 mr-1" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {job.postedAt}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {job.aiRecommended && (
                      <div className="p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                        <div className="flex items-center text-sm text-accent">
                          <Brain className="h-4 w-4 mr-2" />
                          <span className="font-medium">AI Recommended:</span>
                          <span className="ml-1">This job matches your skills and career goals</span>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" className="gradient-primary">
                        Apply Now
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Company Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No jobs found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default JobsBoard;