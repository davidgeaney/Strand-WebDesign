'use client';

import { motion } from 'framer-motion';
import { FiCoffee, FiPenTool, FiLayout, FiMonitor, FiAward } from 'react-icons/fi';

const steps = [
  {
    icon: FiCoffee,
    title: "Let's Talk Business",
    description: "We'll get to know your goals, customers, and what makes your business special. Together, we'll map out a website strategy that works."
  },
  {
    icon: FiPenTool,
    title: "Creative Magic",
    description: "Watch your vision come to life as we design a website that looks amazing and connects with your ideal customers."
  },
  {
    icon: FiLayout,
    title: "See It In Action",
    description: "Try out an interactive preview of your website. Click through, test features, and refine until it's perfect."
  },
  {
    icon: FiMonitor,
    title: "Bringing It To Life",
    description: "We'll build your site using reliable technology that's easy to maintain, keeping you updated every step of the way."
  },
  {
    icon: FiAward,
    title: "Ready For Success",
    description: "Your site goes live! We'll ensure everything's perfect and show you how to make the most of your new digital presence."
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
          className="text-center mb-16"
        >
          <h2 className="heading-text text-4xl md:text-5xl mb-6 text-white">
            Your Journey to a Better Website
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple, transparent, and focused on getting you results. Here's how we'll work together to create your perfect website.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[rgb(var(--sea))] to-[rgb(var(--sea-light))] opacity-20" />
              )}

              {/* Step Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl h-full hover:bg-gray-800/80 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[rgb(var(--sea))] text-white font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

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
              
              <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                You're In Control
              </h3>
              <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
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
              
              <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                No Surprises
              </h3>
              <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
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
              
              <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                Future-Proof
              </h3>
              <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                Built with modern tech that scales with your business
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
