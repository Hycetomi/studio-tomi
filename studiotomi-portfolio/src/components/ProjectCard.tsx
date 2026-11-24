import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Search } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article
      className="flex-shrink-0 w-[80vw] sm:w-[65vw] md:w-[56vw] lg:w-[48vw] xl:w-[44vw] max-w-[720px] select-none flex flex-col justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Project: ${project.title}`}
    >
      {/* Clickable Graphic Card */}
      <div
        onClick={handleClick}
        className="group relative w-full aspect-[16/10.5] rounded-none overflow-hidden cursor-pointer shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl"
        style={{ backgroundColor: project.theme.bg }}
        title={`Click to visit ${project.title}`}
      >
        {/* Project 1: Sunday Life */}
        {project.id === 'sunday-life' && (
          <div className="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between text-white overflow-hidden bg-[#0c0c0d]">
            {/* Top metadata row */}
            <div className="relative z-10 flex items-start justify-between">
              <div className="max-w-[210px] sm:max-w-[250px] text-[9px] sm:text-[10px] text-neutral-400 font-mono leading-relaxed opacity-85">
                {project.artwork.editorialText}
              </div>
              <div className="text-right flex flex-col items-end gap-0.5 text-[9px] sm:text-[10px] font-mono text-neutral-400">
                <span className="text-neutral-400 uppercase tracking-wider">Agency Media</span>
                <span className="text-neutral-500">{project.artwork.vol}</span>
              </div>
            </div>

            {/* Photo of two streetwear figures on right side */}
            <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 w-44 sm:w-56 md:w-64 h-[78%] rounded-none overflow-hidden border border-neutral-800 z-10 shadow-2xl">
              <img
                src={project.artwork.image}
                alt="Sunday Life Duo"
                className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Bold typography: GRITTY BEATS-1 */}
            <div className="relative z-20 mt-auto pt-4">
              <div className="flex items-center gap-3 text-[9px] sm:text-[10px] font-mono text-neutral-400 mb-1">
                <span>24/7</span>
                <span>•</span>
                <span>©2023</span>
              </div>
              
              <h4 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.88] tracking-[-0.03em] uppercase text-white drop-shadow-md">
                GRITTY<br />BEATS-1
              </h4>

              <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-neutral-400 mt-3 pt-2 border-t border-neutral-800/80">
                <span>{project.artwork.subheadline}</span>
                <span className="flex items-center gap-1 text-white opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Visit Live Site <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Project 2: Iranti */}
        {project.id === 'iranti' && (
          <div className="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-[#130f0c]">
            {/* Ambient Warm Golden Glow */}
            <div className="absolute -top-12 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-amber-200/80 uppercase">
                <Search className="w-3 h-3 text-amber-400" />
                <span>EXPLORE</span>
              </div>
              <span className="text-[10px] font-mono text-amber-400/60 uppercase tracking-widest">
                Digital Archive
              </span>
            </div>

            {/* Center: Iranti Serif Headline & Search UI */}
            <div className="relative z-10 my-auto py-2 flex flex-col items-start max-w-md">
              <h4 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#ebc375] tracking-tight mb-3 drop-shadow">
                Iranti
              </h4>

              {/* Styled Mock Search Input */}
              <div className="w-full bg-neutral-900/80 border border-amber-900/40 rounded-lg px-4 py-2 flex items-center gap-3 text-neutral-400 text-xs sm:text-sm shadow-inner backdrop-blur-md">
                <Search className="w-3.5 h-3.5 text-neutral-500" />
                <span className="truncate text-neutral-400 text-[11px] sm:text-xs">
                  {project.artwork.searchQuery}
                </span>
                <div className="ml-auto w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400">
                  +
                </div>
              </div>
            </div>

            {/* Bottom Showcase Gallery */}
            <div className="relative z-10 flex items-end justify-between pt-3 border-t border-amber-950/60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-14 bg-neutral-900 border border-amber-900/30 overflow-hidden shadow">
                  <img
                    src={project.artwork.image}
                    alt="Archive preview"
                    className="w-full h-full object-cover filter sepia-[0.3]"
                  />
                </div>
                <div className="text-[10px] font-mono text-neutral-400 leading-tight">
                  <p className="text-amber-200/90 font-medium">Historical Artifacts</p>
                  <p className="text-neutral-500">Curated Records</p>
                </div>
              </div>

              <span className="flex items-center gap-1 text-[10px] font-mono text-amber-300 opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                Visit Live Site <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        )}

        {/* Project 3: SOMA */}
        {project.id === 'atelier-soma' && (
          <div className="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-[#161618] text-white">
            <div className="absolute inset-0 opacity-40">
              <img
                src={project.artwork.image}
                alt="Architecture portfolio preview"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <span>03 / 03</span>
              <span className="uppercase tracking-widest">{project.artwork.vol}</span>
            </div>

            <div className="relative z-10 mt-auto">
              <h4 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white uppercase">
                {project.artwork.headline}
              </h4>
              <p className="text-xs text-neutral-300 font-mono mt-1">
                {project.artwork.subheadline}
              </p>
              
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mt-4 pt-2 border-t border-neutral-700/60">
                <span className="truncate max-w-[200px]">{project.category}</span>
                <span className="flex items-center gap-1 text-white group-hover:translate-x-1 transition-transform">
                  Visit Live Site <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Hover Action Badge */}
        <div
          className={`absolute top-4 right-4 z-30 bg-black/90 text-white text-[11px] font-mono px-3 py-1.5 flex items-center gap-1.5 backdrop-blur-md border border-white/20 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <span>Open Site</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
        </div>
      </div>

      {/* Project Meta Information Below Card */}
      <div className="mt-4 px-1">
        <div className="flex items-baseline justify-between">
          <h3 className="font-bold text-sm sm:text-base text-black tracking-tight">
            {project.title}
          </h3>
          <span className="text-[11px] font-mono text-neutral-400">
            {project.year || '2024'}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-md leading-relaxed font-normal">
          {project.description}
        </p>
      </div>
    </article>
  );
};
