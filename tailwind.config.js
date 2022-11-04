// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    './**/*.{html,js,css}',
  ],
  theme: {
    extend: {
      colors: {
        "sp-lightyellow": "#FEF1E4",
        "sp-darkeryellow": "#F9DDC0",
        "sp-darkorange": "#EC6543",
        "sp-lightorange": "#F19D52",
        "sp-brown": "#231E20",
      },
      dropShadow: {
        '3xl': '0 0 72px rgba(0,0,0,0.25)'
      },
      fontSize: {
        "2xs" : '0.75rem'
      }
    },
    fontFamily: {
      Outfit: ["Outfit, sans-serif"],
    },
    fontSize: {
      xs: '0.75rem',
      "2xl": '1.563rem',
      "3xl": '1.953rem',
      "4xl": '2.441rem',
      "5xl": '3.052rem',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: "1124px",
        '2lg': "1535px",
        xl: "1920px",
        "2xl": "3840px",
      }
    },
  },
  plugins: [],
}
