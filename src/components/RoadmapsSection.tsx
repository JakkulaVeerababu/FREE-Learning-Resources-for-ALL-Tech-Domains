import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, ArrowRight, Target, BookOpen, Code, Cpu, Database, Globe, Brain, Calculator, Wrench, Building, Zap, Smartphone, Monitor, Palette, Trophy, Star, Play, Download, FileText } from 'lucide-react';

const RoadmapsSection = () => {
  const [activeRoadmap, setActiveRoadmap] = useState('gate-cse');
  const [activeTab, setActiveTab] = useState('roadmap');

  const roadmaps = {
    'gate-cse': {
      title: 'GATE CSE',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      duration: '12 Months',
      difficulty: 'Advanced',
      phases: [
        {
          phase: 'Foundation Phase',
          duration: '3 Months',
          topics: ['Mathematics', 'Digital Logic', 'Programming Basics', 'Data Structures'],
          milestones: ['Complete basic math concepts', 'Master programming fundamentals', 'Understand digital logic gates']
        },
        {
          phase: 'Core Subjects',
          duration: '6 Months',
          topics: ['Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'Computer Architecture'],
          milestones: ['Solve 500+ DSA problems', 'Complete OS concepts', 'Master database design']
        },
        {
          phase: 'Advanced Topics',
          duration: '2 Months',
          topics: ['Compiler Design', 'Theory of Computation', 'Machine Learning Basics'],
          milestones: ['Understand parsing techniques', 'Master automata theory', 'Complete ML fundamentals']
        },
        {
          phase: 'Revision & Practice',
          duration: '1 Month',
          topics: ['Mock Tests', 'Previous Papers', 'Weak Area Focus'],
          milestones: ['Score 60+ in mocks', 'Complete 10 years papers', 'Achieve target score']
        }
      ],
      timetable: {
        daily: [
          { time: '6:00 AM - 8:00 AM', activity: 'Mathematics & Aptitude', type: 'study' },
          { time: '9:00 AM - 12:00 PM', activity: 'Core Subject Study', type: 'study' },
          { time: '1:00 PM - 2:00 PM', activity: 'Lunch Break', type: 'break' },
          { time: '2:00 PM - 4:00 PM', activity: 'Programming Practice', type: 'practice' },
          { time: '4:00 PM - 4:30 PM', activity: 'Tea Break', type: 'break' },
          { time: '4:30 PM - 6:30 PM', activity: 'Problem Solving', type: 'practice' },
          { time: '7:00 PM - 9:00 PM', activity: 'Revision & Notes', type: 'revision' },
          { time: '9:00 PM - 10:00 PM', activity: 'Mock Test (Alternate Days)', type: 'test' }
        ],
        weekly: [
          { day: 'Monday', focus: 'Mathematics & Digital Logic' },
          { day: 'Tuesday', focus: 'Data Structures & Algorithms' },
          { day: 'Wednesday', focus: 'Operating Systems' },
          { day: 'Thursday', focus: 'DBMS & SQL' },
          { day: 'Friday', focus: 'Computer Networks' },
          { day: 'Saturday', focus: 'Computer Architecture' },
          { day: 'Sunday', focus: 'Revision & Mock Tests' }
        ]
      }
    },
    'full-stack': {
      title: 'Full Stack Development',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      duration: '8 Months',
      difficulty: 'Intermediate',
      phases: [
        {
          phase: 'Frontend Fundamentals',
          duration: '2 Months',
          topics: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'],
          milestones: ['Build 5 static websites', 'Master CSS Grid & Flexbox', 'Complete JS fundamentals']
        },
        {
          phase: 'Frontend Frameworks',
          duration: '2 Months',
          topics: ['React.js', 'State Management', 'React Router', 'Component Libraries'],
          milestones: ['Build 3 React projects', 'Master hooks & context', 'Deploy applications']
        },
        {
          phase: 'Backend Development',
          duration: '2 Months',
          topics: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication'],
          milestones: ['Create 5 APIs', 'Implement JWT auth', 'Handle file uploads']
        },
        {
          phase: 'Database & Deployment',
          duration: '2 Months',
          topics: ['MongoDB', 'SQL Databases', 'Cloud Deployment', 'DevOps Basics'],
          milestones: ['Design 3 databases', 'Deploy full-stack apps', 'Set up CI/CD']
        }
      ],
      timetable: {
        daily: [
          { time: '7:00 AM - 9:00 AM', activity: 'Theory & Concepts', type: 'study' },
          { time: '10:00 AM - 12:00 PM', activity: 'Hands-on Coding', type: 'practice' },
          { time: '1:00 PM - 2:00 PM', activity: 'Lunch Break', type: 'break' },
          { time: '2:00 PM - 4:00 PM', activity: 'Project Development', type: 'project' },
          { time: '4:00 PM - 4:30 PM', activity: 'Break', type: 'break' },
          { time: '4:30 PM - 6:00 PM', activity: 'Problem Solving', type: 'practice' },
          { time: '7:00 PM - 8:30 PM', activity: 'Documentation & Learning', type: 'study' },
          { time: '9:00 PM - 10:00 PM', activity: 'Code Review & Planning', type: 'revision' }
        ],
        weekly: [
          { day: 'Monday', focus: 'HTML & CSS Advanced' },
          { day: 'Tuesday', focus: 'JavaScript & DOM' },
          { day: 'Wednesday', focus: 'React.js Development' },
          { day: 'Thursday', focus: 'Backend APIs' },
          { day: 'Friday', focus: 'Database Design' },
          { day: 'Saturday', focus: 'Full Stack Integration' },
          { day: 'Sunday', focus: 'Project Work & Deployment' }
        ]
      }
    },
    'ai-ml': {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      duration: '10 Months',
      difficulty: 'Advanced',
      phases: [
        {
          phase: 'Mathematical Foundation',
          duration: '2 Months',
          topics: ['Linear Algebra', 'Statistics', 'Calculus', 'Probability'],
          milestones: ['Master matrix operations', 'Understand distributions', 'Complete calculus basics']
        },
        {
          phase: 'Programming & Tools',
          duration: '2 Months',
          topics: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter'],
          milestones: ['Complete Python mastery', 'Data manipulation skills', 'Visualization expertise']
        },
        {
          phase: 'Machine Learning',
          duration: '3 Months',
          topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering'],
          milestones: ['Build 10 ML models', 'Master scikit-learn', 'Understand model selection']
        },
        {
          phase: 'Deep Learning & AI',
          duration: '3 Months',
          topics: ['Neural Networks', 'TensorFlow/PyTorch', 'Computer Vision', 'NLP'],
          milestones: ['Build neural networks', 'Complete CV projects', 'Implement NLP models']
        }
      ],
      timetable: {
        daily: [
          { time: '6:00 AM - 8:00 AM', activity: 'Mathematics Study', type: 'study' },
          { time: '9:00 AM - 11:00 AM', activity: 'Programming Practice', type: 'practice' },
          { time: '11:30 AM - 1:00 PM', activity: 'ML Theory & Concepts', type: 'study' },
          { time: '2:00 PM - 4:00 PM', activity: 'Hands-on Projects', type: 'project' },
          { time: '4:30 PM - 6:00 PM', activity: 'Data Analysis Practice', type: 'practice' },
          { time: '7:00 PM - 8:30 PM', activity: 'Research Papers', type: 'study' },
          { time: '9:00 PM - 10:00 PM', activity: 'Model Implementation', type: 'practice' }
        ],
        weekly: [
          { day: 'Monday', focus: 'Linear Algebra & Statistics' },
          { day: 'Tuesday', focus: 'Python & Data Libraries' },
          { day: 'Wednesday', focus: 'Supervised Learning' },
          { day: 'Thursday', focus: 'Unsupervised Learning' },
          { day: 'Friday', focus: 'Deep Learning' },
          { day: 'Saturday', focus: 'Computer Vision' },
          { day: 'Sunday', focus: 'NLP & Project Work' }
        ]
      }
    },
    'vlsi': {
      title: 'VLSI Design',
      icon: Cpu,
      color: 'from-green-500 to-teal-500',
      duration: '12 Months',
      difficulty: 'Expert',
      phases: [
        {
          phase: 'Digital Fundamentals',
          duration: '2 Months',
          topics: ['Digital Logic', 'Boolean Algebra', 'Number Systems', 'Logic Gates'],
          milestones: ['Master logic design', 'Understand timing concepts', 'Complete combinational circuits']
        },
        {
          phase: 'CMOS Technology',
          duration: '3 Months',
          topics: ['CMOS Basics', 'Transistor Theory', 'Layout Design', 'Stick Diagrams'],
          milestones: ['Design CMOS inverters', 'Create stick diagrams', 'Understand fabrication']
        },
        {
          phase: 'HDL Programming',
          duration: '3 Months',
          topics: ['Verilog', 'VHDL', 'Synthesis', 'Simulation'],
          milestones: ['Write complex HDL code', 'Master testbenches', 'Understand synthesis']
        },
        {
          phase: 'Advanced Design',
          duration: '4 Months',
          topics: ['ASIC Design Flow', 'Physical Design', 'DFT', 'Low Power Design'],
          milestones: ['Complete ASIC flow', 'Master P&R tools', 'Implement DFT techniques']
        }
      ],
      timetable: {
        daily: [
          { time: '7:00 AM - 9:00 AM', activity: 'Theory & Concepts', type: 'study' },
          { time: '10:00 AM - 12:00 PM', activity: 'HDL Coding', type: 'practice' },
          { time: '1:00 PM - 3:00 PM', activity: 'Tool Practice (Cadence/Synopsys)', type: 'practice' },
          { time: '4:00 PM - 6:00 PM', activity: 'Layout Design', type: 'project' },
          { time: '7:00 PM - 8:30 PM', activity: 'Circuit Analysis', type: 'study' },
          { time: '9:00 PM - 10:00 PM', activity: 'Design Review', type: 'revision' }
        ],
        weekly: [
          { day: 'Monday', focus: 'Digital Logic & CMOS' },
          { day: 'Tuesday', focus: 'Verilog Programming' },
          { day: 'Wednesday', focus: 'VHDL Programming' },
          { day: 'Thursday', focus: 'Synthesis & Simulation' },
          { day: 'Friday', focus: 'Physical Design' },
          { day: 'Saturday', focus: 'Layout & Verification' },
          { day: 'Sunday', focus: 'Project Integration' }
        ]
      }
    }
  };

  const getActivityTypeColor = (type: string) => {
    switch (type) {
      case 'study': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'practice': return 'bg-green-100 text-green-800 border-green-200';
      case 'project': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'break': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'revision': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'test': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const downloadRoadmap = (roadmapKey: string) => {
    const roadmap = roadmaps[roadmapKey];
    const content = `
${roadmap.title} Learning Roadmap
Duration: ${roadmap.duration}
Difficulty: ${roadmap.difficulty}

LEARNING PHASES:
${roadmap.phases.map((phase, index) => `
${index + 1}. ${phase.phase} (${phase.duration})
   Topics: ${phase.topics.join(', ')}
   Milestones: ${phase.milestones.join(', ')}
`).join('')}

DAILY SCHEDULE:
${roadmap.timetable.daily.map(slot => `${slot.time}: ${slot.activity}`).join('\n')}

WEEKLY FOCUS:
${roadmap.timetable.weekly.map(day => `${day.day}: ${day.focus}`).join('\n')}
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${roadmap.title.replace(/\s+/g, '_')}_Roadmap.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const currentRoadmap = roadmaps[activeRoadmap];

  return (
    <section id="roadmaps" className="py-20 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              🗺️ Professional Learning Roadmaps
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium">
            Structured learning paths with detailed timelines, milestones, and daily schedules to master any tech domain
          </p>
        </div>

        {/* Roadmap Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {Object.entries(roadmaps).map(([key, roadmap]) => (
            <button
              key={key}
              onClick={() => setActiveRoadmap(key)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                activeRoadmap === key
                  ? 'border-pink-500 bg-white shadow-lg'
                  : 'border-pink-200 bg-white/70 hover:border-pink-400'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${roadmap.color} flex items-center justify-center mx-auto mb-3`}>
                <roadmap.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 text-sm">{roadmap.title}</h3>
              <p className="text-xs text-gray-600 mt-1">{roadmap.duration}</p>
            </button>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'roadmap'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              📍 Roadmap
            </button>
            <button
              onClick={() => setActiveTab('timetable')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'timetable'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              ⏰ Timetable
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'roadmap' && (
            <div className="space-y-8">
              {/* Roadmap Header */}
              <div className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentRoadmap.color} flex items-center justify-center shadow-lg`}>
                      <currentRoadmap.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">{currentRoadmap.title}</h3>
                      <p className="text-gray-600">Complete Learning Path</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-pink-600" />
                          <span className="font-semibold text-gray-800">{currentRoadmap.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-5 w-5 text-rose-600" />
                          <span className="font-semibold text-gray-800">{currentRoadmap.difficulty}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => downloadRoadmap(activeRoadmap)}
                      className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Learning Phases */}
              <div className="space-y-6">
                {currentRoadmap.phases.map((phase, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentRoadmap.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-2xl font-bold text-gray-800">{phase.phase}</h4>
                          <div className="flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full">
                            <Calendar className="h-4 w-4 text-pink-600" />
                            <span className="text-pink-800 font-semibold">{phase.duration}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                              Topics to Cover
                            </h5>
                            <div className="space-y-2">
                              {phase.topics.map((topic, topicIndex) => (
                                <div key={topicIndex} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  <span className="text-gray-700">{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <Trophy className="h-5 w-5 text-green-600 mr-2" />
                              Key Milestones
                            </h5>
                            <div className="space-y-2">
                              {phase.milestones.map((milestone, milestoneIndex) => (
                                <div key={milestoneIndex} className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span className="text-gray-700 text-sm">{milestone}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {index < currentRoadmap.phases.length - 1 && (
                      <div className="flex justify-center mt-6">
                        <ArrowRight className="h-6 w-6 text-pink-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'timetable' && (
            <div className="space-y-8">
              {/* Daily Schedule */}
              <div className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Clock className="h-6 w-6 text-pink-600 mr-3" />
                    Daily Study Schedule
                  </h3>
                  <button
                    onClick={() => downloadRoadmap(activeRoadmap)}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg text-sm"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Export Schedule</span>
                  </button>
                </div>
                <div className="space-y-3">
                  {currentRoadmap.timetable.daily.map((slot, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-24 text-sm font-semibold text-gray-700">
                          {slot.time}
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-800 font-medium">{slot.activity}</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getActivityTypeColor(slot.type)}`}>
                        {slot.type.charAt(0).toUpperCase() + slot.type.slice(1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Focus */}
              <div className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 text-rose-600 mr-3" />
                  Weekly Focus Areas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentRoadmap.timetable.weekly.map((day, index) => (
                    <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${currentRoadmap.color} flex items-center justify-center text-white font-bold`}>
                          {day.day.charAt(0)}
                        </div>
                        <h4 className="font-bold text-gray-800">{day.day}</h4>
                      </div>
                      <p className="text-gray-700 text-sm">{day.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Study Tips */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Star className="h-6 w-6 text-yellow-600 mr-3" />
                  Pro Study Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Play className="h-5 w-5 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Consistency is Key</h4>
                        <p className="text-gray-700 text-sm">Follow the schedule daily, even if for shorter durations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Play className="h-5 w-5 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Active Learning</h4>
                        <p className="text-gray-700 text-sm">Practice coding/problems daily, don't just read theory</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Play className="h-5 w-5 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Track Progress</h4>
                        <p className="text-gray-700 text-sm">Maintain a learning journal and celebrate milestones</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Play className="h-5 w-5 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Stay Flexible</h4>
                        <p className="text-gray-700 text-sm">Adjust the schedule based on your learning pace</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RoadmapsSection;