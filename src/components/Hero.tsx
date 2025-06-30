import React from 'react';
import { Trophy, Target, Clock, Gift, Zap, Star, ChevronRight, Code, Cpu, Database, Globe, Brain, Calculator, Wrench, Building } from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: Gift, text: "100% FREE Forever", color: "text-green-600" },
    { icon: Target, text: "All Tech Domains", color: "text-blue-600" },
    { icon: Clock, text: "Always Updated", color: "text-purple-600" },
    { icon: Zap, text: "No Login Required", color: "text-orange-600" }
  ];

  const domains = [
    { icon: Code, name: "GATE Prep" },
    { icon: Globe, name: "Full Stack" },
    { icon: Brain, name: "AI & ML" },
    { icon: Cpu, name: "VLSI Design" },
    { icon: Database, name: "Data Science" },
    { icon: Calculator, name: "DSA" },
    { icon: Wrench, name: "Embedded" },
    { icon: Building, name: "Android Dev" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              🎓 FREE Learning Resources
            </span>
            <br />
            <span className="text-gray-800">for ALL Tech Domains! 🚀</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-4xl mx-auto font-medium">
            Your Ultimate Hub for Engineering, Programming & Tech Education 💻✨
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 rounded-full text-white font-semibold animate-pulse shadow-lg">
              📚 GATE • Full Stack • AI • VLSI • Embedded & More!
            </span>
          </div>
        </div>

        {/* Domain Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12 max-w-4xl mx-auto">
          {domains.map((domain, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-pink-200 rounded-xl p-4 hover:border-pink-400 transition-all duration-300 transform hover:scale-105 animate-fade-in-up shadow-lg hover:shadow-xl cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => scrollToSection('resources')}
            >
              <domain.icon className="h-8 w-8 text-pink-600 mx-auto mb-2" />
              <p className="text-gray-700 text-xs font-medium">{domain.name}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-2xl p-6 hover:border-pink-400 transition-all duration-300 transform hover:scale-105 animate-fade-in-up shadow-lg hover:shadow-xl cursor-pointer"
              style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
              onClick={() => scrollToSection('resources')}
            >
              <feature.icon className={`h-10 w-10 ${feature.color} mx-auto mb-3`} />
              <p className="text-gray-800 font-semibold">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button 
            onClick={() => scrollToSection('resources')}
            className="group bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 px-10 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-xl hover:shadow-2xl"
          >
            <span>Explore All Resources</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <a 
            href="https://www.instagram.com/csweterner/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-10 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-xl hover:shadow-2xl"
          >
            <span>Follow @csweterner</span>
            <Star className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          <div className="text-center animate-fade-in-up bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300" style={{ animationDelay: '1.2s' }}>
            <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Tech Domains</div>
          </div>
          <div className="text-center animate-fade-in-up bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300" style={{ animationDelay: '1.3s' }}>
            <div className="text-4xl font-bold text-rose-600 mb-2">2000+</div>
            <div className="text-gray-700 font-medium">Study Materials</div>
          </div>
          <div className="text-center animate-fade-in-up bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300" style={{ animationDelay: '1.4s' }}>
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-700 font-medium">Free Forever</div>
          </div>
        </div>

        {/* Development Notice */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-2xl p-6 max-w-3xl mx-auto shadow-lg">
          <p className="text-yellow-800 font-medium">
            🚧 This website is actively under development. New features and resources are being added regularly!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;