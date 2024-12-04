'use client';

import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiVercel } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Framer Motion', icon: SiFramer, color: '#BB4B96' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' }
];

export default function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(var(--sea))] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(var(--sea-light))] rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-text text-4xl md:text-5xl mb-6 text-white">
            Built with Modern Tech
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We use cutting-edge technologies to create fast, scalable, and beautiful websites
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl flex flex-col items-center gap-4 hover:bg-gray-800/80 transition-all duration-300"
              >
                <tech.icon className="w-12 h-12" style={{ color: tech.color }} />
                <p className="text-gray-300 font-medium">{tech.name}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300">
            Our tech stack ensures your website is fast, secure, and future-proof
          </p>
        </motion.div>
      </div>
    </section>
  );
}
