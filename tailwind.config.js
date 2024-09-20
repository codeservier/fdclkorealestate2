/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#095c41",
        mywhite:"#fff"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
};
