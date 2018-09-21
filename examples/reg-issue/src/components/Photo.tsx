import * as React from 'react'
import { css } from 'react-emotion'
import Img from 'gatsby-image'

export enum CaptionPosition {
  RIGHT = 'row',
  LEFT = 'row-reverse',
  BOTTOM = 'column',
}

interface PhotoProps {
  captionPosition: CaptionPosition
  timeOffset: number
  caption?: string
  top?: number
  bottom?: number
  left?: number
  right?: number
  image: any
}

export default function Photo(props: PhotoProps) {
  return (
    <figure
      className={css`
        position: absolute;
        top: ${props.top}px;
        right: ${props.right}px;

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        animation: fadein ${props.timeOffset}s;

        display: flex;
        flex-direction: ${props.captionPosition};
      `}
    >
      <Img fixed={props.image.node.fixed} />
      {!!props.caption && <figcaption>{props.caption}</figcaption>}
    </figure>
  )
}
