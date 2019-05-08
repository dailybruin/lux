import * as React from 'react'
import { css } from 'react-emotion'

export default class SectionTab extends React.Component<SectionTabProps> {
  constructor(props: SectionTabProps) {
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
    const { underlineState = 'underline' } = this.state.underlined
    return (
      <li
        className={css`
          box-sizing: border-box;
          text-decoration: none;
          height: 38px;
          display: inline-block;
          padding: 7px 10px;
          background-color: #000000;
        `}
      >
        <a
          href={this.props.section.link}
          className={css`
            color: #ffffff;
            font-family: Source Sans Pro;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
            font-size: 18px;
            text-transform: uppercase;
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
