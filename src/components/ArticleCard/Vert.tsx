import * as React from 'react'
import { css } from 'react-emotion'
import {
  headlineFont,
  storyListFont,
  cardShadow,
  regularFont,
  bodyFont,
} from '../../globals/mainsiteGlobalStyles'

interface VertProps {
  displayType: string
  category: string
  headline: string
  imageurl: string
  photographer: string
  content: string
  author: string
  editor: string
}

export default function Vert(props: VertProps) {
  return (
    <div
      className={css`
        display: block;
        padding: 10px;
        box-shadow: ${cardShadow};
      `}
    >
      <img
        src={props.imageurl}
        className={css`
          width: 100%;
        `}
      />
      <h4
        className={css`
          margin: 2px 0;

          font-family: Arimo;
          font-style: normal;
          font-weight: normal;
          font-size: 8px;
          text-align: right;

          color: #000000;
        `}
      >
        {props.photographer}
      </h4>
      <h2
        className={css`
          margin: 0;
          font-family: Source Sans Pro;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          text-transform: uppercase;

          color: #0080c6;
        `}
      >
        {props.category}
      </h2>
      <h1
        className={css`
          margin: 2px 0;

          font-family: Arimo;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 1.15;

          color: #000000;
        `}
      >
        {props.headline}
      </h1>

      <p
        className={css`
          margin: 0 0 5px;

          font-family: PT Serif;
          font-style: normal;
          font-weight: normal;
          font-size: 11px;

          color: #000000;
        `}
      >
        {props.content}
      </p>
    </div>
  )
}
