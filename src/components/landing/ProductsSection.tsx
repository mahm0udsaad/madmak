import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Wifi, MonitorSpeaker, Router, Radio, Globe, ArrowLeft } from 'lucide-react';

const categories = [
  {
    icon: Camera,
    title: 'كاميرات المراقبة شاملة التركيب',
    description: 'كاميرات Analog و IP بمختلف الدقات مع جهاز تسجيل وهارديسك',
    link: 'https://madmakvi.com/category/OXxnbz',
    image: 'https://cdn.salla.sa/nEvboN/7da5fc37-a2a6-4066-99b4-1db86de4bded-500x500-fuicWT7f4jaEhLupgLkcmp1oeAINAwhWSEeNzTe8.png',
  },
  {
    icon: Wifi,
    title: 'كاميرات واي فاي',
    description: 'كاميرات لاسلكية داخلية وخارجية بدقات تصل إلى 10 ميجا',
    link: 'https://madmakvi.com/category/WRyqrw',
    image: 'https://cdn.salla.sa/nEvboN/fc540d25-0b27-4bbf-91b2-422c808e2908-500x333.33333333333-q5MUURUsWgf9cqRqkl7KRuSX05xZ5vhtNoRD2HO9.png',
  },
  {
    icon: MonitorSpeaker,
    title: 'أنظمة الإنتركم',
    description: 'أنظمة اتصال مرئي وصوتي من هيكفيجن للمنازل والشركات',
    link: 'https://madmakvi.com/category/gAYDXp',
    image: 'https://cdn.salla.sa/nEvboN/c975cdef-cda8-4c23-a650-f7ff1ef1df8a-500x333.33333333333-6YHudj8a0yUY9ax6zAeAq760o5a9ledqAJ6Vfdyo.png',
  },
  {
    icon: Router,
    title: 'سويشات الشبكة',
    description: 'سويشات عادية و POE لتشغيل الكاميرات وأجهزة الشبكة',
    link: 'https://madmakvi.com/category/lRpgNV',
    // Real category image (avoid logo placeholders)
    image:
      '/network-poe-switch-data-center-infrastructure-ethe.jpg',
  },
  {
    icon: Radio,
    title: 'هوائيات وأنتينات',
    description: 'أنتينات 5G و Point to Point و Indoor لتقوية الإشارة',
    // TODO: replace with the exact category id once confirmed in the store
    link: 'https://madmakvi.com',
    image:
      'https://images.unsplash.com/photo-1590935217281-8f102120d683?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Globe,
    title: 'مقويات الإنترنت والفايبر',
    description: 'حلول متكاملة لتقوية وتوزيع الإنترنت',
    // TODO: replace with the exact category id once confirmed in the store
    link: 'https://madmakvi.com',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg mb-4 block">منتجاتنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">تصفح</span>
            <span className="text-gradient"> أقسام المتجر</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف مجموعتنا الواسعة من المنتجات عالية الجودة
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.title}
              href={category.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="h-56 bg-gradient-to-br from-secondary to-navy-light flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <span>تصفح المنتجات</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://madmakvi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-300 glow-gold-sm"
          >
            <span>زيارة المتجر الكامل</span>
            <ArrowLeft className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
