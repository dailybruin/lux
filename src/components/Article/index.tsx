import * as React from 'react'
import { css } from 'react-emotion'
import Image, { ImageProps } from '../Image'

enum ContentType {
  Text = 'text',
  Image = 'image',
  Line = 'line',
}

interface Content {
  type: string
  value: string
}

interface Text {
  value: string
}

/**
 * Article properties.
 */
interface ArticleProps {
  /** The paragraphs of content for the story. */
  content: Content[]
  /** An object of {value: ReactNode} mappings to map custom content types to articles. */
  customTypeComponentMapping?: { [key: string]: React.ReactNode }
  /** Whether to add a dropcap on the first paragraph. */
  dropcap: boolean
  /** custom css for the article component */
  style?: string
}

/** A footer to go at the bottom of every page. */
export default class Article extends React.Component<ArticleProps> {
  public static defaultProps = { dropcap: false }

  public render() {
    const renderedContent = this.props.content.map(
      (content: any, i: number) => {
        switch (content.type) {
          case ContentType.Text:
            const text = content as Text
            return (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: text.value,
                }}
              />
            )
          case ContentType.Image:
            const image = JSON.parse(content.value) as ImageProps
            return <Image key={i} {...image} />
          case ContentType.Line:
            return <hr />
          default:
            if (
              this.props.customTypeComponentMapping &&
              Object.keys(this.props.customTypeComponentMapping).includes(
                content.type
              )
            ) {
              const Component: any = this.props.customTypeComponentMapping[
                content.type
              ]
              const data = JSON.parse(content.value)
              return <Component {...data} />
            }
            break
        }
      }
    )

    return (
      <article
        className={css`
          margin-left: auto;
          margin-right: auto;
          max-width: 600px;
          ${this.props.dropcap
            ? css`
                p:first-child:first-letter {
                  float: left;
                  font-size: 5em;
                  line-height: 60px;
                  padding-top: 4px;
                  padding-right: 8px;
                  padding-left: 3px;
                }
              `
            : ''};
          ${this.props.style};
        `}
      >
        {renderedContent}
      </article>
    )
  }
}
