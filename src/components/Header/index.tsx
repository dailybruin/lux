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

    // const navbarStyle = css`
    //   box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
    //   padding: 10px;
    //   display: flex;
    //   justify-content: space-between;
    //   width: auto;
    //   background-color: white;
    //   a {
    //     text-decoration: none;
    //   }
    //   ${this.props.sticky
    //     ? css`
    //         position: sticky;
    //         top: 0;
    //       `
    //     : ''};
    //   ${this.props.style};
    // `
    // const linkStyle = css`
    //   @media (min-width: 940px) {
    //     padding-right: 3rem;
    //     align-self: center;
    //   }
    //   a {
    //     text-decoration: none;
    //   }
    //   ${this.props.linkStyle};
    // `
    // const linksMobileStyle = css`
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: flex-end;
    //   align-items: flex-end;
    // `
    // const logoStyle = css`
    //   a {
    //     text-decoration: none; /* no underline */
    //   }
    //   img {
    //     overflow: hidden;
    //     vertical-align: bottom;
    //     margin-right: 20px;
    //     width: 50px;
    //   }
    //   display: flex;
    //   align-items: center;
    // `
    // const linksStyle = css`
    //   display: flex;
    //   justify-content: space-between;
    //   @media screen and (max-width: 940px) {
    //     display: none;
    //   }
    // `
    // const logo = (
    //   <a href={this.props.logoURL}>
    //     {this.props.showLogo && <img src={logoSrc} />}
    //   </a>
    // )
    // const links = this.props.links
    //   ? this.props.links.map((link, i) => {
    //       return (
    //         <div key={i} className={linkStyle}>
    //           {link}
    //         </div>
    //       )
    //     })
    //   : undefined
    // return (
    //   <div className={navbarStyle}>
    //     <a href={this.props.logoURL}>
    //       <div className={logoStyle}>
    //         {this.props.showLogo && logo}
    //         <h2>{this.props.title}</h2>
    //       </div>
    //     </a>
    //     <div className={linksStyle}>{links}</div>
    //     <details
    //       className={css`
    //         width: 100%;
    //         justify-self: end;
    //         text-align: right;
    //         font-size: 2rem;
    //         @media (min-width: 940px) {
    //           display: none;
    //         }
    //       `}
    //     >
    //       <summary
    //         className={css`
    //           font-size: 1rem;
    //           ::-webkit-details-marker {
    //             display: none;
    //           }
    //         `}
    //       >
    //         <div onClick={this.handleClick}>
    //           {' '}
    //           <FontAwesomeIcon icon={this.state.open ? faTimes : faBars} />{' '}
    //         </div>
    //       </summary>
    //       <div className={linksMobileStyle}>{links}</div>
    //     </details>
    //   </div>
    // )
  }
}

export default Header
