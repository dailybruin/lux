import * as React from 'react'
import { css } from 'react-emotion'
import logoSrc from './db-logo.png'

interface NavbarProps {
  /** Array of JSX elements */
  links?: JSX.Element[]
  /** custom style applied to individual links */
  linkStyle?: string
  /** Logo can be text or an image */
  showLogo: boolean
  title: string
  /** Logo link */
  logoURL: string
  /** Pins navbar (or not) */
  sticky?: boolean
  /** custom style applied to the navbar */
  style?: string
}

class Navbar extends React.Component<NavbarProps> {
  public static defaultProps = {
    logoURL: '/',
    sticky: false,
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
      padding-right: 3vw;
      color: #65696c;
      font-weight: 500;
      font-size: 1.2vw;
      a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
      }
      align-self: center;
      ${this.props.linkStyle};
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
      </div>
    )
  }
}

export default Navbar
