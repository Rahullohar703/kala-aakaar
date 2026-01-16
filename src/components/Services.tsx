import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useParallax } from '@/hooks/useParallax';
import { useState } from 'react';

const Services = () => {
  const { ref, isVisible } = useScrollReveal(0.15);
  const { ref: parallaxRef, offset } = useParallax<HTMLDivElement>({ speed: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<'turnkey' | 'design' | null>(null);

  const turnkeyServices = [
    'Architecture & Interior Design',
    'Detailed drawings & specifications',
    'Material procurement',
    'Site execution & coordination',
    'Quality control',
    'Final handover',
  ];

  const designOnlyServices = [
    'Space planning',
    'Concept design',
    '3D visuals',
    'Detailed drawings',
    'Material & finish specifications',
  ];

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 border border-champagne/5 rounded-full" />
        <div className="absolute bottom-40 right-20 w-60 h-60 border border-champagne/5 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-champagne/10 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-champagne/10 rounded-full" />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, hsl(var(--champagne) / 0.05) 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 80%, hsl(var(--champagne) / 0.05) 0%, transparent 50%)`
        }}
      />

      <div ref={ref} className="container-luxury relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="caption mb-4">What We Offer</p>
          <h2 className="heading-section text-foreground">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Turnkey Design & Build */}
          <div 
            className={`p-8 md:p-12 border transition-all duration-700 ease-luxury card-hover ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${hoveredCard === 'turnkey' ? 'border-champagne bg-champagne/5' : 'border-border/50'}`}
            style={{ transitionDelay: '200ms' }}
            onMouseEnter={() => setHoveredCard('turnkey')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="mb-8">
              <p className="caption text-champagne mb-2">Complete Solution</p>
              <h3 className={`font-playfair text-xl md:text-2xl tracking-[0.05em] transition-colors duration-500 ${hoveredCard === 'turnkey' ? 'text-champagne' : 'text-foreground'}`}>
                Turnkey Design & Build
              </h3>
            </div>

            <p className="font-cormorant text-lg text-muted-foreground mb-8">
              Single-point responsibility from concept to completion.
            </p>

            <ul className="space-y-3 font-cormorant">
              {turnkeyServices.map((service, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-3 text-foreground/80 transition-all duration-300 ${hoveredCard === 'turnkey' ? 'translate-x-2' : ''}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 transition-all duration-300 ${hoveredCard === 'turnkey' ? 'bg-champagne scale-125' : 'bg-champagne/50'}`} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Design Only */}
          <div 
            className={`p-8 md:p-12 border transition-all duration-700 ease-luxury card-hover ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${hoveredCard === 'design' ? 'border-champagne bg-champagne/5' : 'border-border/50'}`}
            style={{ transitionDelay: '300ms' }}
            onMouseEnter={() => setHoveredCard('design')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="mb-8">
              <p className="caption text-champagne mb-2">Pure Design</p>
              <h3 className={`font-playfair text-xl md:text-2xl tracking-[0.05em] transition-colors duration-500 ${hoveredCard === 'design' ? 'text-champagne' : 'text-foreground'}`}>
                Design-Only
              </h3>
            </div>

            <p className="font-cormorant text-lg text-muted-foreground mb-8">
              For clients seeking pure design expertise.
            </p>

            <ul className="space-y-3 font-cormorant mb-8">
              {designOnlyServices.map((service, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-3 text-foreground/80 transition-all duration-300 ${hoveredCard === 'design' ? 'translate-x-2' : ''}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 transition-all duration-300 ${hoveredCard === 'design' ? 'bg-champagne scale-125' : 'bg-champagne/50'}`} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <p className="font-cormorant text-sm text-muted-foreground italic border-t border-border/30 pt-6">
              Execution and supervision are not part of this scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;