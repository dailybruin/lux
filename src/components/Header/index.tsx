import * as React from 'react'
import { css } from 'react-emotion'

import MobilePopup from './MobilePopup'
import dbLogo from './db-logo.png'

interface NavbarProps {
  /** Array of React elements. */
  links?: React.ReactNode[]
  /** custom style applied to individual links. */
  linkStyle?: string
  /** Logo can be text or an image. */
  showLogo: boolean
  /** Site title. */
  title: string
  /** Link the title links to. */
  titleLink: string
  /** Pins navbar (or not). */
  sticky?: boolean
  /** custom style applied to the navbar. */
  style?: string
}

class Header extends React.Component<NavbarProps> {
  public static defaultProps = {
    showLogo: false,
    sticky: false,
    titleLink: '/',
  }

  public render() {
    return (
      <header
        className={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          width: 100%;
          padding: 1.1rem 1.2rem;
          background-color: white;
          box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
          ${this.props.sticky
            ? css`
                position: sticky;
                top: 0;
              `
            : ''};
          ${this.props.style};
        `}
      >
        <a
          href={this.props.titleLink}
          className={css`
            justify-self: start;
            text-decoration: none;
            color: inherit;
          `}
        >
          {/* {this.props.showLogo && (
            <img src={dbLogo} width="42px" height="42px" />
          )} */}
          <span
            className={css`
              font-weight: bold;
              text-transform: uppercase;
            `}
          >
            {this.props.title}
          </span>
        </a>
        <nav
          className={css`
            display: flex;
            justify-content: space-between;
            @media (max-width: 940px) {
              display: none;
            }
          `}
        >
          {this.props.links}
        </nav>
        <MobilePopup>{this.props.links}</MobilePopup>
      </header>
    )
  }
}

export default Header
