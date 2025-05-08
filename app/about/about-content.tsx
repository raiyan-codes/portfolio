"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Code, 
  GraduationCap, 
  Award, 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  Linkedin,
  Globe,
  Terminal,
  Database,
  Server,
  Cpu,
  Layers,
  GitBranch,
  Zap,
  Brain,
  Star,
  Command,
  ChevronLeft,
  ChevronRight,
  Shield
} from "lucide-react";
import TypingText from "@/app/components/typing-text";
import PageLoader from "@/app/components/page-loader";

// Define work experience data
const experiences = [
  {
    title: "Full Stack Software Engineer",
    company: "Prexi",
    date: "November 2024 - present",
    description: "Developed an iOS app connecting service professionals to clients using React Native. Built secure APIs with Node.js and Express. Released functional beta with authentication, location-based listings, and booking flows.",
    tech: ["React Native", "Node.js", "Express", "iOS"],
  },
  {
    title: "Software Engineer Intern",
    company: "Catalyzing Innovation",
    date: "August 2024 - November 2024",
    description: "Coordinated frontend, backend, and social media teams to develop an AI consulting platform. Developed Python scripts to automate data parsing for AI model training, improving backend efficiency by 30%.",
    tech: ["Python", "AI", "Frontend Frameworks"],
  },
  {
    title: "Program Manager",
    company: "Ripplematch",
    date: "December 2022 - May 2023",
    description: "Optimized recruitment processes by analyzing data and implementing effective strategies, leading to a 25% increase in interview placement rates. Led the execution of automated email marketing scripts.",
    tech: ["Data Analysis", "HTML/CSS", "Email Automation"],
  },
];

// Define projects data
const projects = [
  {
    title: "Legal Risk Assessment AI Agent",
    subtitle: "Winner, AI Hackathon (Microsoft, Qualcomm, LM Studio, ONNX)",
    description: "Developed a localized AI agent using Python, Flask, and LM Studio to analyze legal documents for risk classification, winning first place for its innovative approach to AI localization. Leveraged Microsoft's ONNX Runtime and LM Studio to optimize on-device processing.",
    tech: ["Python", "Flask", "LM Studio", "ONNX Runtime"],
  },
  {
    title: "Automated News Headline Generation",
    subtitle: "Natural Language Processing Project",
    description: "Created an end-to-end pipeline for processing news articles and generating headlines using spaCy and NLP techniques. Led the development of headline generation logic and Named Entity Recognition functionality in a team of three. Implemented algorithms to extract key information from articles and generate relevant headlines, with evaluation using TF-IDF and cosine similarity metrics.",
    tech: ["Python", "spaCy", "NLP", "TF-IDF", "scikit-learn", "pandas"],
    contribution: "Development of headline generation logic and NER functionality"
  },
  {
    title: "While We Were Dreaming",
    subtitle: "Web Application",
    description: "Created an interactive map-based platform for NYU students to share anonymous memories, fostering connection and privacy, using React, Leaflet API for maps, MongoDB for data storage, and deployed on DigitalOcean.",
    tech: ["React", "Leaflet API", "MongoDB", "DigitalOcean"],
  },
];

// Add this before the component definition
const bounceAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror" as const
  }
};

// Add this before the component definition
const tiltAnimation = {
  rotateX: [-5, 5],
  rotateY: [-5, 5],
  transition: {
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror" as const
  }
};

