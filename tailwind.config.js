const { url } = require("inspector")

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "prism-dark": "url('/static/img/BgPrismDark.svg')",
        "prism-light": "url('/static/img/BgPrismLight.svg')",
        "circuit-light": "url('/static/img/BgCircuitLight.svg')",
        "hex-blue": "url('/static/img/BgHexBlue.svg')",
      }),
      animation: {
        "slide-slow": "shift 200s linear infinite",
        "slide-fast": "shift 150s linear infinite",
        "fade-in-out": "fade-flash 7s linear 1",
        "fade-in": "fadein 1s cubic-bezier(.2,2,1,-1) 1",
        "fade-in-md-50": "fadein50 1s linear 1",
        "fade-in-slow-75": "fadein75 2s linear 1",
        "fade-out-fast-75": "fadeout75 0.1s linear 1",
        "fade-out-md-50": "fadeout50 0.5s linear 1",
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
        fadein50: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.5 },
        },
        fadein75: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.75 },
        },
        fadeout: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeout: {
          "0%": { opacity: 0.75 },
          "100%": { opacity: 0 },
        },
        fadeout50: {
          "0%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
