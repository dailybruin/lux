import * as React from 'react'
import { css } from 'react-emotion'
import MainSiteByline from './MainSiteByline'
import MainSiteHeadline from './MainSiteHeadline'

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
  authorProfileLink: string
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
  /** category that the article is a part of */
  categoryName: string
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
      <div>
        <MainSiteHeadline {...this.props} />
        <MainSiteByline {...this.props} />
      </div>
    )
  }
}

export default MainSiteArticleHeader
