/**
 * GLASSMORPHISM 2.0 DESIGN SYSTEM
 * 2026 Professional & High-End Aesthetic
 *
 * This file documents the design tokens and patterns used throughout the portfolio.
 */

// COLOR PALETTE
// Deep dark theme with accent glows
export const colors = {
  // Base Colors
  darkest: "#000000", // Pure black for accents
  dark: "#0A0A0A", // Deep charcoal background
  surface: "#111111", // Elevated surfaces
  surfaceLight: "#1A1A1A", // Light surfaces
  border: "rgba(255, 255, 255, 0.1)",
  borderHover: "rgba(255, 255, 255, 0.15)",

  // Accent Colors
  accentPrimary: "#576cbc", // Primary brand color
  accentSecondary: "#19376d", // Secondary brand color
  accentGlow: "#64B5F6", // Cyan/blue glow for highlights

  // Text Colors
  textWhite: "#FFFFFF",
  textGray300: "#D1D1D1",
  textGray400: "#A0A0A0",
  textGray500: "#808080",

  // Gradients
  gradientPrimary: "linear-gradient(135deg, #64B5F6 0%, #576cbc 100%)",
  gradientSecondary: "linear-gradient(135deg, #576cbc 0%, #19376d 100%)",
  gradientText:
    "linear-gradient(to right, #FFFFFF 70%, rgba(255, 255, 255, 0) 120%)",
};

// TYPOGRAPHY
export const typography = {
  // Font Family Stack
  fontSans: "Inter, Geist, -apple-system, BlinkMacSystemFont, sans-serif",
  fontMono: "Fira Code, monospace",

  // Font Sizes (with line heights)
  // Oversized Headlines (2026 trend)
  h1: {
    size: "72px",
    lineHeight: "80px",
    weight: 900,
    letterSpacing: "-0.02em",
  },
  h2: {
    size: "56px",
    lineHeight: "64px",
    weight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  h3: {
    size: "32px",
    lineHeight: "40px",
    weight: 600,
    letterSpacing: "0.02em",
  },
  h4: {
    size: "24px",
    lineHeight: "32px",
    weight: 600,
    letterSpacing: "0.02em",
  },
  body: {
    size: "16px",
    lineHeight: "24px",
    weight: 400,
  },
  bodyLarge: {
    size: "18px",
    lineHeight: "28px",
    weight: 400,
  },
  caption: {
    size: "14px",
    lineHeight: "20px",
    weight: 500,
    letterSpacing: "0.02em",
  },
};

// GLASSMORPHISM EFFECTS
export const glassmorphism = {
  // Backdrop Blur
  blurXS: "backdrop-blur-xs", // 2px
  blurSM: "backdrop-blur-sm", // 4px
  blurMD: "backdrop-blur-md", // 12px
  blurLG: "backdrop-blur-lg", // 16px
  blurXL: "backdrop-blur-xl", // 20px (Primary)

  // Background with transparency
  bgGlass: "rgba(26, 26, 26, 0.6)",
  bgGlassLight: "rgba(26, 26, 26, 0.75)",
  bgGlassDark: "rgba(17, 17, 17, 0.5)",

  // Borders
  borderGlass: "1px solid rgba(255, 255, 255, 0.1)",
  borderGlassLight: "1px solid rgba(255, 255, 255, 0.15)",

  // Shadows (Soft & Spatial)
  shadowSM: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
  shadowMD: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
  shadowLG: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",

  // Glow Effects
  glowSM: "0 0 8px rgba(100, 181, 246, 0.1)",
  glowMD: "0 0 16px rgba(100, 181, 246, 0.2)",
  glowLG: "0 0 24px rgba(100, 181, 246, 0.3)",
};

// SPACING SCALE
export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
  "4xl": "96px",
};

// BORDER RADIUS
export const borderRadius = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "32px",
  full: "9999px",
};

// ANIMATIONS
export const animations = {
  // Transition Durations
  duration: {
    fast: "200ms",
    normal: "300ms",
    slow: "500ms",
    slower: "800ms",
  },

  // Easing Functions
  easing: {
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },

  // Keyframe Animations
  keyframes: {
    fadeIn: "from { opacity: 0 } to { opacity: 1 }",
    slideUp:
      "from { transform: translateY(30px); opacity: 0 } to { transform: translateY(0); opacity: 1 }",
    float:
      "from, 100% { transform: translateY(0) } 50% { transform: translateY(20px) }",
    pulseGlow:
      "from, 100% { box-shadow: 0 0 8px rgba(100, 181, 246, 0.1) } 50% { box-shadow: 0 0 24px rgba(100, 181, 246, 0.3) }",
  },
};

// BREAKPOINTS (Mobile-First Responsive Design)
export const breakpoints = {
  mobile: "0px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1280px",
  ultraWide: "1536px",
};

// COMPONENT PATTERNS
export const components = {
  // Glass Card Base
  glassCard: {
    background: "rgba(26, 26, 26, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    backdropFilter: "blur(20px)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
    transition: "all 300ms ease-out",

    "&:hover": {
      background: "rgba(26, 26, 26, 0.75)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
    },
  },

  // Magnetic Button
  magneticButton: {
    padding: "12px 32px",
    borderRadius: "9999px",
    background:
      "linear-gradient(135deg, rgba(100, 181, 246, 0.2) 0%, rgba(87, 108, 188, 0.2) 100%)",
    border: "1px solid rgba(100, 181, 246, 0.3)",
    color: "#FFFFFF",
    fontWeight: 600,
    letterSpacing: "0.05em",
    cursor: "pointer",
    transition: "all 300ms ease-out",

    "&:hover": {
      transform: "scale(1.05)",
      background:
        "linear-gradient(135deg, rgba(100, 181, 246, 0.3) 0%, rgba(87, 108, 188, 0.3) 100%)",
      border: "1px solid rgba(100, 181, 246, 0.5)",
      boxShadow: "0 0 24px rgba(100, 181, 246, 0.3)",
    },

    "&:active": {
      transform: "scale(0.95)",
    },
  },

  // Bento Grid Item
  bentoGridItem: {
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    background: "rgba(26, 26, 26, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    transition: "all 300ms ease-out",

    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
    },
  },
};

// 2026 DESIGN TRENDS
export const designTrends = {
  // Oversized Headlines: Create visual hierarchy with massive text
  // Usage: Apply h1/h2 classes with letter-spacing-wider
  // Glassmorphism 2.0: Semi-transparent elements with backdrop blur
  // Usage: Use .glass-card class on containers
  // Spatial Design: Soft shadows creating floating effect
  // Usage: Apply shadow-glass-lg on interactive elements
  // Magnetic Interactions: Subtle micro-interactions that feel premium
  // Usage: Use .magnetic-btn or Framer Motion whileHover props
  // Reveal on Scroll: Elements animate in as user scrolls
  // Usage: Use Framer Motion whileInView prop
  // Dark Mode Premium: Deep black backgrounds with accent glows
  // Usage: bg-glass-black with text-accent-glow highlights
};

export default {
  colors,
  typography,
  glassmorphism,
  spacing,
  borderRadius,
  animations,
  breakpoints,
  components,
  designTrends,
};
