/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        coral: 'rgba(255, 113, 36)',
        green: 'rgba(142, 202, 193)',
        purple: 'rgba(94, 42, 65)',
        gray: 'rgba(250, 250, 250)',
        darkGray: 'rgba(144, 149, 167)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
