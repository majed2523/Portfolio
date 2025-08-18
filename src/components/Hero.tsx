import React from 'react';
import { Button } from '@/components/ui/button';
import ProfileCard from './ProfileCard/ProfileCard';

const Hero = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-spacing">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Computer Science Student | Full-Stack & DevOps Enthusiast
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Passionate about building innovative solutions that bridge
              technology and user experience. Currently exploring the
              intersection of Full-Stack Development, DevOps practices, and AI
              integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="hero-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-glow transition-all duration-300"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={handleContactClick}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right side - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <ProfileCard
              avatarUrl="/MF.jpg"
              name="A.Meneceur"
              title="Computer Science Student"
              handle="Meneceur.M"
              status="Available for opportunities"
              contactText="Get in touch"
              showUserInfo={true}
              onContactClick={handleContactClick}
              enableTilt={true}
              enableMobileTilt={true}
              className="w-full max-w-md"
              // Customize gradients to match your portfolio colors
              behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(221,83%,53%,0.3) 4%,hsla(193,76%,56%,0.2) 10%,hsla(221,39%,11%,0.1) 50%,hsla(221,39%,11%,0) 100%),radial-gradient(35% 52% at 55% 20%,hsl(221,83%,53%) 0%,hsl(193,76%,56%) 100%),radial-gradient(100% 100% at 50% 50%,hsl(193,76%,56%) 1%,hsl(221,83%,53%) 76%)"
              innerGradient="linear-gradient(145deg,hsl(221,83%,53%,0.1) 0%,hsl(193,76%,56%,0.1) 100%)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
