import React from "react";
import { motion } from "framer-motion";
import { skills, projectdetails } from "../../assets/utils";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -6,
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="experience" className="section-spacing relative z-10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 gradient-text">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-accent-glow rounded-full mb-12" />
        </motion.div>

        <motion.div
          className="space-y-4 md:space-y-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectdetails.map((projectdetail, id) => (
            <motion.div
              key={id}
              className="glass-card p-6 md:p-8 group cursor-pointer border-l-4 border-transparent hover:border-accent-glow transition-all"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-glass-white mb-1 group-hover:text-accent-glow transition-colors">
                    {projectdetail.role}
                  </h3>
                  <p className="text-accent-glow font-semibold mb-3">
                    {projectdetail.organisation}
                  </p>
                  <p className="text-glass-200 text-sm mb-4 opacity-80">
                    {projectdetail.startDate} - {projectdetail.endDate}
                  </p>
                </div>
              </div>

              <ul className="space-y-2">
                {projectdetail.experiences.map((experience, idx) => (
                  <motion.li
                    key={idx}
                    className="text-glass-100 flex items-start gap-3 text-base leading-relaxed opacity-90"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-accent-glow mt-1 flex-shrink-0">
                      ▸
                    </span>
                    <span>{experience}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            id="skills"
            className="text-5xl md:text-6xl font-black tracking-tighter mb-4 gradient-text"
          >
            Skills
          </h2>
          <div className="w-20 h-1 bg-accent-glow rounded-full mb-12" />
        </motion.div>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, id) => (
            <motion.div
              key={id}
              className="glass-card p-6 md:p-8 flex flex-col items-center justify-center gap-4 group cursor-pointer"
              variants={skillVariants}
              whileHover="hover"
            >
              <motion.div
                className="p-4 rounded-xl glass-card group-hover:shadow-glow-lg transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                {skill.icon && (
                  <skill.icon
                    size={skill.size || 32}
                    className="text-accent-glow"
                  />
                )}
              </motion.div>
              <p className="text-sm md:text-base font-semibold text-center text-glass-100 group-hover:text-glass-white transition-colors">
                {skill.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
