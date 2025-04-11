
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Database, Layout, Server, Laptop, BookOpen } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "Python", level: 65 },
      { name: "API Development", level: 80 },
    ],
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "SQL", level: 70 },
      { name: "SQLite", level: 75 },
    ],
  },
  {
    name: "Tools",
    icon: <Laptop className="h-5 w-5" />,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "JSON", level: 80 },
      { name: "YAML", level: 70 },
      { name: "Gradle", level: 60 },
    ],
  },
  {
    name: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Python", level: 65 },
      { name: "Java", level: 60 },
      { name: "C", level: 50 },
    ],
  },
  {
    name: "Academic",
    icon: <BookOpen className="h-5 w-5" />,
    skills: [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 85 },
      { name: "OOP", level: 85 },
      { name: "Software Engineering", level: 85 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills</h2>
        <p className="text-foreground/70 mb-12 max-w-2xl">
          Through my academic journey and personal projects, I've developed 
          proficiency in various technologies and concepts. Here's a breakdown of my skills:
        </p>

        <Tabs defaultValue="Frontend" className="w-full">
          <div className="mb-6 overflow-x-auto pb-2">
            <TabsList className="inline-flex h-auto p-1 w-auto">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="flex items-center gap-2 px-4 py-2"
                >
                  {category.icon}
                  <span>{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <Card key={skill.name} className="border border-border/50">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-foreground/70">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
