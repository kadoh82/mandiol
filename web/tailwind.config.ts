import type { Config } from "tailwindcss";

/**
 * Mandiol web design tokens — mirrors the React Native tailwind.config.js
 * at the repo root. Keep these values in sync.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: "#4a2637",
          50: "#f6eef1",
          100: "#e4ccd4",
          200: "#c898a9",
          300: "#a5677d",
          400: "#7a425a",
          500: "#4a2637",
          600: "#3c1e2c",
          700: "#2e1722",
          800: "#1f0f17",
          900: "#11080c",
        },
        rose: {
          DEFAULT: "#c4687a",
          50: "#fbeef1",
          100: "#f4d2da",
          200: "#e7a5b5",
          300: "#d98693",
          400: "#c4687a",
          500: "#a84a5d",
          600: "#853748",
          700: "#5f2634",
          800: "#3c1720",
          900: "#1e0a10",
        },
        sage: {
          DEFAULT: "#6b8f71",
          50: "#eef3ef",
          100: "#d4e1d6",
          200: "#abc3ae",
          300: "#83a488",
          400: "#6b8f71",
          500: "#547258",
          600: "#415846",
          700: "#2e3f32",
          800: "#1c271f",
          900: "#0c110d",
        },
        alert: {
          DEFAULT: "#b83232",
          50: "#fbeaea",
          100: "#f3c4c4",
          200: "#e38a8a",
          300: "#d45858",
          400: "#b83232",
          500: "#982626",
          600: "#761c1c",
          700: "#541313",
          800: "#330a0a",
          900: "#170404",
        },
        cream: {
          DEFAULT: "#fdf8f5",
          50: "#fffefd",
          100: "#fdf8f5",
          200: "#f7ece4",
          300: "#eddac9",
          400: "#dfc1a8",
          500: "#cba485",
        },
        ink: "#1f0f17",
        "ink-muted": "#5c4752",
        border: "#e4ccd4",
      },
      fontFamily: {
        heading: ["Georgia", "Cormorant Garamond", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: ["16px", { lineHeight: "24px" }],
      },
      spacing: {
        "tap-min": "44px",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
