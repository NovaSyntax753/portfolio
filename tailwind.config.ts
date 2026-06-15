import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        void: "#030308",
        chrome: {
          1: "#c8d6e5",
          2: "#e8ecf0",
        },
        iridescent: {
          a: "#00fff7",
          b: "#bf00ff",
          c: "#ff6bff",
          d: "#4dffb4",
        },
        "warm-gold": "#ffd700",
        surface: "rgba(255,255,255,0.03)",
        glass: "rgba(255, 255, 255, 0.04)",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "gradient-shift": "gradient-shift 4s ease infinite",
        "scroll-up": "scroll-up 10s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
