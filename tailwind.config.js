/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorLinBlue: 'hsl(249, 99%, 64%)',
        colorLinPurple: 'hsl(278, 94%, 30%)',
        colorRed: ' hsl(0, 100%, 66%)',
        colorWhite: 'hsl(0, 0%, 100%)',
        colorLightGrayViolet: 'hsl(270, 3%, 87%)',
        colorDarkGrayViolet: 'hsl(279, 6%, 55%)',
        colorDarkViolet: 'hsl(278, 68%, 11%)',
      },
      fontFamily: {
        fontSpaceG: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'bg-card-front': "url('/src/images/bg-card-front.png')",
        'bg-card-back': "url('src/images/bg-card-back.png')",
        'bg-main-mobile': "url('src/images/bg-main-mobile.png')",
      },
      screens: {
        mobilesm: '350px',
        tabletsm: '425px',
        laptop: '1024px',
        laptopm: '1325px',
        laptoplg: '1550px',
        tall: { raw: '(min-height:775px)' },
        tallest: { raw: '(min-height:1150px)' },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
};
