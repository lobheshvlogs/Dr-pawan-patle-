/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B18', // Deepest background
          900: '#0A1128', // Primary deep navy
          850: '#0E1736',
          800: '#141F48',
          700: '#1C2B62',
          600: '#2A3C7E',
        },
        softBlue: {
          50: '#F0F6FF',
          100: '#E0EEFE',
          200: '#BAE0FD',
          300: '#7CC4FA',
          400: '#38A4F6',
          500: '#0E86D4',
          600: '#055C9D',
          700: '#003060',
        },
        charcoal: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#868E96',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#121416',
          950: '#0A0C0D',
        },
        cream: {
          50: '#FAF8F5',
          100: '#F5F0E6',
          200: '#EAE1D0',
          300: '#DFD2B9',
          400: '#CCAFA0',
          500: '#B0976E',
        },
        clinical: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0E86D4',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49',
        },
        frost: {
          light: 'rgba(255, 255, 255, 0.7)',
          glass: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.15)',
          darkBorder: 'rgba(20, 31, 72, 0.2)',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 17, 40, 0.08)',
        'glass-glow': '0 0 25px rgba(56, 164, 246, 0.15)',
        '3d-subtle': '0 20px 40px -15px rgba(10, 17, 40, 0.12)',
        '3d-elevated': '0 25px 50px -12px rgba(10, 17, 40, 0.2)',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      }
    },
  },
  plugins: [],
}
