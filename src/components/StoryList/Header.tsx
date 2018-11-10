import * as React from 'react'
import { css } from 'react-emotion'

interface HeaderProps {
  title: string
}

class Header extends React.Component<HeaderProps> {
  public render() {
    return (
      <div
        className={css`
          background-color: #000;
          padding: 0.125rem 0rem 0.265rem 0.5rem;
        `}
      >
        <h2
          className={css`
            color: #fff;
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 1.125rem;
            font-weight: 900;
            line-height: 1.4375rem;
            margin: 0.125rem;
          `}
        >
          {this.props.title}
        </h2>
      </div>
    )
  }
}

export default Header
