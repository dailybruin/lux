import * as React from 'react'
import { css } from 'react-emotion'
import Image, { ImageProps } from '../Image'

enum ContentType {
  Text = 'text',
  Image = 'image',
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
  dropcap: boolean
  style?: string
}

/** A footer to go at the bottom of every page. */
export default class Article extends React.Component<ArticleProps> {
  public static defaultProps = { dropcap: false }

  public render() {
    const style = this.props.style
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
          default:
            break
        }
      }
    )

    return (
      <article
        className={css`
          ${style};
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
        `}
      >
        {renderedContent}
      </article>
    )
  }
}
