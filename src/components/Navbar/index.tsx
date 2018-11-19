import * as React from 'react'
import { css } from 'react-emotion'
import { Link } from 'gatsby'

interface LinkObject {
  title: string
  link: string
}
interface NavbarProps {
  /** Array of Link objects */
  links?: LinkObject[]
}

class Navbar extends React.Component<NavbarProps> {
  public render() {
    const navbarStyle = css`
      display: flex;
      justify-content: space-between;
      width: 100%;
    `
    const linksStyle = css`
      display: flex;
      justify-content: space-between;
    `
    const links = this.props.links
      ? this.props.links.map(item => {
          switch (item.link[0]) {
            case '/':
              return <a href={item.link}>asdf</a>
              break
            case '#':
              return <a>{item.link}</a>
              break
            default:
              return <div>asdf</div>
          }
        })
      : undefined

    return (
      <div className={navbarStyle}>
        <div>Logo</div>
        {/* Causes errors af */}
        <Link to="/">Test</Link>
        <div className={linksStyle}>{links}</div>
      </div>
    )
  }
}

export default Navbar
