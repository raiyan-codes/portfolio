"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Battery, BatteryCharging } from "lucide-react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(0);

  useEffect(() => {
    // Check if all images are loaded
    const loadImages = async () => {
      const images = document.querySelectorAll("img");
      
      // Create animation for battery level
      const batteryInterval = setInterval(() => {
        setBatteryLevel(prev => {
          const newLevel = prev + 1;
          if (newLevel >= 100) {
            clearInterval(batteryInterval);
          }
          return newLevel > 100 ? 100 : newLevel;
        });
      }, 25);
      
      // Create fake delay for demonstration purposes
      const delay = new Promise(resolve => setTimeout(resolve, 2500));
      
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = img.onerror = resolve;
        });
      });
      
      // Wait for both the minimum delay and all images to load
      await Promise.all([delay, ...imagePromises]);
      clearInterval(batteryInterval);
      setBatteryLevel(100);
      
      // Add a small delay after reaching 100% before hiding the loader
      setTimeout(() => {
        setLoading(false);
      }, 400);
    };

    window.addEventListener("load", loadImages);
    loadImages(); // Also run immediately

    return () => window.removeEventListener("load", loadImages);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center">
            {/* Battery Animation */}
            <div className="relative h-36 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="text-white"
              >
                <BatteryCharging size={80} className="text-emerald-400" />
              </motion.div>
              
              <div className="w-32 h-8 border-2 border-zinc-600 rounded-md absolute top-52 flex items-center p-0.5 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded"
                  initial={{ width: "0%" }}
                  animate={{ width: `${batteryLevel}%` }}
                />
              </div>
              
              <motion.div 
                className="absolute top-64 text-zinc-400 font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {batteryLevel}% Charged
              </motion.div>
            </div>
            
            <p className="mt-24 text-zinc-400 font-mono text-sm uppercase tracking-wider">
              Charging Experience
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 