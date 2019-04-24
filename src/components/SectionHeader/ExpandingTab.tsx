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
            padding: 7px 20px;
            margin: 0;

            width: 100%;

            font-family: Source Sans Pro;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
            font-size: 18px;

            text-transform: uppercase;

            color: #ffffff;
            justify-content: left;
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
