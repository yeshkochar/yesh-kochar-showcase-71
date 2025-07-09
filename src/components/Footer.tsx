import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary/5 to-accent/5 border-t border-gray-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Yesh Kumar Kochar. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" />{' '}
              and lots of code.
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="flex space-x-6">
            <a 
              href="mailto:kocharyesh@yahoo.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              title="Send me an email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              title="Check out my GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              title="Connect on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6 pt-6 border-t border-gray-200/50">
          <p className="text-sm text-muted-foreground">
            Engineering Student • Tech Enthusiast • Problem Solver
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;