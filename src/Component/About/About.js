import React from "react";
import { motion } from "framer-motion";
import * as utils from "../../assets/utils";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="section-spacing relative z-10">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 gradient-text">
            About
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
          {utils.myDetails.map((detail, id) => (
            <motion.div
              key={id}
              className="glass-card p-6 md:p-8 group cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Icon Container */}
              {detail.icon && (
                <motion.div
                  className="mb-6 p-4 rounded-xl glass-card inline-block group-hover:shadow-glow-lg transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <detail.icon size={40} className="text-accent-glow" />
                </motion.div>
              )}

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-glass-white group-hover:text-accent-glow transition-colors">
                {detail.title}
              </h3>
              <p className="text-glass-100 leading-relaxed text-lg opacity-90">
                {detail.desc}
              </p>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  border: "2px solid transparent",
                  background:
                    "linear-gradient(135deg, transparent, transparent)",
                  backgroundClip: "padding-box",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
