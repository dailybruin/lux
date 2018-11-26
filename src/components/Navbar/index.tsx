import * as React from 'react'
import { css } from 'react-emotion'
import Image, { ImageProps } from '../Image'

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
      font-weight: 500;
      font-size: 1.2vw;
      a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
      }
      a:hover {
        color: #3180c0;
      }
      align-self: center;
      ${this.props.linkStyle};
    `
    const logoStyle = css`
      img {
        max-width: 15vw;
        overflow: hidden;
        vertical-align: bottom;
        margin: 0;
      }
    `
    const linksStyle = css`
      display: flex;
      justify-content: space-between;
      margin-right: 5vw;
    `

    const logo = <a href={this.props.logoURL}>{this.props.logo}</a>

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
          {this.props.showLogo && (
            <img
              style={{ width: '300px' }}
              src="https://dailybruin.com/img/db_logo.svg"
            />
          )}
          {this.props.title}
        </div>
        <div className={linksStyle}>{links}</div>
      </div>
    )
  }
}

export default Navbar
