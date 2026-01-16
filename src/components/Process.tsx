import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { FileSearch, PenTool, Hammer, KeyRound } from 'lucide-react';

const Process = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    { 
      number: '01', 
      icon: FileSearch,
      title: 'Briefing', 
      description: 'We begin with an exhaustive questionnaire to fully understand the client\'s needs and expectations.' 
    },
    { 
      number: '02', 
      icon: PenTool,
      title: 'Design', 
      description: 'Translating the brief into the blueprint. From moodboards to models, we design every detail.' 
    },
    { 
      number: '03', 
      icon: Hammer,
      title: 'Execution', 
      description: 'Bringing designs to life by building from the ground up. Everything from structure to decor.' 
    },
    { 
      number: '04', 
      icon: KeyRound,
      title: 'Handover', 
      description: 'The most anticipated moment, where we hand clients the keys to their new space.' 
    },
  ];

  return (
    <section className="section-padding bg-background overflow-hidden relative">
      {/* Simple Background */}
      <div className="absolute top-16 left-1/4 w-48 h-48 border border-champagne/5 rounded-full" />
      <div className="absolute bottom-16 right-1/4 w-32 h-32 border border-champagne/5 rounded-full" />

      <div ref={ref} className="container-luxury relative z-10">
        {/* Stats */}
        <div className="text-center mb-12 md:mb-16">
          <p className={`font-cormorant text-xl md:text-2xl lg:text-3xl text-champagne font-normal italic transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Over <span className="font-playfair tracking-wider">50,000</span> sq ft of premium residential spaces in execution across India
          </p>
          
          {/* Animated Line */}
          <div className={`w-32 h-px bg-champagne/60 mx-auto mt-6 origin-center transition-transform duration-500 delay-200 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
        </div>

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className={`font-cormorant text-2xl md:text-3xl text-champagne font-normal italic transition-all duration-500 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Our Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className={`hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-champagne/20 origin-left transition-transform duration-700 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === index;
              
              return (
                <div
                  key={step.number}
                  className={`text-center transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Icon with Ring */}
                  <div className="flex justify-center mb-5 relative">
                    {/* Outer Ring */}
                    <div className={`absolute inset-0 w-14 h-14 md:w-16 md:h-16 m-auto border rounded-full transition-all duration-300 ${isHovered ? 'scale-110 border-champagne' : 'scale-100 border-champagne/30'}`} />
                    
                    {/* Icon */}
                    <div className={`relative z-10 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}>
                      <Icon 
                        size={28} 
                        strokeWidth={1} 
                        className={`transition-colors duration-300 ${isHovered ? 'text-champagne' : 'text-champagne/70'}`}
                      />
                    </div>
                  </div>

                  {/* Number & Title */}
                  <div className="flex items-center gap-2 justify-center mb-3">
                    <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-all duration-300 ${isHovered ? 'border-champagne bg-champagne text-ivory' : 'border-champagne/50 text-champagne'}`}>
                      {step.number}
                    </span>
                    <h3 className={`font-playfair text-xs tracking-[0.08em] uppercase transition-colors duration-300 ${isHovered ? 'text-champagne' : 'text-champagne/80'}`}>
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={`font-cormorant text-sm leading-relaxed transition-colors duration-300 ${isHovered ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Line */}
        <div className={`mt-12 transition-opacity duration-500 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`w-full h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent origin-center transition-transform duration-700 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
        </div>
      </div>
    </section>
  );
};

export default Process;