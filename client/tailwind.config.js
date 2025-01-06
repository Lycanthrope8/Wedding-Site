/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        passionsConflict: ["Passions Conflict", "cursive"],
        notoKufi: ["Noto Kufi Arabic", "sans-serif"],
      },
      colors: {
        "custom-golden": "#DA9B61",
      },
    },
    plugins: [],
  }
};