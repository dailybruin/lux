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
  style?: string
  explainer?: string
  textColor: string
}

export default class CoverPhoto extends React.Component<CoverPhotoProps> {
  public static defaultProps = {
    darken: 0,
    textColor: '#fff',
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
        color: ${this.props.textColor};
        align-items: ${this.props.yPosition};
        justify-content: ${this.props.xPosition};
        margin-bottom: 46px;
        ${this.props.style}
      `}
      >
        <div
          className={css`
            max-width: 460px;
            margin: 2rem;
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
            `}
          >
            {this.props.headline}
          </h1>
          <Line color={this.props.textColor} />
          <Byline authors={this.props.authors} />
          {!!this.props.explainer && <p>{this.props.explainer}</p>}
        </div>
      </div>
    )
  }
}
