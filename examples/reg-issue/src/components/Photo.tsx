import * as React from 'react'
import { css, keyframes } from 'react-emotion'
import Img from 'gatsby-image'

export enum CaptionPosition {
  RIGHT = 'row',
  LEFT = 'row-reverse',
  BOTTOM = 'column',
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

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

        animation: ${fadeIn} ${props.timeOffset}s;

        display: flex;
        flex-direction: ${props.captionPosition};
      `}
    >
      <Img fixed={props.image.node.childImageSharp.fixed} />
      {!!props.caption && <figcaption>{props.caption}</figcaption>}
    </figure>
  )
}
