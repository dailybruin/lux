import * as React from 'react'
import { css } from 'react-emotion'
import {
  smallInfoFontSize,
  dailyBruinBlue,
  bodyFont,
} from '../../globals/mainsiteGlobalStyles'
import MainSiteLink from '../MainSiteLink'

export interface MainSiteImageProps {
  /** URL of the image */
  imageURL: string
  /** Caption for the image */
  imageCaption: string
  /** staff name */
  imageCredit: string
  /** staff position */
  imageStaffPosition: string
  /** profile link */
  imageCreditProfileURL: string
  /** image alt text */
  altText?: string
  /** width percentage should be a string - by default is 100% */
  width?: string
}

export default function MainSiteImage(props: MainSiteImageProps) {
  const imageWidth = props.width ? props.width : '100%'
  return (
    <div
      className={css`
        margin-top: 15px;
        width: 100%;
      `}
    >
      <img
        className={css`
          margin-left: auto;
          margin-right: auto;
          width: ${imageWidth};
          max-width: 100%;
        `}
        src={props.imageURL}
      />
      <div
        className={css`
          font-size: ${smallInfoFontSize};
          font-family: ${bodyFont};
          line-height: normal;
          text-decoration: none;
        `}
      >
        {props.imageCaption}{' '}
        <MainSiteLink href={props.imageCreditProfileURL}>
          ({props.imageCredit}/{props.imageStaffPosition})
        </MainSiteLink>
      </div>
    </div>
  )
}
