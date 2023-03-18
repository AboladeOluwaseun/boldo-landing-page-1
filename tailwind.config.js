/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        darkBlue: "#0A2640",
        mainGreen: "#65E4A3",
        lightGrey:'#F1F1F1',
        Gray:'#777777',
        greyBlue:'#8FB6D5',
        lightBlue:'#0DBBFC',
        white:'#FFFFFF'
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
