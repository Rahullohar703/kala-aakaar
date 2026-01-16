import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import seamlessExperienceInterior from '@/assets/seamless-experience-interior.jpg';
import { ArrowRight } from 'lucide-react';

const SeamlessExperience = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Simple Background Elements */}
      <div className="absolute top-1/4 left-8 w-16 h-16 border border-champagne/5 rounded-full" />
      <div className="absolute bottom-1/4 right-8 w-24 h-24 border border-champagne/5" />

      <div ref={ref} className="container-luxury relative z-10">
        {/* Header */}
        <div className={`text-center mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-champagne font-normal italic mb-3">
            A Seamless Experience
          </h2>
          <p className="font-cormorant text-base md:text-lg text-muted-foreground">
            With kalaaakaar, transforming your space is as smooth an experience as it gets
          </p>
        </div>

        {/* Image with Gold Left Border */}
        <div 
          className={`transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <div className="flex group">
            {/* Gold Border */}
            <div className={`w-1.5 flex-shrink-0 transition-all duration-300 ${isImageHovered ? 'bg-champagne w-2' : 'bg-champagne/80'}`} />
            
            {/* Image Container */}
            <div className="flex-grow aspect-[16/9] overflow-hidden relative">
              {/* Overlay */}
              <div className={`absolute inset-0 bg-charcoal/10 z-10 transition-opacity duration-300 ${isImageHovered ? 'opacity-0' : 'opacity-100'}`} />
              
              <img
                src={seamlessExperienceInterior}
                alt="Seamless interior design experience"
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover transition-transform duration-500 ${isImageHovered ? 'scale-105' : 'scale-100'}`}
              />
            </div>
          </div>
        </div>

        {/* Bottom Text & CTA */}
        <div className={`text-center mt-8 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-cormorant text-base md:text-lg text-muted-foreground mb-6">
            While we do the heavy lifting, all you need to do is walk into your brand new space.
          </p>
          
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-luxury group"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            <span className="flex items-center gap-2">
              See All Projects
              <ArrowRight 
                className={`w-4 h-4 transition-transform duration-300 ${isButtonHovered ? 'translate-x-1' : ''}`}
                strokeWidth={1.5}
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeamlessExperience;