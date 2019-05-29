// support for multiple authors
import * as React from 'react'
import { css } from 'react-emotion'
import { MainSiteArticleHeaderProps } from './index'
import dbLogo from './db-logo.png'
import {
  headlineFont,
  headlineFontSize,
  boldFont,
  regularFont,
  bodyFont,
  topBarFont,
  dailyBruinBlue,
  subInfoFontSize,
  smallInfoFontSize,
  darkGray,
} from '../../globals/mainsiteGlobalStyles'

export default function MainSiteByline(props: MainSiteArticleHeaderProps) {
  // first check if there's only one author with a profile photo
  if (props.bylineInfo.length === 1) {
    const photoURL = props.bylineInfo[0].authorPhotoURL
      ? props.bylineInfo[0].authorPhotoURL
      : dbLogo
    return (
      <div
        className={css`
          img {
            height: 50px;
            width: 50px;
            border-radius: 25px;
          }

          display: flex;
          font-family: ${headlineFont};
          font-weight: ${boldFont};
          margin-top: 15px;
        `}
      >
        <img src={photoURL} />
        <div
          className={css`
            display: inline;
            margin-top: auto;
            margin-bottom: auto;
            margin-left: 10px;
          `}
        >
          <div
            className={css`
              font-size: ${subInfoFontSize};
              line-height: normal;
            `}
          >
            By {props.bylineInfo[0].authorName}
          </div>
          <div
            className={css`
              font-size: ${smallInfoFontSize};
              line-height: normal;
              color: ${darkGray};
            `}
          >
            Date
          </div>
        </div>
      </div>
    )
  } else {
    return <div>Tere is more than one author</div>
  }
}
