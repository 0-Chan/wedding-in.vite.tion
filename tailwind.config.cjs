/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      italianno: 'Italianno',
      nanumMyeongjo: 'Nanum Myeongjo',
      gowunDodum: 'Gowun Dodum',
    },
    extend: {
      colors: {
        'metro-line-2': '#10aa18',
        'metro-line-3': '#ff7d21',
        'metro-line-4': '#3495df',
        'metro-line-5': '#8445ce',
      },
    },
  },
  plugins: [],
};
