import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { css } from 'react-emotion'
import logoSrc from './db-logo.png'

interface NavbarProps {
  /** Array of React elements. */
  links?: React.ReactNode[]
  /** custom style applied to individual links. */
  linkStyle?: string
  /** Logo can be text or an image. */
  showLogo: boolean
  /** Site title. */
  title: string
  /** Logo link. */
  logoURL: string
  /** Pins navbar (or not). */
  sticky?: boolean
  /** custom style applied to the navbar. */
  style?: string
}

class Navbar extends React.Component<NavbarProps> {
  public static defaultProps = {
    logoURL: '/',
    sticky: false,
  }

  public state = {
    open: false,
  }

  public handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  public render() {
    const sticky = css`
      position: sticky;
      top: 0;
    `

    const navbarStyle = css`
      box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
      padding: 10px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      background-color: white;
      ${this.props.style};
      ${this.props.sticky ? sticky : ''};
    `
    const linkStyle = css`
      @media (min-width: 940px) {
        padding-right: 3rem;
        align-self: center;
      }
      color: #65696c;
      font-weight: 500;
      font-size: 1rem;
      a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
      }
      ${this.props.linkStyle};
    `
    const linksMobileStyle = css`
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    `

    const logoStyle = css`
      a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
      }
      img {
        overflow: hidden;
        vertical-align: bottom;
        margin-right: 20px;
        width: 50px;
      }
      display: flex;
      align-items: center;
    `
    const linksStyle = css`
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 940px) {
        display: none;
      }
    `

    const logo = (
      <a href={this.props.logoURL}>
        {this.props.showLogo && <img src={logoSrc} />}
      </a>
    )

    const links = this.props.links
      ? this.props.links.map((link, i) => {
          return (
            <div key={i} className={linkStyle}>
              {link}
            </div>
          )
        })
      : undefined

    return (
      <div className={navbarStyle}>
        <div className={logoStyle}>
          {this.props.showLogo && logo}
          <h2>{this.props.title}</h2>
        </div>
        <div className={linksStyle}>{links}</div>
        <details
          className={css`
            width: 100%;
            justify-self: end;
            text-align: right;
            font-size: 2rem;
            @media (min-width: 940px) {
              display: none;
            }
          `}
        >
          <summary
            className={css`
              font-size: 1rem;
              ::-webkit-details-marker {
                display: none;
              }
            `}
          >
            <div onClick={this.handleClick}>
              {' '}
              <FontAwesomeIcon icon={this.state.open ? faTimes : faBars} />{' '}
            </div>
          </summary>
          <div className={linksMobileStyle}>{links}</div>
        </details>
      </div>
    )
  }
}

export default Navbar
