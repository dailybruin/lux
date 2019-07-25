import * as React from 'react'
import { css } from 'react-emotion'
import reactStringReplace from 'react-string-replace'
// tslint:disable-next-line:no-submodule-imports
import { renderToStaticMarkup } from 'react-dom/server'
import MainSiteLink from '../MainSiteLink'
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
  /** Legacy content string */
  legacyContent?: string
}

interface MainSiteText {
  /** Whether this should be rendered as HTML or in a p tag */
  isHTML: boolean
  value: string
}

class MainSiteArticleBody extends React.Component<MainSiteArticleBodyProps> {
  public render() {
    /** Check and render legacy content */
    if (this.props.isLegacy) {
      return (
        <article
          className={css`
            margin-left: auto;
            margin-right: auto;
            max-width: 620px;
            padding: 1rem;
            font-size: ${bodyTextSize};
            font-family: ${bodyFont};
          `}
          dangerouslySetInnerHTML={{
            __html: this.props.legacyContent,
          }}
        />
      )
    }

    const renderedContent = this.props.content.map(
      (content: any, i: number) => {
        switch (content.type) {
          case ContentType.Text:
            const text = content.value as MainSiteText
            if (!text.isHTML) {
              return (
                <p
                  key={i}
                  className={css`
                    font-size: ${bodyTextSize};
                    font-family: ${bodyFont};
                  `}
                >
                  {text.value}
                </p>
              )
            } else {
              /** Replace all links with a MainSiteLink */
              /**
               * We render the links as MainSiteLinks in a string
               * and use react-string-replace to help with the final output
               */
              const replacedText = reactStringReplace(
                text.value,
                /<\s*a[^>] *(.*?)<\s*\/\s*a>/g,
                (match, num: number) => {
                  // first we find the link text and URL
                  const linkURLStart: number = match.indexOf('href="') + 6
                  const linkURLEnd: number = match.indexOf(
                    '"',
                    linkURLStart + 1
                  )
                  const linkURLString: string = match.substring(
                    linkURLStart,
                    linkURLEnd
                  )

                  // next we find the link text
                  const textStart: number = match.indexOf('>', linkURLEnd) + 1
                  const textString: string = match.substring(textStart)

                  // render this as a MainSiteLink in static markup
                  return renderToStaticMarkup(
                    <MainSiteLink key={num} href={linkURLString}>
                      {textString}
                    </MainSiteLink>
                  )
                }
              )

              // remove outer <p> tags
              const stringText = replacedText.join('')
              const firstTag = stringText.indexOf('<p>')
              const finalTag = stringText.lastIndexOf('</p>')
              const finalRender = stringText.substring(firstTag + 3, finalTag)

              return (
                <p
                  key={i}
                  className={css`
                    font-size: ${bodyTextSize};
                    font-family: ${bodyFont};
                  `}
                  dangerouslySetInnerHTML={{
                    __html: finalRender,
                  }}
                />
              )
            }
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
