"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Figma, Code, Users, BarChart, Smartphone, Calendar, CheckCircle, Target, Eye, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Appraisal UI Dashboard",
    description: "Comprehensive performance management system with role-based dashboards for HR, Managers, and Employees. Features intuitive review workflows, goal tracking, and analytics visualization.",
    tools: ["Figma", "UX Research", "HTML/CSS"],
    focus: "Layout clarity, review mapping, data visualization",
    category: "Dashboard Design",
    icon: BarChart,
    features: [
      "Multi-role user flows (HR/Manager/Employee)",
      "Real-time performance analytics",
      "Goal setting & tracking system",
      "Automated review scheduling",
      "Interactive feedback forms"
    ],
    challenges: "Complex user permissions, data hierarchy visualization, mobile responsiveness",
    outcome: "40% faster review completion, 85% user satisfaction",
    duration: "9 months",
    teamSize: "Solo Designer + 1 Developers"
  },
  {
    title: "Task Management Dashboard",
    description: "Enterprise-level project management platform with advanced team collaboration features, real-time updates, and comprehensive project tracking capabilities.",
    tools: ["Figma", "Prototyping"],
    focus: "Team workflows, project management, real-time collaboration",
    category: "Web Application",
    icon: CheckCircle,
    features: [
      "Drag-and-drop task management",
      "Team collaboration workspace",
      "Project timeline visualization",
      "Resource allocation tracking",
      "Advanced filtering & search"
    ],
    challenges: "Complex data relationships, real-time updates, scalable design system",
    outcome: "60% improvement in team productivity, adopted by 200+ teams",
    duration: "4 months",
    teamSize: "Designer"
  },
  {
    title: "Mobile Productivity Suite",
    description: "Complete mobile productivity application featuring task management, calendar integration, habit tracking, and seamless cross-platform synchronization.",
    tools: ["Figma", "Prototyping", "User Research"],
    focus: "Mobile-first design, intuitive UX, offline functionality",
    category: "Mobile Design",
    icon: Smartphone,
    features: [
      "Gesture-based task management",
      "Smart calendar integration",
      "Habit tracking & analytics",
      "Offline-first architecture",
      "Cross-platform sync"
    ],
    challenges: "Limited screen space, gesture interactions, offline data sync",
    outcome: "4.8 App Store rating, 2+ downloads in first month",
    duration: "5 months",
    teamSize: "UI/UX Designer + Mobile Dev Team"
  },
];

export function PortfolioSection() {
  console.log("PortfolioSection component rendered");
  
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    console.log(`Project ${index} selected:`, projects[index].title);
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <section id="portfolio" className="py-24 bg-portfolio-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-portfolio-white mb-6">
            Featured <span className="text-portfolio-green font-medium">Projects</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-portfolio-gray max-w-3xl mx-auto leading-relaxed">
            Real-world design solutions that transformed user experiences and delivered 
            <span className="text-portfolio-green"> measurable business impact</span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-portfolio-green mb-2">2yrs+</div>
              <div className="text-portfolio-gray">Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-portfolio-green mb-2">12+</div>
              <div className="text-portfolio-gray">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-portfolio-green mb-2">95%</div>
              <div className="text-portfolio-gray">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isExpanded = selectedProject === index;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-portfolio-black border-portfolio-green/20 hover:border-portfolio-green transition-all duration-500 overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Project Visual */}
                    <div className="relative h-64 md:h-80 bg-gradient-to-br from-portfolio-green/10 via-portfolio-green/5 to-transparent overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="relative"
                        >
                          <IconComponent className="h-20 w-20 md:h-24 md:w-24 text-portfolio-green/60" />
                          <div className="absolute -inset-4 bg-portfolio-green/10 rounded-full animate-pulse"></div>
                        </motion.div>
                      </div>
                      
                      {/* Floating elements */}
                      <motion.div
                        className="absolute top-8 left-8 w-3 h-3 bg-portfolio-green rounded-full"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute bottom-8 right-8 w-2 h-2 bg-portfolio-green-light rounded-full"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      />
                      
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-portfolio-green/20 text-portfolio-green border-portfolio-green/30">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl md:text-3xl font-semibold text-portfolio-white group-hover:text-portfolio-green transition-colors duration-300">
                            {project.title}
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleProjectClick(index)}
                            className="text-portfolio-green hover:bg-portfolio-green/10"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            {isExpanded ? 'Less' : 'More'}
                          </Button>
                        </div>
                        
                        <p className="text-portfolio-gray text-lg mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Project Meta */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-portfolio-green font-medium mb-1">Duration</p>
                            <p className="text-sm text-portfolio-gray">{project.duration}</p>
                          </div>
                          <div>
                            <p className="text-sm text-portfolio-green font-medium mb-1">Team</p>
                            <p className="text-sm text-portfolio-gray">{project.teamSize}</p>
                          </div>
                        </div>
                      </div>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-3">
                        {project.tools.map((tool) => (
                          <Badge 
                            key={tool}
                            variant="outline" 
                            className="border-portfolio-green/30 text-portfolio-green hover:bg-portfolio-green/10 transition-colors"
                          >
                            {tool === "Figma" && <Figma className="h-3 w-3 mr-1" />}
                            {tool === "HTML/CSS" && <Code className="h-3 w-3 mr-1" />}
                            {tool === "UX Research" && <Target className="h-3 w-3 mr-1" />}
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-portfolio-green/20 p-8 bg-portfolio-dark/50">
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Key Features */}
                        <div>
                          <h4 className="text-lg font-semibold text-portfolio-green mb-4">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="text-portfolio-gray text-sm flex items-start">
                                <CheckCircle className="h-4 w-4 text-portfolio-green mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Challenges & Solutions */}
                        <div>
                          <h4 className="text-lg font-semibold text-portfolio-green mb-4">Challenges</h4>
                          <p className="text-portfolio-gray text-sm leading-relaxed mb-6">
                            {project.challenges}
                          </p>
                          
                          <h4 className="text-lg font-semibold text-portfolio-green mb-4">Focus Areas</h4>
                          <p className="text-portfolio-gray text-sm leading-relaxed">
                            {project.focus}
                          </p>
                        </div>

                        {/* Results */}
                        <div>
                          <h4 className="text-lg font-semibold text-portfolio-green mb-4">Impact</h4>
                          <p className="text-portfolio-gray text-sm leading-relaxed mb-6">
                            {project.outcome}
                          </p>
                          
                          <Button
                            variant="outline"
                            className="border-portfolio-green text-portfolio-green hover:bg-portfolio-green hover:text-portfolio-black transition-all duration-300"
                          >
                            View Case Study
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-portfolio-gray mb-8">
            Interested in seeing more detailed case studies?
          </p>
          <Button
            size="lg"
            className="bg-portfolio-green hover:bg-portfolio-green-light text-portfolio-black font-semibold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Eye className="mr-3 h-5 w-5" />
            View Full Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}