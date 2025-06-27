"use client";

import { Card } from "@/components/ui/card";
import { Figma, Box, Code, Layers, Video, Palette } from "lucide-react";

const skills = [
  { name: "Figma", icon: Figma, description: "Interface Design" },
  { name: "Adobe XD", icon: Box, description: "Prototyping" },
  { name: "Responsive UI Design", icon: Layers, description: "Mobile-First" },
  { name: "UX Wireframes", icon: Palette, description: "User Research" },
  { name: "HTML/CSS/JS", icon: Code, description: "Frontend Development" },
  { name: "Video Editing", icon: Video, description: "Visual Stories" },
];

export function SkillsSection() {
  console.log("SkillsSection component rendered");

  return (
    <section className="py-20 bg-portfolio-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-portfolio-white text-center mb-16">
          My <span className="text-portfolio-green font-medium">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={skill.name}
                className="bg-portfolio-dark border-portfolio-green/20 hover:border-portfolio-green transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-portfolio-green/10 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-portfolio-green/10 rounded-full flex items-center justify-center group-hover:bg-portfolio-green/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-portfolio-green" />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-portfolio-white mb-2 group-hover:text-portfolio-green transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-portfolio-gray">
                    {skill.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}