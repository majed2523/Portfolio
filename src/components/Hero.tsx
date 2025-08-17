import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { SplitText, ScrambleText } from '@/components/EnhancedText';
import ScrollReveal from '@/components/ScrollReveal';

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 500);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1500);
    
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-gradient-subtle absolute inset-0 -z-10"></div>
      
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={300}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {showTitle && (
                <SplitText 
                  text="Emergent" 
                  className="text-gradient"
                  stagger={100}
                />
              )}
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={600}>
            <div className="h-16 mb-8 flex items-center justify-center">
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                {showSubtitle && (
                  <ScrambleText 
                    text="Computer Science Student | Full-Stack & DevOps Enthusiast"
                    scrambleSpeed={30}
                    revealSpeed={80}
                  />
                )}
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={900}>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Passionate about building innovative solutions that bridge technology and user experience. 
              Currently exploring the intersection of Full-Stack Development, DevOps practices, and AI integration.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={1200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="hero-gradient text-primary-foreground hover:shadow-glow transition-all duration-300 group"
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative">
                  View Projects
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="relative overflow-hidden group"
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={1500}>
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border hover:shadow-glow transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border hover:shadow-glow transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="p-3 rounded-full bg-card border hover:shadow-glow transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      <ScrollReveal direction="up" delay={2000}>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
        </button>
      </ScrollReveal>
    </section>
  );
};

export default Hero;