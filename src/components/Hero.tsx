import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Computer Science Student | Full-Stack & DevOps Enthusiast";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-gradient-subtle absolute inset-0 -z-10"></div>
      
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Emergent</span>
          </h1>
          
          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              {text}
              <span className="typewriter"></span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.5s] opacity-0 [animation-fill-mode:forwards]">
            Passionate about building innovative solutions that bridge technology and user experience. 
            Currently exploring the intersection of Full-Stack Development, DevOps practices, and AI integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">
            <Button 
              size="lg" 
              className="hero-gradient text-primary-foreground hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in-up [animation-delay:1.5s] opacity-0 [animation-fill-mode:forwards]">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border hover:shadow-glow transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border hover:shadow-glow transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-card border hover:shadow-glow transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;