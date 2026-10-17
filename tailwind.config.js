/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legal: {
          navy: '#1C2D3A',          // Primary Dark Slate
          slate: '#455A64',         // Subtitle & Secondary Text
          rosewood: '#9B5E6D',      // Accent / CTA Color
          rosewoodHover: '#834F5C', // Hover Accent
          ice: '#F0F2F5',           // Cool Canvas Background
          white: '#FFFFFF',         // Card Container Background
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}