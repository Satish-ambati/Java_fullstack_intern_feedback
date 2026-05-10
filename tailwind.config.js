/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:       "#1D3557",
          "blue-mid": "#1D6FB8",
          orange:     "#F97316",
          "orange-dk":"#EA580C",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'bounce-light': 'bounceLight 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
