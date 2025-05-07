"use client";

import React from "react";
import { motion } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1
    }
  },
  end: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const loadingCircleVariants = {
  start: {
    y: "0%"
  },
  end: {
    y: "100%"
  }
};

const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut"
};

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="flex gap-2 justify-center"
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          {[1, 2, 3].map((index) => (
            <motion.span
              key={index}
              className="block w-4 h-4 rounded-full bg-white"
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            />
          ))}
        </motion.div>
        <p className="mt-4 text-zinc-300 animate-pulse font-medium">Loading your experience...</p>
      </div>
    </div>
  );
} 