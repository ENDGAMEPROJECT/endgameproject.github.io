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
      fontSize: { // no siempre funciona bien la prioridad de tw
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
        dark: {
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
          700: "#0092A2",
          600: "#05BFBF", // primary for light bg
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
          DEFAULT: "#FF7D0B",
          900: "#591204",
          800: "#902703",
          700: "#C83B01",
          600: "#FF5500",
          500: "#FF7D0B",
          400: "#FF8D0B",
          300: "#FFA50B",
          200: "#FEBD4D",
          100: "#FED99A",
          50: "#FEECCC",
          foreground: "#FAFAFA",
        },
        background: {
          600: "#3a3e47",
          DEFAULT: "#2c2e33",
          400: "#1d1e23",
          300: "#17181c",
          200: "#0a0b0c",
        },


        myBackground: "var(--background200)",
        background200: "var(--background200)",
        background300: "var(--background300)",
        background400: "var(--background400)",
        background500: "var(--background500)",
        background600: "var(--background600)",

        myForeground: "var(--foreground)",
        myText: "var(--text)",
        myTextInverse: "var(--textInverse)",


        myPrimary: "var(--primary400)",
        primary50: "var(--primary50)",
        primary100: "var(--primary100)",
        primary200: "var(--primary200)",
        primary300: "var(--primary300)",
        primary400: "var(--primary400)",
        primary500: "var(--primary500)",
        primary600: "var(--primary600)",
        primary700: "var(--primary700)",
        primary800: "var(--primary800)",
        primary900: "var(--primary900)",
        primary950: "var(--primary950)",

        secondary50: "var(--secondary50)",
        secondary100: "var(--secondary100)",
        secondary200: "var(--secondary200)",
        secondary300: "var(--secondary300)",
        secondary400: "var(--secondary400)",
        secondary500: "var(--secondary500)",
        secondary600: "var(--secondary600)",
        secondary700: "var(--secondary700)",
        secondary800: "var(--secondary800)",
        secondary900: "var(--secondary900)",
        secondary950: "var(--secondary950)",

        accent50: "var(--accent50)",
        accent100: "var(--accent100)",
        accent200: "var(--accent200)",
        accent300: "var(--accent300)",
        accent400: "var(--accent400)",
        accent500: "var(--accent500)",
        accent600: "var(--accent600)",
        accent700: "var(--accent700)",
        accent800: "var(--accent800)",
        accent900: "var(--accent900)",
        accent950: "var(--accent950)",
        
        grey50: "var(--grey50)",
        grey100: "var(--grey100)",
        grey200: "var(--grey200)",
        grey300: "var(--grey300)",
        grey400: "var(--grey400)",
        grey500: "var(--grey500)",
        grey600: "var(--grey600)",
        grey700: "var(--grey700)",
        grey800: "var(--grey800)",
        grey900: "var(--grey900)",
        grey950: "var(--grey950)",
        
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
    darkmode: 'class'
  },
  plugins: [
    // require("@tailwindcss/line-clamp"),
  ],
};

// export default config;
