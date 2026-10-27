import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "Space Grotesk", "Segoe UI", "sans-serif"],
      },
      colors: {
        gold:        "#f5b944",
        "gold-bright":"#ffd166",
        "gold-dim":  "#d4972a",
        amber:       "#ff9f43",
        cream:       "#fff9ed",
        navy: {
          950: "#050810",
          900: "#080d1a",
          800: "#0d1428",
          700: "#111b33",
        },
        // Keep for backward compat
        mint:    "#69f0bf",
        surface: "#05060f",
        panel:   "rgba(7, 19, 28, 0.85)",
      },
      boxShadow: {
        gold:    "0 0 40px rgba(245,185,68,0.25)",
        "gold-lg": "0 20px 60px rgba(245,185,68,0.2)",
        glow:    "0 0 80px rgba(245,185,68,0.18)",
        soft:    "0 0 40px rgba(0, 0, 0, 0.18)",
      },
      animation: {
        float:  "float 4s ease-in-out infinite",
        blink:  "blink 1s step-end infinite",
        shimmer:"shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at top, rgba(245,185,68,0.12), transparent 25%), radial-gradient(circle at bottom, rgba(255,159,67,0.08), transparent 20%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
