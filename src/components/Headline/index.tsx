import * as React from 'react'
import { css } from 'react-emotion'

/**
 * Headline properties.
 */
interface HeadlineProps {
  /** The headline of the story. */
  text: string
  style?: string
}

/** The story's headline. */
export default function Headline(props: HeadlineProps) {
  const style = props.style
  return <h1 className={props.style}>{props.text}</h1>
}
