import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BadgePercent, Sparkles, Truck, ArrowLeft } from 'lucide-react';

const offers = [
  {
    icon: BadgePercent,
    title: 'تخفيضات وعروض مستمرة',
    description: 'تابع أحدث العروض والخصومات على منتجات أنظمة المراقبة والشبكات.',
  },
  {
    icon: Sparkles,
    title: 'ترشيح أفضل خيار لك',
    description: 'نساعدك تختار المناسب حسب المكان (منزل/محل/شركة) والميزانية.',
  },
  {
    icon: Truck,
    title: 'تجهيز وتركيب احترافي',
    description: 'حلول كاملة تشمل التوريد والتركيب والدعم الفني حسب احتياجك.',
  },
];

const OffersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="offers" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-lg mb-3 block">العروض</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">ابدأ من</span>
            <span className="text-gradient"> التخفيضات</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            أفضل طريقة سريعة للوصول للمنتجات المناسبة بسعر ممتاز.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <offer.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{offer.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://madmakvi.com/offers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-300 glow-gold-sm"
          >
            <span>تصفح العروض</span>
            <ArrowLeft className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;

