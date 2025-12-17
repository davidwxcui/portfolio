import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      // Calculate how far into the section we are (0 to 1)
      // We start calculating when the top of the container hits the viewport top
      const scrollY = -top;
      const progress = Math.max(0, Math.min(1, scrollY / (height - window.innerHeight)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic Styles based on scroll
  const rotation = scrollProgress * 180; // Rotate 180 degrees
  const expansion = scrollProgress * 100; // Expand layers by 100px
  const glowIntensity = Math.max(0.2, scrollProgress * 1.5);

  return (
    <section id="home" className="bg-black">
      
      {/* 1. Intro Section */}
      <div className="min-h-[90vh] flex flex-col items-center justify-center pt-32 px-6 relative z-10 bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1a1a1a] rounded-full blur-[100px] pointer-events-none"></div>

        <RevealOnScroll className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-6 inline-block">
              <span className="text-[#f56300] text-xs font-semibold tracking-wide uppercase border border-[#f56300] px-3 py-1 rounded-full">
                  New Generation
              </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 text-white">
            David<span className="text-[#86868b]">Cui</span>.
          </h1>
          
          <p className="text-2xl md:text-4xl font-medium text-[#86868b] tracking-tight mb-8">
            The ultimate computer science student.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
            <a href="#projects" className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full font-medium text-lg transition-all hover:scale-105">
              View Highlights
            </a>
            <a href={RESUME_DATA.email} className="text-[#2997ff] hover:underline flex items-center gap-1 text-lg font-medium group">
              Contact <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </RevealOnScroll>
      </div>

      {/* 2. The Long Scroll Visualization - 3D Neural Chip */}
      <div ref={containerRef} className="relative h-[300vh] bg-black perspective-[1000px]">
        
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
           
           {/* Ambient Lighting */}
           <div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 blur-[150px] rounded-full transition-opacity duration-300"
             style={{ opacity: 0.2 + scrollProgress }}
           ></div>

           {/* 3D Chip Container */}
           <div 
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] transition-transform duration-75 ease-linear will-change-transform"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${60 - (scrollProgress * 40)}deg) rotateZ(${rotation}deg) scale(${1 + scrollProgress * 0.2})`
              }}
           >
              {/* Layer 1: Bottom Heatsink/Substrate */}
              <div 
                className="absolute inset-0 bg-[#0f0f11] rounded-[40px] border border-[#333] shadow-2xl"
                style={{ transform: `translateZ(${-50 - expansion}px)` }}
              >
                 {/* Gold Pins */}
                 <div className="absolute inset-2 border-[4px] border-dashed border-[#865c26]/30 rounded-[35px]"></div>
              </div>

              {/* Layer 2: Logic Board (Dark Silicon) */}
              <div 
                className="absolute inset-4 bg-[#151516] rounded-[32px] border border-[#444] flex items-center justify-center overflow-hidden"
                style={{ transform: `translateZ(${-20 - (expansion * 0.5)}px)` }}
              >
                  {/* Circuit Patterns */}
                  <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#222] to-transparent"></div>
              </div>

              {/* Layer 3: The Core (Glowing) */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-black rounded-2xl border border-[#555] shadow-[0_0_50px_rgba(50,173,230,0.4)] flex items-center justify-center"
                style={{ 
                   transform: `translateZ(0px)`,
                   boxShadow: `0 0 ${50 * glowIntensity}px rgba(50,173,230, ${glowIntensity})`
                }}
              >
                 <div className="relative z-10 text-center">
                    <div className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white to-[#888] bg-clip-text text-transparent">M-25</div>
                    <div className="text-[8px] md:text-[10px] text-[#86868b] tracking-[0.3em] mt-1 font-mono uppercase">Neural Engine</div>
                 </div>
                 {/* Shine effect on core */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
              </div>

              {/* Layer 4: Glass Shield / Branding Layer */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-[1px] rounded-[40px] border border-white/10"
                style={{ transform: `translateZ(${40 + expansion}px)` }}
              >
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/40 tracking-widest">
                    DAVID PRO ARCHITECTURE
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                     <div className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_5px_lime]"></div>
                     <div className="w-1 h-1 rounded-full bg-[#333]"></div>
                     <div className="w-1 h-1 rounded-full bg-[#333]"></div>
                  </div>
                  
                  {/* Reflection Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-[40px]"></div>
              </div>

              {/* Side Panels (to give thickness feeling) */}
              <div className="absolute inset-0 rounded-[40px] border-[2px] border-[#333] opacity-50" style={{ transform: 'translateZ(-10px)' }}></div>
              <div className="absolute inset-0 rounded-[40px] border-[2px] border-[#333] opacity-30" style={{ transform: 'translateZ(-25px)' }}></div>
           </div>
        </div>

        {/* Text Overlays - Scrolling content */}
        <div className="absolute inset-0 z-10 pointer-events-none">
           <div className="h-[50vh]"></div>

           {/* Section 1 Text */}
           <div className="h-screen flex items-center justify-center">
              <div 
                className="bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 max-w-4xl mx-4 transition-all duration-500"
                style={{ 
                  opacity: scrollProgress > 0.15 && scrollProgress < 0.45 ? 1 : 0,
                  transform: `scale(${scrollProgress > 0.15 && scrollProgress < 0.45 ? 1 : 0.9}) translateY(${scrollProgress * -50}px)`
                }}
              >
                <h2 className="text-4xl md:text-7xl font-bold text-center text-white tracking-tight leading-tight">
                    Titanium-class <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">Performance.</span>
                </h2>
              </div>
           </div>

           {/* Section 2 Text */}
           <div className="h-screen flex items-center justify-center">
              <div 
                className="bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 max-w-4xl mx-4 transition-all duration-500"
                style={{ 
                  opacity: scrollProgress > 0.55 && scrollProgress < 0.85 ? 1 : 0,
                  transform: `scale(${scrollProgress > 0.55 && scrollProgress < 0.85 ? 1 : 0.9}) translateY(${scrollProgress * -50}px)`
                }}
              >
                <h2 className="text-4xl md:text-7xl font-bold text-center text-white tracking-tight leading-tight">
                    Powered by <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Caffeine & Code.</span>
                </h2>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;