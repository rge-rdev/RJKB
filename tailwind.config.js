const { url } = require("inspector")

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "prism-dark": "url('/static/img/bg-prism-dark.svg')",
        "prism-light": "url('/static/img/bg-prism-light.svg')",
        "circuit-light": "url('/static/img/bg-circuit-light.svg')",
        "hex-blue": "url('/static/img/bg-hex-blue.svg')",
      }),
      animation: {
        "slide-slow": "shift 200s linear infinite",
        "slide-fast": "shift 150s linear infinite",
        "fade-in-out": "fade-flash 7s linear 1",
        "fade-in": "fadein 1s cubic-bezier(.2,2,1,-1) 2 1",
        "pulse-2x": "pulse 2s linear 2",
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
        "fade-flash": {
          "0%,100%": { opacity: 0 },
          "50%": { opacity: 0.5 },
          "25%": { opacity: 1 },
          "75%": { opacity: 0.75 },
        },
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
