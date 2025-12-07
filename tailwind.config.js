/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // Using Playfair Display for that classic luxury real estate feel
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'luxury-black': '#1a1a1a',
        'luxury-gold': '#c5a059',
        'soft-gray': '#f9f9f9',
      }
    },
  },
  plugins: [],
}