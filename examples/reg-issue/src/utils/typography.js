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
    }
  ],
  headerFontFamily: ['Buenard', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Inconsolata', 'Helvetica', 'sans-serif'],
})

export default typography
