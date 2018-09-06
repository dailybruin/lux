import * as React from 'react';
import { css } from 'react-emotion';
import toSentence from '../../utils/toSentence';

/**
 * Byline properties.
 */
interface BylineProps {
  /** The authors of the story. */
  authors: Array<string>;
}

/** A footer to go at the bottom of every page. */
export default function Footer(props: BylineProps) {
  return <div className="byline">By {toSentence(props.authors)}</div>;
}
