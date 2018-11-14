import * as React from 'react'
import { css } from 'react-emotion'
import toSentence from '../../utils/toSentence'

/**
 * Byline properties.
 */
interface BylineProps {
  /** The authors of the story. */
  authors: string | string[]
  style?: string
}

/** The byline of the story. */
export default function Byline(props: BylineProps) {
  const authorString =
    typeof props.authors === 'string'
      ? props.authors.toUpperCase()
      : toSentence(props.authors.map(author => author.toUpperCase()))

  const style = props.style
  return (
    <div
      className={css`
        ${style} padding-top: 5px;
      `}
    >
      By {authorString}
    </div>
  )
}
