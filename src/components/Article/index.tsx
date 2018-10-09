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
export default function Article(props: ArticleProps) {
  const renderedContent = props.content.map(content => {
    switch (content.type) {
      case ContentType.Text:
        const text = content as Text
        return <p>{content.value}</p>
      case ContentType.Image:
        const image = content as Image
        return (
          <figure>
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
