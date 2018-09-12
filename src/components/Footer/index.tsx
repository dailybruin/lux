import * as React from 'react';
import { css } from 'react-emotion';
import Heart from './Heart';
import toSentence from '../../utils/toSentence';

enum License {
  MIT = 'MIT License',
  AGPL = 'GNU AGPL',
  Copyright = 'Copyright',
}

/**
 * Footer properties.
 */
interface FooterProps {
  /** The name of the github project. The `https://github.com/dailybruin/` part is already given. */
  githubName: string;
  /** The name of the license of the project. */
  license: License;
  /** A list of the developers who created the site. */
  developers: string | Array<string>;
  /** The year that the story was published, e.g., 2018. */
  copyrightYear: number;
}

/** A footer to go at the bottom of every page. */
class Footer extends React.Component<FooterProps> {
  static defaultProps = {
    license: License.Copyright,
  };

  render() {
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
          Content copyright © {this.props.copyrightYear} Daily Bruin. Site code
          available on{' '}
          <a href={`https://github.com/dailybruin/${this.props.githubName}`}>
            GitHub
          </a>
          {this.props.license === License.Copyright
            ? '.'
            : ` and available under the ${this.props.license}.`}
        </div>
        <div>
          Built with Suzy’s <Heart /> in Kerckhoff 118 by{' '}
          {typeof this.props.developers === 'string'
            ? this.props.developers
            : toSentence(this.props.developers)}
          .
        </div>
      </footer>
    );
  }
}

export default Footer;
