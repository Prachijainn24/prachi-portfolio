import React from 'react';
import { Github, Linkedin, Instagram, Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  const socialIcons = [
    { Icon: Linkedin, url: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { Icon: Github, url: personalInfo.socialLinks.github, label: 'GitHub' },
    { Icon: Instagram, url: personalInfo.socialLinks.instagram, label: 'Instagram' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ff6b9d]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ff6b9d]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-left">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-[#ff6b9d] block mb-2">{personalInfo.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                I'm a <span className="text-[#ff6b9d]">{personalInfo.title}</span>
              </h2>
              <p className="text-lg md:text-xl text-[#ff6b9d]/90 font-medium">
                {personalInfo.subtitle}
              </p>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              {personalInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={handleDownloadResume}
                className="bg-[#ff6b9d] hover:bg-[#ff5a8a] text-white px-6 py-6 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b9d]/50"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
              <Button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                className="border-2 border-[#ff6b9d] text-[#ff6b9d] hover:bg-[#ff6b9d] hover:text-white px-6 py-6 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              {socialIcons.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-[#ff6b9d] flex items-center justify-center text-[#ff6b9d] hover:bg-[#ff6b9d] hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#ff6b9d]/50"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-delay">
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b9d] to-[#ff8fb3] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#ff6b9d] shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#ff6b9d]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#ff6b9d]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;