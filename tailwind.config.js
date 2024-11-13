/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js,php}', './src/**/*.{html,js,php}'],
  theme: {
    extend: {
      fontFamily: {
        'plex-mono': ['"IBM Plex Mono"', 'monospace'],
        'elegant': ['"DM Serif Display"', 'serif'],
        'bricolage': ['"Bricolage Grotesque"', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      colors: {
        bg1: '#292F36',
        bg2: '#1A1E23',
        brand1: '#12F7D6',
        brand2: '#98FAEC',
        grey: '#43454D',
      },
    },
  },
  plugins: [],
}

