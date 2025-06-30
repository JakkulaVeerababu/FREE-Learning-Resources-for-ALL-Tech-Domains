import React from 'react';

const ScrollingBanner = () => {
  const resources = [
    "🎓 GATE CSE", "⚡ GATE ECE", "🔧 GATE MECH", "🏗️ GATE CIVIL", "🤖 GATE AI", "📊 GATE DS",
    "💻 Full Stack Development", "📱 Android Development", "🍎 iOS Development", "🧮 DSA", 
    "💾 Operating Systems", "🗄️ DBMS", "🌐 Computer Networks", "⚡ VLSI Design", "🔌 Embedded Systems", 
    "🎛️ FPGA", "🧠 Machine Learning", "🤖 Artificial Intelligence", "📈 Data Science", "🐍 Python", 
    "☕ Java", "⚛️ React JS", "🟢 Node JS", "🅰️ Angular", "🎨 HTML/CSS", "📜 JavaScript", "⚙️ C/C++", 
    "🗃️ SQL", "🍃 MongoDB", "🚀 Express JS", "🎮 Computer Graphics", "🏗️ Computer Architecture",
    "💼 Interview Preparation", "🚀 Coding Projects", "🌍 Web Development", "📲 Mobile Development"
  ];

  return (
    <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 py-3 overflow-hidden relative shadow-lg border-y-2 border-pink-300">
      {/* Main scrolling content */}
      <div className="flex animate-scroll-left whitespace-nowrap">
        {[...resources, ...resources, ...resources].map((resource, index) => (
          <span 
            key={index}
            className="inline-flex items-center px-6 text-white font-bold text-base tracking-wide"
            style={{ minWidth: 'max-content' }}
          >
            {resource}
          </span>
        ))}
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-pink-500 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-purple-500 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default ScrollingBanner;