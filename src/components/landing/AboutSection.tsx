import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const stats = [
  { icon: Users, value: '+500', label: 'عميل راضٍ' },
  { icon: Award, value: '+5', label: 'سنوات خبرة' },
  { icon: Target, value: '100%', label: 'التزام بالجودة' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-lg mb-4 block">من نحن</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-foreground">شريكك الموثوق في</span>
              <br />
              <span className="text-gradient">الأمان والحماية</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              مدماك مؤسسة سعودية رائدة متخصصة في تقديم حلول المراقبة الأمنية المتكاملة. نسعى لتوفير أحدث التقنيات وأفضل المنتجات العالمية التي تتماشى مع المعايير المعتمدة في المملكة العربية السعودية.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              نركز على الجودة العالية، التقنية الحديثة، وسهولة الاستخدام لضمان راحة عملائنا وأمانهم. فريقنا من الخبراء المؤهلين يقدم خدمات التركيب والصيانة والاستشارات التقنية على أعلى مستوى.
            </p>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card p-5 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">رؤيتنا</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  أن نكون الخيار الأول في حلول المراقبة الأمنية بالمملكة
                </p>
              </div>
              <div className="bg-card p-5 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">رسالتنا</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  توفير حلول أمنية موثوقة بجودة عالية وأسعار تنافسية
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-card to-secondary p-8 rounded-3xl border border-border relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center">إنجازاتنا بالأرقام</h3>
                <div className="grid gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 bg-background/50 p-4 rounded-xl"
                    >
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <stat.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <span className="text-3xl font-bold text-primary">{stat.value}</span>
                        <p className="text-muted-foreground">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
