import React from 'react';
import { BookOpen, Code, Cpu, Database, Zap, Brain } from 'lucide-react';

const FloatingElements = () => {
  const icons = [BookOpen, Code, Cpu, Database, Zap, Brain];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className={`absolute text-pink-200/20 animate-float-${index + 1}`}
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index * 10)}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${8 + index}s`
          }}
        >
          <Icon className="h-16 w-16 md:h-24 md:w-24" />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;