import * as React from 'react';
import { css } from 'react-emotion';
import Heart from './Heart';
import toSentence from '../../utils/toSentence';

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
  /** The year that the story was published, e.g., 2018. */
  copyrightYear: number;
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
        Content copyright © {props.copyrightYear} Daily Bruin. Site code
        available on{' '}
        <a href={`https://github.com/dailybruin/${props.githubName}`}>GitHub</a>.
      </div>
      <div>
        Built with Suzy’s <Heart /> in Kerckhoff 118 by{' '}
        {toSentence(props.developers)}.
      </div>
    </footer>
  );
}
