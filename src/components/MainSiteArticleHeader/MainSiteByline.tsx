// support for multiple authors
import * as React from 'react'
import { css } from 'react-emotion'
import { MainSiteArticleHeaderProps, BylineInfo } from './index'
import dbLogo from './db-logo.png'
import {
  headlineFont,
  boldFont,
  dailyBruinBlue,
  subInfoFontSize,
  smallInfoFontSize,
  darkGray,
} from '../../globals/mainsiteGlobalStyles'

export default function MainSiteByline(props: MainSiteArticleHeaderProps) {
  const rawDate = new Date(props.date)
  const renderedDate = rawDate.toLocaleDateString('default', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
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
            By{' '}
            <a
              href={props.bylineInfo[0].authorProfileURL}
              className={css`
                text-decoration: none;
                color: ${dailyBruinBlue};

                :hover {
                  opacity: 0.75;
                }
              `}
            >
              {props.bylineInfo[0].authorName}
            </a>
          </div>
          <div
            className={css`
              font-size: ${smallInfoFontSize};
              line-height: normal;
              color: ${darkGray};
            `}
          >
            {renderedDate}
          </div>
        </div>
      </div>
    )
  } else {
    const renderedByline = props.bylineInfo.map(
      (element: BylineInfo, index: number) => {
        let delimiter = index ? ', ' : ''
        if (index === props.bylineInfo.length - 1) {
          delimiter = ' and '
        }
        return (
          <span key={index}>
            {delimiter}
            <a
              href={element.authorProfileURL}
              className={css`
                text-decoration: none;
                color: ${dailyBruinBlue};

                :hover {
                  opacity: 0.75;
                }
              `}
            >
              {element.authorName}
            </a>
          </span>
        )
      }
    )
    return (
      <div
        className={css`
          font-family: ${headlineFont};
          font-weight: ${boldFont};
          margin-top: 10px;
        `}
      >
        By {renderedByline}
        <div
          className={css`
            font-size: ${smallInfoFontSize};
            line-height: normal;
            color: ${darkGray};
          `}
        >
          {renderedDate}
        </div>
      </div>
    )
  }
}
