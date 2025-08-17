import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Code, Server, Brain } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'Python', 'C',
    'Vue.js', 'React', 'Next.js', 'NestJS',
    'Flask', 'PostgreSQL', 'Docker', 'DevOps'
  ];

  return (
    <section id="about" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate computer science student dedicated to creating innovative solutions
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={400}>
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education & Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Currently pursuing a Bachelor's degree in Computer Science, with a deep passion for 
                  software development and system architecture. My journey in technology has been driven 
                  by curiosity and a desire to solve complex problems through innovative solutions.
                </p>
                <p className="text-muted-foreground">
                  I specialize in full-stack development, combining modern frontend frameworks with 
                  robust backend systems. My experience spans from building user-friendly interfaces 
                  to designing scalable server architectures and implementing DevOps practices.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal direction="right" delay={600}>
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Code className="w-6 h-6 text-accent" />
                    Full-Stack Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Proficient in modern web technologies, building responsive and performant applications
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={800}>
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Server className="w-6 h-6 text-accent" />
                    DevOps & Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Experience with containerization, CI/CD pipelines, and cloud deployment strategies
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={1000}>
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Brain className="w-6 h-6 text-accent" />
                    AI Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Exploring machine learning applications and AI-powered solutions in web development
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-16">
          <ScrollReveal direction="up" delay={1200}>
            <h3 className="text-2xl font-bold text-center mb-8">
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill} direction="up" delay={1400 + index * 50}>
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;