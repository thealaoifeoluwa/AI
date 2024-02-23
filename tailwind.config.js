/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [""],
  theme: {
    extend: {
      fontFamily: {
        Satoshi: "Satoshi, sans-serif",
        Cabinet: "Cabinet Grotesk, sans-serif",
      },
      colors: {
        background: "#030E02",
        primary: "#45CA2F",
        text: "#FFEFFD",
        mouse: "#CBF1C5",
      },
      screens: {
        break: "620px",

      },
    },
  },
  plugins: [],
};
