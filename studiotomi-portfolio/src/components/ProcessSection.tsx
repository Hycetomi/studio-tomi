import React, { forwardRef, useState } from 'react';

interface ProcessStep {
  id: string;
  name: string;
  subtitle: string;
  description: string[];
  image: string;
  imageAlt: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'listen',
    name: 'Listen',
    subtitle: 'Discovery & Deep Immersion',
    description: [
      'We started this studio to make meaningful work with people who care as much about the process as the outcome. To build lasting relationships, explore ambitious ideas, and create things we can stand behind long after they leave our hands.',
      'We are Timi Studio. Thoughtful by nature. Exacting by design. Always looking for a better idea.',
    ],
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Studio discussion and discovery session',
  },
  {
    id: 'define',
    name: 'Define',
    subtitle: 'Strategic Architecture & Positioning',
    description: [
      'Clarity precedes creativity. We synthesize research, cultural tension, and brand objectives into a sharp, singular positioning framework.',
      'This strategic blueprint serves as the anchor for all creative and technical execution, ensuring every design decision carries commercial weight and unmistakable distinctiveness.',
    ],
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Strategic definition and concept mapping',
  },
  {
    id: 'evolve',
    name: 'Evolve',
    subtitle: 'Prototyping & Crafting the System',
    description: [
      'Where strategy becomes tangible craft. We prototype, experiment, and sculpt identity systems, interactive platforms, and media expressions with obsessive attention to craft.',
      'Every interaction curve, typographic relationship, and spatial layout is rigorously tested to balance beauty with utility.',
    ],
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Creative iteration and design prototyping',
  },
  {
    id: 'review',
    name: 'Review',
    subtitle: 'Calibration, Refinement & Launch',
    description: [
      'Excellence lives in the final details. We stress-test digital experiences across devices, fine-tune motion timings, and align every element before launch.',
      'We treat launch not as an end, but as the activation of an enduring brand system built to grow.',
    ],
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Quality review and final system calibration',
  },
];

interface ProcessSectionProps {
  className?: string;
}

export const ProcessSection = forwardRef<HTMLDivElement, ProcessSectionProps>(
  ({ className = '' }, ref) => {
    const [activeTabId, setActiveTabId] = useState<string>('listen');

    const currentStep =
      PROCESS_STEPS.find((step) => step.id === activeTabId) || PROCESS_STEPS[0];

    return (
      <div
        id="process"
        ref={ref}
        className={`absolute inset-0 z-20 flex flex-col justify-center py-16 md:py-20 lg:py-24 px-8 sm:px-12 md:px-16 lg:px-24 select-text ${className}`}
        aria-label="Process Overview"
      >
        <div className="w-full max-w-6xl my-auto">
          {/* 3-Column Studio Process Layout matching Desktop - 34 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Column 1: Interactive Process Step Titles (Desktop - 34 Left) */}
            <nav 
              className="md:col-span-3 flex flex-row md:flex-col gap-4 sm:gap-6 md:gap-7 select-none"
              aria-label="Process Steps"
            >
              {PROCESS_STEPS.map((step) => {
                const isActive = step.id === activeTabId;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveTabId(step.id)}
                    className={`text-left font-display font-bold text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] tracking-tight leading-none transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'text-black opacity-100 scale-100 translate-x-1'
                        : 'text-neutral-300 hover:text-neutral-500 opacity-80'
                    }`}
                  >
                    {step.name}
                  </button>
                );
              })}
            </nav>

            {/* Column 2: Step Description Copy (Desktop - 34 Center) */}
            <div className="md:col-span-5 max-w-md">
              <div 
                key={currentStep.id} 
                className="animate-fade-in space-y-4"
              >
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Phase 0{PROCESS_STEPS.findIndex((s) => s.id === currentStep.id) + 1} / {currentStep.subtitle}
                </div>

                {currentStep.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-xs sm:text-sm md:text-[14px] lg:text-[14.5px] text-neutral-800 leading-[1.7] font-normal"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Column 3: Stylized Scanline/Raster Studio Image (Desktop - 34 Right) */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 aspect-[3.5/4.5] overflow-hidden bg-neutral-100 shadow-xl border border-neutral-200">
                {/* Photo with dynamic change on tab click */}
                <img
                  key={currentStep.id}
                  src={currentStep.image}
                  alt={currentStep.imageAlt}
                  className="w-full h-full object-cover filter contrast-125 brightness-95 animate-fade-in transition-transform duration-700 hover:scale-105"
                />

                {/* Halftone / Scanline horizontal raster overlay matching Desktop - 34 */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-45 mix-blend-multiply"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, #111 0px, #111 1.5px, transparent 1.5px, transparent 3.5px)',
                  }}
                />

                {/* Subtle vignette border */}
                <div className="absolute inset-0 border border-neutral-900/10 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
);

ProcessSection.displayName = 'ProcessSection';
