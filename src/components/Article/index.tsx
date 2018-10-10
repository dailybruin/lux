import * as React from 'react'
import { css } from 'react-emotion'

enum ContentType {
  Text = 'text',
  Image = 'image',
}

interface Text {
  value: string
}

interface Image {
  url: string
  caption: string
  credit: string
  alt: string
}

/**
 * Article properties.
 */
interface ArticleProps {
  /** The paragraphs of content for the story. */
  content: Array<any>
  dropcap: boolean
}

/** A footer to go at the bottom of every page. */
export default class Article extends React.Component<ArticleProps> {
  static defaultProps = {
    dropcap: false,
  }

  render() {
    const renderedContent = this.props.content.map((content: any, i: number) => {
      switch (content.type) {
        case ContentType.Text:
          const text = content as Text
          return <p key={i} dangerouslySetInnerHTML={{__html: text.value}} />
        case ContentType.Image:
          const image = content as Image
          return (
            <figure key={i}>
              <img src={image.url} alt={image.alt} />
              <figcaption>
                {image.caption} ({image.credit})
              </figcaption>
            </figure>
          )
        default:
          break
      }
    })

    return <article>{renderedContent}</article>
  }
}
