/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0052FE',
        secondary: '#EF3031',
        accent: '#0FBA83',
        neutral: '#eeeef0',
        textNormal: '#111827',
        textLight: '#768396',
        success: '#14B079',
        warning: '#F7324C',
      },
    },
  },
  plugins: [],
};
