import React from "react";
import { motion } from "framer-motion";
import myphoto from "../../assets/Myphoto/Photo.jpg";

const Intro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="intro"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-glass-black px-6 pb-16 pt-28 text-glass-white md:px-10 md:pb-20 md:pt-32 lg:px-16"
    >
      <motion.div
        className="relative z-10 grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,440px)_minmax(0,1fr)] lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="order-1 text-center lg:col-span-3"
          variants={itemVariants}
        >
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-accent-glow/80">
            Muruvazhakan Pugazhendhi
          </p>
        </motion.div>

        <motion.div
          className="order-3 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left"
          variants={itemVariants}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-accent-glow/80">
            Visual systems
          </p>
          <h1 className="gradient-text text-5xl font-black leading-none tracking-normal md:text-6xl lg:text-[86px]">
            designer
          </h1>
          <p className="mt-6 max-w-sm text-base leading-7 text-glass-100/85 md:text-lg">
            I shape calm, polished interfaces that make complex products feel
            clear, fast, and human.
          </p>
        </motion.div>

        <motion.div
          className="order-2 mx-auto flex w-full max-w-[360px] justify-center lg:order-3 lg:max-w-[440px]"
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-glass-900 shadow-glow-lg">
            <img
              src={myphoto}
              alt="Muruvazhakan Pugazhendhi portrait"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-cover bg-center saturate-200 contrast-125 hue-rotate-60"
              style={{
                backgroundImage: `url(${myphoto})`,
                clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
              }}
            />
            <div
              className="absolute inset-0 mix-blend-screen"
              style={{
                clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                background:
                  "linear-gradient(135deg, transparent 0 20%, rgba(255,42,109,0.9) 21% 28%, transparent 29% 42%, rgba(0,210,255,0.85) 43% 52%, rgba(255,214,10,0.8) 53% 61%, transparent 62% 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-75 mix-blend-multiply"
              style={{
                clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                background:
                  "repeating-linear-gradient(0deg, transparent 0 12px, rgba(255,255,255,0.55) 13px 15px), linear-gradient(90deg, transparent, rgba(124,58,237,0.5))",
              }}
            />
            <div className="absolute left-1/2 top-0 h-full w-px bg-white/80" />
          </div>
        </motion.div>

        <motion.div
          className="order-4 flex flex-col items-center text-center lg:items-end lg:text-right"
          variants={itemVariants}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-accent-glow/80">
            Code architecture
          </p>
          <h2 className="gradient-text font-mono text-5xl font-black normal-case leading-none tracking-normal md:text-6xl lg:text-[86px]">
            developer
          </h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-glass-100/85 md:text-lg">
            I build resilient React, Java, Go, and cloud-backed experiences
            with production-minded detail.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
