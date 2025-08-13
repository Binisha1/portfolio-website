"use client";

import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";
import { scrollToSection } from "@/utils/navigation";

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export function HeroSection({ setActiveSection }: HeroSectionProps) {
  const handleProjectsClick = () => {
    setActiveSection("projects");
    scrollToSection("projects");
  };

  const handleContactClick = () => {
    setActiveSection("contact");
    scrollToSection("contact");
  };

  return (
    <section id="home" className="h-screen relative overflow-hidden flex">
      {/* Left Side Text - half screen */}
      <div className="w-1/2 flex flex-col justify-center px-8 lg:px-20 pointer-events-auto z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Software Engineer
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-gray-300 font-light">
          Specializing in Full-Stack Development
        </p>
        <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 text-gray-400 max-w-2xl">
          Building intelligent applications with React, Next.js, and FastAPI.
          Passionate about creating seamless user experiences powered by AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg"
            onClick={handleProjectsClick}
          >
            View Projects
          </Button>
          <Button
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/cv.pdf";
              link.download = "Software_Engineer_CV.pdf";
              link.click();
            }}
          >
            Download CV
          </Button>
          <Button
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:text-white hover:bg-white/20 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg"
            onClick={handleContactClick}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Right Side Spline - half screen */}
      <div className="w-1/2 h-full">
        <Spline
          scene="https://prod.spline.design/WJI29Gmy2qJKnZIy/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
