/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pizoo: {
          pink: '#FF6B9D',
          purple: '#C471ED',
          lightPink: '#FFB4D6',
          darkPurple: '#9B4DC4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-manrope)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-pizoo': 'linear-gradient(135deg, #FF6B9D 0%, #C471ED 100%)',
        'gradient-pizoo-light': 'linear-gradient(135deg, #FFB4D6 0%, #E8B5FF 100%)',
      },
    },
  },
  plugins: [],
};
