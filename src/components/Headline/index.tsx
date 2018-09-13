import * as React from 'react'
import { css } from 'react-emotion'

/**
 * Headline properties.
 */
interface HeadlineProps {
  /** The headline of the story. */
  text: string
}

/** The story's headline. */
export default function Headline(props: HeadlineProps) {
  return <h1>{props.text}</h1>
}
