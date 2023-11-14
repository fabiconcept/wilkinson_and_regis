/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary-heavy": "#ee9003",
        "primary-soft": "#F1af4c",
        "primary-light": "#F1c27b",
        "primary-lightest": "#f4e1c5",
        "primary-dark": "#141414",
      }
    },
  },
  plugins: [],
}
