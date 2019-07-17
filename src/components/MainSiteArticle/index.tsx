import * as React from 'react'
import { css } from 'react-emotion'
import MainSiteArticleHeader from '../MainSiteArticleHeader'
import MainSiteImage, { MainSiteImageProps } from '../MainSiteImage'
import { bodyTextSize, bodyFont } from '../../globals/mainsiteGlobalStyles'

enum ContentType {
  Text = 'text',
  Image = 'image',
  Line = 'line',
  Video = 'video',
  Break = 'break',
}

interface Content {
  type: ContentType
  /** This takes in a JSON object with the appropriate props */
  value?: any
}

/**
 * Properties required for a main site article
 */
export interface MainSiteArticleBodyProps {
  /** Determines whether this is pre Gutenberg Block wordpress  (< 5.0) */
  isLegacy: boolean
  /** Array of content to be rendered */
  content: Content[]
}

class MainSiteArticleBody extends React.Component<MainSiteArticleBodyProps> {
  public render() {
    const renderedContent = this.props.content.map(
      (content: any, i: number) => {
        switch (content.type) {
          case ContentType.Text:
            return (
              <p
                key={i}
                className={css`
                  font-size: ${bodyTextSize};
                  font-family: ${bodyFont};
                `}
              >
                {content.value}
              </p>
            )
          case ContentType.Image:
            const image = content.value as MainSiteImageProps
            return <MainSiteImage key={i} {...image} />
          case ContentType.Line:
            return <hr />
          case ContentType.Break:
            return <br />
        }
      }
    )

    return (
      <article
        className={css`
          margin-left: auto;
          margin-right: auto;
          max-width: 620px;
          padding: 1rem;
        `}
      >
        {renderedContent}
      </article>
    )
  }
}

export default MainSiteArticleBody
