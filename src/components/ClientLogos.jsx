import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "https://res.cloudinary.com/dmlh4ae7b/image/upload/v1777293459/IMG-20260427-WA0040_p2imnr.png",
  "https://res.cloudinary.com/dmlh4ae7b/image/upload/v1777293459/Screenshot_20260427-174824_Instagram_ojqz8p.png",
  "https://res.cloudinary.com/dmlh4ae7b/image/upload/v1777293459/IMG-20260427-WA0042_rjlpbx.png",
  "https://res.cloudinary.com/dmlh4ae7b/image/upload/v1777293459/IMG-20260427-WA0043_srwe8r.png",
  "https://res.cloudinary.com/dmlh4ae7b/image/upload/v1777293459/IMG-20260427-WA0041_v6itfj.png",
  "https://res.cloudinary.com/dmlh4ae7b/image/upload/v1777293784/Screenshot_20260427-180709_the_fish_house_jzo0o7.png",
  "https://res.cloudinary.com/dmlh4ae7b/image/upload/v1777293459/IMG-20260427-WA0044_wdibck.png"
];

// Duplicate logos array to ensure seamless infinite scrolling
const doubledLogos = [...logos, ...logos];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-primary-bg relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base font-semibold tracking-widest text-accent-1 uppercase"
        >
          Trusted by Premier Salons & Brands
        </motion.p>
      </div>

      {/* Marquee container */}
      <div className="flex overflow-hidden relative w-full">
        {/* Fading edges for premium effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primary-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary-bg to-transparent z-10 pointer-events-none" />
        
        {/* Animated track */}
        <div className="flex w-max animate-marquee gap-12 md:gap-24 px-6 md:px-12 items-center">
          {doubledLogos.map((logo, index) => {
            const isWhiteLogo = logo.includes("IMG-20260427-WA0040_p2imnr.png");
            
            return (
              <div 
                key={index} 
                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
              >
                <img 
                  src={logo} 
                  alt={`Client Logo ${index + 1}`} 
                  className={`w-full h-full object-contain transition-all duration-300 drop-shadow-md ${
                    isWhiteLogo 
                      ? 'brightness-0 invert opacity-80 hover:opacity-100' 
                      : 'filter grayscale hover:grayscale-0'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
