'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ocean View Resort",
    category: "Hospitality",
    image: "/portfolio/project1.jpg"
  },
  {
    id: 2,
    title: "Wave Digital Marketing",
    category: "Marketing",
    image: "/portfolio/project2.jpg"
  },
  {
    id: 3,
    title: "Coastal E-commerce",
    category: "E-commerce",
    image: "/portfolio/project3.jpg"
  }
];

const categories = ["All", "Hospitality", "Marketing", "E-commerce"];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-ocean-600 text-white'
                : 'bg-ocean-50 hover:bg-ocean-100 text-ocean-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <h2 className="font-poppins text-4xl md:text-5xl mb-6 text-white">
          Featured Projects
        </h2>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative aspect-video bg-ocean-50 rounded-lg overflow-hidden hover-float cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image */}
            <div className="absolute inset-0 bg-ocean-600/0 group-hover:bg-ocean-600/20 transition-colors duration-300" />
            
            {/* Project Info */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-white transform transition-transform duration-300 ${
              hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h3 className="text-xl font-serif mb-2">{project.title}</h3>
              <p className="text-sm text-ocean-50">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
