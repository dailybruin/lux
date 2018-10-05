import * as React from 'react'
import { css } from 'react-emotion'

enum ContentType {
  Text,
  Photo,
}

interface Text {
  type: 'text'
  value: string
}

interface Image {
  type: 'image'
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
  value: Array<Text>
  dropcap: boolean
}

/** A footer to go at the bottom of every page. */
export default function Footer(props: ArticleProps) {
  return <article>{}</article>
}
