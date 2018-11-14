import * as React from 'react'
import { css } from 'react-emotion'

export interface ImageProps {
  url: string
  caption: string
  credit: string
  alt: string
  style?: string
}

export default function Image(props: ImageProps) {
  const style = props.style
  return (
    <figure className={style}>
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
