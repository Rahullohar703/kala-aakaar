import { useScrollReveal } from '@/hooks/useScrollReveal';

const Essence = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  const words = "Award winning luxury architecture & interior design studio, crafting unique spaces since 2015".split(' ');

  return (
    <section id="essence-section" className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10 lg:pb-12 bg-background relative overflow-hidden">
      {/* Simple Decorative Elements */}
      <div className="absolute top-16 left-8 w-20 h-20 border border-champagne/10 rounded-full" />
      <div className="absolute bottom-16 right-16 w-14 h-14 border border-champagne/15" />
      
      <div ref={ref} className="container-luxury relative z-10">
        <div className="text-center">
          <h2 className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-champagne font-normal italic leading-relaxed max-w-4xl mx-auto pb-2">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-[0.25em] transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {word}
              </span>
            ))}
          </h2>
          
          {/* Animated underline */}
          <div className={`w-20 h-px bg-gradient-to-r from-transparent via-champagne to-transparent mx-auto mt-8 transition-all duration-500 delay-500 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
        </div>
      </div>
    </section>
  );
};

export default Essence;