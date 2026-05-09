import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { navBardetails, navBarTitle } from "../../../assets/utils";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const middleIndex = Math.ceil(navBardetails.length / 2);
  const leftLinks = navBardetails.slice(0, middleIndex);
  const rightLinks = navBardetails.slice(middleIndex);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const linkVariants = {
    hover: { y: -1, color: "#FFFFFF" },
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 w-full bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
      <div className="relative mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-5 md:h-14 md:px-10 lg:px-16">
        <motion.a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            scroll.scrollToTop({ duration: 800, smooth: true });
          }}
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white text-sm font-black tracking-normal text-black shadow-[0_0_0_5px_rgba(255,255,255,0.08)] md:h-12 md:w-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          {navBarTitle.title
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)}
        </motion.a>

        <div className="hidden items-center gap-7 lg:flex">
          {leftLinks.map((navbar) => (
            <motion.div key={navbar.linkto} variants={linkVariants} whileHover="hover">
              <Link
                to={navbar.linkto}
                smooth={true}
                spy={true}
                offset={-80}
                duration={800}
                className="cursor-pointer text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
              >
                {navbar.title}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hidden items-center gap-7 lg:flex">
          {rightLinks.map((navbar) => (
            <motion.div key={navbar.linkto} variants={linkVariants} whileHover="hover">
              <Link
                to={navbar.linkto}
                smooth={true}
                spy={true}
                offset={-80}
                duration={800}
                className="cursor-pointer text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
              >
                {navbar.title}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="ml-auto inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <RxCross2 size={22} className="text-white" />
          ) : (
            <RxHamburgerMenu size={22} className="text-white" />
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="border-t border-white/10 bg-black lg:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-2 px-5 py-4">
              {navBardetails.map((navbar) => (
                <motion.div key={navbar.linkto} variants={itemVariants}>
                  <Link
                    to={navbar.linkto}
                    smooth={true}
                    spy={true}
                    offset={-80}
                    duration={800}
                    className="block cursor-pointer rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/75 transition-all hover:bg-white/10 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {navbar.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
