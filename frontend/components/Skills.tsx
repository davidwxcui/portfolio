import React from 'react';
import { Cpu, Globe, Server, Terminal, Zap, Layers } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-[#101010] relative">
      <div className="max-w-[1024px] mx-auto px-6">
        
        <RevealOnScroll>
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
              Technical <br/> Specifications.
            </h2>
            <p className="text-2xl text-[#86868b] font-medium max-w-2xl">
              Engineered for versatility. Capable of handling intense full-stack workloads with ease.
            </p>
          </div>
        </RevealOnScroll>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* Card 1: Main Chip (Systems) */}
            <RevealOnScroll className="md:col-span-2 row-span-1 glass-panel p-8 flex flex-col justify-between relative group hover:scale-[1.01] transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1e] to-[#000] -z-10"></div>
               <div className="flex justify-between items-start">
                  <Cpu size={40} className="text-[#a1a1a6]" />
                  <span className="text-[#86868b] font-semibold text-xs uppercase tracking-widest border border-[#333] px-2 py-1 rounded">Core Arch</span>
               </div>
               <div>
                 <h3 className="text-3xl font-bold text-white mb-2">Systems Ready.</h3>
                 <p className="text-[#86868b] font-medium">Built on C++ and Python architecture. Optimized for low-level processing and high-efficiency algorithms.</p>
               </div>
               {/* Visual Chip Graphic */}
               <div className="absolute top-1/2 right-10 -translate-y-1/2 w-32 h-32 border border-[#333] rounded-2xl flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                   <div className="text-[#fff] font-mono text-xs">M-SERIES</div>
               </div>
            </RevealOnScroll>

            {/* Card 2: Frontend */}
            <RevealOnScroll delay={100} className="md:col-span-1 glass-panel p-8 flex flex-col justify-between bg-[#1d1d1f] hover:bg-[#2c2c2e] transition-colors">
               <Globe size={40} className="text-[#0071e3]" />
               <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Liquid Retina UI.</h3>
                  <p className="text-[#86868b] text-sm">React, Next.js, and TypeScript ensure pixel-perfect rendering.</p>
               </div>
            </RevealOnScroll>

            {/* Card 3: Backend */}
            <RevealOnScroll delay={200} className="md:col-span-1 glass-panel p-8 flex flex-col justify-between bg-[#1d1d1f] hover:bg-[#2c2c2e] transition-colors">
               <Server size={40} className="text-[#32d74b]" />
               <div>
                  <h3 className="text-2xl font-bold text-white mb-2">All-Day Power.</h3>
                  <p className="text-[#86868b] text-sm">Robust backend services with Node.js, Express, and AWS integration.</p>
               </div>
            </RevealOnScroll>

            {/* Card 4: AI/ML */}
            <RevealOnScroll delay={300} className="md:col-span-2 glass-panel p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
               <div className="z-10">
                   <div className="w-16 h-16 mx-auto mb-6 rounded-full ai-gradient blur-xl opacity-80 group-hover:scale-150 transition-transform duration-1000"></div>
                   <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#32ADE6] via-[#AF52DE] to-[#FF2D55] mb-2">
                       Neural Engine.
                   </h3>
                   <p className="text-[#fff] font-medium text-lg">
                       Advanced AI integration with Python & OpenCV.
                   </p>
                   <p className="text-[#86868b] mt-2">1st Place DreamHack Winner.</p>
               </div>
            </RevealOnScroll>
        </div>
        
        {/* Comparison Chart / Radar Substitute */}
        <RevealOnScroll delay={400} className="mt-6 p-8 border-t border-[#333]">
           <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { label: 'Frontend', val: '90%' },
                { label: 'Backend', val: '85%' },
                { label: 'Systems', val: '80%' },
                { label: 'Soft Skills', val: '95%' }
              ].map((item) => (
                <div key={item.label} className="text-center">
                   <div className="text-3xl font-bold text-white mb-1">{item.val}</div>
                   <div className="text-xs text-[#86868b] font-medium uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
           </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Skills;