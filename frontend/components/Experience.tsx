import React from 'react';
import { EXPERIENCE } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-[#f5f5f7] text-black">
      <div className="max-w-[800px] mx-auto px-6">
        
        <RevealOnScroll>
          <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight border-b border-[#d2d2d7] pb-8">
            History.
          </h2>
        </RevealOnScroll>

        <div className="space-y-16">
          {EXPERIENCE.map((exp, index) => (
             <RevealOnScroll key={exp.id} delay={index * 100}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                   <div className="md:col-span-4">
                      <p className="text-xl font-bold">{exp.period}</p>
                      <p className="text-[#86868b] font-medium">{exp.company}</p>
                   </div>
                   <div className="md:col-span-8">
                      <h3 className="text-2xl font-semibold mb-4">{exp.role}</h3>
                      <ul className="space-y-4">
                         {exp.description.map((item, i) => (
                            <li key={i} className="text-[#1d1d1f] text-lg leading-relaxed border-b border-[#e5e5e5] pb-4 last:border-0">
                               {item}
                            </li>
                         ))}
                      </ul>
                   </div>
                </div>
             </RevealOnScroll>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-[#d2d2d7] text-center">
           <p className="text-[#86868b] text-sm">Designed in Vancouver.</p>
        </div>

      </div>
    </section>
  );
};

export default Experience;