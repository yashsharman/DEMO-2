/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#e6a219",
        "background-light": "#fcfaf8",
        "background-dark": "#1b170e",
        charcoal: "#1b170e",
        cream: "#f3efe7",
      },
      fontFamily: {
        display: ["Newsreader", "serif"],
        sans: ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
