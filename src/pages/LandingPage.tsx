import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Zap, Target, BookOpen, Brain, Trophy, BarChart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import GlassCard from '@/components/ui/glass-card';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Interview System',
      description: 'Practice with AI-powered mock interviews and receive detailed feedback on your performance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Trophy,
      title: 'Mock Tests & Aptitude',
      description: 'Test your skills with comprehensive mock tests and aptitude assessments.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Career Roadmaps',
      description: 'Get personalized career paths with AI-curated learning resources and milestones.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart,
      title: 'Progress Analytics',
      description: 'Track your improvement with detailed analytics and performance insights.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageSquare,
      title: 'Community & Blogs',
      description: 'Connect with peers, share experiences, and learn from industry experts.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Target,
      title: 'PDF AI Summarizer',
      description: 'Upload documents and get instant AI-generated summaries and insights.',
      color: 'from-teal-500 to-blue-500'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer at Google',
      content: 'The AI interview system helped me land my dream job. The feedback was incredibly detailed and actionable.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Data Scientist at Microsoft',
      content: 'The roadmaps feature guided my transition from finance to tech. Absolutely game-changing!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face'
    },
    {
      name: 'Emily Johnson',
      role: 'Product Manager at Meta',
      content: 'Mock tests helped me identify knowledge gaps and improve systematically. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face'
    },
    {
      name: 'David Park',
      role: 'DevOps Engineer at Amazon',
      content: 'The community aspect is amazing. Learning from peers accelerated my growth significantly.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face'
    },
    {
      name: 'Lisa Wang',
      role: 'UX Designer at Spotify',
      content: 'Analytics feature showed me exactly where to focus. My confidence skyrocketed!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face'
    },
    {
      name: 'James Thompson',
      role: 'ML Engineer at OpenAI',
      content: 'PDF summarizer saved hours of study time. Perfect for research and preparation.',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face'
    },
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '5 AI interviews per month',
        '10 mock tests',
        'Basic roadmaps',
        'Community access',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      features: [
        'Unlimited AI interviews',
        'Unlimited mock tests',
        'Advanced roadmaps',
        'Priority support',
        'Analytics dashboard',
        'PDF AI summarizer',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Your Future Starts{' '}
              <span className="gradient-primary bg-clip-text text-transparent">
                Here
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI-powered career platform with mock interviews, tests, roadmaps, and community support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/signup">
                <Button size="lg" className="gradient-primary glow-accent animate-pulse-glow">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="glass-card">
                  Explore Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 gradient-secondary rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Powerful Features for Your Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to accelerate your career journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <GlassCard className="h-full hover:glow-accent transition-all duration-300">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands who transformed their careers
            </p>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="flex space-x-6 marquee-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-80 p-6 glass-card">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative mt-6">
          <div className="flex space-x-6 marquee-right">
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-80 p-6 glass-card">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free, upgrade when you're ready
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <GlassCard 
                  variant={plan.popular ? 'glow' : 'default'}
                  className={`h-full ${plan.popular ? 'border-2 border-accent' : ''}`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Zap className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'gradient-primary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gradient-primary opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students already accelerating their career journey with AI-powered tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/signup">
                <Button size="lg" className="gradient-primary glow-accent">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="glass-card">
                  Watch Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;