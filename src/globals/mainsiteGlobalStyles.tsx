import { css } from 'react-emotion'

/** Web fonts loaded here - only in a browser */
if (typeof window !== 'undefined') {
  const WebFontLoader = require('webfontloader')
  WebFontLoader.load({
    google: {
      families: ['Arimo:700'],
    },
  })
}

/** Reusable common CSS attributes */
export const headlineFont = 'Arimo'
export const cardShadow = '0px 2px 4px 0px rgba(0,0,0,0.25)'
export const gray = 'rgb(197, 197, 197)'
export const lightGray = 'rgb(242, 242, 242)'

/** CSS breakpoints */
export const mediaMobileBreakpoint = '@media (max-width: 600px)'
