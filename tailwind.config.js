module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'text-gray-500': '#000',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
