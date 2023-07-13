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
        phoneDetails: { max: '410px' },
        noPhone: { min: '480px' },
        tablet: { max: '660px', min: '480px' },
      },
      colors: {
        black: '#151515',
        blueProject: '#14AFC4',
      },
    },
  },
  plugins: [],
}
