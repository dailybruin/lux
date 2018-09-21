import * as React from 'react'
import { css, keyframes } from 'react-emotion'
import Img from 'gatsby-image'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

interface PhotoProps {
  timeOffset: number
  caption?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  image: any
  width: number
}

export default function Photo(props: PhotoProps) {
  return (
    <figure
      className={css`
        position: absolute;
        top: ${props.top ? props.top : 'initial'};
        right: ${props.right ? props.right : 'initial'};
        left: ${props.left ? props.left : 'initial'};
        bottom: ${props.bottom ? props.bottom : 'initial'};
        width: ${props.width};

        animation-delay: ${props.timeOffset};
        animation: ${fadeIn} 1s;

        /* flex-direction: ${props.captionPosition}; */
      `}
    >
      <Img fluid={props.image.node.childImageSharp.fluid} />
      {!!props.caption && <figcaption>{props.caption}</figcaption>}
    </figure>
  )
}
