import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-accent/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6">
            <span className="inline-block text-primary font-medium">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
              Hugo Prado
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/80 mt-1">
              Computer Science Student
            </h2>
          </div>

          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Welcome to my personal portfolio! My name is Hugo Prado Serafim
            Pereira, a passionate and dedicated Computer Science student at the
            University of Guelph. Originally from Brazil 🇧🇷, I am now based in
            Canada 🇨🇦, where I am pursuing my dream of becoming a skilled
            software developer. 🖥️
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View my projects</a>
            </Button>

            <a
              href="#projects"
              aria-label="Scroll down"
              className="animate-bounce text-primary"
            >
              <ChevronDown />
            </a>

            <div className="flex items-center gap-4 ml-auto">
              <a
                href="https://github.com/hugopradops/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hugopradops/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hugop.dev@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
