import * as React from 'react';
import { css } from 'react-emotion';

/**
 * Headline properties.
 */
interface HeadlineProps {
  /** The headline of the story. */
  children: string;
}

/** The story's headline. */
export default function Headline(props: HeadlineProps) {
  return <h1>{props.children}</h1>;
}
