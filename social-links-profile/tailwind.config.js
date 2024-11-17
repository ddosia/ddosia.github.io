/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        myWhite: "hsl(0, 0%, 100%)",
        myGreen: "hsl(75, 94%, 57%)",
        "myGray-700": "hsl(0, 0%, 20%)",
        "myGray-800": "hsl(0, 0%, 12%)",
        "myGray-900": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
