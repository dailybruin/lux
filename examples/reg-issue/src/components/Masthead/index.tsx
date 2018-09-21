import * as React from 'react'
import { css, keyframes } from 'react-emotion'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

interface MastheadProps {
  timeOffset: number
}

export default function Masthead(props: MastheadProps) {
  return (
    <div
      className={css`
        justify-self: center;
        align-self: center;
        opacity: 0;
        animation: ${fadeIn} 1s ease-in-out forwards;
        animation-delay: ${props.timeOffset}s;
        margin-bottom: 3rem;
      `}
    >
      <img src={require('./logo.svg')} />
      <h1
        className={css`
          text-align: center;
          color: #0080c6;
          margin: 0;
        `}
      >
        The Registration Issue
      </h1>
    </div>
  )
}
