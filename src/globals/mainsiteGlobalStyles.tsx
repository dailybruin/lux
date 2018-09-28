import { css } from 'react-emotion'
import * as WebFontLoader from 'webfontloader'

/** Web fonts loaded here */
WebFontLoader.load({
  google: {
    families: ['Arimo:700']
  }
});

/** Reusable common CSS attributes */
export const headlineFont = 'Arimo';
export const cardShadow = '0px 2px 4px 0px rgba(0,0,0,0.25)';

/** CSS breakpoints */
export const mediaMobileBreakpoint = '@media (max-width: 600px)';
