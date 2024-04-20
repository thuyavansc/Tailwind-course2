/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        tPrimary: "#FF3636",
        tSecondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
    fontFamily: {
      body: ["Teko"],
    },
  },
  plugins: [],
};
