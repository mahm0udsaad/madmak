import { motion } from 'framer-motion';
import { Shield, Camera, Wifi, MonitorSpeaker } from 'lucide-react';

const features = [
  { icon: Camera, label: 'كاميرات مراقبة' },
  { icon: Wifi, label: 'شبكات واي فاي' },
  { icon: MonitorSpeaker, label: 'أنظمة إنتركم' },
  { icon: Shield, label: 'حماية متكاملة' },
];

const heroImage = {
  src: 'https://cdn.salla.sa/nEvboN/7da5fc37-a2a6-4066-99b4-1db86de4bded-500x500-fuicWT7f4jaEhLupgLkcmp1oeAINAwhWSEeNzTe8.png',
  alt: 'أنظمة كاميرات مراقبة احترافية',
};

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/50 to-navy" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text */}
          <div className="text-center lg:text-right">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium">مؤسسة سعودية معتمدة</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">نحمي ما يهمك</span>
            <br />
            <span className="text-gradient">بأحدث التقنيات</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            مؤسسة سعودية متخصصة في أنظمة المراقبة الأمنية، نعمل على توفير حلول موثوقة ترفع مستوى الأمان وتتماشى مع المعايير المعتمدة في المملكة
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
          >
            <a
              href="https://wa.me/966570780836"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-300 glow-gold animate-pulse-glow"
            >
              احصل على استشارة مجانية
            </a>
            <a
              href="https://madmakvi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/80 transition-all duration-300 border border-border"
            >
              تصفح المتجر
            </a>
          </motion.div>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto lg:mx-0"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-foreground/80">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-xl mx-auto w-full"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border bg-card/40 shadow-xl shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent z-10" />
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-[320px] sm:h-[380px] lg:h-[520px] object-cover"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              <div className="absolute bottom-5 right-5 z-20 bg-card/70 backdrop-blur-md border border-border/60 rounded-2xl px-4 py-3">
                <p className="text-sm text-foreground/90 font-semibold">توريد • تركيب • دعم فني</p>
                <p className="text-xs text-muted-foreground mt-1">حلول جاهزة للمنازل والشركات</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
