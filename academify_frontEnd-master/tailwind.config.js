/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        btnBlue: "#06159A",
        textGray: "#000000",
        bgBlue: "#492DBC",
        textWhite: "#FFFFFF",
        bgSliders: "#492DBC",
        outlineColor: "#407BFF",
      },
    },
  },
  plugins: [],
};
