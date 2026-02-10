import React from 'react';
import { Folder, ExternalLink } from 'lucide-react';
import { projects } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#ff6b9d]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6b9d] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Showcase of my work and technical implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#1a1f2e] border-[#ff6b9d]/20 hover:border-[#ff6b9d]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b9d]/10 group flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#ff6b9d]/10 flex items-center justify-center group-hover:bg-[#ff6b9d] transition-colors duration-300">
                    <Folder size={24} className="text-[#ff6b9d] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <ExternalLink size={20} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:text-[#ff6b9d]" />
                </div>
                <CardTitle className="text-[#ff6b9d] text-xl mb-2">
                  {project.title}
                </CardTitle>
                <Badge variant="secondary" className="bg-[#ff6b9d]/10 text-[#ff6b9d] border border-[#ff6b9d]/30 w-fit">
                  {project.category}
                </Badge>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                        <span className="text-[#ff6b9d] mt-0.5 flex-shrink-0">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-gray-400 bg-[#0f1419] px-2 py-1 rounded border border-[#ff6b9d]/20"
                      >
                        {tech}
                      </span>
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

export default Projects;