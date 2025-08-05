import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Moon, Sun, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleTheme } from '@/store/slices/themeSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const dropdownItems = {
    Features: [
      { name: 'AI Interview System', href: '/features/ai-interview' },
      { name: 'Mock Tests', href: '/features/mock-tests' },
      { name: 'Aptitude Tests', href: '/features/aptitude' },
      { name: 'Career Roadmaps', href: '/features/roadmaps' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Blog', href: '/blog' },
      { name: 'Community', href: '/community' },
      { name: 'Jobs Board', href: '/jobs' },
    ],
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-card"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="gradient-primary p-2 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-heading font-bold">AI Career</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(dropdownItems).map(([key, items]) => (
              <div 
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 font-medium hover:text-accent transition-colors">
                  <span>{key}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 glass-card rounded-lg p-2"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm hover:bg-accent/10 rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link to="/pricing" className="font-medium hover:text-accent transition-colors">
              Pricing
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => dispatch(toggleTheme())}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <div className="hidden md:flex items-center space-x-2">
              <Link to="/auth/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/auth/signup">
                <Button className="gradient-primary glow-accent">Get Started</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/20 mt-4 py-4"
            >
              {Object.entries(dropdownItems).map(([key, items]) => (
                <div key={key} className="mb-4">
                  <h3 className="font-medium text-sm text-muted-foreground mb-2">{key}</h3>
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block py-2 pl-4 hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-border/20">
                <Link to="/auth/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Sign In</Button>
                </Link>
                <Link to="/auth/signup" onClick={() => setIsOpen(false)}>
                  <Button className="gradient-primary w-full">Get Started</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;