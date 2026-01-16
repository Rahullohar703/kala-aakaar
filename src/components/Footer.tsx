import { Instagram, Mail, ArrowUp } from 'lucide-react';
import { useState } from 'react';
import kalaAakaarLogo from '@/assets/kala-aakaar-logo-new.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/kala_aakaardesignstudio', label: 'Instagram' },
    { icon: Mail, href: 'mailto:kala.aakaardesign@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 md:py-14 bg-background border-t border-champagne/40 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 right-16 w-24 h-24 border border-champagne/5 rounded-full" />
        <div className="absolute bottom-16 left-8 w-16 h-16 border border-champagne/5" />
      </div>

      <div className="container-luxury relative z-10">
        {/* Main Footer Content */}
        <div className="pb-8 border-b border-border">
          {/* Logo & Address */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              {/* Logo */}
              <div className="mb-8 group cursor-pointer" onClick={scrollToTop}>
                <img 
                  src={kalaAakaarLogo} 
                  alt="Kala Aakaar Design Studio" 
                  className="h-12 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Address */}
              <div className="font-cormorant text-muted-foreground leading-relaxed">
                <p>Kala Aakaar Design Studio</p>
                <p>Pune, Maharashtra</p>
                <p>India</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`w-10 h-10 border flex items-center justify-center transition-all duration-500 ${
                    hoveredSocial === index 
                      ? 'border-champagne bg-champagne text-background scale-110' 
                      : 'border-champagne/50 text-champagne hover:border-champagne'
                  }`}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={social.label}
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-cormorant text-sm text-muted-foreground">
            © {currentYear} Kala Aakaar Design Studio. All Rights Reserved.
          </p>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-champagne transition-all duration-300 group"
          >
            <span className="tracking-wider uppercase">Back to Top</span>
            <div className="w-8 h-8 border border-champagne/50 rounded-full flex items-center justify-center group-hover:border-champagne group-hover:bg-champagne group-hover:text-background transition-all duration-300">
              <ArrowUp size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;