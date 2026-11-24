import React, { forwardRef } from 'react';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>(
  ({ className = '' }, ref) => {
    return (
      <div
        id="about"
        ref={ref}
        className={`absolute inset-0 z-20 flex flex-col justify-center py-16 md:py-20 lg:py-24 px-8 sm:px-12 md:px-16 lg:px-24 overflow-y-auto no-scrollbar select-text ${className}`}
        aria-label="About Studio Tomi"
      >
        <div className="max-w-2xl lg:max-w-3xl my-auto">
          {/* Main Manifesto Headline */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-[-0.03em] text-black leading-[1.14] mb-8 md:mb-10">
            Excellence is never accidental.
          </h2>

          {/* Editorial Philosophy Paragraphs */}
          <div className="space-y-5 md:space-y-6 text-xs sm:text-sm md:text-[14.5px] lg:text-[15px] text-neutral-800 leading-[1.72] font-normal">
            <p>
              Timi Studio began with a simple belief: that good design should do more than look beautiful. It should mean something. It should make people feel something. And, above all, it should make a difference.
            </p>

            <p>
              Founded by a team of creatives with a shared appreciation for thoughtful design and a restless pursuit of excellence, Timi Studio was born from the desire to create work that is as considered as it is compelling. Work that balances clarity with character, purpose with imagination, and simplicity with depth.
            </p>

            <p>
              We believe the best ideas rarely arrive fully formed. They are discovered through curiosity, shaped by conversation, and refined through an almost obsessive attention to detail. This is why we approach every project as an opportunity to ask better questions, challenge the obvious, and uncover what makes a brand truly distinct.
            </p>

            <p>
              Our practice moves between strategy and design, identity and experience, the big picture and the smallest detail. We bring these elements together to create brands with a clear point of view, a recognisable presence, and the confidence to stand apart. We are drawn to the things that last. Not trends for their own sake, or design that demands attention without earning it, but ideas with substance. Ideas that feel inevitable once they exist. Ideas that give businesses a stronger sense of who they are and where they want to go.
            </p>

            <p>
              At Timi, excellence is not a finishing touch. It is the standard we begin with. It lives in the questions we ask, the decisions we make, and the care we give to every detail, seen and unseen.
            </p>

            <p>
              We started this studio to make meaningful work with people who care as much about the process as the outcome. To build lasting relationships, explore ambitious ideas, and create things we can stand behind long after they leave our hands. We are Timi Studio. Thoughtful by nature. Exacting by design. Always looking for a better idea.
            </p>
          </div>
        </div>
      </div>
    );
  }
);

AboutSection.displayName = 'AboutSection';
