/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "tablet": "721px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "sm-2": "0.95rem",
      },
    },
  },
  plugins: [],
}