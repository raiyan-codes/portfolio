"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypingText({
  text,
  className = "",
  speed = 50,
  delay = 0
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  
  // Reset the component if text changes
  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
  }, [text]);
  
  // Handle the typing animation
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
        }
      }, speed);
      
      return typingInterval;
    };
    
    // Start with initial delay
    timeoutId = setTimeout(() => {
      const interval = startTyping();
      return () => clearInterval(interval);
    }, delay);
    
    // Clean up all timers
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);
  
  return (
    <span className={`relative inline-block ${className}`}>
      {displayedText}
      {!isComplete && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      )}
    </span>
  );
} 