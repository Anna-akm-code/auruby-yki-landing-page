import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          DEFAULT: "#EEEDFE",
          warm: "#EDE8DC",
          deep: "#E2DBCC",
        },
        anthracite: {
          DEFAULT: "#2D2D2D",
          soft: "#4A4A4A",
          muted: "#8A8578",
        },
        chartreuse: {
          DEFAULT: "#D6F549",
          muted: "rgba(214,245,73,0.25)",
          glow: "rgba(214,245,73,0.15)",
        },
        "neon-pink": {
          DEFAULT: "#F2A0C4",
          muted: "rgba(242,160,196,0.2)",
        },
        purple: {
          DEFAULT: "#7C5CFC",
          light: "#EEEDFE",
          deep: "#534AB7",
          muted: "rgba(124,92,252,0.19)",
        },
        electric: {
          DEFAULT: "#4A8FE7",
          muted: "rgba(74,143,231,0.15)",
        },
        orange: {
          DEFAULT: "#E5A31E",
          muted: "rgba(229,163,30,0.18)",
        },
        correct: {
          DEFAULT: "#4EA889",
          soft: "rgba(78,168,137,0.12)",
        },
        incorrect: {
          DEFAULT: "#E8443A",
          soft: "rgba(232,68,58,0.12)",
        },
        cream: "#FAF8F3",
      },
      fontFamily: {
        display: ['var(--font-josefin)', '"Josefin Sans"', "sans-serif"],
        sans: ['var(--font-outfit)', "Outfit", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};

export default config;
