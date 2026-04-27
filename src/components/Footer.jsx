import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/50 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-2xl font-bold tracking-tighter">
          <span className="text-white">Vignesh</span>
          <span className="text-accent-2">.N</span>
        </div>
        
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} Vignesh N. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#home" className="text-text-secondary hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-text-secondary hover:text-white transition-colors">About</a>
          <a href="#cases" className="text-text-secondary hover:text-white transition-colors">Work</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
