import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Billedge",
      description:
        "A polished billing and business workflow application built for clear, fast operations.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Netlify",
        "UI Engineering",
      ],
      span: "col-span-1 md:col-span-2",
      gradient: "from-blue-500 to-cyan-600",
      image: "🏤",
      link: "https://billedge.netlify.app/",
    },
    {
      id: 2,
      title: "AssetSync",
      description:
        "Asset management experience focused on tracking, syncing, and organizing operational data.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Netlify",
        "Asset Management",
      ],
      span: "col-span-1",
      gradient: "from-emerald-500 to-teal-700",
      image: "🏦",
      link: "https://assetsync.netlify.app",
    },
    {
      id: 3,
      title: "Ezhil Elit",
      description:
        "A live brand website with a refined public-facing web experience.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Netlify",
        "Web Design",
      ],
      span: "col-span-1",
      gradient: "from-pink-500 to-rose-700",
      image: "✨",
      link: "https://ezhilelit.in/#/",
    },
    {
      id: 4,
      title: "Digital Market Portal",
      description:
        "Scalable e-commerce platform with microservices architecture",
      tech: ["React", "Spring Boot", "AWS", "MySQL"],
      span: "col-span-1 md:col-span-2",
      gradient: "from-blue-500 to-blue-700",
      image: "🏢",
    },
    {
      id: 5,
      title: "Issuer Access System",
      description: "High-performance web app serving thousands of users daily",
      tech: ["React", "Spring Boot", "Java"],
      span: "col-span-1",
      gradient: "from-purple-500 to-purple-700",
      image: "🔐",
    },
    {
      id: 6,
      title: "Clearing House Implementation",
      description: "Complex state management and microservices deployment",
      tech: ["GoLang", "AWS", "Spring Boot"],
      span: "col-span-1",
      gradient: "from-green-500 to-green-700",
      image: "🏛️",
    },
    {
      id: 7,
      title: "Cloud Infrastructure as Code",
      description: "Automated infrastructure deployment and management",
      tech: ["AWS CloudFormation", "IaC", "DevOps"],
      span: "col-span-1 md:col-span-2",
      gradient: "from-orange-500 to-orange-700",
      image: "☁️",
    },
    {
      id: 8,
      title: "RESTful API Development",
      description: "High-performance APIs integrated with React frontends",
      tech: ["Spring Boot", "REST", "MySQL"],
      span: "col-span-1",
      gradient: "from-pink-500 to-pink-700",
      image: "⚙️",
    },
    {
      id: 9,
      title: "GoLang Microservice",
      description: "Production-grade microservice with Comcast",
      tech: ["GoLang", "Docker", "Kubernetes"],
      span: "col-span-1",
      gradient: "from-cyan-500 to-cyan-700",
      image: "🚀",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="projects" className="section-spacing relative z-10">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 gradient-text">
            Projects
          </h2>
          <div className="w-20 h-1 bg-accent-glow rounded-full mb-12" />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`glass-card overflow-hidden group cursor-pointer ${project.span}`}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              />

              {/* Emoji/Icon Area */}
              <div className="relative p-6 md:p-8 h-48 md:h-56 flex flex-col justify-between">
                <div className="text-6xl md:text-7xl opacity-60 group-hover:opacity-100 transition-opacity">
                  {project.image}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-glass-white group-hover:text-accent-glow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-glass-100 text-sm md:text-base line-clamp-2 opacity-85">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="relative px-6 md:px-8 pb-6 flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs md:text-sm font-semibold bg-glass-700/50 text-accent-glow border border-accent-glow/30 group-hover:border-accent-glow/60 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {project.link && (
                <div className="relative px-6 md:px-8 pb-6 flex gap-3">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-all hover:border-blue-500/60"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={14} />
                    Demo
                  </motion.a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
