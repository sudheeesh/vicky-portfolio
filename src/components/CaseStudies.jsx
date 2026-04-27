import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cases = [
  {
    metric: '10x',
    title: 'ROI Scaled',
    company: 'The Fish House & The Chop House',
    desc: 'Managed end-to-end digital marketing strategies resulting in massive ROI scaling. Led technical integrations for WhatsApp API, Gallabox, Razorpay, and Porter.',
    color: 'from-yellow-500 to-amber-600'
  },
  {
    metric: '40%',
    title: 'Boost in Lead Generation',
    company: 'Toni & Guy Coimbatore',
    desc: 'Developed and executed highly successful social media ad campaigns. Achieved a 20% decrease in CPA through rigorous campaign optimization.',
    color: 'from-amber-400 to-yellow-500'
  },
  {
    metric: '30%',
    title: 'Organic Traffic Increase',
    company: 'The Chop House',
    desc: 'Implemented advanced technical and content SEO strategies, improving keyword rankings by 25% and driving high-intent organic traffic.',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    metric: '100+',
    title: 'Client Portfolio Managed',
    company: 'Mirchi Ads',
    desc: 'Executing full-funnel strategies across Google Ads, Meta Ads, and LinkedIn Ads for 60+ Real Estate clients, interior outlets, and academies.',
    color: 'from-amber-500 to-orange-500'
  }
];

const CaseStudies = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="cases" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Key <span className="text-gradient">Achievements</span>
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Measurable results and high-impact campaigns that drive real business growth.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card overflow-hidden group relative"
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color}`} />
              <div className="p-8">
                <div className={`text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${item.color} mb-2`}>
                  {item.metric}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                <h4 className="text-sm text-text-secondary font-medium uppercase tracking-wider mb-4">{item.company}</h4>
                <p className="text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
              {/* Hover effect gradient */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
