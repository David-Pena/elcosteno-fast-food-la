/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode variant
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        secondary: '#FF8C00',
        tertiary: '#FF0000',
        background: '#121212',
        'accent-white': '#FFFFFF',
        'accent-gray': '#C0C0C0',
        brown: '#8B4513',
        green: '#32CD32',
        'dark-background': '#121212',
        // Light theme colors (new)
        'light-background': '#F5F5F0',
        'light-text': '#2D3748',
        'light-accent': '#E2E8F0',
        'light-primary': '#F6AD55',
        'light-secondary': '#ED8936',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [],
}
