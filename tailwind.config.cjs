/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        movieBackground:
          "linear-gradient(to right, rgba(31.5, 31.5, 73.5, 1), rgba(31.5, 31.5, 73.5, 0.84) 30%, rgba(31.5, 31.5, 73.5, 0.84) 100%);",
      },
    },
  },
  plugins: [],
};
