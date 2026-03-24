import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hult Prize 2026 Brand — Primary
        heritage: "#FF329B",
        "heritage-dark": "#D9287F",
        purple: "#8A2890",
        midnight: "#292563",
        "midnight-light": "#3A3580",
        // Complementary
        "hp-red": "#FB0000",
        sky: "#12B1E7",
        navy: "#006FA7",
        sun: "#FDD40E",
        spring: "#65B357",
        aloe: "#06B47A",
        "hp-black": "#191919",
        "hp-orange": "#FF931D", // Nationals-only accent
        // Neutrals
        "hp-off-white": "#FAFAFA",
        "hp-gray": "#6B7280",
        "hp-border": "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
        display: ["var(--font-figtree)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in": "slideIn 0.4s ease-out",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
