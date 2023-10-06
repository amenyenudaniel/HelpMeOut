/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColors: {
        primary: "#120B48",
        primary400: "#413c6d",
        primary300: "#605c84",
        primary50: "#e7e7ed",
      },
      keyframes: {
        show: {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(0px)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        animation: {
          show: "show .3s ease",
          fadeIn: "fadeIn .5s ease",
        },
      },
    },
  },
  plugins: [],
};
export default config;
