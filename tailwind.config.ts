import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

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
      typography: () => ({
        auruby: {
          css: {
            "--tw-prose-body": "#2D2D2D",
            "--tw-prose-headings": "#2D2D2D",
            "--tw-prose-bold": "#2D2D2D",
            "--tw-prose-links": "#7C5CFC",
            "--tw-prose-quotes": "#2D2D2D",
            "--tw-prose-quote-borders": "rgba(124,92,252,0.4)",
            "--tw-prose-bullets": "#8A8578",
            "--tw-prose-hr": "rgba(45,45,45,0.15)",
            maxWidth: "700px",
            fontFamily: 'var(--font-outfit), "Outfit", system-ui, sans-serif',
            a: {
              textDecoration: "underline",
              textUnderlineOffset: "2px",
              transition: "color 0.15s ease",
            },
            "a:hover": {
              color: "#534AB7",
            },
            "h1, h2, h3, h4": {
              fontFamily:
                'var(--font-josefin), "Josefin Sans", sans-serif',
              fontWeight: "600",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
