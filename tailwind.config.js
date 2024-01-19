/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightPink: "hsl(275, 100%, 97%)",
        grayishPurple: "hsl(292, 16%, 49%)",
        darkPurple: "hsl(292, 42%, 14%)",
        hover: "hsl(280.92, 82.98%, 53.92%)",
      },
    },
  },
  plugins: [],
};
