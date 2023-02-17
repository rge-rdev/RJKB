/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-100": "shift 100s linear infinite",
        "slide-80": "shift 80s linear infinite",
      },
      keyframes: {
        shift: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(-50%, 0, 0)",
          },
        },
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
}
