import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside 
      className="fixed left-0 top-0 bottom-0 z-40 w-36 sm:w-44 md:w-56 lg:w-64 xl:w-72 bg-[#151219] flex items-center justify-center select-none shadow-2xl"
      aria-label="Studio Tomi Brand Banner"
    >
      <div className="h-full flex items-center justify-center py-12">
        <h1 
          className="font-display font-black tracking-tight text-[#d2d2d6] text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[110px] leading-none whitespace-nowrap cursor-default hover:text-white transition-colors duration-300"
          style={{
            writingMode: 'vertical-lr',
            textOrientation: 'mixed',
          }}
        >
          STUDIO TOMI
        </h1>
      </div>
    </aside>
  );
};
