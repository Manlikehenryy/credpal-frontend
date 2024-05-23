/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#006DF7',
        customLightBlue: '#F9FAFB',
        customBtnBlue: '#3772FF',
        customTextColor: '#00164A',
        customOrange: '#F6F0EF',
        customPurple: '#F4F1F7',
        customSkyBlue: '#E8F4FF',
        customDarkPurple: '#EBF1FF',
        customFade: '#F1F5FF',
        customGrey:'#40444F'
      },
      fontSize: {
        'custom-size': '68px',
        '31.16': '31.16px',
        '12.98': '12.98px',
        '16': '16px',
        '14': '14px',
        '12': '12px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '40': '40px',
        '48': '48px',
        '32': '32px',
        '36': '36px',
      },
      lineHeight: {
        'custom-height': '100px',
        '40px': '40px',
      },
      width: {
        '300': '300px',
        '400': '400px',
        '256': '256px',
        '352': '352px',
        '60': '60%',
        '80': '80%',
        '90': '90%',
        '35': '35%',
      },
      height:{
        '304':'304px',
        '400':'400px',
        '94vh': '94.4vh',
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        'dm-sans':['DM-Sans', 'sans-serif'],
        'inter':['Inter', 'sans-serif'],
        'public-sans':['Public-Sans', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}