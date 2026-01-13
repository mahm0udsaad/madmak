import logo from '@/assets/madmak-logo.png';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="مادماك فيچن madmak vision" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold text-primary">مادماك فيچن</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              مؤسسة سعودية متخصصة في أنظمة المراقبة الأمنية، نوفر حلول موثوقة بجودة عالية وأسعار تنافسية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">من نحن</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">خدماتنا</a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">منتجاتنا</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">تواصل معنا</a>
              </li>
              <li>
                <a href="https://madmakvi.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">زيارة المتجر</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li dir="ltr" className="text-right">+966 57 078 0836</li>
              <li>madmakvision@gmail.com</li>
              <li>المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} مادماك فيچن madmak vision. جميع الحقوق محفوظة.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
