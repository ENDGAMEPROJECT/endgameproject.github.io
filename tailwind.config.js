/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const config = require('./next.config.mjs');

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
        "title": ['var(--font-space)', 'sans-serif'],
        "main": ['var(--font-dmSans)', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1.4' }],  /* 10px */
        'xs': ['0.75rem', { lineHeight: '1.4' }],    /* 12px */
        'sm': ['0.875rem', { lineHeight: '1.4' }],   /* 14px */
        'base': ['1rem', { lineHeight: '1.5' }],     /* 16px body */
        '18': ['1.125rem', { lineHeight: '1.5' }],
        '20': ['1.25rem', { lineHeight: '1.4' }], 
        '24': ['1.5rem', { lineHeight: '1.4' }], 
        '28': ['1.75rem', { lineHeight: '1.4' }],
        '32': ['2rem', { lineHeight: '1.4' }],   
        '36': ['2.25rem', { lineHeight: '1.4' }],
        '40': ['2.5rem', { lineHeight: '1.4' }], 
        '48': ['3rem', { lineHeight: '1.4' }], 
        '56': ['3.5rem', { lineHeight: '1.4' }], 
        '64': ['4rem', { lineHeight: '1.4' }],
      },
      colors: {
        // whiteFull: "#ffffff",
        text: "#f8f8f8",
        snow: "#EFF7FB",
        black: "#0D0D1C",

        primary: { // azul genérico
          DEFAULT: "#056dc1",
          900: "#0e406c",
          800: "#094b83",
          700: "#05589f",
          600: "#056dc1",
          500: "#118de6",
          400: "#3ba8f5",
          300: "#7fc5fa",
          200: "#bbdffc",
          100: "#e0effe",
          50: "#f0f7ff",
          foreground: "#FFFFFF",
         
        },
        secondary: { 
          DEFAULT: "#9ca3af",
          700: "#374151",
          600: "#4b5563",
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
          200: "#e5e7eb",
          100: "#f3f4f6",
          50: "#f9fafb",
          foreground: "#ffffff"
        },
        orange: { 
          DEFAULT: "#9ca3af",
          900: "#374151",
          800: "#374151",
          700: "#374151",
          600: "#4b5563",
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
          200: "#e5e7eb",
          100: "#f3f4f6",
          50: "#f9fafb",
          foreground: "#ffffff"
        },
        background: {
          600: "#3a3e47",
          DEFAULT:"#2c2e33",
          400:"#1d1e23",
          300: "#17181c", 
          200:  "#0a0b0c"
        },
        data: {
          DEFAULT: "#236B5E",
          600: "#165146",
          500: "#236B5E",
          400: "#45ad9a",
          "transparent300": "#9FD18CBD",
          300: "#9FD18C"
        },
        videoconference: {
          600:"#66102f",
          500: "#93244d",
          400: "#bf4c76",
          300: "#F4517F",
          200: "#f990ae"
        },
        ai: {
          700: "#9b6a26",
          600: "#FD7A1E",
          500: "#EC9010",
          400: "#f9af48",
          300: "#FFE57D",
          200: "#F2E4B6",
          "transparent600": "#FD7A1Edd"
          
        },
        eLearning: {
          600: "#174193",
          500: "#2D63D0",
          400: "#5689F3",
          300: "#73B2FA",
          200: "#a6cefc",
        },
        networks: {
          200: "#ceaaf7",
          300: "#b57af9",
          400: "#9b48f9",
          500: "#7F3BCD",
          600: "#534068",
          700: "#473b54",
        },
      },
    },
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', 
      '3xl': '1700px'   
    },
  },
  plugins: [
    // require("@tailwindcss/line-clamp"),
    plugin(function({ addBase, theme }) {
      // addBase({
      //   'h1': { fontFamily: theme('fontFamily.inter') },
      //   'h2': { fontFamily: theme('fontFamily.inter') },
      //   'h3': { fontFamily: theme('fontFamily.inter') },
      //   'h4': { fontFamily: theme('fontFamily.inter') },
      //   'h5': { fontFamily: theme('fontFamily.inter') },
      //   'h6': { fontFamily: theme('fontFamily.inter') },
      //   'p': { fontFamily: theme('fontFamily.arimo') },
      //   'a': { fontFamily: theme('fontFamily.sourceSans') },
      //   'button': { fontFamily: theme('fontFamily.sourceSans') },
      // })
    })
  ],
  // corePlugins: {
  //   preflight: false,
  // },
};

// export default config;