'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Ocean Breeze Resort',
    category: 'Hospitality',
    tags: ['Web Design', 'Development', 'Booking System'],
    description: 'A luxury resort website with seamless booking integration and virtual tours.',
    image: '/images/projects/resort.jpg',
    link: '#',
    stats: {
      conversion: '+45%',
      engagement: '3.5min avg.',
      satisfaction: '4.9/5'
    }
  },
  {
    title: 'Wave Analytics',
    category: 'SaaS',
    tags: ['Web App', 'Dashboard', 'Analytics'],
    description: 'Data visualization platform with real-time analytics and custom dashboards.',
    image: '/images/projects/analytics.jpg',
    link: '#',
    stats: {
      conversion: '+85%',
      engagement: '12min avg.',
      satisfaction: '4.8/5'
    }
  },
  {
    title: 'Coastal Cafe',
    category: 'Restaurant',
    tags: ['E-commerce', 'Web Design', 'Online Ordering'],
    description: 'Modern restaurant website with online ordering and table reservations.',
    image: '/images/projects/cafe.jpg',
    link: '#',
    stats: {
      conversion: '+120%',
      engagement: '4.2min avg.',
      satisfaction: '4.9/5'
    }
  },
  {
    title: 'Marina Boutique',
    category: 'E-commerce',
    tags: ['E-commerce', 'Web Design', 'Fashion'],
    description: 'High-end fashion boutique with personalized shopping experience.',
    image: '/images/projects/boutique.jpg',
    link: '#',
    stats: {
      conversion: '+95%',
      engagement: '5.8min avg.',
      satisfaction: '4.7/5'
    }
  },
  {
    title: 'Harbor Health',
    category: 'Healthcare',
    tags: ['Web Design', 'Booking System', 'Healthcare'],
    description: 'Modern healthcare platform with appointment scheduling and patient portal.',
    image: '/images/projects/health.jpg',
    link: '#',
    stats: {
      conversion: '+75%',
      engagement: '6.2min avg.',
      satisfaction: '4.8/5'
    }
  },
  {
    title: 'Sea Shell Studios',
    category: 'Creative',
    tags: ['Web Design', 'Portfolio', 'Creative'],
    description: 'Creative agency portfolio showcasing their work and services.',
    image: '/images/projects/creative.jpg',
    link: '#',
    stats: {
      conversion: '+60%',
      engagement: '4.5min avg.',
      satisfaction: '4.9/5'
    }
  }
];

// Get unique categories and tags
const categories = ['All', ...new Set(projects.map(project => project.category))];
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Filter projects based on category and tags
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const tagsMatch = selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag));
    return categoryMatch && tagsMatch;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(var(--sea))] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(var(--sea-light))] rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-text text-4xl md:text-5xl mb-6 text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="mb-12 space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[rgb(var(--sea))] text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? 'border-[rgb(var(--sea))] text-[rgb(var(--sea-light))] bg-[rgb(var(--sea))]/10'
                    : 'border-gray-700 text-gray-400 hover:border-gray-500'
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div 
                  className="group relative h-full bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[rgb(var(--sea-light))] text-sm">{project.category}</span>
                        <span className="text-gray-500">•</span>
                        <div className="flex gap-1">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs text-gray-400">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-800/50 rounded-lg">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-[rgb(var(--sea-light))] font-semibold">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Link */}
                    <motion.a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-[rgb(var(--sea-light))] hover:text-white transition-colors duration-300"
                      initial={false}
                      animate={{
                        x: hoveredIndex === index ? 5 : 0
                      }}
                    >
                      View Project
                      <FiArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/projects"
            className="inline-flex items-center gap-2 text-[rgb(var(--sea-light))] hover:text-white transition-colors duration-300 text-lg"
            whileHover={{ x: 5 }}
          >
            View All Projects <FiExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
