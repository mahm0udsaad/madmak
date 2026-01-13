import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'أحمد الغامدي',
    role: 'صاحب شركة',
    content: 'تعاملت مع مادماك فيچن لتركيب نظام مراقبة كامل في شركتي. الخدمة ممتازة والتركيب احترافي. أنصح الجميع بالتعامل معهم.',
    rating: 5,
  },
  {
    name: 'محمد العتيبي',
    role: 'صاحب منزل',
    content: 'ركبت كاميرات واي فاي في منزلي من مادماك فيچن. الجودة عالية والتطبيق سهل الاستخدام. شكراً لفريق العمل المتميز.',
    rating: 5,
  },
  {
    name: 'خالد الشمري',
    role: 'مدير مؤسسة',
    content: 'أفضل مزود لأنظمة المراقبة الأمنية. الأسعار تنافسية والدعم الفني ممتاز. استجابة سريعة لأي استفسار.',
    rating: 5,
  },
  {
    name: 'فهد القحطاني',
    role: 'صاحب محل تجاري',
    content: 'ركبت نظام إنتركم ذكي من مادماك فيچن. التركيب تم في نفس اليوم والجودة تفوق التوقعات. شكراً مادماك فيچن.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg mb-4 block">آراء عملائنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">ماذا يقول</span>
            <span className="text-gradient"> عملاؤنا</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border relative">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
            
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl text-foreground leading-relaxed mb-8"
              >
                "{testimonials[currentIndex].content}"
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg font-bold text-primary mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
