import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X, Instagram, Sparkles, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-pink-200 shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-4 group cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Tech Learning Hub
              </h1>
              <p className="text-xs text-gray-600 font-medium">Free Resources Forever</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('resources')}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300 relative group font-medium"
            >
              Resources
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('roadmaps')}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300 relative group font-medium"
            >
              Roadmaps
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('feedback')}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300 relative group font-medium"
            >
              Feedback
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300 relative group font-medium"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a 
              href="https://www.instagram.com/csweterner/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-white font-medium"
            >
              <Instagram className="h-4 w-4" />
              <span>Follow Us</span>
            </a>
          </nav>

          <button 
            className="md:hidden text-gray-700 hover:text-pink-600 transition-colors duration-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-pink-200">
            <nav className="flex flex-col space-y-4 mt-6">
              <button 
                onClick={() => scrollToSection('resources')}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-left"
              >
                Resources
              </button>
              <button 
                onClick={() => scrollToSection('roadmaps')}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-left"
              >
                Roadmaps
              </button>
              <button 
                onClick={() => scrollToSection('feedback')}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-left"
              >
                Feedback
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-left"
              >
                Contact
              </button>
              <a 
                href="https://www.instagram.com/csweterner/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 w-fit text-white font-medium"
              >
                <Instagram className="h-4 w-4" />
                <span>Follow Us</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;