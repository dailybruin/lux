import * as React from 'react'
import { css } from 'react-emotion'
import { MainSiteArticleHeaderProps } from './index'

import {
  headlineFont,
  headlineFontSize,
  boldFont,
  regularFont,
  bodyFont,
  topBarFont,
  dailyBruinBlue,
  smallInfoFontSize,
} from '../../globals/mainsiteGlobalStyles'

export default function MainSiteHeadline(props: MainSiteArticleHeaderProps) {
  return (
    <div>
      <div
        className={css`
          font-family: ${topBarFont};
          color: ${dailyBruinBlue};
          font-weight: ${boldFont};
          text-transform: uppercase;
          font-size: ${smallInfoFontSize};
        `}
      >
        <a
          className={css`
            text-decoration: none;
            color: inherit;
          `}
          href={props.categoryURL}
        >
          {props.articleCategory}
        </a>
      </div>
      <div
        className={css`
          line-height: normal;
          font-family: ${headlineFont};
          font-size: ${headlineFontSize};
          font-weight: ${boldFont};
        `}
      >
        {props.headlineText}
      </div>
    </div>
  )
}
