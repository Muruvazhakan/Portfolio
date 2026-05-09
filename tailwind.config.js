/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Glassmorphism 2.0 Color Palette
        "glass-dark": "#0A0A0A",
        "glass-black": "#000000",
        "glass-900": "#111111",
        "glass-800": "#1A1A1A",
        "glass-700": "#2D2D2D",
        "glass-600": "#404040",
        "glass-500": "#535353",
        "glass-400": "#666666",
        "glass-300": "#808080",
        "glass-200": "#A0A0A0",
        "glass-100": "#D1D1D1",
        "glass-white": "#FFFFFF",
        "accent-primary": "#576cbc",
        "accent-secondary": "#19376d",
        "accent-glow": "#64B5F6",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Geist",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: ["Fira Code", "monospace"],
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["32px", "40px"],
        "4xl": ["44px", "52px"],
        "5xl": ["56px", "64px"],
        "6xl": ["72px", "80px"],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0em",
        wide: "0.02em",
        wider: "0.05em",
        widest: "0.1em",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
        "glass-lg": "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
        "glass-xl": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glow-sm": "0 0 8px rgba(100, 181, 246, 0.1)",
        "glow-md": "0 0 16px rgba(100, 181, 246, 0.2)",
        "glow-lg": "0 0 24px rgba(100, 181, 246, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(100, 181, 246, 0.1)" },
          "50%": { boxShadow: "0 0 24px rgba(100, 181, 246, 0.3)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      spacing: {
        safe: "max(1rem, env(safe-area-inset-left))",
      },
    },
  },
  plugins: [],
};
