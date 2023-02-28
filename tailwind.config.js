/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-slow": "shift 200s linear infinite",
        "slide-fast": "shift 150s linear infinite",
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
