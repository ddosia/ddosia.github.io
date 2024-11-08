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
        "mySlate-300": "hsl(212, 45%, 89%)",
        "mySlate-500": "hsl(216, 15%, 48%)",
        "mySlate-900": "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
