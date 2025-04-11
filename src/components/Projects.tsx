import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brazilian Flavors",
    description: "A responsive template for a Brazilian food store built with React and Next.js.",
    image: "/images/v3.png", // Updated path
    tags: ["React", "Next.js", "CSS"],
    githubUrl: "https://github.com/hugopradops/brasil-food",
    liveUrl: "https://brasil-food.hugoprado.dev/",
  },
  {
    id: 2,
    title: "AI Learning Homelab",
    description: "AI-Learning runs the Gemma3:12b model on my basement homelab using Traefik, Docker, and SQLite for backend management.",
    image: "/images/v4.png", // Updated path
    tags: ["Traefik", "Docker", "SQLite"],
    githubUrl: "https://github.com/hugopradops/ai-learning",
    liveUrl: "https://ai-learning.hugoprado.dev/",
  },
  {
    id: 3,
    title: "My Personal Website",
    description: "A portfolio website showcasing my projects, skills, and experience, built with modern web technologies.",
    image: "/images/v6.png", // Updated path
    tags: ["React", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/hugopradops/my-website",
    liveUrl: "https://hub.hugoprado.dev/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Projects</h2>
        <p className="text-foreground/70 mb-12 max-w-2xl">
          Here are some of the projects I've worked on during my studies and personal time. 
          Each project has helped me develop different skills and solve unique challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover border border-border/50">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="tag">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
