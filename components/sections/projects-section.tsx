"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Personal Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="relative bg-gray-800/50 border-gray-700/50 backdrop-blur-sm 
             overflow-hidden transition-all duration-300 hover:bg-gray-800/70
             before:absolute before:inset-0 
             before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_70%)] 
             before:opacity-0 hover:before:opacity-100 
             before:transition-opacity before:duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    {project.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white">
                    {project.title}
                  </CardTitle>
                </div>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-700 text-gray-300 text-xs sm:text-sm hover:bg-gray-600 hover:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-800 hover:bg-gray-300 text-xs sm:text-sm"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-xs sm:text-sm"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
