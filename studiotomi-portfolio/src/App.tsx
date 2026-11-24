import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectCard } from './components/ProjectCard';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { PROJECTS } from './data/projects';
import { ArrowRight, Mail, Phone, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const worksContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const hero = heroRef.current;
    const navbar = navbarRef.current;
    const worksContainer = worksContainerRef.current;
    const track = trackRef.current;
    const about = aboutRef.current;
    const process = processRef.current;

    if (!container || !hero || !navbar || !worksContainer || !track || !about || !process) return;

    const getMetrics = () => {
      const sidebarWidth = window.innerWidth >= 1280 
        ? 288 // xl:w-72
        : window.innerWidth >= 1024 
          ? 256 // lg:w-64
          : window.innerWidth >= 768 
            ? 224 // md:w-56
            : 160; // sm:w-40

      const mainCanvasWidth = window.innerWidth - sidebarWidth;
      const totalTrackWidth = track.scrollWidth;
      const targetPadding = window.innerWidth >= 1024 ? 64 : 32;
      const horizontalDistance = Math.max(0, totalTrackWidth - mainCanvasWidth + targetPadding);
      const verticalRise = window.innerHeight * 0.36;

      return { mainCanvasWidth, horizontalDistance, verticalRise };
    };

    const ctx = gsap.context(() => {
      const { horizontalDistance, verticalRise } = getMetrics();

      // Initial visual states
      gsap.set(navbar, { opacity: 0, y: -20, pointerEvents: 'none' });
      gsap.set(hero, { opacity: 1, y: 0, pointerEvents: 'auto' });
      gsap.set(worksContainer, { opacity: 1, y: verticalRise, pointerEvents: 'auto' });
      gsap.set(track, { x: 0 });
      gsap.set(about, { opacity: 0, y: 70, pointerEvents: 'none' });
      gsap.set(process, { opacity: 0, y: 70, pointerEvents: 'none' });

      // Calculate total vertical scroll budget across all 4 stages:
      // Phase 1 (Hero -> Works): 1.2 * vh
      // Phase 2 (Horizontal Works): 1.1 * horizontalDistance
      // Phase 3 (Works -> About): 1.2 * vh
      // Phase 4 (About -> Process): 1.2 * vh
      const verticalPhasePx = window.innerHeight * 1.2;
      const horizontalPhasePx = horizontalDistance * 1.1;
      const aboutPhasePx = window.innerHeight * 1.2;
      const processPhasePx = window.innerHeight * 1.2;
      const totalScrollDistance = verticalPhasePx + horizontalPhasePx + aboutPhasePx + processPhasePx;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${totalScrollDistance}`,
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
            // Dynamic Active navigation tab across 4 sections
            if (self.progress < 0.16) {
              setActiveSection('home');
            } else if (self.progress >= 0.16 && self.progress < 0.58) {
              setActiveSection('work');
            } else if (self.progress >= 0.58 && self.progress < 0.82) {
              setActiveSection('about');
            } else {
              setActiveSection('process');
            }
          },
        },
      });

      // ============================================================
      // PHASE 1: Hero -> Works (0.0s to 1.2s)
      // Works rises up, Hero fades out and moves up
      // ============================================================
      tl.to(
        hero,
        {
          opacity: 0,
          y: -70,
          ease: 'power2.inOut',
          duration: 1.2,
          pointerEvents: 'none',
        },
        0
      );

      tl.to(
        navbar,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          duration: 0.8,
          pointerEvents: 'auto',
        },
        0.3
      );

      tl.to(
        worksContainer,
        {
          y: 0,
          ease: 'power2.inOut',
          duration: 1.2,
        },
        0
      );

      // ============================================================
      // PHASE 2: Horizontal Works Reel (1.2s to 4.4s)
      // Viewport translates horizontally across project cards
      // ============================================================
      tl.to(
        track,
        {
          x: () => -getMetrics().horizontalDistance,
          ease: 'none',
          duration: 3.2,
        },
        1.2
      );

      // ============================================================
      // PHASE 3: Works -> About (4.4s to 5.6s)
      // Works section fades away, About section appears
      // ============================================================
      tl.to(
        worksContainer,
        {
          opacity: 0,
          y: -70,
          ease: 'power2.inOut',
          duration: 1.2,
          pointerEvents: 'none',
        },
        4.4
      );

      tl.to(
        about,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.inOut',
          duration: 1.2,
          pointerEvents: 'auto',
        },
        4.4
      );

      // ============================================================
      // PHASE 4: About -> Process (5.6s to 6.8s)
      // About section fades away, Process section appears
      // ============================================================
      tl.to(
        about,
        {
          opacity: 0,
          y: -70,
          ease: 'power2.inOut',
          duration: 1.2,
          pointerEvents: 'none',
        },
        5.6
      );

      tl.to(
        process,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.inOut',
          duration: 1.2,
          pointerEvents: 'auto',
        },
        5.6
      );

      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        tl.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        window.scrollBy({ top: 320, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        window.scrollBy({ top: -320, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'work') {
      window.scrollTo({ top: scrollMax * 0.35, behavior: 'smooth' });
    } else if (sectionId === 'about') {
      window.scrollTo({ top: scrollMax * 0.70, behavior: 'smooth' });
    } else if (sectionId === 'process') {
      window.scrollTo({ top: scrollMax * 0.95, behavior: 'smooth' });
    } else if (sectionId === 'contact') {
      setIsContactModalOpen(true);
    } else {
      window.scrollTo({ top: scrollMax * 0.95, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-white text-black min-h-screen selection:bg-black selection:text-white font-sans">
      {/* 1. Persistent Dark Left Sidebar ("STUDIO TOMI") */}
      <Sidebar />

      {/* 2. Top Right Navigation (Persistent & updates actively) */}
      <Navbar 
        ref={navbarRef}
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* 3. Pinned Multi-Stage Interactive Canvas */}
      <main
        ref={containerRef}
        className="ml-40 md:ml-56 lg:ml-64 xl:ml-72 h-screen overflow-hidden relative bg-white"
      >
        {/* Stage A: Hero Section (Desktop - 30) */}
        <HeroSection 
          ref={heroRef} 
          onBookCall={() => setIsContactModalOpen(true)} 
        />

        {/* Stage B: Works Showcase Container (Desktop - 31) */}
        <div
          ref={worksContainerRef}
          className="absolute inset-0 z-20 pointer-events-auto flex items-center will-change-transform"
        >
          {/* Horizontal Project Track */}
          <div
            ref={trackRef}
            className="flex flex-nowrap items-center h-full will-change-transform pr-16 md:pr-24 lg:pr-32"
            style={{
              width: 'max-content',
              paddingLeft: 'min(62vw, 680px)',
            }}
          >
            {/* Project Cards Sequence */}
            <section
              id="work"
              className="flex flex-nowrap items-center gap-10 sm:gap-14 md:gap-18 lg:gap-24"
              aria-label="Studio Works"
            >
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </section>

            {/* Transition Affordance Card */}
            <div className="flex-shrink-0 w-44 sm:w-56 h-full flex flex-col justify-center px-8 border-l border-neutral-100 ml-8 text-neutral-400">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                Studio Philosophy
              </span>
              <p className="text-xs text-neutral-500 font-mono mt-1 flex items-center gap-1.5">
                <span>About Timi</span>
                <ArrowRight className="w-3 h-3" />
              </p>
            </div>
          </div>
        </div>

        {/* Stage C: About Section (Desktop - 32) */}
        <AboutSection ref={aboutRef} />

        {/* Stage D: Process Section (Desktop - 34) */}
        <ProcessSection ref={processRef} />
      </main>

      {/* Bottom Progress Bar & State Indicator */}
      <div className="fixed bottom-6 right-8 md:right-12 z-20 flex items-center gap-4 pointer-events-none">
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
          <span>
            {activeSection === 'home'
              ? 'Scroll to enter works'
              : activeSection === 'work'
              ? 'Horizontal works reel'
              : activeSection === 'about'
              ? 'Studio Manifesto'
              : 'Studio Process'}
          </span>
          <ArrowRight className="w-3 h-3 animate-pulse" />
        </div>
        <div className="w-24 md:w-32 h-[2px] bg-neutral-200 overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-100 ease-out"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>
        <span className="text-[10px] font-mono text-neutral-500 w-8 text-right">
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>

      {/* Contact / Book Call Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white border border-neutral-200 p-8 shadow-2xl">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-6 right-6 p-1 text-neutral-500 hover:text-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
              Studio Tomi
            </span>
            <h3 className="text-2xl font-semibold tracking-tight text-black mt-1 mb-3">
              Book a Strategy Call
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
              Let's talk about your project scope, brand positioning, and digital experience goals.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@studiotomi.com"
                className="flex items-center justify-between p-4 border border-neutral-200 hover:border-black transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-neutral-500 group-hover:text-black" />
                  <div>
                    <p className="text-xs font-semibold text-black">Email the studio</p>
                    <p className="text-[11px] text-neutral-500 font-mono">hello@studiotomi.com</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-between p-4 border border-neutral-200 hover:border-black transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-neutral-500 group-hover:text-black" />
                  <div>
                    <p className="text-xs font-semibold text-black">Direct line</p>
                    <p className="text-[11px] text-neutral-500 font-mono">+1 (555) 019-2834</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </a>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-end">
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-xs text-neutral-500 hover:text-black cursor-pointer font-medium"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
