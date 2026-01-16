import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-luxury-interior.jpg';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Full Width Image */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Image */}
        <img
          src={heroImage}
          alt="Luxury interior design by kalaaakaar design studio"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-center">
            <div className="overflow-hidden">
              <p 
                className={`font-cormorant text-sm md:text-base tracking-[0.4em] uppercase text-white/90 mb-6 transition-all duration-700 delay-100 drop-shadow-lg ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
              >
                Luxury Architecture & Interiors
              </p>
            </div>
            
            <div className="overflow-hidden pb-1">
              <h1 
                className={`font-playfair text-5xl md:text-7xl lg:text-8xl tracking-[0.02em] text-white font-light transition-all duration-700 delay-200 drop-shadow-xl [text-shadow:_0_2px_20px_rgb(0_0_0_/_40%)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
              >
                Designing
              </h1>
            </div>
            <div className="overflow-hidden pb-2">
              <h1 
                className={`font-playfair text-5xl md:text-7xl lg:text-8xl tracking-[0.02em] text-white font-light italic transition-all duration-700 delay-300 drop-shadow-xl [text-shadow:_0_2px_20px_rgb(0_0_0_/_40%)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
              >
                Dreams
              </h1>
            </div>
            
            {/* CTA Button */}
            <div className={`mt-12 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a 
                href="#projects" 
                className="inline-block px-8 py-3 border border-white/30 text-white text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-500 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;