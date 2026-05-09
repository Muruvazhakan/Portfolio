import React from "react";
import { motion } from "framer-motion";
import { myCertifications } from "../../assets/utils";

const Certification = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="certification" className="section-spacing relative z-10">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 gradient-text">
            Certification
          </h2>
          <div className="w-20 h-1 bg-accent-glow rounded-full mb-12" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {myCertifications.map((cert, id) => (
            <motion.a
              key={id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 md:p-8 group cursor-pointer block transition-all"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Animated Icon Container */}
              {cert.icon && (
                <motion.div
                  className="mb-6 p-4 rounded-xl glass-card inline-block group-hover:shadow-glow-lg transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <cert.icon size={40} className="text-accent-glow" />
                </motion.div>
              )}

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-glass-white group-hover:text-accent-glow transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-glass-200 text-base font-semibold mb-4 opacity-85">
                {cert.desc}
              </p>

              {/* Verification Badge */}
              <div className="flex items-center gap-2 text-accent-glow text-sm font-semibold group-hover:gap-3 transition-all">
                <span>View Credential</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;
