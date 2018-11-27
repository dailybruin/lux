import * as React from 'react'
import { css } from 'react-emotion'

interface PullQuoteProps {
  /** Text for the poll quote */
  text: string
  /** Custom css for poll quote */
  style?: string
}

export default function PullQuote(props: PullQuoteProps) {
  const pullQuoteStyle = css`
    display: flex;
    ${props.style};
  `
  return (
    <div className={pullQuoteStyle}>
      <h1>“</h1>
      <div
        className={css`
          margin-left: 10px;
          width: calc(100% - 100px);
        `}
      >
        {props.text}
      </div>
    </div>
  )
}
