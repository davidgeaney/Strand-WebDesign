import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="image-reveal overflow-hidden aspect-[4/3]">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="mt-6">
        <p className="text-sm text-foreground/60 mb-2">{project.category}</p>
        <h3 className="heading-text text-xl mb-3">{project.title}</h3>
        <p className="text-foreground/80">{project.description}</p>
        <div className="mt-4">
          <a href="#" className="strand-line inline-block py-2">View Project</a>
        </div>
      </div>
    </motion.article>
  );
}
