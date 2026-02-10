import React from 'react';
import { Code2, Globe, Cloud, Wrench, Brain } from 'lucide-react';
import { skills } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      items: skills.languages,
      color: 'from-[#ff6b9d] to-[#ff8fb3]'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      items: skills.web,
      color: 'from-[#ff6b9d] to-[#ffa5c0]'
    },
    {
      title: 'Cloud Services (AWS)',
      icon: Cloud,
      items: skills.cloud,
      color: 'from-[#ff6b9d] to-[#ff8fb3]'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      items: skills.tools,
      color: 'from-[#ff6b9d] to-[#ffa5c0]'
    },
    {
      title: 'Core Concepts',
      icon: Brain,
      items: skills.concepts,
      color: 'from-[#ff6b9d] to-[#ff8fb3]'
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#ff6b9d]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6b9d] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-[#1a1f2e] border-[#ff6b9d]/20 hover:border-[#ff6b9d]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b9d]/10 group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-[#ff6b9d]/10 text-[#ff6b9d] hover:bg-[#ff6b9d] hover:text-white transition-all duration-300 px-3 py-1 text-sm border border-[#ff6b9d]/30"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;