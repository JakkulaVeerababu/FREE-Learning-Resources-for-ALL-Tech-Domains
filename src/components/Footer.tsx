import React from 'react';
import { BookOpen, Heart, Instagram, Phone, Mail, ExternalLink, GraduationCap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "GATE CSE", href: "https://drive.google.com/drive/folders/1GZVLI9A6NSaK9_XE8qGlNEFatph1F3pZ" },
    { name: "GATE ECE", href: "https://drive.google.com/drive/folders/1DbhnyMZoNOX9Z64uRuKjB3OAWr3ppip7" },
    { name: "DSA", href: "https://drive.google.com/drive/folders/1LKI2H9QhwM1gUGn4LFUFQTjnGZWjkUdh" },
    { name: "Web Development", href: "https://drive.google.com/drive/folders/1NVE096_ZL9YCPski98bFFx1GknNG8I2_" }
  ];

  const subjects = [
    { name: "Operating Systems", href: "https://drive.google.com/drive/folders/1M7aQ5zOnluKemCAIIe0pXUJskNaPm6vS" },
    { name: "DBMS", href: "https://drive.google.com/drive/folders/1LKoU7kvbvW6hbIALiQlmjJsJWpi0WKqi" },
    { name: "Computer Networks", href: "https://drive.google.com/drive/folders/1LMWMtK8PJPKLeun60XbTyjA8S7oWfuL8" },
    { name: "VLSI Design", href: "https://drive.google.com/drive/folders/1JeYZ4xPjsd2wOoggVNlNhJNF1qe8wfqu" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Tech Learning Hub
                </h3>
                <p className="text-xs text-gray-400">Free Resources Forever</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your one-stop destination for free GATE preparation materials, programming resources, and engineering study guides.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/csweterner/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/918008651769" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Popular Resources</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Core Subjects</h4>
            <ul className="space-y-2">
              {subjects.map((subject, index) => (
                <li key={index}>
                  <a 
                    href={subject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm flex items-center space-x-1"
                  >
                    <span>{subject.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get Help</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/918008651769" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>+91 8008651769</span>
              </a>
              <a 
                href="https://www.instagram.com/csweterner/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm"
              >
                <Instagram className="h-4 w-4" />
                <span>@csweterner</span>
              </a>
            </div>
            <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-300 text-xs">
                💡 Need personal guidance? Contact us for syllabus help, doubt clearing, and career advice!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>for students by a student</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Tech Learning Hub. All resources are free forever.
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-xs">
              🚧 This website is under active development. More features and resources coming soon!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;