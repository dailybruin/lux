import * as React from 'react'
import { css } from 'react-emotion'

export default class ExpandingTab extends React.Component<ExpandingTabProps> {
  constructor(props: ExpandingTabProps) {
    super(props)
    this.state = {
      underlined: 'none',
    }
    this.underlineHovered = this.underlineHovered.bind(this)
    this.underlineClear = this.underlineClear.bind(this)
  }
  public underlineHovered() {
    this.setState({ underlined: 'underline' })
  }
  public underlineClear() {
    this.setState({ underlined: 'none' })
  }
  public render() {
    return (
      <li
        className={css`
          text-decoration: none;
          height: 38px;
          margin: 0;
          padding: 7px 20px;
          width: 100%;
          box-sizing: border-box;
          display: block;
          vertical-align: middle;
          position: relative;
          line-height: normal;
        `}
      >
        <a
          href={this.props.section.link}
          className={css`
            display: block;
            font-family: Source Sans Pro;
            font-style: normal;
            font-weight: 900;
            font-size: 18px;
            text-transform: uppercase;
            text-align: left;
            color: #ffffff;
          `}
          style={{ textDecoration: this.state.underlined }}
          onMouseEnter={this.underlineHovered}
          onMouseLeave={this.underlineClear}
        >
          {this.props.section.name}
        </a>
      </li>
    )
  }
}
