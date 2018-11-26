import { css } from 'react-emotion'
import WebFontLoader from 'webfontloader'

/** Web fonts loaded here - only in a browser */
if (typeof window !== 'undefined') {
  WebFontLoader.load({
    google: {
      families: ['Arimo:700', 'Lora:700', 'Source Sans Pro:900'],
    },
  })
}

/** Reusable common CSS attributes */
export const black = '#000'
export const white = '#fff'
export const headlineFont = 'Arimo'
export const storyListFont = 'Lora'
export const topBarFont = 'Source Sans Pro'
export const cardInnerPadding = '11px 14px 15px'
export const cardShadow = '0px 2px 4px 0px rgba(0,0,0,0.25)'

/** CSS breakpoints */
export const mediaMobileBreakpoint = '@media (max-width: 600px)'
