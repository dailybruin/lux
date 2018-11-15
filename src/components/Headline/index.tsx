import * as React from 'react'
import { css } from 'react-emotion'

/**
 * Headline properties.
 */
interface HeadlineProps {
  /** The headline of the story. */
  text: string
  /** Custom css for the headline component */
  style?: string
}

/** The story's headline. */
export default function Headline(props: HeadlineProps) {
  return <h1 className={props.style}>{props.text}</h1>
}
