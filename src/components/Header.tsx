import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import kalaAakaarLogo from '@/assets/kala-aakaar-logo-new.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero', isRoute: false },
    { label: 'About', id: 'about', isRoute: false },
    { label: 'Projects', id: 'projects', isRoute: false },
    { label: 'Contact', id: '/contact', isRoute: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      {/* Pill-shaped navbar */}
      <nav 
        className={`flex items-center justify-between md:justify-start gap-1 px-3 md:px-2 py-2 rounded-2xl md:rounded-full w-full md:w-auto transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl shadow-lg border border-border/50' 
            : 'bg-white/10 backdrop-blur-md border border-white/20'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="p-1 rounded-full transition-all duration-300 hover:scale-105"
        >
          <img 
            src={kalaAakaarLogo} 
            alt="Kala Aakaar Design Studio" 
            className="h-10 w-10 object-cover rounded-full"
          />
        </button>

        {/* Divider */}
        <div className={`hidden md:block w-px h-5 ${isScrolled ? 'bg-border' : 'bg-white/30'}`} />

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            item.isRoute ? (
              <Link
                key={item.id}
                to={item.id}
                onClick={() => window.scrollTo(0, 0)}
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`relative px-4 py-2 rounded-full text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${
                  isScrolled 
                    ? `text-foreground/70 hover:text-foreground ${hoveredNav === item.id ? 'bg-muted' : ''}` 
                    : `text-white/80 hover:text-white ${hoveredNav === item.id ? 'bg-white/10' : ''}`
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`relative px-4 py-2 rounded-full text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${
                  isScrolled 
                    ? `text-foreground/70 hover:text-foreground ${hoveredNav === item.id ? 'bg-muted' : ''}` 
                    : `text-white/80 hover:text-white ${hoveredNav === item.id ? 'bg-white/10' : ''}`
                }`}
              >
                {item.label}
              </button>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'text-foreground hover:bg-muted' 
              : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          <div className="relative w-4 h-4">
            <Menu 
              size={16} 
              strokeWidth={1.5} 
              className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
            />
            <X 
              size={16} 
              strokeWidth={1.5} 
              className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-4 right-4 bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="p-4 flex flex-col gap-2">
          {navItems.map((item, index) => (
            item.isRoute ? (
              <Link
                key={item.id}
                to={item.id}
                onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
                className="px-4 py-3 rounded-xl text-[11px] tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-200"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-3 rounded-xl text-left text-[11px] tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-200"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;