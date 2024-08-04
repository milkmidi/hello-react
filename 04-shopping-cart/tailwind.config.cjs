const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    data: {
      active: 'active~="true"', // data-active="true"
    },
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities, addComponents, addVariant, e }) => {
      addVariant('child', '& > *');
      addVariant('active', '&.active');
    }),
  ],
};
