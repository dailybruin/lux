import * as React from 'react'
import { css } from 'react-emotion'
import {
  headlineFont,
  storyListFont,
  cardShadow,
  regularFont,
  bodyFont,
} from '../../globals/mainsiteGlobalStyles'

interface MiniProps {
  displayType: string
  category: string
  headline: string
  imageurl: string
  photographer: string
  content: string
  author: string
  editor: string
}

export default function Mini(props: MiniProps) {
  return (
    <div
      className={css`
        display: flex;
        box-shadow: ${cardShadow};
      `}
    >
      <div
        className={css`
          min-width: 90px;

          background: url(${props.imageurl});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        `}
      />
      <div
        className={css`
          padding: 10px;
          display: block;
        `}
      >
        <h2
          className={css`
            display: block;
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
            display: block;
            margin: 2px 0;

            font-family: Arimo;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 1.15;

            color: #000000;
          `}
        >
          {props.headline}
        </h1>
      </div>
    </div>
  )
}
