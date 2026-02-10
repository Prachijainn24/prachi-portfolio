import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { sendContactMessage } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock API call - will be replaced with actual backend later
      const result = await sendContactMessage(formData);
      
      toast({
        title: "Success!",
        description: result.message,
        variant: "default"
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#ff6b9d]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6b9d] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1f2e] border border-[#ff6b9d]/20 rounded-2xl p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <User size={16} className="text-[#ff6b9d]" />
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#0f1419] border-[#ff6b9d]/30 focus:border-[#ff6b9d] text-white placeholder:text-gray-500 h-12"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Mail size={16} className="text-[#ff6b9d]" />
                Your Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#0f1419] border-[#ff6b9d]/30 focus:border-[#ff6b9d] text-white placeholder:text-gray-500 h-12"
              />
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <MessageSquare size={16} className="text-[#ff6b9d]" />
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-[#0f1419] border-[#ff6b9d]/30 focus:border-[#ff6b9d] text-white placeholder:text-gray-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff6b9d] hover:bg-[#ff5a8a] text-white px-6 py-6 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b9d]/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send size={20} />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;