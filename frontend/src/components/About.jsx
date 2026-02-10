import React from 'react';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo, education } from '../data/mock';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#ff6b9d]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6b9d] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Personal Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Hello, I'm <span className="text-[#ff6b9d]">{personalInfo.name}</span>
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {personalInfo.description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-[#ff6b9d]/10 flex items-center justify-center">
                  <MapPin className="text-[#ff6b9d]" size={20} />
                </div>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-[#ff6b9d]/10 flex items-center justify-center">
                  <Mail className="text-[#ff6b9d]" size={20} />
                </div>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#ff6b9d] transition-colors duration-300">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-[#ff6b9d]/10 flex items-center justify-center">
                  <Phone className="text-[#ff6b9d]" size={20} />
                </div>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-[#ff6b9d] transition-colors duration-300">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right - Education */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              <GraduationCap className="inline-block mr-2 text-[#ff6b9d]" size={32} />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id} className="bg-[#1a1f2e] border-[#ff6b9d]/20 hover:border-[#ff6b9d]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b9d]/10">
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-[#ff6b9d]">{edu.degree}</h4>
                      <p className="text-white font-medium">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                        <span>{edu.year}</span>
                        {edu.cgpa && (
                          <>
                            <span>•</span>
                            <span className="text-[#ff6b9d]">CGPA: {edu.cgpa}</span>
                          </>
                        )}
                        {edu.percentage && (
                          <>
                            <span>•</span>
                            <span className="text-[#ff6b9d]">{edu.percentage}</span>
                          </>
                        )}
                        {edu.status && (
                          <>
                            <span>•</span>
                            <span className="text-green-400">{edu.status}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;