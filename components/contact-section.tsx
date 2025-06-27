"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  console.log("ContactSection component rendered");
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(`Contact form field updated: ${name} = ${value}`);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Hi Lingesvaran,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    const mailtoLink = `mailto:linges.varan.rp@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
  };

  const handleDirectEmail = () => {
    console.log("Direct email clicked");
    window.location.href = 'mailto:linges.varan.rp@gmail.com';
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-dark">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-portfolio-white text-center mb-8">
          Let's <span className="text-portfolio-green font-medium">Connect</span>
        </h2>
        
        <p className="text-xl text-portfolio-gray text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can create something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-portfolio-black border-portfolio-green/20 p-8">
            <h3 className="text-2xl font-medium text-portfolio-white mb-6 flex items-center">
              <MessageCircle className="mr-3 h-6 w-6 text-portfolio-green" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-portfolio-dark border-portfolio-green/30 text-portfolio-white placeholder:text-portfolio-gray focus:border-portfolio-green"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-portfolio-dark border-portfolio-green/30 text-portfolio-white placeholder:text-portfolio-gray focus:border-portfolio-green"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-portfolio-dark border-portfolio-green/30 text-portfolio-white placeholder:text-portfolio-gray focus:border-portfolio-green resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-portfolio-green hover:bg-portfolio-green-light text-portfolio-black font-medium py-6 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Direct Contact */}
          <div className="space-y-6">
            <Card className="bg-portfolio-black border-portfolio-green/20 p-8">
              <h3 className="text-2xl font-medium text-portfolio-white mb-4 flex items-center">
                <Mail className="mr-3 h-6 w-6 text-portfolio-green" />
                Direct Email
              </h3>
              
              <p className="text-portfolio-gray mb-6">
                Prefer to reach out directly? Send me an email and I'll get back to you within 24 hours.
              </p>
              
              <div className="text-portfolio-green text-lg font-medium mb-6">
                linges.varan.rp@gmail.com
              </div>
              
              <Button
                onClick={handleDirectEmail}
                variant="outline"
                className="w-full border-portfolio-green text-portfolio-green hover:bg-portfolio-green hover:text-portfolio-black font-medium py-6 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Open Email Client
              </Button>
            </Card>

            {/* Quick Info */}
            <Card className="bg-portfolio-dark border-portfolio-green/20 p-6">
              <h4 className="text-lg font-medium text-portfolio-white mb-3">Quick Info</h4>
              <ul className="space-y-2 text-portfolio-gray">
                <li>• Response time: Within 24 hours</li>
                <li>• Available for freelance projects</li>
                <li>• Open to collaboration opportunities</li>
                <li>• Based on project requirements</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}