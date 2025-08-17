import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "SARL Alpet",
      location: "Algeria",
      period: "2023 - Present",
      type: "Internship",
      description: "Led the development of a comprehensive warehouse management system, focusing on inventory optimization and automated reporting. Collaborated with cross-functional teams to implement system architecture improvements that increased operational efficiency by 40%.",
      achievements: [
        "Designed and implemented PostgreSQL database architecture",
        "Developed REST API endpoints for inventory management",
        "Created automated reporting system for warehouse operations",
        "Improved system performance through query optimization"
      ],
      technologies: ["PostgreSQL", "Python", "System Design", "REST API", "Data Analytics"]
    },
    {
      title: "Full-Stack Developer",
      company: "Rigelny (Personal Project)",
      location: "Remote",
      period: "2023 - Present",
      type: "Project",
      description: "Leading the development of a service marketplace platform that connects service providers with customers. Building a scalable architecture using modern technologies and implementing features like real-time communication, payment processing, and advanced matching algorithms.",
      achievements: [
        "Architected microservices-based backend using NestJS",
        "Developed cross-platform mobile app with React Native",
        "Implemented real-time messaging with WebSocket",
        "Integrated secure payment processing systems"
      ],
      technologies: ["NestJS", "React Native", "PostgreSQL", "Docker", "WebSocket", "JWT"]
    }
  ];

  return (
    <section id="experience" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            Professional experience and key projects that shaped my development journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.title + exp.company} 
              className="shadow-card border-0 animate-fade-in-up opacity-0"
              style={{
                animationDelay: `${0.4 + index * 0.3}s`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={exp.type === 'Internship' ? 'secondary' : 'default'}
                    className="w-fit"
                  >
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;