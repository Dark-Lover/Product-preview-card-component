/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark_cyan: "hsl(158, 36%, 37%)",
          cream: "hsl(30, 38%, 92%)",
        },
        secondary: {
          v_dark_blue: "hsl(212, 21%, 14%)",
          dar_g_blue: "hsl(228, 12%, 48%)",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        fraunces: ["Fraunces"],
      },
    },
  },
  plugins: [],
};
