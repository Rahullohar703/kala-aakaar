import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import ventureLuxuryInterior from '@/assets/venture-luxury-interior.jpg';

const Venture = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Simple Background Decoration */}
      <div className="absolute top-8 right-8 w-24 h-24 border border-champagne/5 rotate-45" />
      <div className="absolute bottom-16 left-16 w-32 h-32 border border-champagne/5 rounded-full" />

      <div ref={ref} className="container-luxury relative z-10">
        {/* Header Row */}
        <div className={`mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="font-cormorant text-xl md:text-2xl lg:text-3xl text-champagne font-normal italic max-w-xl leading-relaxed">
            Introducing our ultra luxury interior design ventures across India
          </h2>
        </div>

        {/* Image */}
        <div 
          className={`transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md group">
            {/* Corner Accents */}
            <div className={`absolute top-3 left-3 w-8 h-px bg-champagne z-20 transition-transform duration-300 origin-left ${isHovered ? 'scale-x-125' : 'scale-x-100'}`} />
            <div className={`absolute top-3 left-3 w-px h-8 bg-champagne z-20 transition-transform duration-300 origin-top ${isHovered ? 'scale-y-125' : 'scale-y-100'}`} />
            <div className={`absolute bottom-3 right-3 w-8 h-px bg-champagne z-20 transition-transform duration-300 origin-right ${isHovered ? 'scale-x-125' : 'scale-x-100'}`} />
            <div className={`absolute bottom-3 right-3 w-px h-8 bg-champagne z-20 transition-transform duration-300 origin-bottom ${isHovered ? 'scale-y-125' : 'scale-y-100'}`} />
            
            {/* Overlay */}
            <div className={`absolute inset-0 bg-charcoal/10 z-10 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
            
            <img
              src={ventureLuxuryInterior}
              alt="Ultra luxury interior design"
              loading="lazy"
              decoding="async"
              className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venture;