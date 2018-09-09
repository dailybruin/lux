import * as React from 'react';
import { css } from 'react-emotion';
import toSentence from '../../utils/toSentence';

/**
 * Byline properties.
 */
interface BylineProps {
  /** The authors of the story. */
  authors: string | Array<string>;
}

/** The byline of the story. */
export default function Byline(props: BylineProps) {
  return (
    <div className="byline">
      By{' '}
      {typeof props.authors === 'string'
        ? props.authors
        : toSentence(props.authors)}
    </div>
  );
}
