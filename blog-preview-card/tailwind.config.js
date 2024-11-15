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
        myYellow: "hsl(47, 88%, 63%)",
        "myGray-500": "hsl(0, 0, 42%)",
        "myGray-950": "hsl(0, 0, 7%)",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
