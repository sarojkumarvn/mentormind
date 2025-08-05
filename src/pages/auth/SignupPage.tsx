import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GlassCard from '@/components/ui/glass-card';
import { Brain, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { login } from '@/store/slices/authSlice';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Mock signup - in real app, this would be an API call
    dispatch(login({
      id: '1',
      name: formData.name,
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
              <h1 className="text-3xl font-heading font-bold mb-2">Join AI Career</h1>
              <p className="text-muted-foreground">Start your career transformation today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

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
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1 rounded border-input" required />
                <span className="text-sm text-muted-foreground">
                  I agree to the{' '}
                  <Link to="/terms" className="text-accent hover:text-accent/80">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-accent hover:text-accent/80">
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <Button type="submit" className="w-full gradient-primary glow-accent">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Already have an account?{' '}
                <Link to="/auth/login" className="text-accent hover:text-accent/80 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;