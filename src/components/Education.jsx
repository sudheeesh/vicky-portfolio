import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';

const Education = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, threshold: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FiBookOpen className="text-accent-1" />
              Education
            </h2>
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-2">Bachelor of Commerce (B.Com)</h3>
              <p className="text-accent-2 mb-4">Bharathiar University, Coimbatore</p>
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-text-secondary">
                Graduated 2021
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, threshold: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FiAward className="text-accent-2" />
              Certifications
            </h2>
            <div className="glass-card p-8 flex flex-col gap-6">
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-2/50 transition-colors">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6 opacity-80" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-2 transition-colors">Google Ads Certification</h3>
                  <p className="text-sm text-text-secondary">Google Skillshop</p>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-1/50 transition-colors">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6 opacity-80" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-1 transition-colors">Google Ads Search Certification</h3>
                  <p className="text-sm text-text-secondary">Google Skillshop</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
