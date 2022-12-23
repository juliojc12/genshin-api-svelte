/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('./src/assets/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
        'instagram-gradient': 'linear-gradient(90deg, #FFD600, #FF7A00, #FF0069, #D300C5, #7638FA )',
      },
      backgroundSize: {
        "100%": '100%',
        "110%": '110%',
      },
      colors: {
        facebook: '#0F92F3',
        instagram: '#FF0069',
        linkedin: '#084C91',
      },



    },
  },
  plugins: [],
}
