/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "regal-blue": "#243c5a",
      },
      colors: {
        orangeCustom: "#F15412",
        blackCustom: "#000000",
        cyanCustom: "#34B3F1",
        grayCustom: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
