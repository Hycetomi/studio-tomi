import React, { forwardRef } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  className?: string;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ activeSection, onNavigate, className = '' }, ref) => {
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'work', label: 'Work' },
      { id: 'about', label: 'About' },
      { id: 'process', label: 'Process' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'contact', label: 'Contact' },
    ];

    return (
      <nav
        ref={ref}
        className={`fixed top-8 right-8 md:right-12 lg:right-16 z-30 flex items-center gap-5 sm:gap-6 md:gap-8 transition-colors select-none ${className}`}
        aria-label="Main Navigation"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-xs md:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-black border-b border-black pb-0.5'
                  : 'text-neutral-500 hover:text-black'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    );
  }
);

Navbar.displayName = 'Navbar';