// Add this function before component
const TaekwondoSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/tkd/group.jpg", alt: "Taekwondo Group Photo" },
    { src: "/tkd/trophy.jpg", alt: "Taekwondo Trophy" },
    { src: "/tkd/kicking.jpg", alt: "Taekwondo Kicking" },
    { src: "/tkd/sitting.jpg", alt: "Taekwondo Sitting" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Auto-advance slides every 4 seconds
    const slideTimer = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto h-[220px] sm:h-[280px] relative rounded-xl overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full relative flex items-center justify-center bg-zinc-900"
        >
          <img
            src={slides[currentSlide].src}
            alt=""
            className="max-h-full max-w-full h-auto w-auto object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={prevSlide}
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={nextSlide}
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

// Add this before the component definition
const CodeTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  
  // Code snippets with syntax highlighting
  const codeLines = [
    { text: '<span class="text-blue-400">const</span> <span class="text-yellow-400">developer</span> <span class="text-blue-400">=</span> <span class="text-emerald-400">{</span>', delay: 80 },
    { text: '  <span class="text-purple-400">name</span><span class="text-emerald-400">:</span> <span class="text-orange-400">"Golam Raiyan"</span><span class="text-emerald-400">,</span>', delay: 60 },
    { text: '  <span class="text-purple-400">title</span><span class="text-emerald-400">:</span> <span class="text-orange-400">"Software Engineer"</span><span class="text-emerald-400">,</span>', delay: 60 },
    { text: '  <span class="text-purple-400">skills</span><span class="text-emerald-400">:</span> <span class="text-blue-400">[</span>', delay: 80 },
    { text: '    <span class="text-orange-400">"JavaScript"</span><span class="text-emerald-400">,</span> <span class="text-orange-400">"React"</span><span class="text-emerald-400">,</span> <span class="text-orange-400">"Node.js"</span><span class="text-emerald-400">,</span>', delay: 40 },
    { text: '    <span class="text-orange-400">"Python"</span><span class="text-emerald-400">,</span> <span class="text-orange-400">"Java"</span><span class="text-emerald-400">,</span> <span class="text-orange-400">"C"</span>', delay: 40 },
    { text: '  <span class="text-blue-400">]</span><span class="text-emerald-400">,</span>', delay: 100 },
    { text: '  <span class="text-purple-400">education</span><span class="text-emerald-400">:</span> <span class="text-orange-400">"New York University"</span><span class="text-emerald-400">,</span>', delay: 60 },
    { text: '  <span class="text-purple-400">location</span><span class="text-emerald-400">:</span> <span class="text-orange-400">"New York City"</span><span class="text-emerald-400">,</span>', delay: 60 },
    { text: '  <span class="text-purple-400">interests</span><span class="text-emerald-400">:</span> <span class="text-blue-400">[</span><span class="text-orange-400">"Taekwondo"</span><span class="text-emerald-400">,</span> <span class="text-orange-400">"Coding"</span><span class="text-emerald-400">,</span> <span class="text-orange-400">"AI"</span><span class="text-blue-400">]</span>', delay: 40 },
    { text: '<span class="text-emerald-400">}</span><span class="text-zinc-400">;</span>', delay: 150 },
    { text: '', delay: 300 },
    { text: '<span class="text-blue-400">function</span> <span class="text-yellow-400">displaySkills</span><span class="text-zinc-400">()</span> <span class="text-emerald-400">{</span>', delay: 80 },
    { text: '  <span class="text-yellow-400">developer</span><span class="text-zinc-400">.</span><span class="text-purple-400">skills</span><span class="text-zinc-400">.</span><span class="text-yellow-400">forEach</span><span class="text-zinc-400">(</span><span class="text-blue-400">skill</span> <span class="text-zinc-400">=></span> <span class="text-emerald-400">{</span>', delay: 60 },
    { text: '    <span class="text-yellow-400">console</span><span class="text-zinc-400">.</span><span class="text-yellow-400">log</span><span class="text-zinc-400">(</span><span class="text-orange-400">`Mastered: ${</span><span class="text-yellow-400">skill</span><span class="text-orange-400">}`</span><span class="text-zinc-400">)</span><span class="text-emerald-400">;</span>', delay: 50 },
    { text: '  <span class="text-emerald-400">}</span><span class="text-zinc-400">)</span><span class="text-emerald-400">;</span>', delay: 100 },
    { text: '<span class="text-emerald-400">}</span>', delay: 150 },
    { text: '', delay: 300 },
    { text: '<span class="text-green-400">// Let\'s run it!</span>', delay: 80 },
    { text: '<span class="text-yellow-400">displaySkills</span><span class="text-zinc-400">()</span><span class="text-emerald-400">;</span>', delay: 150 },
  ];
  
  // Console output after "running" the code
  const consoleOutput = [
    { text: '<span class="text-zinc-500">Mastered: JavaScript</span>', delay: 300 },
    { text: '<span class="text-zinc-500">Mastered: React</span>', delay: 300 },
    { text: '<span class="text-zinc-500">Mastered: Node.js</span>', delay: 300 },
    { text: '<span class="text-zinc-500">Mastered: Python</span>', delay: 300 },
    { text: '<span class="text-zinc-500">Mastered: Java</span>', delay: 300 },
    { text: '<span class="text-zinc-500">Mastered: C</span>', delay: 300 },
  ];
  
  // Typing effect
  useEffect(() => {
    if (!isTyping) return;
    
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, codeLines[currentLine].delay * 2);
      
      return () => clearTimeout(timer);
    } else if (currentLine === codeLines.length && !isComplete) {
      // When code typing is complete, wait a bit then show console output
      const timer = setTimeout(() => {
        setIsComplete(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentLine, isTyping, isComplete]);
  
  // Interactive buttons
  const handleRestart = () => {
    setCurrentLine(0);
    setIsComplete(false);
  };
  
  const handleToggleTyping = () => {
    setIsTyping(prev => !prev);
  };
  
  return (
    <div className="mt-2 overflow-hidden">
      <div className="bg-zinc-900 rounded-lg border border-zinc-800 font-mono text-sm">
        {/* Terminal header */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
          <div className="text-zinc-400 text-xs">terminal@raiyan-portfolio ~ frontend-skills</div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        {/* Terminal content */}
        <div className="p-4 h-[300px] overflow-auto">
          {/* Code typing area */}
          <div className="mb-4">
            {codeLines.slice(0, currentLine).map((line, index) => (
              <div key={index} className="whitespace-pre">
                <span dangerouslySetInnerHTML={{ __html: line.text }} />
                {index === currentLine - 1 && !isComplete && (
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-emerald-400 ml-1"
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* Console output */}
          {isComplete && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 border-t border-zinc-800 pt-4"
            >
              {consoleOutput.map((line, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="whitespace-pre"
                >
                  <span dangerouslySetInnerHTML={{ __html: line.text }} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
        
        {/* Terminal footer with controls */}
        <div className="px-4 py-2 bg-zinc-800 border-t border-zinc-700 flex justify-between items-center">
          <div className="text-zinc-400 text-xs flex items-center">
            <span className="mr-2">$</span>
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >_</motion.span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={handleRestart}
              className="px-2 py-1 bg-zinc-700 hover:bg-zinc-600 text-xs text-zinc-300 rounded transition-colors"
            >
              Restart
            </button>
            <button 
              onClick={handleToggleTyping}
              className="px-2 py-1 bg-zinc-700 hover:bg-zinc-600 text-xs text-zinc-300 rounded transition-colors"
            >
              {isTyping ? "Pause" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add hacker-themed animations
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const fontSize = 10;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$%&^*(!@#)';
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 33);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
    />
  );
};

// Add glitch text effect
const GlitchText = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-0 text-red-500 z-0 opacity-70"
        animate={{ 
          x: [0, -2, 0, 2, 0],
          opacity: [0.7, 0.3, 0.7]
        }}
        transition={{ 
          duration: 0.2, 
          repeat: Infinity, 
          repeatType: "mirror",
          repeatDelay: 5
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-blue-500 z-0 opacity-70"
        animate={{ 
          x: [0, 2, 0, -2, 0],
          opacity: [0.7, 0.3, 0.7]
        }}
        transition={{ 
          duration: 0.3, 
          repeat: Infinity, 
          repeatType: "mirror",
          repeatDelay: 7
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

// Binary background animation component
const BinaryBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <div className="absolute top-0 left-0 w-full h-full flex flex-wrap">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="text-[8px] text-emerald-500 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 3 + 1,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Hacker typing effect component
const HackerTyping = ({ text, speed = 50 }: { text: string, speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    if (currentIndex >= text.length) return;
    
    const glitchChance = Math.random();
    if (glitchChance > 0.95) {
      setIsGlitching(true);
      const glitchDuration = Math.random() * 300 + 100;
      
      setTimeout(() => {
        setIsGlitching(false);
        setTimeout(() => {
          setDisplayText(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
      }, glitchDuration);
    } else {
      const timer = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);
  
  return (
    <span className="font-mono">
      {isGlitching ? (
        <span className="text-red-400">{displayText}{'#$%@!'[Math.floor(Math.random() * 6)]}</span>
      ) : (
        <span>{displayText}</span>
      )}
      {currentIndex < text.length && (
        <motion.span
          className="inline-block w-2 h-4 bg-current align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      )}
    </span>
  );
};

// Scanner animation component
const ScannerEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute left-0 w-full h-[2px] bg-emerald-500/30 blur-[2px]"
        animate={{ top: ['-10%', '110%'] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1
        }}
      />
    </div>
  );
};

// Add certifications data
const certifications = [
  {
    title: "Google Professional Cybersecurity Certificate",
    issuer: "Google",
    date: "2023",
    description: "Comprehensive training in cybersecurity fundamentals, including network security, encryption, security operations, and incident response.",
    skills: ["Security Operations", "Network Security", "Incident Response", "Encryption"]
  }
];

export default function AboutContent() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "sports", label: "Sports" }
  ];

  useEffect(() => {
    const tiltContainer = document.getElementById('tiltContainer');
    const bioCard = document.querySelector('[style*="preserve-3d"]') as HTMLElement;
    
    if (tiltContainer && bioCard) {
      tiltContainer.addEventListener('mousemove', (e) => {
        const rect = tiltContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate tilt values
        const tiltX = ((y / rect.height) * 2 - 1) * -10;
        const tiltY = ((x / rect.width) * 2 - 1) * 10;
        
        // Apply transform
        bioCard.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      });
      
      tiltContainer.addEventListener('mouseleave', () => {
        bioCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
    }
  }, [activeTab]);

  return (
    <>
      <PageLoader />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-5xl lg:px-8 md:pt-32 lg:pt-36">
        <div className="mx-auto bg-zinc-900/60 rounded-xl border border-zinc-800/50 backdrop-blur-sm overflow-hidden shadow-xl">
          {/* Header Banner Area */}
          <div className="relative w-full h-32 sm:h-48 md:h-56 mb-12 overflow-hidden rounded-t-xl">
            {/* NYC Skyline Image */}
            <Image 
              src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="NYC Skyline" 
              width={1200} 
              height={300}
              className="w-full h-full object-cover object-center brightness-50 grayscale"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
            <div className="absolute bottom-0 right-0 m-4 flex items-center text-xs text-white/80 space-x-1">
              <MapPin size={12} />
              <span>New York City</span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="px-4 md:px-8 -mt-20 relative z-10 pb-6">
            {/* Profile Image */}
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-zinc-800 shadow-xl mb-4 mx-auto md:mx-0 hover:shadow-glow transition-all duration-300 relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src="/headshot.jpg" 
                  alt="Golam Raiyan" 
                  width={150} 
                  height={150} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  background: [
                    "linear-gradient(to top right, rgba(16, 185, 129, 0.3), transparent)",
                    "linear-gradient(to top right, rgba(59, 130, 246, 0.3), transparent)",
                    "linear-gradient(to top right, rgba(16, 185, 129, 0.3), transparent)"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="absolute -bottom-2 -right-2 bg-zinc-800 rounded-full p-1 border-2 border-zinc-700 shadow-lg">
                <Zap size={16} className="text-emerald-400" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left space-y-2 pb-6">
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <h1 className="text-xl md:text-3xl font-bold text-zinc-100">
                  <TypingText text="Golam Raiyan" className="font-mono" speed={80} />
                </h1>
              </motion.div>
              <p className="text-emerald-400 font-mono text-sm md:text-base flex items-center justify-center md:justify-start gap-1">
                <Command size={14} />
                @raiyan-codes
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }} 
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block w-1 h-4 bg-emerald-400 ml-1"
                />
              </p>
              <p className="text-zinc-400 max-w-xl text-sm md:text-base">
                <TypingText 
                  text="Software Engineer & Developer | NYU Computer Science" 
                  delay={1000}
                  speed={40}
                />
              </p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:gr2257@nyu.edu" 
                  className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full hover:bg-zinc-700 transition-colors flex items-center gap-1"
                >
                  <Mail size={12} />
                  gr2257@nyu.edu
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:3477485284" 
                  className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full hover:bg-zinc-700 transition-colors flex items-center gap-1"
                >
                  <Phone size={12} />
                  (347)-748-5284
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/raiyan-codes" 
                  target="_blank" 
                  className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full hover:bg-zinc-700 transition-colors flex items-center gap-1"
                >
                  <Github size={12} />
                  GitHub
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://raiyan-new.vercel.app/" 
                  target="_blank" 
                  className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full hover:bg-zinc-700 transition-colors flex items-center gap-1"
                >
                  <Globe size={12} />
                  Portfolio
                </motion.a>
              </div>
            </div>
            
            {/* Tech Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-1 mt-2">
              {[
                { icon: <Terminal size={12} />, name: "Code" },
                { icon: <Database size={12} />, name: "Data" },
                { icon: <Cpu size={12} />, name: "Systems" },
                { icon: <GitBranch size={12} />, name: "DevOps" },
                { icon: <Brain size={12} />, name: "AI/ML" }
              ].map((badge, index) => (
                <motion.div
                  key={badge.name}
                  className="bg-zinc-900/80 border border-zinc-800 rounded-full px-2 py-0.5 text-[10px] text-zinc-400 flex items-center gap-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 + index * 0.1 }}
                >
                  {badge.icon}
                  {badge.name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content Tabs */}
          <div className="px-4 md:px-8 pb-8">
            {/* Tab Navigation */}
            <div className="grid grid-cols-6 gap-2 mb-8 rounded-md bg-zinc-800/40 p-1">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-4 text-sm font-medium rounded-sm transition-all relative overflow-hidden ${
                    activeTab === tab.id 
                      ? "bg-white text-zinc-900 shadow-sm" 
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <span className="font-mono relative z-10">{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <motion.div
                    className="bg-zinc-800/20 rounded-lg p-5 border border-zinc-700/30 relative"
                    whileHover={{ scale: 1.02 }}
                    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                    animate={{ rotateX: 0, rotateY: 0 }}
                    initial={{ rotateX: 0, rotateY: 0 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <BinaryBackground />
                    <div className="relative" id="tiltContainer">
                      <div className="flex items-start gap-3">
                        <motion.div
                          animate={bounceAnimation}
                          className="text-emerald-400 mt-1"
                        >
                          <Terminal size={20} />
                        </motion.div>
                        <div>
                          <p className="text-zinc-300">
                            Hello! I'm a Computer Science student at New York University with a passion for software engineering
                            and web development. My interest in programming began when I was in high school, and since then
                            I've been continuously expanding my skills in various programming languages and technologies.
                          </p>
                          <p className="text-zinc-400 mt-3">
                            I'm particularly interested in the intersection of technology and business,
                            and I'm always looking for opportunities to apply my technical skills to solve real-world
                            problems and create impactful applications. In my free time, I enjoy practicing Taekwondo,
                            exploring new programming frameworks, and contributing to open-source projects.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex gap-3">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-7 h-7 rounded-full bg-zinc-700/50 flex items-center justify-center text-zinc-300 hover:text-emerald-400 cursor-pointer transition-colors"
                          >
                            <Star size={14} />
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-7 h-7 rounded-full bg-zinc-700/50 flex items-center justify-center text-zinc-300 hover:text-emerald-400 cursor-pointer transition-colors"
                          >
                            <GitBranch size={14} />
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-7 h-7 rounded-full bg-zinc-700/50 flex items-center justify-center text-zinc-300 hover:text-emerald-400 cursor-pointer transition-colors"
                          >
                            <Layers size={14} />
                          </motion.div>
                        </div>
                        
                        <div className="text-xs text-zinc-500 font-mono">Last updated: May 2024</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="relative border-l-2 border-zinc-700 pl-8 ml-4">
                    {experiences.map((experience, index) => (
                      <motion.div 
                        key={index}
                        className="mb-10 relative"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-2 border-zinc-700 bg-zinc-800 flex items-center justify-center">
                          <motion.div
                            animate={{ 
                              rotate: [0, 10, 0, -10, 0],
                            }}
                            transition={{ 
                              duration: 5, 
                              repeat: Infinity,
                              repeatType: "mirror"
                            }}
                          >
                            <Briefcase className="h-3 w-3 text-emerald-400" />
                          </motion.div>
                        </div>
                        <div className="bg-zinc-800/30 rounded-lg p-5 border border-zinc-700/30 hover:border-zinc-600/50 transition-all shadow-md hover:shadow-lg relative overflow-hidden">
                          <ScannerEffect />
                          <BinaryBackground />
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-zinc-100 font-medium">{experience.title}</h3>
                              <p className="text-emerald-400 text-sm">{experience.company}</p>
                            </div>
                            <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full text-xs">
                              {experience.date}
                            </span>
                          </div>
                          <div className="h-px bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent my-3"></div>
                          <p className="text-zinc-300 mt-3">{experience.description}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {experience.tech.map((tech, techIndex) => (
                              <motion.span 
                                key={techIndex} 
                                className="text-xs bg-zinc-800/70 text-zinc-300 px-2 py-1 rounded"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(39, 39, 42, 0.8)" }}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + techIndex * 0.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Add Matrix Rain effect to the experience section */}
                    <div className="relative overflow-hidden">
                      <MatrixRain />
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 mb-6"
                      >
                        <div className="flex items-center">
                          <GlitchText text="CERTIFICATIONS" />
                          <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent flex-grow ml-4"></div>
                        </div>
                      </motion.div>
                      
                      {certifications.map((cert, index) => (
                        <motion.div 
                          key={index}
                          className="mb-10 relative"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-2 border-zinc-700 bg-zinc-800 flex items-center justify-center">
                            <motion.div
                              animate={{ 
                                rotate: [0, 360],
                                borderRadius: ["20%", "50%", "20%"]
                              }}
                              transition={{ 
                                duration: 8, 
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            >
                              <Shield className="h-3 w-3 text-emerald-400" />
                            </motion.div>
                          </div>
                          <div className="bg-zinc-800/30 rounded-lg p-5 border border-zinc-700/30 hover:border-zinc-600/50 transition-all shadow-md hover:shadow-lg relative overflow-hidden">
                            <ScannerEffect />
                            <BinaryBackground />
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-zinc-100 font-medium flex items-center gap-2">
                                  {cert.title}
                                  <motion.span
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="inline-block w-2 h-2 bg-emerald-500 rounded-full"
                                  />
                                </h3>
                                <p className="text-emerald-400 text-sm">{cert.issuer}</p>
                              </div>
                              <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full text-xs">
                                {cert.date}
                              </span>
                            </div>
                            <div className="h-px bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent my-3"></div>
                            <p className="text-zinc-300 mt-3">
                              <HackerTyping text={cert.description} speed={20} />
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {cert.skills.map((skill, skillIndex) => (
                                <motion.span 
                                  key={skillIndex} 
                                  className="text-xs bg-zinc-800/70 text-zinc-300 px-2 py-1 rounded"
                                  whileHover={{ scale: 1.05, backgroundColor: "rgba(39, 39, 42, 0.8)" }}
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + skillIndex * 0.05 }}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="relative border-l-2 border-zinc-700 pl-8 ml-4">
                    <motion.div
                      className="mb-10 relative"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-zinc-800/30 rounded-lg p-5 border border-zinc-700/30 relative overflow-hidden">
                        <ScannerEffect />
                        <BinaryBackground />
                        <div className="flex justify-between items-start">
                          <div>
                            <motion.h3 
                              className="text-zinc-100 font-medium"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              New York University, College of Arts and Science
                            </motion.h3>
                            <motion.p 
                              className="text-emerald-400 text-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              Bachelor's in Computer Science
                            </motion.p>
                          </div>
                          <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full text-xs">
                            2021 - 2025
                          </span>
                        </div>
                        <motion.div 
                          className="h-px bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent my-3"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.8 }}
                        ></motion.div>
                        <p className="text-zinc-300 mt-3">Relevant Coursework:</p>
                        <motion.ul 
                          className="mt-2 grid grid-cols-2 gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {[
                            { course: "Data Structures", icon: <Database size={12} /> },
                            { course: "Operating Systems", icon: <Server size={12} /> },
                            { course: "Machine Learning", icon: <Brain size={12} /> },
                            { course: "Agile Methodologies", icon: <GitBranch size={12} /> },
                            { course: "Basic Algorithms", icon: <Code size={12} /> }
                          ].map((item, index) => (
                            <motion.li 
                              key={index}
                              className="text-zinc-400 text-sm flex items-center gap-2 bg-zinc-800/40 rounded-md px-3 py-1.5"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.1 * index + 0.4 }}
                              whileHover={{ 
                                scale: 1.03, 
                                backgroundColor: "rgba(39, 39, 42, 0.5)" 
                              }}
                            >
                              <span className="text-emerald-400">{item.icon}</span>
                              {item.course}
                            </motion.li>
                          ))}
                        </motion.ul>
                        
                        <motion.div 
                          className="mt-4 flex items-center gap-2 text-xs text-zinc-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                        >
                          <Calendar size={12} />
                          <span>Graduation expected May 2025</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    className="mb-10 relative"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <div className="bg-zinc-800/30 rounded-lg p-5 border border-zinc-700/30 hover:border-zinc-600/50 transition-all shadow-md hover:shadow-lg relative overflow-hidden">
                      <ScannerEffect />
                      <BinaryBackground />
                      <div className="flex justify-between items-start">
                        <div>
                          <motion.h3 
                            className="text-zinc-100 font-medium"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            Stuyvesant High School
                          </motion.h3>
                          <motion.p 
                            className="text-emerald-400 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            College Preparatory Education
                          </motion.p>
                        </div>
                        <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full text-xs">
                          2017 - 2021
                        </span>
                      </div>
                      <motion.div 
                        className="h-px bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent my-3"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                      ></motion.div>
                      <p className="text-zinc-300 mt-3">
                        Attended New York City's most prestigious specialized high school, known for its rigorous academic curriculum and extremely competitive admission process based on a specialized exam.
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        <motion.div 
                          className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs flex items-center gap-1"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Star size={12} className="text-yellow-400" />
                          <span>SAT: 1510/1600</span>
                        </motion.div>
                        <motion.div 
                          className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs flex items-center gap-1"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Award size={12} className="text-yellow-400" />
                          <span>National Merit Scholar (PSAT/NMSQT)</span>
                        </motion.div>
                      </div>
                      
                      <motion.p 
                        className="text-zinc-300 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        Notable Coursework:
                      </motion.p>
                      <motion.ul 
                        className="mt-2 grid grid-cols-2 gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        {[
                          { course: "AP Computer Science", icon: <Code size={12} /> },
                          { course: "AP Calculus BC", icon: <Cpu size={12} /> },
                          { course: "AP Physics", icon: <Layers size={12} /> },
                          { course: "AP Economics", icon: <GitBranch size={12} /> },
                          { course: "AP Statistics", icon: <Database size={12} /> },
                          { course: "Multivariate Calculus", icon: <Brain size={12} /> }
                        ].map((item, index) => (
                          <motion.li 
                            key={index}
                            className="text-zinc-400 text-sm flex items-center gap-2 bg-zinc-800/40 rounded-md px-3 py-1.5"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 * index + 1 }}
                            whileHover={{ 
                              scale: 1.03, 
                              backgroundColor: "rgba(39, 39, 42, 0.5)" 
                            }}
                          >
                            <span className="text-emerald-400">{item.icon}</span>
                            {item.course}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "projects" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="relative border-l-2 border-zinc-700 pl-8 ml-4">
                    {projects.map((project, index) => (
                      <motion.div 
                        key={index}
                        className="mb-10 relative"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-2 border-zinc-700 bg-zinc-800 flex items-center justify-center">
                          <motion.div
                            animate={{ 
                              rotate: [0, 10, 0, -10, 0],
                            }}
                            transition={{ 
                              duration: 5, 
                              repeat: Infinity,
                              repeatType: "mirror" as const
                            }}
                          >
                            <Award className="h-3 w-3 text-emerald-400" />
                          </motion.div>
                        </div>
                        <div className="bg-zinc-800/30 rounded-lg p-5 border border-zinc-700/30 hover:border-zinc-600/50 transition-all shadow-md hover:shadow-lg relative overflow-hidden">
                          <ScannerEffect />
                          <BinaryBackground />
                          {/* Project Actions */}
                          <motion.div
                            className="absolute top-2 right-2 flex space-x-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center cursor-pointer"
                              title="View Demo"
                            >
                              <Globe size={12} className="text-emerald-400" />
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="w-6 h-6 rounded-full bg-zinc-700/20 flex items-center justify-center cursor-pointer"
                              title="View Code"
                            >
                              <Code size={12} className="text-zinc-400" />
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="w-6 h-6 rounded-full bg-zinc-700/20 flex items-center justify-center cursor-pointer"
                              title="Star Project"
                            >
                              <Star size={12} className="text-zinc-400" />
                            </motion.div>
                          </motion.div>
                          
                          <h3 className="text-zinc-100 font-medium pr-24">{project.title}</h3>
                          <p className="text-emerald-400 text-sm">{project.subtitle}</p>
                          
                          {/* Project Badges */}
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400">
                              <Star size={10} className="mr-1" />
                              Featured
                            </span>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-700/20 text-zinc-400">
                              <GitBranch size={10} className="mr-1" />
                              Open Source
                            </span>
                          </div>
                          
                          <p className="text-zinc-300 mt-3">{project.description}</p>
                          {project.contribution && (
                            <p className="text-zinc-400 mt-2 italic text-sm">
                              <span className="font-medium">My contribution:</span> {project.contribution}
                            </p>
                          )}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <motion.span 
                                key={techIndex} 
                                className="text-xs bg-zinc-800/70 text-zinc-300 px-2 py-1 rounded"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(39, 39, 42, 0.8)" }}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + techIndex * 0.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="mt-5 pt-3 border-t border-zinc-700/30">
                            <div className="flex justify-between text-xs text-zinc-500 mb-1">
                              <span>Project Completion</span>
                              <span>100%</span>
                            </div>
                            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.8 }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute -top-10 right-2 text-zinc-600 text-xs font-mono"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {/* Terminal-inspired header */}
                      <div className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500/40"></span>
                        <span>system ~ frontend-skills % ls -la</span>
                      </div>
                    </motion.div>
                    
                    <div className="bg-zinc-800/30 rounded-lg p-5 border border-zinc-700/30 shadow-lg">
                      <div className="flex items-center gap-3 mb-6">
                        <motion.div
                          animate={{ rotate: [0, 5, 0, -5, 0] }}
                          transition={{ duration: 6, repeat: Infinity }}
                          className="text-emerald-400"
                        >
                          <Terminal size={24} />
                        </motion.div>
                        <div>
                          <h3 className="text-zinc-100 font-medium">Languages & Frameworks</h3>
                          <div className="h-px bg-gradient-to-r from-emerald-500/20 via-emerald-500/5 to-transparent w-full mt-1"></div>
                        </div>
                      </div>
                      
                      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {[
                          { name: "Python", level: 100, icon: <Terminal size={14} /> },
                          { name: "Java", level: 100, icon: <Terminal size={14} /> },
                          { name: "C", level: 100, icon: <Terminal size={14} /> },
                          { name: "JavaScript", level: 100, icon: <Terminal size={14} /> },
                          { name: "HTML/CSS", level: 100, icon: <Code size={14} /> },
                          { name: "Bash", level: 100, icon: <Terminal size={14} /> },
                          { name: "React", level: 100, icon: <Code size={14} /> },
                          { name: "Node.js", level: 100, icon: <Server size={14} /> },
                          { name: "Express.js", level: 100, icon: <Server size={14} /> },
                          { name: "Flask", level: 100, icon: <Server size={14} /> },
                          { name: "Django", level: 100, icon: <Server size={14} /> }
                        ].map((skill, index) => (
                          <motion.div 
                            key={skill.name}
                            whileHover={{ scale: 1.05, y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: index * 0.05,
                              y: { type: "spring", stiffness: 300 }
                            }}
                            className="bg-zinc-800/60 rounded-md border border-zinc-700/50 overflow-hidden relative"
                          >
                            <ScannerEffect />
                            <div className="p-3 flex items-center gap-2 relative z-10">
                              <span className="text-emerald-400">{skill.icon}</span>
                              <span className="text-zinc-300 text-sm font-mono">{skill.name}</span>
                            </div>
                            
                            <div className="h-1 w-full bg-zinc-700/50 mt-1 relative z-10">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-emerald-500/80 to-emerald-400"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                              />
                            </div>
                            
                            <div className="absolute bottom-0 right-1 text-[10px] text-zinc-500 font-mono z-10">
                              {skill.level}%
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="mt-10 bg-zinc-900/30 rounded-md p-4 border border-zinc-800 font-mono text-sm text-zinc-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        <div className="flex items-start">
                          <span className="text-emerald-400 mr-2">$</span>
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, delay: 1.7 }}
                            className="overflow-hidden whitespace-nowrap block"
                          >
                            showcase-frontend-skills.sh
                          </motion.span>
                        </div>
                        <CodeTerminal />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-800/30 rounded-lg p-5 border border-zinc-700/30 mt-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-emerald-400"
                      >
                        <Database size={24} />
                      </motion.div>
                      <div>
                        <h3 className="text-zinc-100 font-medium">Tools & Technologies</h3>
                        <div className="h-px bg-gradient-to-r from-emerald-500/20 via-emerald-500/5 to-transparent w-full mt-1"></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mt-4">
                      {[
                        { name: "Unix", color: "bg-yellow-500/20 text-yellow-300" },
                        { name: "MongoDB", color: "bg-green-500/20 text-green-300" },
                        { name: "Postgres", color: "bg-blue-500/20 text-blue-300" },
                        { name: "Jupyter", color: "bg-orange-500/20 text-orange-300" },
                        { name: "Docker", color: "bg-blue-400/20 text-blue-300" },
                        { name: "Kali Linux", color: "bg-indigo-500/20 text-indigo-300" },
                        { name: "GitHub", color: "bg-purple-500/20 text-purple-300" },
                        { name: "VSCode", color: "bg-blue-500/20 text-blue-300" },
                        { name: "Power BI", color: "bg-yellow-500/20 text-yellow-300" },
                        { name: "AWS", color: "bg-orange-500/20 text-orange-300" },
                        { name: "Figma", color: "bg-purple-500/20 text-purple-300" },
                        { name: "TypeScript", color: "bg-blue-500/20 text-blue-300" },
                      ].map((tool, index) => (
                        <motion.div
                          key={tool.name}
                          className={`px-3 py-1.5 rounded-md border border-zinc-700/50 ${tool.color} font-mono text-sm relative overflow-hidden`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, type: "spring" }}
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <ScannerEffect />
                          <span className="relative z-10">{tool.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "sports" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="bg-zinc-800/20 rounded-lg p-6 border border-zinc-700/30 relative overflow-hidden">
                    <motion.div 
                      className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 opacity-10"
                      animate={{ 
                        rotate: 360,
                        opacity: [0.05, 0.1, 0.05]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40" stroke="#10B981" strokeWidth="5" fill="none" />
                        <path d="M50 10 L50 90 M10 50 L90 50" stroke="#10B981" strokeWidth="5" />
                      </svg>
                    </motion.div>
                    
                    {/* Photo Slideshow */}
                    <div className="mb-6">
                      <TaekwondoSlideshow />
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="md:w-1/2 space-y-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2 flex items-center">
                            <span className="mr-2">NYU Taekwondo Team</span>
                            <motion.div
                              animate={{ rotate: [0, 10, 0, -10, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              🥋
                            </motion.div>
                          </h3>
                          <p className="text-zinc-400 mb-4">Competed for NYU Sport Taekwondo Team as lightweight fighter. NYU ranked 1st place in D2 2024-2025 season.</p>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                            <Award size={14} className="text-emerald-400" />
                            Key Achievements
                          </h4>
                          <div className="space-y-2">
                            {[
                              "ECTA Cornell Tournament - Gold Medal (2025)",
                              "NYU MVP for Color Belt Competition - Featured Athlete (2024)",
                              "ECTA Brown Tournament - Bronze Medal (2025)",
                              "Undefeated at MIT, Princeton and Cornell University Tournaments (2023-2024)",
                              "ECTA MIT Tournament - Bronze Medal (2023)",
                            ].map((achievement, i) => (
                              <motion.div
                                key={i}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 + 0.5 }}
                              >
                                <div className="mt-1 mr-2 text-emerald-400">✓</div>
                                <p className="text-zinc-300 text-sm">{achievement}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Stick Figure Fight Animation */}
                        <motion.div 
                          className="mt-6 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-800/50"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="p-2 bg-zinc-800 text-xs text-zinc-400 font-mono flex items-center justify-between">
                            <span>taekwondo-animation.gif</span>
                            <div className="flex gap-1">
                              <span className="h-2 w-2 rounded-full bg-red-500/70"></span>
                              <span className="h-2 w-2 rounded-full bg-yellow-500/70"></span>
                              <span className="h-2 w-2 rounded-full bg-green-500/70"></span>
                            </div>
                          </div>
                          <div className="p-2 bg-zinc-900/50 flex justify-center items-center h-[155px]">
                            <img 
                              src="/tkd/stick-figure-fight.gif"
                              alt=""
                              className="h-full object-contain"
                            />
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="md:w-1/2 space-y-6">
                        <div className="relative w-full">
                          <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full"></div>
                          <motion.div
                            className="relative bg-zinc-800/40 rounded-lg p-3 text-center border border-zinc-700"
                            animate={{
                              y: [0, -10, 0],
                              boxShadow: [
                                "0 0 0 0 rgba(16, 185, 129, 0)",
                                "0 0 15px 2px rgba(16, 185, 129, 0.4)",
                                "0 0 0 0 rgba(16, 185, 129, 0)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "mirror" as const
                            }}
                          >
                            <div className="flex items-center justify-center gap-2">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              >
                                <span className="text-emerald-400 text-lg">⚔️</span>
                              </motion.div>
                              <span className="text-emerald-400 font-medium text-sm">Color Belt Competition</span>
                            </div>
                          </motion.div>
                        </div>
                        
                        <motion.button 
                          className="w-full px-6 py-3 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors shadow-sm relative overflow-hidden group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="relative z-10">More competition videos coming soon!</span>
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 via-emerald-600/30 to-emerald-600/0"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                          />
                        </motion.button>
                        
                        <div className="mt-6">
                          <h4 className="text-sm font-medium text-zinc-300 mb-3 flex items-center gap-2">
                            <Calendar size={14} className="text-emerald-400" />
                            Training Schedule
                          </h4>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { day: "Monday", type: "Weight Training", icon: "🏋️" },
                              { day: "Wednesday", type: "Sparring", icon: "🥋" },
                              { day: "Friday", type: "Conditioning", icon: "🏃" }
                            ].map((session, i) => (
                              <motion.div
                                key={i}
                                className="bg-zinc-800/30 p-2 rounded text-center border border-zinc-700/30"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(39, 39, 42, 0.5)" }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + i * 0.1 }}
                              >
                                <motion.div 
                                  animate={{ y: [0, -3, 0] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                  className="text-lg mb-1"
                                >
                                  {session.icon}
                                </motion.div>
                                <div className="text-xs text-emerald-400">{session.day}</div>
                                <div className="text-sm text-zinc-300">{session.type}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 