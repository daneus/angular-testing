/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        azul: "#6366F0",
        rosa: "#FF4181",
        verdeBG: "#F3F5EE",
        rojoBG: "#FFECEC",
        morado: "#6D28DC",
      },
    },
  },
  plugins: [],
};
