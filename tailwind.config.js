/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}','./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontSize:{
        xxs:['0.65rem',{lineHeight:'1.1rem'}]
      },
      maxWidth:{
        'max-w-8xl':'90rem'
      }
    },
    
  },
  plugins: [
    require('flowbite/plugin'),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require('tw-elements/dist/plugin')


  ],
}
