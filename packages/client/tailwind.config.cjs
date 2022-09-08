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
        coral: 'rgb(255, 113, 36)',
        green: 'rgb(142, 202, 193)',
        purple: 'rgb(94, 42, 65)',
        gray: 'rgb(250, 250, 250)',
        darkGray: 'rgb(144, 149, 167)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
