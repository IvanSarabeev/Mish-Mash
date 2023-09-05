/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slower-spin': "spin 8s ease-in-out infinite"
      }
    },
    fontFamily: {
      'playful': ['Playfair Display SC', 'serif'],
      'lora': ['Lora', 'serif'],
      'martel': ['Martel', 'serif'],
    },

  },
  plugins: ['prettier-plugin-tailwindcss'],
}

