/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      colors: {
        dark: "#160C28",
        primary: "#4E47DC",
        softGray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
