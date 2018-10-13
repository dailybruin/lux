import * as React from 'react'
import { css } from 'react-emotion'
import Image, { ImageProps } from '../Image'

enum ContentType {
  Text = 'text',
  Image = 'image',
}

interface Text {
  value: string
}

/**
 * Article properties.
 */
interface ArticleProps {
  /** The paragraphs of content for the story. */
  content: any[]
  dropcap: boolean
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
            const image = content as ImageProps
            return <Image key={i} {...image} />
          default:
            break
        }
      }
    )

    return (
      <article
        className={
          this.props.dropcap
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
            : undefined
        }
      >
        {renderedContent}
      </article>
    )
  }
}
