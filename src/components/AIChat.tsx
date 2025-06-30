import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Sparkles, Zap, Brain, Code, BookOpen, HelpCircle, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  typing?: boolean;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI Learning Assistant 🤖 I can help you with GATE preparation, programming concepts, study plans, and any tech-related questions. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const quickQuestions = [
    { icon: Code, text: "Help with DSA", query: "I need help with Data Structures and Algorithms. Can you guide me?" },
    { icon: BookOpen, text: "GATE Preparation", query: "How should I prepare for GATE CSE? What's the best strategy?" },
    { icon: Brain, text: "AI/ML Learning", query: "I want to learn Machine Learning. Where should I start?" },
    { icon: Zap, text: "Study Schedule", query: "Can you help me create a study schedule for programming?" }
  ];

  const getAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const lowerMessage = userMessage.toLowerCase();
    
    // GATE related responses
    if (lowerMessage.includes('gate')) {
      if (lowerMessage.includes('cse') || lowerMessage.includes('computer science')) {
        return "For GATE CSE preparation, I recommend this structured approach:\n\n📚 **Phase 1 (3 months)**: Mathematics, Digital Logic, Programming\n🔧 **Phase 2 (6 months)**: Core subjects - OS, DBMS, Networks, Algorithms\n🎯 **Phase 3 (2 months)**: Advanced topics - Compiler Design, TOC\n📝 **Phase 4 (1 month)**: Mock tests and revision\n\nStart with our free GATE CSE resources in the Resources section. Would you like specific guidance on any subject?";
      }
      if (lowerMessage.includes('ece') || lowerMessage.includes('electronics')) {
        return "For GATE ECE preparation:\n\n⚡ **Core subjects**: Analog Circuits, Digital Circuits, Signals & Systems\n📡 **Communication**: Analog & Digital Communication\n🔌 **Power & Control**: Control Systems, Power Electronics\n📊 **Mathematics**: Engineering Mathematics is crucial\n\nCheck our GATE ECE resources for comprehensive materials. Need help with any specific topic?";
      }
      return "GATE preparation requires dedication and structured study. Here's a general approach:\n\n✅ Understand the syllabus thoroughly\n📖 Study from standard textbooks\n💪 Practice previous year questions\n⏰ Take regular mock tests\n📝 Make concise notes for revision\n\nWhich GATE branch are you preparing for? I can provide more specific guidance!";
    }

    // DSA related responses
    if (lowerMessage.includes('dsa') || lowerMessage.includes('data structure') || lowerMessage.includes('algorithm')) {
      return "Great choice! DSA is fundamental for programming interviews and competitive coding. Here's your roadmap:\n\n🏗️ **Basics**: Arrays, Strings, Linked Lists\n📚 **Intermediate**: Stacks, Queues, Trees, Graphs\n🚀 **Advanced**: Dynamic Programming, Greedy Algorithms\n💡 **Practice**: LeetCode, HackerRank, CodeChef\n\n**Study Plan**: 2-3 hours daily, solve 2-3 problems\n**Timeline**: 3-4 months for solid foundation\n\nStart with our DSA resources! Which topic would you like to begin with?";
    }

    // AI/ML related responses
    if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
      return "Exciting field! Here's your AI/ML learning path:\n\n🔢 **Mathematics Foundation**:\n- Linear Algebra, Statistics, Calculus\n\n🐍 **Programming Skills**:\n- Python, NumPy, Pandas, Matplotlib\n\n🤖 **Machine Learning**:\n- Supervised/Unsupervised Learning\n- Scikit-learn, Model Evaluation\n\n🧠 **Deep Learning**:\n- Neural Networks, TensorFlow/PyTorch\n\n📊 **Projects**: Build real-world applications\n\nTimeline: 6-8 months with consistent practice. Check our AI resources to get started!";
    }

    // Programming languages
    if (lowerMessage.includes('python')) {
      return "Python is perfect for beginners! Here's your learning path:\n\n🐍 **Basics**: Syntax, Variables, Data Types\n🔄 **Control Flow**: Loops, Conditions, Functions\n📦 **Data Structures**: Lists, Dictionaries, Sets\n🛠️ **Libraries**: NumPy, Pandas for data science\n🌐 **Web**: Django/Flask for web development\n\n**Practice**: Build small projects daily\n**Resources**: Our Python section has everything you need!\n\nWhat would you like to build with Python?";
    }

    if (lowerMessage.includes('java')) {
      return "Java is excellent for enterprise development! Learning path:\n\n☕ **Fundamentals**: OOP concepts, Syntax\n🏗️ **Core Java**: Collections, Exception Handling\n🌐 **Advanced**: Multithreading, JDBC\n🚀 **Frameworks**: Spring, Hibernate\n📱 **Android**: Mobile app development\n\n**Practice**: Build console applications first, then GUI apps\n**Timeline**: 4-5 months for solid foundation\n\nCheck our Java resources for comprehensive materials!";
    }

    // Study schedule and planning
    if (lowerMessage.includes('schedule') || lowerMessage.includes('plan') || lowerMessage.includes('routine')) {
      return "Here's a balanced study schedule template:\n\n🌅 **Morning (2 hours)**: Core subjects/theory\n🌞 **Afternoon (2 hours)**: Problem solving/coding\n🌆 **Evening (1 hour)**: Revision/notes\n\n📅 **Weekly Plan**:\n- Mon-Fri: Regular study\n- Saturday: Practice tests\n- Sunday: Revision + planning\n\n⚡ **Tips**:\n- Take 15-min breaks every hour\n- Stay consistent, not perfect\n- Track your progress daily\n\nWhat's your target exam or goal? I can customize this further!";
    }

    // Web development
    if (lowerMessage.includes('web development') || lowerMessage.includes('frontend') || lowerMessage.includes('backend')) {
      return "Web development roadmap:\n\n🎨 **Frontend Path**:\n- HTML5, CSS3, JavaScript\n- React.js/Vue.js/Angular\n- Responsive Design, Bootstrap/Tailwind\n\n⚙️ **Backend Path**:\n- Node.js/Python/Java\n- Databases (SQL/NoSQL)\n- APIs, Authentication\n\n🚀 **Full Stack**:\n- Combine both paths\n- Deploy on cloud platforms\n- Build complete projects\n\n**Timeline**: 6-8 months for full stack\nCheck our Web Development resources for detailed materials!";
    }

    // Default responses for general queries
    const defaultResponses = [
      "That's an interesting question! Based on our extensive resources, I'd recommend checking out the specific section related to your query. Could you be more specific about what you'd like to learn?",
      "I'm here to help with your tech learning journey! Whether it's GATE preparation, programming, or any technical concept, feel free to ask. What specific topic interests you?",
      "Great question! Our platform has comprehensive resources for all tech domains. Could you tell me more about your current level and what you're trying to achieve?",
      "I'd love to help you with that! For the best guidance, could you specify which area you're focusing on - GATE prep, programming languages, web development, or something else?",
      "That's a topic I can definitely help with! Based on your question, I'd suggest exploring our curated resources. What's your specific goal or challenge?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputText.trim();
    if (!textToSend) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const aiResponse = await getAIResponse(textToSend);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble processing your request right now. Please try again or contact our support team for assistance.",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: "Chat cleared! I'm here to help you with any tech learning questions. What would you like to know?",
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* AI Chat Toggle Button - ALWAYS VISIBLE */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
            style={{ 
              boxShadow: '0 20px 40px rgba(168, 85, 247, 0.6), 0 0 0 4px rgba(168, 85, 247, 0.2)',
              animation: 'pulse 2s infinite, bounce 3s infinite'
            }}
          >
            <div className="relative flex items-center justify-center">
              <Bot className="h-8 w-8" />
              
              {/* Pulsing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-ping opacity-75"></div>
              
              {/* Status Indicator */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
              
              {/* Sparkles */}
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-spin" />
              <Sparkles className="absolute -bottom-1 -left-1 h-3 w-3 text-yellow-300 animate-bounce" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
              🤖 Ask AI Assistant
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
            
            {/* Floating Text */}
            <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
              Need Help? 💬
            </div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <div className={`bg-white border-2 border-purple-300 rounded-2xl shadow-2xl transition-all duration-300 ${
            isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
          }`} style={{ boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)' }}>
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                  <Bot className="h-6 w-6" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Learning Assistant</h3>
                  <p className="text-sm opacity-90">Always here to help! 🚀</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  {isMinimized ? <Maximize2 className="h-5 w-5" /> : <Minimize2 className="h-5 w-5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Quick Questions */}
                {messages.length <= 1 && (
                  <div className="p-4 border-b border-purple-100">
                    <p className="text-sm text-gray-600 mb-3 font-semibold">Quick questions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(question.query)}
                          className="flex items-center space-x-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 text-left border border-purple-200"
                        >
                          <question.icon className="h-4 w-4 text-purple-600" />
                          <span className="text-xs text-gray-700 font-medium">{question.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 h-96">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' 
                            ? 'bg-gradient-to-r from-pink-500 to-rose-500' 
                            : 'bg-gradient-to-r from-purple-500 to-pink-500'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <div className={`p-3 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                            : 'bg-gray-100 text-gray-800 border border-gray-200'
                        }`}>
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-pink-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-2xl border border-gray-200">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-purple-100">
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about tech learning..."
                      className="flex-1 px-4 py-3 border-2 border-purple-200 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm"
                      disabled={isTyping}
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputText.trim() || isTyping}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:scale-100"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {messages.length > 2 && (
                    <div className="flex justify-center mt-3">
                      <button
                        onClick={clearChat}
                        className="text-xs text-gray-500 hover:text-purple-600 transition-colors duration-200 font-medium"
                      >
                        Clear chat
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;