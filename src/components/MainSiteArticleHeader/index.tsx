import * as React from 'react'
import { css } from 'react-emotion'
import MainSiteByline from './MainSiteByline'
import MainSiteHeadline from './MainSiteHeadline'

import {
  bodyFont,
  dailyBruinBlue,
  smallInfoFontSize,
} from '../../globals/mainsiteGlobalStyles'

export enum MainSiteArticleHeaderLayoutType {
  Standard,
  VerticalPhoto,
  WidePhoto,
  ExtraWidePhoto,
}

export interface BylineInfo {
  /** Author that contributed to the article */
  authorName: string
  /** Link to their profile image URL - optional */
  authorPhotoURL?: string
  /** URL to their profile page on the main site */
  authorProfileURL: string
}

export interface CreditInfo {
  /** staff name */
  imageCredit: string
  /** staff position */
  imagePosition: string
  /** profile link */
  imageCreditProfileURL: string
}

export interface MainSiteArticleHeaderProps {
  /** text of the headline */
  headlineText: string
  /** category that the headline is in */
  articleCategory: string
  /** URL of the category page that the article is in  */
  categoryURL: string
  /** URL of the main photo that should be displayed */
  featuredPhotoURL?: string
  /** caption for the featured photo */
  featuredPhotoCaption?: string
  /** credit info for the photo */
  featuredPhotoCredit?: CreditInfo
  /** info that should be displayed in the byline box */
  bylineInfo: BylineInfo[]
  /** date that the article was published */
  date: string
}

class MainSiteArticleHeader extends React.Component<
  MainSiteArticleHeaderProps
> {
  public render() {
    let featuredPhoto
    // check to see if there's a featured photo for this story
    if (this.props.featuredPhotoURL) {
      featuredPhoto = (
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
              width: 100%;
              max-width: 100%;
            `}
            src={this.props.featuredPhotoURL}
          />
          <div
            className={css`
              font-size: ${smallInfoFontSize};
              font-family: ${bodyFont};
              line-height: normal;
              text-decoration: none;
            `}
          >
            {this.props.featuredPhotoCaption}{' '}
            <a
              href={this.props.featuredPhotoCredit.imageCreditProfileURL}
              className={css`
                text-decoration: none;
                color: ${dailyBruinBlue};

                :hover {
                  opacity: 0.75;
                }
              `}
            >
              ({this.props.featuredPhotoCredit.imageCredit}/
              {this.props.featuredPhotoCredit.imagePosition})
            </a>
          </div>
        </div>
      )
    }
    return (
      <div
        className={css`
          max-width: 650px;
        `}
      >
        <MainSiteHeadline {...this.props} />
        {featuredPhoto}
        <MainSiteByline {...this.props} />
      </div>
    )
  }
}

export default MainSiteArticleHeader
