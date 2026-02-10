import React from 'react';
import { Award, Trophy, Music, Users } from 'lucide-react';
import { achievements } from '../data/mock';
import { Card, CardContent } from './ui/card';

const Achievements = () => {
  const icons = [Award, Trophy, Music, Users];

  return (
    <section id="achievements" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Achievements & <span className="text-[#ff6b9d]">Activities</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6b9d] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Recognitions, certifications, and extracurricular excellence
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card
                key={achievement.id}
                className="bg-[#1a1f2e] border-[#ff6b9d]/20 hover:border-[#ff6b9d]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b9d]/10 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff6b9d] to-[#ff8fb3] flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-300">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#ff6b9d] mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base">
                        {achievement.description}
                      </p>
                    </div>
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

export default Achievements;