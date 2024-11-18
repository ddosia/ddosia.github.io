/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // screens: {
    //   mobile: "375px",
    //   desktop: "1440px",
    // },
    extend: {
      colors: {
        myWhite: "hsl(0, 0%, 100%)",
        "myStone-100": "hsl(30, 54%, 90%)",
        "myStone-150": "hsl(30, 18%, 87%)",
        "myStone-600": "hsl(30, 10%, 34%)",
        "myStone-900": "hsl(24, 5%, 18%)",
        "myBrown-800": "hsl(14, 45%, 36%)",
        "myRose-50": "hsl(330, 100%, 98%)",
        "myRose-800": "hsl(332, 51%, 32%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        "young-serif": ["Young Serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
