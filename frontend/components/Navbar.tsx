import React, { useState, useEffect } from 'react';
import { Apple, Menu, X } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Overview', href: '#home' },
    { name: 'Tech Specs', href: '#skills' },
    { name: 'Highlights', href: '#projects' },
    { name: 'History', href: '#experience' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav h-12' : 'bg-transparent h-14'}`}>
        <div className="max-w-[1024px] mx-auto px-6 h-full flex items-center justify-between text-xs font-medium tracking-wide">
          
          {/* Logo */}
          <a href="#home" className="text-white hover:text-gray-300 transition-colors">
            <span className="font-bold text-lg tracking-tight">David<span className="text-[#86868b]">Cui</span></span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[#e8e8ed]">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-white transition-colors opacity-80 hover:opacity-100"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href={`mailto:${RESUME_DATA.email}`}
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-3 py-1 rounded-full text-xs transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 pt-20 px-6 animate-fade-in md:hidden">
          <div className="flex flex-col gap-6 text-2xl font-semibold text-[#f5f5f7]">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-4 border-b border-[#424245]"
              >
                {item.name}
              </button>
            ))}
            <a 
              href={`mailto:${RESUME_DATA.email}`}
              className="text-left py-4 text-[#2997ff]"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;