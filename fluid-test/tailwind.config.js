import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      "./src/**/*.{html,js}"
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {},
  },
  plugins: [fluid],
};
