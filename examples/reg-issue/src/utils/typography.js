import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Buenard',
      styles: ['700'],
    },
    {
      name: 'Inconsolata',
      styles: ['400'],
    },
    {
      name: 'EB Garamond',
      styles: ['700'],
    }
  ],
  headerFontFamily: ['Buenard', 'serif'],
  bodyFontFamily: ['Inconsolata', 'monospace'],
})

export default typography
