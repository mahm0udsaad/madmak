import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Headphones, BadgePercent, Wrench, Award, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'جودة عالية',
    description: 'نوفر منتجات من أفضل العلامات التجارية العالمية مثل هيكفيجن وداهوا',
  },
  {
    icon: Headphones,
    title: 'دعم فني متواصل',
    description: 'فريق دعم فني متخصص جاهز لمساعدتك على مدار الساعة',
  },
  {
    icon: BadgePercent,
    title: 'أسعار تنافسية',
    description: 'نقدم أفضل الأسعار في السوق مع الحفاظ على جودة المنتجات',
  },
  {
    icon: Wrench,
    title: 'تركيب احترافي',
    description: 'فريق تركيب متخصص ومعتمد لضمان أفضل أداء للأنظمة',
  },
  {
    icon: Shield,
    title: 'ضمان شامل',
    description: 'ضمان شامل على جميع المنتجات والخدمات المقدمة',
  },
  {
    icon: Clock,
    title: 'خدمة سريعة',
    description: 'سرعة في التنفيذ والتوصيل مع الالتزام بالمواعيد',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 relative bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg mb-4 block">لماذا نحن</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">لماذا تختار</span>
            <span className="text-gradient"> مدماك؟</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نلتزم بتقديم أفضل الخدمات والمنتجات لعملائنا الكرام
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                <reason.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
