export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  url: string;
  tags?: string[];
  year?: string;
  type: 'media-agency' | 'editorial' | 'digital-archive' | 'product';
  // Specific visual props for faithful reproduction of Figma artwork
  theme: {
    bg: string;
    textColor: string;
    accentColor?: string;
  };
  artwork: {
    headline: string;
    subheadline?: string;
    editorialText?: string;
    vol?: string;
    image?: string;
    searchQuery?: string;
  };
}
