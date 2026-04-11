/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./projects/**/*.{html,js}",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D390E',
        'primary-container': '#8A5024',
        secondary: '#2C4035',
        'secondary-dark': '#2C2926',
        surface: '#FFF8F3',
        'surface-container-low': '#F9F2EC',
        'surface-container-lowest': '#FDFBF9',
        'surface-variant': '#E8E1DB',
        'on-surface': '#1E1B18',
        'on-primary': '#FDFBF9',
        'outline-variant': '#D7C2B7',
        'tertiary-fixed': '#F5DFC9',
        'on-tertiary-fixed': '#25190C',
        white: '#FDFBF9',
        black: '#0A0A0A',
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
        serif: ['Unna', 'serif'],
        header: ['Figtree', 'sans-serif'],
        body: ['Unna', 'serif'],
      },
      borderRadius: {
        'default': '1px',
      },
      fontSize: {
        // Minor Third (1.200) typescale — base 16px
        'step-0': ['1rem',     { lineHeight: '1.6' }],  // 16px
        'step-1': ['1.2rem',   { lineHeight: '1.6' }],  // 19.2px
        'step-2': ['1.44rem',  { lineHeight: '1.4' }],  // 23px
        'step-3': ['1.728rem', { lineHeight: '1.3' }],  // 27.6px
        'step-4': ['2.074rem', { lineHeight: '1.2' }],  // 33.2px
        'step-5': ['2.488rem', { lineHeight: '1.15' }], // 39.8px
        'step-6': ['2.986rem', { lineHeight: '1.1' }],  // 47.8px
        'step-7': ['3.583rem', { lineHeight: '1.05' }], // 57.3px
      },
    },
  },
  plugins: [],
}
