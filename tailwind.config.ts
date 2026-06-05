import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 80px rgba(125, 88, 255, 0.18)",
        soft: "0 0 40px rgba(0, 0, 0, 0.18)"
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 25%), radial-gradient(circle at bottom, rgba(73, 69, 255, 0.12), transparent 20%)"
      },
      colors: {
        surface: "#05060f",
        panel: "rgba(10, 14, 40, 0.85)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
