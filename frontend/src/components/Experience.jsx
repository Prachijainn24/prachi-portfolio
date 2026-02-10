import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#ff6b9d]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6b9d] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Professional journey and contributions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#ff6b9d]/30"></div>

          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ff6b9d] rounded-full border-4 border-[#0f1419] z-10"></div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2"></div>

                {/* Experience Card */}
                <Card className="w-full md:w-1/2 bg-[#1a1f2e] border-[#ff6b9d]/20 hover:border-[#ff6b9d]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b9d]/10">
                  <CardContent className="p-6">
                    {/* Type Badge */}
                    <Badge className="mb-4 bg-[#ff6b9d] hover:bg-[#ff5a8a] text-white">
                      {exp.type}
                    </Badge>

                    {/* Company & Role */}
                    <h3 className="text-xl md:text-2xl font-bold text-[#ff6b9d] mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-white font-semibold mb-4">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>

                    {/* Duration & Location */}
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-[#ff6b9d] mt-1.5 flex-shrink-0">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;