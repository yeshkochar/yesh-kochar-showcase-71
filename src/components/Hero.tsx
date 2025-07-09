import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/yesh-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient - Google colors */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-warning/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-primary rounded-full blur opacity-75"></div>
              <img 
                src={profileImage} 
                alt="Yesh Kumar Kochar" 
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-strong"
              />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
            <span className="gradient-text">Yesh Kumar Kochar</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Engineering Student | Tech Enthusiast | Problem Solver
          </p>

          {/* Welcome blurb */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            I'm dedicated to learning, innovating, and building technology that makes a difference. 
            Currently pursuing B.Tech in Computer Science and Business Systems at SRM University.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-[#4285F4] to-[#EA4335] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-[#34A853] text-[#34A853] hover:bg-[#34A853] hover:text-white transition-all duration-300 border-2"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <a 
              href="mailto:kocharyesh@yahoo.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fadeInUp" style={{ animationDelay: '1s' }}>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 animate-bounce"
            >
              <ArrowDown size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;