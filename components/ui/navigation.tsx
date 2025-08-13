"use client";

import { scrollToSection, navigationItems } from "@/utils/navigation";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({
  activeSection,
  setActiveSection,
}: NavigationProps) {
  const handleNavClick = (item: string) => {
    const sectionId = item.toLowerCase();
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Binisha Naga
          </div>
          <div className="flex gap-4 sm:gap-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
