/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        passionsConflict: ["Passions Conflict", "cursive"],
        notoKufi: ["Noto Kufi Arabic", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-golden": "#DA9B61",
      },
      backgroundImage: {
        roundBorder: "url('../src/assets/round-frame.png')",
        flowerpattern: "url('../src/assets/flowerpattern.png')",
      },
    },
    plugins: [],
  }
};