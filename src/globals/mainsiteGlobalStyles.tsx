import { css } from 'react-emotion'
import * as WebFontLoader from 'webfontloader'

WebFontLoader.load({
  google: {
    families: ['Arimo:700']
  }
});

export const headlineFont = 'Arimo';
export const cardShadow = '0px 2px 4px 0px rgba(0,0,0,0.25)';
export const mediaMobileBreakpoint = '@media (max-width: 600px)';
