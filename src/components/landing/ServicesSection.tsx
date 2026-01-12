import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Wifi, MonitorSpeaker, Router, Radio, Wrench } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'كاميرات المراقبة',
    description: 'كاميرات Analog و IP بدقة عالية تصل إلى 8 ميجا بكسل مع التركيب الاحترافي',
    features: ['دقة عالية', 'رؤية ليلية', 'تسجيل مستمر'],
  },
  {
    icon: Wifi,
    title: 'كاميرات واي فاي',
    description: 'كاميرات لاسلكية سهلة التركيب للمنازل والمكاتب مع تطبيق للمراقبة عن بعد',
    features: ['سهولة التركيب', 'مراقبة عن بعد', 'تنبيهات ذكية'],
  },
  {
    icon: MonitorSpeaker,
    title: 'أنظمة الإنتركم',
    description: 'أنظمة اتصال داخلي مرئي وصوتي من هيكفيجن للمنازل والشركات',
    features: ['فيديو عالي الدقة', 'فتح الباب عن بعد', 'تسجيل الزوار'],
  },
  {
    icon: Router,
    title: 'سويشات الشبكة',
    description: 'سويشات عادية و POE لتوصيل الكاميرات والأجهزة بكفاءة عالية',
    features: ['POE مدمج', 'سرعة عالية', 'إدارة ذكية'],
  },
  {
    icon: Radio,
    title: 'هوائيات وأنتينات',
    description: 'أنتينات 5G و Point to Point لتقوية الإشارة وتوسيع التغطية',
    features: ['تغطية واسعة', 'إشارة قوية', 'اتصال مستقر'],
  },
  {
    icon: Wrench,
    title: 'خدمات ميدانية',
    description: 'تركيب احترافي وصيانة دورية واستشارات تقنية من فريق متخصص',
    features: ['تركيب احترافي', 'صيانة دورية', 'دعم فني'],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg mb-4 block">خدماتنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">حلول متكاملة</span>
            <span className="text-gradient"> لأمانك</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات والمنتجات لتلبية جميع احتياجاتك الأمنية
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
