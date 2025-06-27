import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ResumeSection } from "@/components/resume-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  console.log("Home page rendered");
  
  return (
    <main className="min-h-screen bg-portfolio-black">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
