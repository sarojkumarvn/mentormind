import { Link } from 'react-router-dom';
import { Brain, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const links = {
    Product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'API', href: '/api' },
      { name: 'Integrations', href: '/integrations' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Blog', href: '/blog' },
      { name: 'Community', href: '/community' },
      { name: 'Support', href: '/support' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: '#' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold">AI Career</span>
            </Link>
            <p className="text-muted-foreground">
              Empowering students with AI-driven career tools and resources for success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-heading font-semibold">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 AI Career Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;