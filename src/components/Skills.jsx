import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget, FiTrendingUp, FiSettings, FiFeather } from 'react-icons/fi';

const skillsData = [
  {
    title: 'Advertising',
    icon: <FiTarget size={24} />,
    skills: ['Google Ads (Search/Display)', 'Meta Ads', 'LinkedIn Ads', 'Native Advertising'],
  },
  {
    title: 'Strategy',
    icon: <FiTrendingUp size={24} />,
    skills: ['Campaign Management', 'Lead Generation', 'SEO Strategy', 'ROI Optimization'],
  },
  {
    title: 'Technical',
    icon: <FiSettings size={24} />,
    skills: ['Shopify Admin', 'WhatsApp API', 'Gallabox', 'Razorpay', 'Porter', 'Google Analytics'],
  },
  {
    title: 'Creative',
    icon: <FiFeather size={24} />,
    skills: ['Social Media Marketing', 'Content Creation', 'SMO', 'Brand Engagement'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Core <span className="text-gradient">Competencies</span>
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit combining data-driven strategy with creative execution.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-accent-1/20 text-accent-1 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-1 group-hover:text-white transition-all">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-text-secondary group-hover:border-accent-2/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
