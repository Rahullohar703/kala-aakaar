import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import heroImage from '@/assets/hero-luxury-interior.jpg';

const About = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section id="about" className="section-padding bg-background border-t border-border overflow-hidden">
      <div ref={ref} className="container-luxury">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div 
            className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-md group">
              {/* Decorative Frame */}
              <div className={`absolute inset-3 border transition-all duration-300 z-20 ${isImageHovered ? 'inset-4 border-champagne' : 'border-champagne/30'}`}>
                {/* Corner accents */}
                <div className={`absolute -top-px -left-px w-4 h-4 border-t border-l border-champagne transition-all duration-300 ${isImageHovered ? 'w-5 h-5' : ''}`} />
                <div className={`absolute -top-px -right-px w-4 h-4 border-t border-r border-champagne transition-all duration-300 ${isImageHovered ? 'w-5 h-5' : ''}`} />
                <div className={`absolute -bottom-px -left-px w-4 h-4 border-b border-l border-champagne transition-all duration-300 ${isImageHovered ? 'w-5 h-5' : ''}`} />
                <div className={`absolute -bottom-px -right-px w-4 h-4 border-b border-r border-champagne transition-all duration-300 ${isImageHovered ? 'w-5 h-5' : ''}`} />
              </div>
              
              {/* Image */}
              <img
                src={heroImage}
                alt="About kalaaakaar design studio"
                className={`w-full h-full object-cover transition-transform duration-500 ${isImageHovered ? 'scale-105' : 'scale-100'}`}
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-charcoal/40 via-charcoal/10 to-transparent transition-opacity duration-300 ${isImageHovered ? 'opacity-60' : 'opacity-30'}`} />

              {/* Floating Badge */}
              <div className={`absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-3 transition-all duration-300 ${isImageHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                <span className="font-playfair text-xs tracking-[0.1em] uppercase text-champagne">Est. 2018</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative">
            {/* Decorative Line */}
            <div className={`absolute -left-3 top-0 w-px h-full bg-gradient-to-b from-champagne via-champagne/50 to-transparent origin-top transition-transform duration-700 delay-200 ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} />
            
            <div className="overflow-hidden pb-1">
              <h2 className={`font-cormorant text-2xl md:text-3xl lg:text-4xl text-champagne font-normal italic mb-6 transition-all duration-500 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                About Us
              </h2>
            </div>

            <div className="space-y-4 font-cormorant">
              <p className={`text-base md:text-lg text-foreground leading-relaxed transition-all duration-500 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                kalaaakaar design studio is a luxury architecture and interior design company offering end-to-end services in the realm of luxury interiors. We pride ourselves on our unmatched aesthetic and attention to detail.
              </p>

              <p className={`text-base md:text-lg text-muted-foreground leading-relaxed transition-all duration-500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                We take on a select number of clients; we see ourselves as your partners right from the beginning and craft all our projects from scratch.
              </p>
            </div>


            {/* Decorative dots */}
            <div className={`absolute -right-4 bottom-0 flex flex-col gap-1.5 transition-opacity duration-500 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-1 rounded-full bg-champagne/40"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;