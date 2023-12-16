/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        ps: '40px 20px 80px rgba(46, 4, 4, 0.3)',
        psx: '40px 0px 140px rgba(46, 4, 4, 0.15)',
      },
      screens: {
        laptopL: '1440px',
        PC1920: '1920px',
        PC2560: '2560px',
      },
    },
  },
  plugins: [],
};
