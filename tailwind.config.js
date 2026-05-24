/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        petrol: {
          DEFAULT: '#4C6A70',
          light: '#5B777D',
          dark: '#22343A',
          mid: '#3E5960',
        },
        amarelo: {
          DEFAULT: '#F7FF19',
          dark: '#DCE600',
        },
        pedra: {
          DEFAULT: '#A79C90',
          dark: '#83796F',
        },
        grafite: {
          DEFAULT: '#1A1A1A',
          mid: '#232323',
          light: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
