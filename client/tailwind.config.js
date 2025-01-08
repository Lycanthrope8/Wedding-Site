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
      },
      animation: {
        leaf: "leafAnimation 8s ease-in infinite",
      },
      keyframes: {
        leafAnimation: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
    plugins: [],
  }
};