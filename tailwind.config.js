/** @type {import('tailwindcss').Config} */
// Mandiol design tokens — see SPEC.md §4 Design System.
// Editing these colours changes the brand. Check WCAG 4.5:1 contrast
// before shipping any new pairing (SPEC.md §4.3 Accessibility).
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Primary brand colour — deep plum. Used for headers and primary surfaces.
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
        // Accent — rose. Used for calls-to-action and highlights.
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
        // Safe / positive — sage. Used for "green" questionnaire outcomes
        // and "I'm safe" confirmations.
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
        // Alert — high-contrast red for errors and red-band outcomes.
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
        // Background — warm cream. Main app canvas colour.
        cream: {
          DEFAULT: "#fdf8f5",
          50: "#fffefd",
          100: "#fdf8f5",
          200: "#f7ece4",
          300: "#eddac9",
          400: "#dfc1a8",
          500: "#cba485",
        },
      },
      fontFamily: {
        // SPEC.md §4.2 Typography
        heading: ["CormorantGaramond_600SemiBold", "serif"],
        "heading-regular": ["CormorantGaramond_400Regular", "serif"],
        body: ["DMSans_400Regular", "system-ui", "sans-serif"],
        "body-medium": ["DMSans_500Medium", "system-ui", "sans-serif"],
        "body-bold": ["DMSans_700Bold", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Minimum body 16px per SPEC.md §4.2.
        base: ["16px", { lineHeight: "24px" }],
      },
      spacing: {
        // Minimum tap target 44px per SPEC.md §4.3.
        "tap-min": "44px",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
