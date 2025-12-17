import React from 'react';
import { SOCIAL_LINKS, RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1d1d1f] py-10 text-[#86868b] text-xs">
      <div className="max-w-[1024px] mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-[#424245]">
           <div>
              <h4 className="text-white font-semibold mb-2">Connect</h4>
              <ul className="space-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.platform}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {link.platform}
                    </a>
                  </li>
                ))}
              </ul>
           </div>
           <div>
              <h4 className="text-white font-semibold mb-2">Portfolio</h4>
              <ul className="space-y-2">
                 <li><a href="#home" className="hover:underline">Overview</a></li>
                 <li><a href="#skills" className="hover:underline">Tech Specs</a></li>
                 <li><a href="#projects" className="hover:underline">Highlights</a></li>
              </ul>
           </div>
           <div className="col-span-2 md:col-span-2">
              <p className="leading-relaxed">
                 More ways to connect: Email <a href={`mailto:${RESUME_DATA.email}`} className="text-[#2997ff] hover:underline">{RESUME_DATA.email}</a> for inquiries.
              </p>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
           <p>Copyright © {new Date().getFullYear()} David Cui. All rights reserved.</p>
           <div className="flex gap-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span className="text-[#424245]">|</span>
              <a href="#" className="hover:underline">Terms of Use</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;