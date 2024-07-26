/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xsm": "320px",
      xsm: "500px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        movieBackground:
          "linear-gradient(to right, rgba(31.5, 31.5, 73.5, 1), rgba(21.5, 21.5, 63.5, 0.84) 30%, rgba(31.5, 31.5, 73.5, 0.84) 100%);",
      },
      gridTemplateColumns: {
        mobHeader: "128px 1fr",
      },
      gridTemplateRows: {
        mobHeader: "repeat(6, auto)",
      },
    },
  },
  plugins: [],
};
