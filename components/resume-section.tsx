"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, User, Briefcase, Award } from "lucide-react";

export function ResumeSection() {
  console.log("ResumeSection component rendered");

  const handleDownloadResume = () => {
    console.log("Resume download initiated");
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,';
    link.download = 'Lingesvaran_R_Resume.pdf';
    link.click();
  };

  return (
    <section className="py-20 bg-portfolio-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-portfolio-white mb-8">
          My <span className="text-portfolio-green font-medium">Resume</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-portfolio-dark border-portfolio-green/20 p-6">
            <User className="h-8 w-8 text-portfolio-green mx-auto mb-4" />
            <h3 className="text-lg font-medium text-portfolio-white mb-2">Profile</h3>
            <p className="text-portfolio-gray text-sm">UI/UX Designer with focus on modern, user-centered design</p>
          </Card>

          <Card className="bg-portfolio-dark border-portfolio-green/20 p-6">
            <Briefcase className="h-8 w-8 text-portfolio-green mx-auto mb-4" />
            <h3 className="text-lg font-medium text-portfolio-white mb-2">Experience</h3>
            <p className="text-portfolio-gray text-sm">Dashboard design, mobile apps, and responsive interfaces</p>
          </Card>

          <Card className="bg-portfolio-dark border-portfolio-green/20 p-6">
            <Award className="h-8 w-8 text-portfolio-green mx-auto mb-4" />
            <h3 className="text-lg font-medium text-portfolio-white mb-2">Skills</h3>
            <p className="text-portfolio-gray text-sm">Figma, Adobe XD, HTML/CSS, Video Editing</p>
          </Card>
        </div>

        <div className="bg-portfolio-dark rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-medium text-portfolio-white mb-4">
            Ready to see my full experience?
          </h3>
          <p className="text-portfolio-gray mb-6 max-w-2xl mx-auto">
            Download my comprehensive resume featuring detailed project case studies, 
            technical proficiencies, and design methodology.
          </p>
          
          <Button
            onClick={handleDownloadResume}
            size="lg"
            className="bg-portfolio-green hover:bg-portfolio-green-light text-portfolio-black font-medium px-12 py-6 text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Download className="mr-3 h-5 w-5" />
            Download My Resume (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}