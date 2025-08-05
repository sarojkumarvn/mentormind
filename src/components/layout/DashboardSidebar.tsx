import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  BookOpen, 
  ClipboardList, 
  Brain, 
  BarChart3, 
  Users, 
  Briefcase, 
  FileText, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  Trophy,
  MessageSquare,
  Route,
  PenTool,
  FileSearch
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Roadmaps', href: '/dashboard/roadmaps', icon: Route },
    { name: 'Mock Tests', href: '/dashboard/mock-tests', icon: ClipboardList },
    { name: 'AI Interview', href: '/dashboard/ai-interview', icon: Brain },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Study Hub', href: '/dashboard/study-hub', icon: BookOpen },
    { name: 'Notes', href: '/dashboard/notes', icon: PenTool },
    { name: 'PDF Tools', href: '/dashboard/pdf-tools', icon: FileSearch },
    { name: 'Community', href: '/dashboard/community', icon: Users },
    { name: 'Blog', href: '/dashboard/blog', icon: MessageSquare },
    { name: 'Jobs', href: '/dashboard/jobs', icon: Briefcase },
    { name: 'Documentation', href: '/dashboard/docs', icon: FileText },
    { name: 'Achievements', href: '/dashboard/achievements', icon: Trophy },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.div
      animate={{ width: isCollapsed ? 64 : 256 }}
      transition={{ duration: 0.3 }}
      className="h-screen bg-card border-r border-border flex flex-col"
    >
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <span className="text-lg font-heading font-bold">AI Career</span>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              isActive(item.href)
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground'
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && (
              <span className="ml-3 truncate">{item.name}</span>
            )}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground">
            <p>© 2024 AI Career</p>
            <p>Version 1.0.0</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DashboardSidebar;