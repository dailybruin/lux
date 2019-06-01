// support for multiple authors
import * as React from 'react'
import { css } from 'react-emotion'
import { MainSiteArticleHeaderProps, BylineInfo } from './index'
import MainSiteLink from '../MainSiteLink'
import dbLogo from './db-logo.png'
import {
  headlineFont,
  boldFont,
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
  const photoURL = props.bylineInfo[0].authorPhotoURL
    ? props.bylineInfo[0].authorPhotoURL
    : dbLogo

  let renderedByline

  if (props.bylineInfo.length === 1) {
    renderedByline = (
      <MainSiteLink href={props.bylineInfo[0].authorProfileURL}>
        {props.bylineInfo[0].authorName}
      </MainSiteLink>
    )
  } else {
    renderedByline = props.bylineInfo.map(
      (element: BylineInfo, index: number) => {
        let delimiter = index ? ', ' : ''
        if (index === props.bylineInfo.length - 1) {
          delimiter = ' and '
        }
        return (
          <span key={index}>
            {delimiter}
            <MainSiteLink href={element.authorProfileURL}>
              {element.authorName}
            </MainSiteLink>
          </span>
        )
      }
    )
  }
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
      {props.bylineInfo.length === 1 && (
        <img
          className={css`
            margin-right: 10px;
          `}
          src={photoURL}
        />
      )}
      <div
        className={css`
          display: inline;
          margin-top: auto;
          margin-bottom: auto;
        `}
      >
        <div
          className={css`
            font-size: ${subInfoFontSize};
            line-height: normal;
          `}
        >
          By {renderedByline}
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
}
