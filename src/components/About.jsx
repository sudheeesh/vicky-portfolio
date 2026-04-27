import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Clients Managed' },
  { value: 10, suffix: 'x', label: 'ROI Scaled' },
  { value: 40, suffix: '%', label: 'Lead Gen Boost' },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Driven by <span className="text-gradient">Data</span>,<br />
              Inspired by <span className="text-gradient">Creativity</span>
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              I am a results-driven Digital Marketing Specialist with a proven track record of managing high-volume portfolios across diverse industries including Real Estate, Fashion, and Retail.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              My expertise lies in end-to-end campaign management, technical API integrations, and executing full-funnel strategies that differentiate brands in competitive markets. I don't just run ads; I build scalable growth engines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 md:p-8 text-center flex flex-col justify-center items-center group hover:border-accent-1/50 transition-colors"
              >
                <div className="text-4xl sm:text-5xl font-black text-white mb-2 group-hover:text-accent-2 transition-colors flex items-center">
                  {stat.value}
                  <span className="text-accent-1">{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm text-text-secondary font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
