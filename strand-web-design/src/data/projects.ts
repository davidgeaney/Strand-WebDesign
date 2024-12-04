export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Coastal Retreats',
    description: 'A luxury beach house rental platform featuring immersive 360° views of oceanfront properties.',
    image: '/projects/coastal-retreats.jpg',
    category: 'Hospitality',
    technologies: []
  },
  {
    id: '2',
    title: 'Tidepool',
    description: 'Digital platform for marine conservation, connecting local communities with coastal preservation initiatives.',
    image: '/projects/tidepool.jpg',
    category: 'Environmental',
    technologies: []
  },
  {
    id: '3',
    title: 'Shore Dining',
    description: 'Restaurant discovery app highlighting the finest seafood establishments along the coastline.',
    image: '/projects/shore-dining.jpg',
    category: 'Food & Beverage',
    technologies: []
  },
  {
    id: '4',
    title: 'Beach Life',
    description: 'Local community platform sharing real-time updates about beach conditions, events, and activities.',
    image: '/projects/beach-life.jpg',
    category: 'Community',
    technologies: []
  },
];
