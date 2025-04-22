/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const config = require("./next.config.mjs");

const basePathTailwind = config.default.basePath;
// const basePathTailwind = process.env.BASE_PATH || '';

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-space)", "sans-serif"],
        main: ["var(--font-dmSans)", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1.4" }] /* 10px */,
        xs: ["0.75rem", { lineHeight: "1.4" }] /* 12px */,
        sm: ["0.875rem", { lineHeight: "1.4" }] /* 14px */,
        base: ["1rem", { lineHeight: "1.5" }] /* 16px body */,
        18: ["1.125rem", { lineHeight: "1.5" }],
        20: ["1.25rem", { lineHeight: "1.4" }],
        24: ["1.5rem", { lineHeight: "1.4" }],
        28: ["1.75rem", { lineHeight: "1.4" }],
        32: ["2rem", { lineHeight: "1.4" }],
        36: ["2.25rem", { lineHeight: "1.4" }],
        40: ["2.5rem", { lineHeight: "1.4" }],
        48: ["3rem", { lineHeight: "1.4" }],
        56: ["3.5rem", { lineHeight: "1.4" }],
        64: ["4rem", { lineHeight: "1.4" }],
      },
      spacing: {
        9: "36px",
      },
      colors: {
        // whiteFull: "#ffffff",
        text: "#FAFAFA",
        "gray-10": "#FAFAFA",
        black: "#090909",
        grey: {
          DEFAULT: "#0AFFDE",
          950: "#131313",
          900: "#202323",
          800: "#353A39",
          700: "#495150",
          600: "#5E6766",
          500: "#727E7D",
          400: "#889392",
          300: "#9FA8A7",
          200: "#B6BDBC",
          100: "#CCD1D0",
          50: "#E3E6E5",
        },
        primary: {
          // cyan
          DEFAULT: "#0AFFDE",
          900: "#00535C",
          800: "#007E8A",
          700: "#009EA3",
          600: "#05BFBF", // parimary for light bg
          500: "#00D3C8",
          400: "#0AFFDE", // primary for dark bg
          300: "#5DFEE3",
          200: "#80FFEA",
          100: "#B4FDF1",
          50: "#D7FEF9",
          foreground: "#FAFAFA",
        },
        secondary: {
          // blue
          DEFAULT: "#0066CC",
          900: "#09233C",
          800: "#06396C",
          700: "#03509C",
          600: "#0066CC",
          500: "#0073E5",
          400: "#0080FF",
          300: "#3298FE",
          200: "#5CADFF",
          100: "#99CFFF",
          50: "#CCE7FF",
          foreground: "#FAFAFA",
        },
        accent: {
          // orange
          DEFAULT: "#FF5500",
          900: "#581103",
          800: "#961E00",
          700: "#C83B01",
          600: "#4b5563",
          500: "#FF5500",
          400: "#FF6E1A",
          300: "#FF8B45",
          200: "#FEAD5D",
          100: "#FECE8B",
          50: "#FDE7C3",
          foreground: "#FAFAFA",
        },
        background: {
          600: "#3a3e47",
          DEFAULT: "#2c2e33",
          400: "#1d1e23",
          300: "#17181c",
          200: "#0a0b0c",
        },
      },
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
    },
  },
  plugins: [
    // require("@tailwindcss/line-clamp"),
  ],
};

// export default config;
