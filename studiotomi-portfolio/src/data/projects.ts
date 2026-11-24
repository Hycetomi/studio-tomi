import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'sunday-life',
    title: 'Sunday life',
    client: 'Sunday Life Media',
    category: 'Media Agency / Art Direction',
    year: '2023',
    description:
      'For sunday life worked in the intersection of art direction, content stratergy ans music to help move the brand life fowards',
    url: 'https://sundaylife.co', // Configurable redirect URL
    type: 'media-agency',
    theme: {
      bg: '#0c0c0d',
      textColor: '#ffffff',
      accentColor: '#3b82f6',
    },
    artwork: {
      headline: 'GRITTY BEATS-1',
      subheadline: 'Exploring the Rhythm of the Streets',
      editorialText:
        "It's where spicy salt becomes a manifesto, and the street is an altar waiting to be decoded. 'Concrete Beats' is a tribute gallery/hip-hop to the urban art scene.",
      vol: 'VOL. 01',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80', // Streetwear duo matching the photo in Figma
    },
  },
  {
    id: 'iranti',
    title: 'Iranti',
    client: 'Iranti Cultural Heritage',
    category: 'Digital Archive / Web Platform',
    year: '2024',
    description:
      'For sunday life worked in the intersection of art direction, content stratergy ans music to help move the brand life fowards',
    url: 'https://iranti.org', // Configurable redirect URL
    type: 'digital-archive',
    theme: {
      bg: '#14100c',
      textColor: '#e8c170',
      accentColor: '#d97706',
    },
    artwork: {
      headline: 'Iranti',
      subheadline: 'African Heritage Archive',
      searchQuery: 'Ask about any artwork, artist, or tradition...',
      editorialText: 'Preserving collective memory through interactive archival curation.',
      image:
        'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'atelier-soma',
    title: 'Atelier SOMA',
    client: 'SOMA Studio Architecture',
    category: 'Spatial Design & Web Architecture',
    year: '2024',
    description:
      'Crafted a high-concept digital portfolio blending brutalist geometry with fluid architectural documentation and spatial showcases.',
    url: 'https://ateliersoma.design',
    type: 'editorial',
    theme: {
      bg: '#18181b',
      textColor: '#f4f4f5',
      accentColor: '#a1a1aa',
    },
    artwork: {
      headline: 'MONOLITH',
      subheadline: 'Form Follows Friction',
      vol: 'EDITION 03',
      editorialText:
        'A study in heavy light and raw concrete surfaces, mapped for digital interaction.',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    },
  },
];
