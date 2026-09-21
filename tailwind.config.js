/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        canvas: '#faf7f2',
        brand: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          950: '#022c22',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translate3d(-50%,0,0)' },
          '100%': { transform: 'translate3d(0,0,0)' },
        },
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(16, 185, 129, 0.45)',
        'glow-sm': '0 0 30px -8px rgba(16, 185, 129, 0.35)',
        card: '0 4px 24px -4px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 40px -12px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(16, 185, 129, 0.12)',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        marquee: 'marquee 42s linear infinite',
        'marquee-reverse': 'marquee-reverse 48s linear infinite',
        shine: 'shine 6s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
