import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll reveal animations
 * Triggers animation when element comes into viewport
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    ...options,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Optional: unobserve after first trigger
        observer.unobserve(entry.target);
      }
    }, defaultOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [defaultOptions]);

  return { ref, isVisible };
};

/**
 * Custom hook for parallax scroll effect
 * Creates a subtle parallax effect based on scroll position
 */
export const useParallax = (offset = 50) => {
  const ref = useRef(null);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const percentage = (windowHeight - top) / windowHeight;
        setYOffset(percentage * offset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return { ref, yOffset };
};

/**
 * Custom hook for magnetic button effect
 * Makes button follow mouse movement
 */
export const useMagneticButton = () => {
  const ref = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isHovering || !ref.current) return;

      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distance = 50; // Maximum distance to affect button
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const d = Math.sqrt(dx * dx + dy * dy);

      if (d < distance) {
        const moveX = (dx / distance) * 10;
        const moveY = (dy / distance) * 10;
        ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        ref.current.style.transform = "translate(0, 0)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovering]);

  return {
    ref,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => {
      setIsHovering(false);
      if (ref.current) {
        ref.current.style.transform = "translate(0, 0)";
      }
    },
  };
};
