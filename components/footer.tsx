import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  console.log("Footer component rendered");

  return (
    <footer className="bg-portfolio-black border-t border-portfolio-green/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Name and role */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-medium text-portfolio-white mb-2">
              Lingesvaran R
            </h3>
            <p className="text-portfolio-gray">UI/UX Designer</p>
          </div>

          {/* Center - Social icons */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="mailto:linges.varan.rp@gmail.com"
              className="text-portfolio-gray hover:text-portfolio-green transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-portfolio-gray hover:text-portfolio-green transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-portfolio-gray hover:text-portfolio-green transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

          {/* Right side - Copyright */}
          <div className="text-portfolio-gray text-center md:text-right">
            <p>&copy; 2025 Lingesvaran R</p>
            <p className="text-sm">UI/UX Designer</p>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-8 pt-8 border-t border-portfolio-green/10 text-center">
          <p className="text-portfolio-gray text-sm">
            Designed with passion for clean, user-centered interfaces
          </p>
        </div>
      </div>
    </footer>
  );
}