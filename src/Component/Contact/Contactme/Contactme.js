import React from "react";
import { motion } from "framer-motion";
import { contact } from "../../../assets/utils";

const Contactme = (props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.15,
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const isIntroStyle = props.style === "Intro";

  return (
    <motion.ul
      className={`flex gap-4 md:gap-6 flex-wrap ${
        isIntroStyle ? "justify-start" : "justify-center"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {contact.map((con, id) => (
        <motion.li key={id} className="list-none" variants={itemVariants}>
          <motion.a
            href={con.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center"
            whileHover="hover"
            variants={itemVariants}
          >
            {/* Glass Card Background */}
            <div className="absolute inset-0 glass-card rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Icon Container */}
            <motion.div
              className="relative p-3 md:p-4 rounded-full glass-card group-hover:shadow-glow-lg transition-all"
              whileHover={{ rotate: 12 }}
            >
              {con.icon && (
                <con.icon
                  size={con.size || 32}
                  className="text-accent-glow group-hover:text-glass-white transition-colors"
                />
              )}
            </motion.div>

            {/* Tooltip */}
            {!isIntroStyle && (
              <motion.div
                className="absolute bottom-full mb-3 px-3 py-2 rounded-lg glass-card whitespace-nowrap text-xs md:text-sm font-semibold text-accent-glow opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                {con.text}
              </motion.div>
            )}
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Contactme;
