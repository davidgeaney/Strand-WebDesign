'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      className="relative mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main Logo SVG */}
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 120 120" 
        className="relative z-10"
      >
        {/* Animated Wave Line */}
        <motion.path
          d="M30,60 Q45,45 60,60 Q75,75 90,60"
          stroke="rgb(var(--sea))"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
          }}
        />
        
        {/* S Letter */}
        <motion.path
          d="M45,40 C60,40 75,40 75,50 C75,60 45,60 45,70 C45,80 60,80 75,80"
          stroke="rgb(var(--sea))"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 2,
            delay: 0.5,
            ease: "easeInOut",
          }}
        />

        {/* Circular Border */}
        <motion.circle
          cx="60"
          cy="60"
          r="55"
          stroke="rgb(var(--sea-light))"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Animated Dots */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[rgb(var(--sea))]"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Text */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="text-[rgb(var(--sea))] font-light tracking-widest text-sm">
          STRAND WEB DESIGN
        </span>
      </motion.div>
    </motion.div>
  );
}
