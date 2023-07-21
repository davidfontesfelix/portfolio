/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        phone: { max: '480px' },
        phoneSm: { max: '390px' },
        phoneDetails: { max: '410px' },
        // noPhone: { min: '480px' },
        tablet: { max: '660px', min: '480px' },
        details: { raw: '(max-height: 790px)' },
        detailsSmall: { raw: '(max-height: 600px)' },
        desktops: { max: '1210px', min: '940px' },
        laptops: { max: '940px', min: '660px' },
      },
      colors: {
        black: '#151515',
        blueProject: '#4DBFFF',
      },
    },
  },
  plugins: [],
}
