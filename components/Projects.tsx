import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-black relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0071e3]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <RevealOnScroll>
          <div className="mb-24">
             <h2 className="text-5xl md:text-8xl font-semibold text-white tracking-tight mb-6">
               Highlights.
             </h2>
             <p className="text-2xl md:text-3xl text-[#86868b] font-medium max-w-2xl leading-relaxed">
               Engineering that matters. <br/>
               <span className="text-white/40">Selected works from the lab.</span>
             </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-16 md:gap-24">
          {PROJECTS.map((project, index) => (
             <RevealOnScroll key={project.id} className="group">
                <div className="flex flex-col md:flex-row bg-[#1c1c1e] rounded-[32px] overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 shadow-2xl">
                   
                   {/* Image Section - Left (or Top) */}
                   <div className="w-full md:w-[55%] relative h-[300px] md:h-[500px] overflow-hidden bg-[#000]">
                       {/* Image */}
                       <img 
                         src={project.imageUrl} 
                         alt={project.title} 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                       />
                       
                       {/* Overlay Gradient to blend with content on mobile, or just distinct look */}
                       <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-transparent to-transparent md:bg-gradient-to-l md:from-[#1c1c1e] md:via-transparent md:to-transparent opacity-90"></div>
                   </div>

                   {/* Content Section - Right (or Bottom) */}
                   <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-center relative bg-[#1c1c1e]">
                      
                      <div className="mb-auto">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.map(tech => (
                                <span key={tech} className="text-[10px] font-bold text-[#86868b] uppercase tracking-wider border border-[#424245] px-2.5 py-1 rounded-full bg-[#2c2c2e]">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                            {project.title}
                        </h3>
                        
                        <p className="text-lg text-[#86868b] leading-relaxed font-medium">
                            {project.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 mt-10 pt-8 border-t border-white/5">
                         {project.repoUrl && (
                             <a 
                               href={project.repoUrl} 
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex items-center gap-2 text-white bg-[#333] hover:bg-[#444] px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                             >
                                <Github size={18} /> Source Code
                             </a>
                         )}
                         {project.demoUrl && (
                            <a 
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-white bg-[#0071e3] hover:bg-[#0077ed] px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
                            >
                               Live Demo <ArrowRight size={18} />
                            </a>
                         )}
                      </div>
                   </div>

                </div>
             </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;