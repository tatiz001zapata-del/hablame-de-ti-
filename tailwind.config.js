/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          500: "#b7a8ff", // lavanda principal
          600: "#9c8be6", // hover lavanda
        },
        serene: {
          500: "#7da9c9", // azul sereno (tono medio)
          600: "#6b90ad", // hover azul sereno
        },
        beige: {
          500: "#f2e9d8", // beige suave
          600: "#e5d8c2", // hover beige
        },
        coral: {
          500: "#ff8f7a", // coral suave
          600: "#e67864", // hover coral
        },
      },
    },
  },
  plugins: [],
};
