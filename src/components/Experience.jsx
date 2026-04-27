import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: 'Digital Marketing Specialist',
    company: 'Mirchi Ads',
    period: 'March 2025 – April 2026',
    description: [
      'Managing end-to-end digital marketing and creative strategy for a diverse portfolio of 100+ clients.',
      'Overseeing high-performance campaigns for 60+ Real Estate clients, interior outlets, salons, academies, and manufacturing sectors.',
      'Executing full-funnel strategies across Google Ads, Meta Ads, LinkedIn Ads, and native advertising platforms.',
      'Driving agency-level creative ideas to differentiate client brands in competitive markets.',
    ],
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'The Fish House & The Chop House',
    period: 'July 2022 – March 2025',
    description: [
      'Managed Shopify Admin panel and oversaw end-to-end digital marketing strategies that scaled ROI by 10x.',
      'Led technical integrations for WhatsApp API, Gallabox, Razorpay, and Porter for "The Chop House".',
      'Implemented advanced SEO strategies resulting in a 30% increase in organic traffic and 25% improvement in keyword rankings.',
      'Led a cross-functional team on "The Fish House" project, delivering a 20% increase in customer satisfaction.',
      'Reduced project timelines by 15% through the implementation of a new project management system.',
    ],
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'Toni & Guy Coimbatore',
    period: 'July 2021 – Dec 2024',
    description: [
      'Developed and executed successful social media ad campaigns, leading to a 40% boost in lead generation.',
      'Achieved a 20% decrease in cost per acquisition through campaign optimization.',
      'Utilized data analytics to achieve a 15% growth in online conversions.',
    ],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between md:justify-normal w-full mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`} ref={ref}>

      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-bg border-4 border-accent-1 z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-accent-2" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full pl-12 md:pl-0 md:w-5/12 glass-card p-6 relative group"
      >
        <div className={`hidden md:block absolute top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${isEven ? 'border-r-[15px] border-r-white/10 -left-[15px]' : 'border-l-[15px] border-l-white/10 -right-[15px]'}`} />

        <div className="flex items-center gap-3 mb-2 text-accent-1">
          <FiBriefcase />
          <span className="text-sm font-bold uppercase tracking-wider">{exp.period}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
        <h4 className="text-lg text-accent-2 mb-4">{exp.company}</h4>

        <ul className="space-y-2">
          {exp.description.map((item, i) => (
            <li key={i} className="text-text-secondary text-sm flex items-start">
              <span className="text-accent-1 mr-2 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 -translate-x-px w-0.5 h-full bg-gradient-to-b from-accent-1/50 via-accent-2/50 to-transparent" />

          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
