import * as React from 'react'
import { css } from 'react-emotion'

export interface ImageProps {
  url: string
  caption: string
  credit: string
  alt: string
}

export default function Image(props: ImageProps) {
  if (!props.alt) {
    throw new Error('Image requires a meaningful `alt` value.')
  }

  return (
    <figure>
      <img
        className={css`
          width: 100%;
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
