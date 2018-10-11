import * as React from 'react'

export interface ImageProps {
  url: string
  caption: string
  credit: string
  alt: string
}

export default function Image(props: ImageProps) {
  return (
    <figure>
      <img src={props.url} alt={props.alt} />
      <figcaption>
        {props.caption} ({props.credit})
      </figcaption>
    </figure>
  )
}
