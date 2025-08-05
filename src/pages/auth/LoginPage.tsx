import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GlassCard from '@/components/ui/glass-card';
import { Brain, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { login } from '@/store/slices/authSlice';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, this would be an API call
    dispatch(login({
      id: '1',
      name: 'John Doe',
      email: formData.email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face'
    }));
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <GlassCard className="glow-accent">
            <div className="text-center mb-8">
              <div className="gradient-primary p-3 rounded-xl w-fit mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to continue your career journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-input" />
                  <span>Remember me</span>
                </label>
                <Link to="/auth/forgot-password" className="text-sm text-accent hover:text-accent/80">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full gradient-primary glow-accent">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/auth/signup" className="text-accent hover:text-accent/80 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;