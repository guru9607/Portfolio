/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#D35269',
          dark: '#a62b3b',
        },
        lcolor: '#0a66c2',
        brand: {
          primary: '#2563EB',
          secondary: '#D35269',
          accent: '#F59E0B',
        },
        dark: {
          DEFAULT: '#000000',
          secondary: '#111827',
        }
      },
      fontFamily: {
        Dosis: ['Dosis', 'sans-serif'],
        Poppins: ['Poppins', "sans-serif"],
        RobotoC: ['Roboto Condensed', 'sans-serif'],
        Josefin: ['Josefin Sans', 'sans-serif'],
        Fira: ['Fira Code', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
        'premium-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
  ],
}
