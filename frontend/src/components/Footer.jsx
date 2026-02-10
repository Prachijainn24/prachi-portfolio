import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Linkedin, url: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { Icon: Github, url: personalInfo.socialLinks.github, label: 'GitHub' },
    { Icon: Instagram, url: personalInfo.socialLinks.instagram, label: 'Instagram' }
  ];

  return (
    <footer className="bg-[#1a1f2e] border-t border-[#ff6b9d]/20 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-[#ff6b9d]">Prachi</span> Jain
            </h3>
            <p className="text-gray-400 text-sm mt-2">{personalInfo.subtitle}</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#ff6b9d]/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff6b9d] hover:border-[#ff6b9d] transition-all duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-[#ff6b9d]/20"></div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-[#ff6b9d] animate-pulse" /> by {personalInfo.name}
            </p>
            <p className="text-gray-500 text-xs">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;