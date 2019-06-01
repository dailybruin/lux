import * as React from 'react'
import { css } from 'react-emotion'
import MainSiteByline from './MainSiteByline'
import MainSiteHeadline from './MainSiteHeadline'
import MainSiteImage from '../MainSiteImage'

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
    return (
      <div
        className={css`
          max-width: 650px;
        `}
      >
        <MainSiteHeadline {...this.props} />
        {this.props.featuredPhotoURL && (
          <MainSiteImage
            imageURL={this.props.featuredPhotoURL}
            imageCaption={this.props.featuredPhotoCaption}
            imageCredit={this.props.featuredPhotoCredit.imageCredit}
            imageStaffPosition={this.props.featuredPhotoCredit.imagePosition}
            imageCreditProfileURL={
              this.props.featuredPhotoCredit.imageCreditProfileURL
            }
            altText={this.props.featuredPhotoCaption}
          />
        )}
        <MainSiteByline {...this.props} />
      </div>
    )
  }
}

export default MainSiteArticleHeader
