"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, Eye, Code, Palette, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const typingTexts = [
  "clean, logical interfaces",
  "user-centered experiences", 
  "modern design systems",
  "responsive web solutions"
];

export function HeroSection() {
  console.log("HeroSection component rendered");
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const targetText = typingTexts[currentTextIndex];
      if (displayText.length < targetText.length) {
        timeout = setTimeout(() => {
          setDisplayText(targetText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTextIndex]);

  const handleViewPortfolio = () => {
    console.log("View Portfolio clicked");
    document.getElementById('portfolio')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleDownloadResume = () => {
    console.log("Download Resume clicked");
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,';
    link.download = 'Download_My_Resume.pdf';
    link.click();
  };

  const handleContact = () => {
    console.log("Contact Me clicked");
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="min-h-screen bg-portfolio-black flex items-center justify-center px-6 relative overflow-hidden pb-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 border border-portfolio-green rounded-full opacity-10"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 bg-portfolio-green/5 rounded-lg opacity-20"
          animate={{ 
            rotate: [0, 45, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-10 w-32 h-32 border-2 border-portfolio-green/20 rounded-lg opacity-30"
          animate={{ 
            rotate: [0, 180, 360],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* Floating Icons */}
        <motion.div
          className="absolute top-32 right-32 text-portfolio-green/20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Code className="h-12 w-12" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-32 text-portfolio-green/20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Palette className="h-10 w-10" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-16 text-portfolio-green/15"
          animate={{ 
            x: [0, 20, 0],
            rotate: [0, 25, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Zap className="h-8 w-8" />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Enhanced Abstract Avatar */}
        <motion.div 
          className="mb-12 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div 
              className="w-40 h-40 bg-gradient-to-br from-portfolio-dark to-portfolio-green/20 rounded-full flex items-center justify-center border-2 border-portfolio-green/30 shadow-lg shadow-portfolio-green/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-20 h-20 bg-portfolio-green rounded-lg opacity-90"
                animate={{ rotate: [12, -12, 12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute w-16 h-16 bg-portfolio-green-light rounded-full opacity-70"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [8, -8, 8],
                  y: [-8, 8, -8]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            {/* Orbiting Elements */}
            <motion.div
              className="absolute inset-0 w-40 h-40"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-portfolio-green rounded-full transform -translate-x-1/2"></div>
            </motion.div>
            
            <motion.div
              className="absolute inset-0 w-40 h-40"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/2 -right-2 w-3 h-3 bg-portfolio-green-light rounded-full transform -translate-y-1/2"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-8xl font-light text-portfolio-white mb-4 leading-tight">
            I'm{" "}
            <motion.span 
              className="font-bold text-portfolio-green inline-block"
              whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(16, 185, 129, 0.5)" }}
            >
              Lingesvaran
            </motion.span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-portfolio-white mb-6">
            UI/UX Designer and Frontend Developer
          </h2>
          <motion.div 
            className="text-2xl md:text-3xl text-portfolio-green font-medium h-12 flex items-center justify-center"
            key={displayText}
          >
            I design{" "}
            <span className="ml-2 min-w-0 flex-1 text-left">
              {displayText}
              <motion.span
                className="inline-block w-0.5 h-8 bg-portfolio-green ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
          </motion.div>
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-portfolio-gray font-light mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Transforming complex problems into elegant, intuitive solutions through 
          <span className="text-portfolio-green"> thoughtful design</span> and 
          <span className="text-portfolio-green"> user research</span>.
        </motion.p>

        {/* Enhanced Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleViewPortfolio}
              size="lg"
              className="bg-portfolio-green hover:bg-portfolio-green-light text-portfolio-black font-semibold px-10 py-7 text-lg transition-all duration-300 shadow-lg shadow-portfolio-green/30 hover:shadow-portfolio-green/50"
            >
              <Eye className="mr-3 h-6 w-6" />
              View My Work
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="lg"
              className="border-2 border-portfolio-green text-portfolio-green hover:bg-portfolio-green hover:text-portfolio-black font-semibold px-10 py-7 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-green/30"
            >
              <Download className="mr-3 h-6 w-6" />
              Get Resume
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleContact}
              variant="ghost"
              size="lg"
              className="text-portfolio-white hover:text-portfolio-green hover:bg-portfolio-dark/50 font-semibold px-10 py-7 text-lg transition-all duration-300 border border-transparent hover:border-portfolio-green/20"
            >
              <Mail className="mr-3 h-6 w-6" />
              Let's Talk
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-portfolio-green/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-portfolio-green rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}