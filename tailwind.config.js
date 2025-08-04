/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'jsmath': ['jsMath-cmti10', 'serif'],
      },
      colors: {
        vedra: {
          hunter: '#185C2F',
          calpoly: '#1f6b35',
          floral: '#FFFBFO',
          silver: '#CECFDI',
          night: '#131314',
        },
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce5cc',
          300: '#8dd1a8',
          400: '#5bb57e',
          500: '#185C2F', // Hunter Green
          600: '#155025',
          700: '#11421e',
          800: '#0d3518',
          900: '#0a2b13',
        },
        secondary: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce5cc',
          300: '#8dd1a8',
          400: '#5bb57e',
          500: '#1f6b35', // Cal Poly Green
          600: '#1a5a2d',
          700: '#154a25',
          800: '#113b1e',
          900: '#0e2f18',
        },
        neutral: {
          50: '#fefefe',
          100: '#fdfcfc',
          200: '#faf9f9',
          300: '#f5f4f4',
          400: '#e8e7e7',
          500: '#CECFDI', // Silver
          600: '#a8a9b8',
          700: '#8a8b9a',
          800: '#6f707f',
          900: '#131314', // Night Black
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} 