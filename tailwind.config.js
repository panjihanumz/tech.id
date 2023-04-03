/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2854F6",
        primarySoft: "#CCF9FF",
        gray: "#A7A7A7",
        darkGray: "#4d4d4d",
      },
    },
  },
  plugins: [],
};
