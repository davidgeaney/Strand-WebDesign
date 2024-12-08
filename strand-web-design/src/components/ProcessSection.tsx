'use client';

import { motion } from 'framer-motion';
import { FiCoffee, FiPenTool, FiLayout, FiMonitor, FiAward } from 'react-icons/fi';

const steps = [
  {
    title: "Discovery & Planning",
    description: "We start by understanding your goals, target audience, and unique requirements to create a tailored strategy."
  },
  {
    title: "Design & Prototyping",
    description: "Our team crafts a modern, user-focused design that perfectly represents your brand and engages your visitors."
  },
  {
    title: "Development & Testing",
    description: "We bring your design to life with clean code and thorough testing to ensure everything works flawlessly."
  },
  {
    title: "Launch & Support",
    description: "Your site goes live with our continued support to ensure optimal performance and success."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900/95">
      {/* Subtle wave background */}
      <div className="absolute inset-0 opacity-5">
        <svg 
          className="w-full h-full"
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="rgb(var(--sea))"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Your Journey to a Better Website
              </h2>
              <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto">
                Simple, transparent, and focused on getting you results. Here's how we'll work together to create your perfect website.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[rgb(var(--sea))] to-transparent hidden md:block" />
              
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="md:grid md:grid-cols-12 md:gap-8">
                      {/* Step Number */}
                      <div className="hidden md:flex md:col-span-2 justify-end">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[rgb(var(--sea))] text-white font-display text-2xl">
                          {index + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl">
                        <div className="flex items-center gap-4 mb-4 md:hidden">
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[rgb(var(--sea))] text-white font-display text-xl">
                            {index + 1}
                          </div>
                          <h3 className="font-poppins text-xl text-white">
                            {step.title}
                          </h3>
                        </div>
                        <div className="hidden md:block">
                          <h3 className="font-poppins text-2xl text-white mb-4">
                            {step.title}
                          </h3>
                        </div>
                        <p className="font-sans text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Highlights */}
        <div className="mt-32 grid md:grid-cols-3 gap-12 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(var(--primary))] rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(var(--secondary))] rounded-full filter blur-3xl" />
          </div>

          {/* Process Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <div className="h-full p-8 rounded-2xl backdrop-blur-sm border border-[rgba(var(--primary),0.2)] bg-[rgba(var(--surface),0.8)] hover:bg-[rgba(var(--surface),0.95)] transition-all duration-500 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: 'var(--gradient-primary)' }} />
              
              <h3 className="font-poppins text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                You're In Control
              </h3>
              <p className="font-sans text-[rgb(var(--text-secondary))] leading-relaxed">
                Regular updates and feedback sessions keep you in the driver's seat
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group"
          >
            <div className="h-full p-8 rounded-2xl backdrop-blur-sm border border-[rgba(var(--primary),0.2)] bg-[rgba(var(--surface),0.8)] hover:bg-[rgba(var(--surface),0.95)] transition-all duration-500 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: 'var(--gradient-primary)' }} />
              
              <h3 className="font-poppins text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                No Surprises
              </h3>
              <p className="font-sans text-[rgb(var(--text-secondary))] leading-relaxed">
                Clear pricing and timelines, with regular progress updates
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group"
          >
            <div className="h-full p-8 rounded-2xl backdrop-blur-sm border border-[rgba(var(--primary),0.2)] bg-[rgba(var(--surface),0.8)] hover:bg-[rgba(var(--surface),0.95)] transition-all duration-500 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: 'var(--gradient-primary)' }} />
              
              <h3 className="font-poppins text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                Future-Proof
              </h3>
              <p className="font-sans text-[rgb(var(--text-secondary))] leading-relaxed">
                Built with modern tech that scales with your business
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
