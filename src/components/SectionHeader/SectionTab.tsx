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
      <a
        href={this.props.section.link}
        className={css`
          text-decoration: none;
          color: #ffffff;
        `}
        style={{ textDecoration: this.state.underlined }}
      >
        <li
          className={css`
            display: inline-flex;
            background-color: #000000;
            height: 38px;

            padding: 7px 10px;
            margin: auto;

            font-family: Source Sans Pro;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
            font-size: 18px;

            text-transform: uppercase;
            color: #ffffff;
          `}
          onMouseEnter={this.underlineHovered}
          onMouseLeave={this.underlineClear}
        >
          {this.props.section.title}
        </li>
      </a>
    )
  }
}
