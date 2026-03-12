/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],

  daisyui: {

    themes: [

      {
        gamehub: {

          "primary": "#22c55e",      // neon green
          "secondary": "#9333ea",    // purple
          "accent": "#06b6d4",       // cyan

          "neutral": "#0f172a",
          "base-100": "#020617",     // dark background
          "base-200": "#0f172a",
          "base-300": "#1e293b",

          "info": "#38bdf8",
          "success": "#22c55e",
          "warning": "#facc15",
          "error": "#ef4444",

        },
      },

    ],

  },

};