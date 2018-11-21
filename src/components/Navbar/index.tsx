import * as React from 'react'
import { css } from 'react-emotion'
import Image, { ImageProps } from '../Image'

interface NavbarProps {
  /** Array of JSX elements */
  links?: JSX.Element[]
  /** custom style applied to individual links */
  linkStyle?: string
  /** Logo can be text or an image */
  logo: string | HTMLImageElement
  /** Logo link */
  logoURL: string
  // /** Pins navbar (or not) */
  // sticky? : boolean
  /** custom style applied to the navbar */
  style?: string
}

class Navbar extends React.Component<NavbarProps> {
  public static defaultProps = {
    logoURL: '/',
    // sticky : false,
  }

  public render() {
    // const sticky = css`
    //                   position: fixed;
    //                   top: 0;
    //                 `

    const navbarStyle = css`
                      display: flex;
                      justify-content: space-between;
                      width: 100%;
                      background-color: white;
                      ${this.props.style};
                      /* ${this.props.sticky ? sticky : ''}; */
                    `
    const linkStyle = css`
      padding-left: 30px;
      color: #65696c;
      a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
        font-family: Helvetica, sans-serif;
        font-weight: 500;
      }
      a:hover {
        color: #3180c0;
      }
      align-self: flex-end;
      ${this.props.linkStyle};
    `
    const logoStyle = css`
      img {
        max-width: 15vw;
        overflow: hidden;
        vertical-align: bottom;
      }
    `
    const linksStyle = css`
      display: flex;
      justify-content: space-between;
    `

    const logo = <a href={this.props.logoURL}>{this.props.logo}</a>

    const links = this.props.links
      ? this.props.links.map((link, i) => {
          return (
            <div key={i} className={linkStyle}>
              {' '}
              {link}{' '}
            </div>
          )
        })
      : undefined

    return (
      <div className={navbarStyle}>
        <div className={logoStyle}>{logo}</div>
        <div className={linksStyle}>{links}</div>
      </div>
    )
  }
}

export default Navbar
