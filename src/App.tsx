import React, { useState, useEffect } from 'react';
import { BookOpen, Download, Users, Star, Instagram, MessageCircle, Phone, ChevronRight, Sparkles, Zap, Trophy, Target, Clock, Gift } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollingBanner from './components/ScrollingBanner';
import ResourcesSection from './components/ResourcesSection';
import RoadmapsSection from './components/RoadmapsSection';
import FeedbackSection from './components/FeedbackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import AIChat from './components/AIChat';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-white via-pink-50 to-rose-100 relative overflow-x-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <FloatingElements />
      
      <Header />
      
      <ScrollingBanner />
      
      <main className="relative z-10">
        <Hero />
        <ResourcesSection />
        <RoadmapsSection />
        <FeedbackSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* AI Chat Assistant */}
      <AIChat />
    </div>
  );
}

export default App;