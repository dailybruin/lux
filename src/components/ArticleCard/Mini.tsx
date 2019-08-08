import * as React from 'react'
import { css } from 'react-emotion'
import {
  headlineFont,
  storyListFont,
  cardShadow,
  regularFont,
  bodyFont,
} from '../../globals/mainsiteGlobalStyles'
import { date2string } from './utilities.js'

interface MiniProps {
  displayType: string
  headline: string
  excerpt: string
  url: string
  date: Date
  authors: Link[]
  category: Link
  imageurl: string
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
        <span
          className={css`
            margin: 0;
            font-family: Source Sans Pro, sans-serif;
            font-style: normal;
            font-size: 14px;
          `}
        >
          <a
            href={props.category.url}
            className={css`
              text-decoration: none;
              color: #0080c6;

              &:hover {
                text-decoration: underline;
              }
            `}
          >
            <h2
              className={css`
                margin: 0;
                font-family: Source Sans Pro;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                text-transform: uppercase;
                display: inline;
              `}
            >
              {props.category.name}
            </h2>
          </a>
          &nbsp;| {date2string(props.date)}
        </span>
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
          dangerouslySetInnerHTML={{ __html: props.headline }}
        />
      </div>
    </div>
  )
}
