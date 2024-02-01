// tslint:disable-next-line:no-reference
/// <reference path="index.d.ts"/>

import * as React from 'react'
import { css } from 'react-emotion'
import ReactPlayer from 'react-player'

export interface VideoProps {
  /** The id of the YouTube video. */
  url: string
  caption: string
  credit: string
  alt: string
  /** Custom css for the image component */
  style?: string
}

export default function Video(props: VideoProps) {
  return (
    <figure className={props.style}>
      <div
        className={css`
          position: relative;
          padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
        `}
      >
        <ReactPlayer
          className={css`
            position: absolute;
            top: 0;
            left: 0;
          `}
          url={props.url}
          width="100%"
          height="100%"
        />
      </div>
      <figcaption>
        {props.caption} ({props.credit})
      </figcaption>
    </figure>
  )
}
