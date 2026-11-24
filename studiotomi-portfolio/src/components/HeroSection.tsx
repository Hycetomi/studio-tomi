import React, { forwardRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onBookCall?: () => void;
  className?: string;
}

export const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ onBookCall, className = '' }, ref) => {
    const services = [
      'Web design',
      'Content',
      'Product design',
      'Strategy',
      'Art Direction',
      'Creative direction',
    ];

    return (
      <div
        ref={ref}
        className={`absolute inset-0 pointer-events-auto flex flex-col justify-between py-12 md:py-16 lg:py-20 px-8 sm:px-12 md:px-16 lg:px-20 select-none z-10 ${className}`}
        aria-label="Studio Tomi Introduction"
      >
        {/* Top: Headline & CTA Button */}
        <div className="pt-2 md:pt-6 max-w-xl lg:max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-semibold tracking-[-0.03em] text-black leading-[1.15]">
            Studio Tomi is a design and strategy studio for ambitious businesses that are ready to be seen and understood.
          </h2>

          <div className="mt-7 md:mt-9">
            <button
              onClick={onBookCall}
              className="group inline-flex items-center gap-2 bg-black text-white hover:bg-neutral-800 active:scale-[0.99] transition-all duration-200 px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide rounded-none cursor-pointer shadow-sm"
            >
              <span>Book a call</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom: Services Column */}
        <div className="pt-8">
          <h3 className="text-sm md:text-base font-semibold text-black tracking-tight mb-2">
            Services
          </h3>
          <ul className="space-y-1 text-xs md:text-sm text-neutral-800 font-normal leading-relaxed">
            {services.map((service, index) => (
              <li key={index} className="hover:text-black transition-colors">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = 'HeroSection';
