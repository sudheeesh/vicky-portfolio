import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(event.target);
    
    // Web3Forms Access Key - Get yours for free at https://web3forms.com/
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ready to scale your ROI and drive measurable growth? Let's discuss your next campaign.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>

              <div className="space-y-6">
                <a href="mailto:vickeyyen0@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent-1 group-hover:bg-accent-1 group-hover:text-white transition-colors">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Email</p>
                    <p className="text-white font-medium group-hover:text-accent-1 transition-colors">vickeyyen0@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919488974207" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent-2 group-hover:bg-accent-2 group-hover:text-white transition-colors">
                    <FiPhone />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Phone / WhatsApp</p>
                    <p className="text-white font-medium group-hover:text-accent-2 transition-colors">(+91) 94889 74207</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary">
                    <FiMapPin />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Location</p>
                    <p className="text-white font-medium">Coimbatore, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-text-secondary mb-4">Social Profiles</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0A66C2] transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="https://wa.me/919488974207" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] transition-colors">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="glass-card p-8" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                  <input type="text" name="name" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-1 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                  <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-1 transition-colors" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-text-secondary mb-2">Subject</label>
                <input type="text" name="subject" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-1 transition-colors" placeholder="Project Inquiry" />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                <textarea name="message" required rows="5" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-1 transition-colors resize-none" placeholder="Tell me about your marketing goals..."></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                <FiSend /> {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>
              
              {status && status !== "Sending..." && (
                <p className={`mt-4 text-center font-medium ${status.includes("Successfully") ? "text-green-400" : "text-red-400"}`}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
