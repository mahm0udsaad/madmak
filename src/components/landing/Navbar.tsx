import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/madmak-logo.png';

const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'العروض', href: '#offers' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'منتجاتنا', href: '#products' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'تواصل معنا', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img src={logo} alt="مدماك" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold text-primary">مدماك</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://madmakvi.com/offers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2.5 rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300 border border-border"
            >
              العروض
            </a>
            <a
              href="https://wa.me/966570780836"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 glow-gold-sm"
            >
              استشارة مجانية
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect mt-3"
          >
            <ul className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://madmakvi.com/offers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-secondary text-secondary-foreground px-5 py-3 rounded-lg font-semibold border border-border"
                >
                  العروض
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/966570780836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold"
                >
                  استشارة مجانية
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
