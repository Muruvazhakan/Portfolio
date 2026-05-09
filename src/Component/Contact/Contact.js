import React from "react";
import { motion } from "framer-motion";
import { contactme } from "../../assets/utils";
import Contactme from "./Contactme/Contactme";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <footer
      id="contact"
      className="section-spacing relative z-10 py-32 md:py-40"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(100, 181, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(100, 181, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(100, 181, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 gradient-text"
            variants={itemVariants}
          >
            {contactme.title}
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-glass-100 max-w-2xl mx-auto leading-relaxed font-light\"
            variants={itemVariants}
          >
            {contactme.headline}
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Contactme style="Contact" />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:muruvazhakan@email.com"
            className="magnetic-btn px-8 md:px-12 py-4 text-lg font-bold"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text font-bold">Let's Work Together</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="text-center mt-20 pt-8 border-t border-glass-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-glass-500 text-sm md:text-base">
          © 2024 Muruvazhakan P. All rights reserved.
        </p>
        <p className="text-glass-600 text-xs md:text-sm mt-2">
          Designed & Built with React, Tailwind CSS & Framer Motion
        </p>
      </motion.div>
    </footer>
  );
};

export default Contact;
