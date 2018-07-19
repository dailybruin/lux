import * as React from 'react';
import { css } from 'react-emotion';
import Heart from './Heart';

// interface Developers {
//   name: string;
//   link: string;
// }

/**
 * Footer properties.
 */
interface FooterProps {
  /** The name of the github project. The `https://github.com/dailybruin/` part is already given. */
  githubName: string;
  /** prop1 description */
  licence?: string;
  /** A list of the developers who created the site. */
  developers: Array<string>;
}

function toSentence(arr: Array<string>): string {
  return arr.slice(0, arr.length - 1).join(', ') + ' and ' + arr.slice(-1);
}

/** A footer to go at the bottom of every page. */
export default function Footer(props: FooterProps) {
  return (
    <footer
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1rem;
        text-align: center;
      `}
    >
      <div>
        Content copyright © 2018 Daily Bruin. Site code{' '}
        <a href={`https://github.com/dailybruin/${props.githubName}`}>
          available on GitHub
        </a>.
      </div>
      <div>
        Built with Suzy’s <Heart /> in Kerckhoff 118 by{' '}
        {toSentence(props.developers)}.
      </div>
    </footer>
  );
}
