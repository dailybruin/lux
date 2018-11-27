import * as React from 'react'
import { css } from 'react-emotion'

export interface ImageProps {
  url: string
  caption: string
  credit: string
  alt: string
  /** Custom css for the image component */
  style?: string
}

export default function Image(props: ImageProps) {
  if (!props.alt) {
    throw new Error('Image requires a meaningful `alt` value.')
  }
  return (
    <figure className={props.style}>
      <img
        className={css`
          width: 100%;
          margin-bottom: 0;
        `}
        src={props.url}
        alt={props.alt}
      />
      <figcaption>
        {props.caption} ({props.credit})
      </figcaption>
    </figure>
  )
}
