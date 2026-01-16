import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="section-padding bg-background border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--champagne)) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div ref={ref} className="container-luxury relative z-10">
        <div className={`flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Left Content */}
          <div className="md:max-w-lg">
            <h2 className={`font-cormorant text-2xl md:text-3xl lg:text-4xl text-champagne font-normal italic mb-4 transition-all duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-4'}`}>
              Looking to transform your space?
            </h2>
            
            <p className={`font-cormorant text-base md:text-lg text-muted-foreground mb-1.5 transition-all duration-500 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Have a question for us? Let's talk.
            </p>
            
            <p className={`font-cormorant text-base md:text-lg text-muted-foreground transition-all duration-500 delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              We'd love to discuss your vision and bring it to life.
            </p>

            {/* Stats */}
            <div className={`mt-8 flex gap-8 md:gap-10 transition-all duration-500 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="group cursor-default">
                <div className="font-playfair text-2xl text-champagne mb-0.5 transition-transform duration-200 group-hover:scale-105">50+</div>
                <div className="font-cormorant text-xs text-muted-foreground tracking-wider uppercase">Projects</div>
              </div>
              <div className="group cursor-default">
                <div className="font-playfair text-2xl text-champagne mb-0.5 transition-transform duration-200 group-hover:scale-105">7+</div>
                <div className="font-cormorant text-xs text-muted-foreground tracking-wider uppercase">Years</div>
              </div>
              <div className="group cursor-default">
                <div className="font-playfair text-2xl text-champagne mb-0.5 transition-transform duration-200 group-hover:scale-105">100%</div>
                <div className="font-cormorant text-xs text-muted-foreground tracking-wider uppercase">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className={`md:border-l md:border-champagne/30 md:pl-8 lg:pl-10 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <Link
              to="/contact"
              className="btn-luxury group relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="flex items-center gap-2">
                Contact Us
                <ArrowRight 
                  className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`} 
                  strokeWidth={1.5}
                />
              </span>
            </Link>

            {/* Decorative Corner */}
            <div className="hidden md:block mt-6 relative">
              <div className={`w-10 h-px bg-champagne/40 transition-all duration-500 origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: '400ms' }} />
              <div className={`w-px h-10 bg-champagne/40 transition-all duration-500 origin-top ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} style={{ transitionDelay: '500ms' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;