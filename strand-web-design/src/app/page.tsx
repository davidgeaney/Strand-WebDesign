'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessSection from '@/components/ProcessSection';
import ProjectShowcase from '@/components/ProjectShowcase';
import TechStack from '@/components/TechStack';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <HeroSection />
      
      {/* Agency Stats */}
      <section className="py-16 bg-gradient-to-b from-[rgb(var(--sea))] to-[rgb(var(--shell))]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">250+</h3>
              <p className="text-white/80">Websites Launched</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">98%</h3>
              <p className="text-white/80">Client Satisfaction</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">15+</h3>
              <p className="text-white/80">Design Awards</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
              <p className="text-white/80">Support</p>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <ProcessSection />
      <ProjectShowcase />
      <TechStack />
      <PricingSection />
      <ContactSection />
    </motion.main>
  );
}
