/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        passionsConflict: ["Passions Conflict", "cursive"],
        notoKufi: ["Noto Kufi Arabic", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lugrasimo: ["Lugrasimo", "serif"],
      },
      colors: {
        "custom-golden": "#DA9B61",
      },
      backgroundImage: {
        flowerpattern: "url('../src/assets/flowerpattern.png')",
      },
    },
    plugins: [],
  }
};