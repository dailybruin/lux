import * as React from 'react'
import { css } from 'react-emotion'
import Byline from '../Byline'
import Line from './Line'

export enum XPosition {
  Left = 'start',
  Center = 'center',
  Right = 'end',
}

export enum YPosition {
  Top = 'start',
  Center = 'center',
  Bottom = 'end',
}

interface CoverPhotoProps {
  headline: string
  imageURL: string
  authors: string[]
  xPosition: XPosition
  yPosition: YPosition
  darken?: number
}

export default class CoverPhoto extends React.Component<CoverPhotoProps> {
  public static defaultProps = {
    darken: 0,
  }

  public render() {
    const textAlign =
      this.props.xPosition === XPosition.Center
        ? 'center'
        : this.props.xPosition === XPosition.Left
          ? 'left'
          : 'right'

    return (
      <div
        className={css`
        width: 100%;
        height: 100vh;
        background: linear-gradient(
          rgba(0, 0, 0, ${this.props.darken}),
          rgba(0, 0, 0, ${this.props.darken})
        ), url("${this.props.imageURL}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: grid;
        align-items: ${this.props.yPosition};
        justify-content: ${this.props.xPosition};
      `}
      >
        <div
          className={css`
            margin: 2rem;
            color: #fff;
            text-align: ${textAlign};
            display: flex;
            flex-direction: column;
            align-items: ${this.props.xPosition === 'center'
              ? this.props.xPosition
              : 'flex-' + this.props.xPosition};
          `}
        >
          <h1
            className={css`
              margin: 0 0 0.8rem;
              font-size: 3rem;
              max-width: 460px;
            `}
          >
            {this.props.headline}
          </h1>
          <Line />
          <Byline authors={this.props.authors} />
        </div>
      </div>
    )
  }
}
