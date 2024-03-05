/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0052FE',
        secondary: '#EF3031',
        accent: '#0FBA83',
        neutral: '#dedfe2',
        textColor: '#111827',
        success: '#00B386',
        warning: '#F7324C',
      },
    },
  },
  plugins: [],
};
