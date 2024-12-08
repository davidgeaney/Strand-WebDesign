'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useState, useRef } from 'react';
import { FiMonitor, FiShoppingBag, FiFeather, FiSmartphone, FiSearch, FiRefreshCw } from 'react-icons/fi';

const services = [
  {
    icon: FiMonitor,
    title: "Websites That Work",
    description: "Get a website that doesn’t just look great – it brings in real business. We create designs that connect with your customers and turn visitors into clients.",
    features: ["Brand-Perfect Design", "Lead Generation", "Customer Journey", "Growth-Ready"]
  },
  {
    icon: FiShoppingBag,
    title: "E-commerce Success",
    description: "Ready to sell more online? We’ll build you a store that makes shopping easy and keeps customers coming back for more.",
    features: ["Easy Checkout", "Mobile Shopping", "Product Stories", "Sales Boosters"]
  },
  {
    icon: FiFeather,
    title: "Stand-Out Branding",
    description: "Make your business impossible to forget. We’ll craft a visual identity that tells your story and connects with your ideal customers.",
    features: ["Memorable Logo", "Brand Story", "Visual Style", "Brand Guide"]
  },
  {
    icon: FiSmartphone,
    title: "Mobile-First Design",
    description: "Reach customers wherever they are. Your site will look and work beautifully on every device, from phones to desktops.",
    features: ["Phone-Friendly", "Fast Loading", "Easy Updates", "Works Everywhere"]
  },
  {
    icon: FiSearch,
    title: "Get Found Online",
    description: "Stop hiding in page 2 of Google. We’ll help your business stand out in search results and bring more of the right people to your site.",
    features: ["Google Friendly", "Local SEO", "More Traffic", "Better Leads"]
  },
  {
    icon: FiRefreshCw,
    title: "Website Refresh",
    description: "Is your current site holding you back? Let’s transform it into a modern, hardworking asset that helps grow your business.",
    features: ["Modern Look", "Faster Site", "Better Results", "Easy to Manage"]
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(
    320px circle at ${mouseX}px ${mouseY}px,
    rgb(var(--sea-light) / 0.1),
    transparent 80%
  )`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className="group relative bg-gray-800/50 rounded-2xl p-8 cursor-pointer overflow-hidden backdrop-blur-sm border border-gray-700 hover:bg-gray-800 transition-all duration-500"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      {/* Card Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <motion.div 
          className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Background circle with gradient */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[rgb(var(--sea-light))] to-[rgb(var(--sea))] opacity-20 group-hover:opacity-100 transition-all duration-700 ease-out" />
          
          {/* Icon */}
          <service.icon 
            size={32} 
            className="text-[rgb(var(--sea))] relative z-10 transform group-hover:rotate-12 transition-all duration-700 ease-out" 
          />
        </motion.div>

        {/* Title and Description */}
        <h3 className="font-poppins text-2xl text-white mb-4">
          {service.title}
        </h3>
        <p className="text-gray-300 mb-6 group-hover:text-gray-400 transition-colors duration-500">
          {service.description}
        </p>

        {/* Features as Pills */}
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature, fIndex) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1 + fIndex * 0.1,
                duration: 0.5
              }}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[rgb(var(--shell))] text-gray-600 group-hover:bg-[rgb(var(--sea-light))] group-hover:text-[rgb(var(--sea))] transition-all duration-500 ease-out opacity-60 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
              style={{
                transitionDelay: `${fIndex * 50}ms`
              }}
            >
              {feature}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 rounded-2xl transition-all duration-700 ease-out group-hover:shadow-xl" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(var(--sea-light))] to-transparent opacity-0 group-hover:opacity-5 transition-all duration-700 ease-out" />
      <motion.div 
        className="absolute -bottom-1 -right-1 w-24 h-24 rounded-full bg-[rgb(var(--sea))] opacity-0 group-hover:opacity-5 transition-all duration-700 ease-out transform scale-0 group-hover:scale-150"
        whileHover={{ scale: 2 }}
      />
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(var(--sea))] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(var(--sea-light))] rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Services
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end website solutions designed to grow your business and elevate your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
