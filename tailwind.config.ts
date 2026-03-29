import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f8fa",
          100: "#eceef2",
          200: "#d5dae3",
          300: "#b0b9c8",
          400: "#8592a8",
          500: "#667790",
          600: "#525f76",
          700: "#434d60",
          800: "#3a4252",
          900: "#333946",
          950: "#1e222c",
        },
        accent: {
          DEFAULT: "#3d6aff",
          muted: "rgba(61, 106, 255, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 24px 48px -12px rgba(15, 23, 42, 0.12)",
        "card-dark":
          "0 1px 2px rgba(0, 0, 0, 0.2), 0 24px 48px -12px rgba(0, 0, 0, 0.45)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
