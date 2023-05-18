/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '768px',
      'desktop': '1024px'
    },
    colors: {
      'yellow-g': '#FFC300',
      'blue-g': '#1D98D1',
      'purple-g': '#A202E0',
      'white-g': '#FFFFFF',
      'black-g': '#000000',
      'gray-g': '#939393',
      'red-s': '#9B2333',
      'orange-s': '#C55C29',
      'yellow-s': '#B49A58',
      'blue-s': '#183D58',
      'green-s': '#506E5C',
      'purple-s': '#6D3E78',
      'white-s': '#948c90 ',
      'black-s': '#413F3E',
      'black-u': '#302918',
      'yellow-u': '#74561C',
      'green-u': '#0A403E',
      'fuxia-u': '#431528',
      'brown1-c': '#834B17',
      'red-c': '#D6101F',
      'fuxia-c': '#AA2740',
      'blue-c': '#2C5474',
      'brown2-c': '#322010',
    },
    spacing: {
      '4m': '4vw',
      '8m': '8vw',
      '16m': '16vw',
      '32m': '32vw',
      '8t': '1.14vw',
      '16t': '2.29vw',
      '32t': '4.57vw',
      '64t': '9.14vw',
      '16d': '1.33vw',
      '32d': '2.67vw',
      '64d': '5.33vw',
      '128d': '10.67vw',
    },
    fontSize: {
      'basem': '5vw',
      'titlem': '8vw',
      'titleHeaderm': '12vw',
      'baset': '2.29vw',
      'titlet': '2.86vw',
      'titleHeadert': '3.43vw',
      'based': '1.17vw',
      'titled': '1.67vw',
      'titleHeaderd': '2.67vw',
    },
    fontFamily: {
      'quicksand': ['Quicksand'],
    },
    lineHeight: {
      'lhm': '10vw',
      'lht': '4.58vw',
      'lhd': '2.34vw',
    },
    extend: {
      gridTemplateAreas: {
        'layoutSignificado': [
          'r o y',
          'r o y',
          'r o y',
          'r b b',
          'r b b',
          'r g g',
          'r g g',
          'w w p',
          'w w p',
          'w w p',
          'k k k',
          'k k k',
        ],
        'layoutCultura': [
          'e e e e c c',
          'e e e e c c',
          'e e e e c c',
          'e e e e c c',
          'i i i i i i',
          'i i i i i i',
          'g g g p p p',
          'g g g p p p',
          'g g g p p p',
          'g g g p p p',
        ],
        'layoutCulturaIndia': [
          'p1 p1 i1',
          'i2 p2 p2'
        ],
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}

