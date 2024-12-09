'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from './Logo';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = clientX / innerWidth - 0.5;
      const moveY = clientY / innerHeight - 0.5;

      const gradients = containerRef.current.querySelectorAll('.gradient-orb');
      gradients.forEach((gradient, index) => {
        const factor = (index + 1) * 4;
        (gradient as HTMLElement).style.transform = 
          `translate(${moveX * factor}%, ${moveY * factor}%)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gray-900 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ opacity }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-orb absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(var(--sea))] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.15, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="gradient-orb absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgb(var(--sea-light))] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.15, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M0 32V0h32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          style={{ opacity }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2
            }}
            className="mb-12"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Logo />
            </motion.div>
          </motion.div>

          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4 mb-20"
          >
            <h2 className="font-poppins text-xl md:text-2xl font-light tracking-[0.3em] text-[rgb(var(--sea))] opacity-90">
              STRAND WEB DESIGN
            </h2>
          </motion.div>

          <motion.h1 
            className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Big Agency Quality,
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--sea-light))] via-white to-[rgb(var(--sea-light))] bg-300% animate-shimmer"
            >
              Small Business Prices.
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="font-sans text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Turn visitors into customers with smart design that reflects your brand and delivers results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <motion.a 
              href="#contact" 
              className="group relative px-10 py-4 rounded-lg font-display text-sm uppercase tracking-wider text-[rgb(var(--text-primary))] min-w-[200px] text-center overflow-hidden"
              whileHover="hover"
              whileTap="tap"
            >
              {/* Background layers */}
              <motion.div 
                className="absolute inset-0 rounded-lg"
                style={{ background: 'var(--gradient-primary)' }}
                variants={{
                  hover: {
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  },
                  tap: {
                    scale: 0.98
                  }
                }}
              />
              <motion.div 
                className="absolute inset-0 rounded-lg opacity-0"
                style={{ background: 'var(--gradient-accent)' }}
                variants={{
                  hover: {
                    opacity: 0.9,
                    transition: { duration: 0.3 }
                  }
                }}
              />
              {/* Text */}
              <motion.span 
                className="relative block"
                variants={{
                  hover: {
                    y: -1,
                    transition: { duration: 0.2 }
                  }
                }}
              >
                Let's Get Started
              </motion.span>
            </motion.a>
            
            <motion.a 
              href="#work" 
              className="group relative px-10 py-4 rounded-lg font-display text-sm uppercase tracking-wider text-[rgb(var(--text-primary))] min-w-[200px] text-center"
              whileHover="hover"
              whileTap="tap"
            >
              {/* Border */}
              <motion.div 
                className="absolute inset-0 rounded-lg opacity-10"
                style={{ background: 'var(--gradient-primary)' }}
                variants={{
                  hover: {
                    opacity: 0.15,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  },
                  tap: {
                    scale: 0.98
                  }
                }}
              />
              {/* Inner background */}
              <motion.div 
                className="absolute inset-[2px] rounded-[6px]"
                style={{ background: 'var(--gradient-surface)' }}
                variants={{
                  hover: {
                    scale: 0.99
                  }
                }}
              />
              {/* Text */}
              <motion.span 
                className="relative block"
                variants={{
                  hover: {
                    y: -1,
                    transition: { duration: 0.2 }
                  }
                }}
              >
                See Real Results
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Agency Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400"
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="w-2 h-2 rounded-full bg-[rgb(var(--sea))]" />
              <span className="font-sans">Modern Tech Stack</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="w-2 h-2 rounded-full bg-[rgb(var(--sea))]" />
              <span className="font-sans">Performance Focused</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="w-2 h-2 rounded-full bg-[rgb(var(--sea))]" />
              <span className="font-sans">Scalable Solutions</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
