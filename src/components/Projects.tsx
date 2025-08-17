import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import rigelnyHero from '@/assets/rigelny-hero.jpg';
import tennisClubHero from '@/assets/tennis-club-hero.jpg';
import warehouseHero from '@/assets/warehouse-hero.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Rigelny",
      description: "A comprehensive service marketplace platform connecting service providers with customers. Features real-time communication, secure payment processing, and advanced matching algorithms.",
      image: rigelnyHero,
      technologies: ["NestJS", "React Native", "PostgreSQL", "Docker", "JWT", "WebSocket"],
      github: "https://github.com",
      live: "https://rigelny.com",
      status: "In Development"
    },
    {
      title: "USMA Tennis Club Management System",
      description: "Modern web application for tennis club operations featuring member management, court scheduling, tournament organization, and automated notifications.",
      image: tennisClubHero,
      technologies: ["Next.js", "Flask", "JWT", "PostgreSQL", "Tailwind CSS", "Python"],
      github: "https://github.com",
      live: "https://usma-tennis.com",
      status: "Completed"
    },
    {
      title: "Warehouse Management System - SARL Alpet",
      description: "Enhanced warehouse operations system with inventory tracking, automated reporting, and optimized logistics workflows. Improved efficiency by 40%.",
      image: warehouseHero,
      technologies: ["PostgreSQL", "Python", "REST API", "System Architecture", "Data Analytics"],
      github: "https://github.com",
      status: "Internship Project"
    }
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work in full-stack development and system architecture
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.title}
              direction="up" 
              delay={400 + index * 200}
            >
              <Card className="card-hover shadow-card border-0 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className="bg-background/90 backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2 mt-auto">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button 
                        size="sm" 
                        className="flex-1 hero-gradient text-primary-foreground"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;