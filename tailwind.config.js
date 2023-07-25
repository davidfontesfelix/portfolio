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
        smHeight: { raw: '(max-height: 740px)' },
        phoneSm: { max: '375px' },
        phone: { max: '480px', min: '376px' },
        horizontal: { raw: '(max-height: 480px)' },
        tablet: { max: '1023px', min: '600px' },
        laptops: { min: '1024px' },
      },
      colors: {
        black: '#151515',
        blueProject: '#4DBFFF',
      },
    },
  },
  plugins: [],
}
