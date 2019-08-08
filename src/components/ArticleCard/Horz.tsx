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

interface HorzProps {
  displayType: string
  category: string
  headline: string
  excerpt: string
  url: string
  date: Date
  authors: Link[]
  category: Link
  imageurl: string
  photographer: string
  content: string
  author: string
  editor: string
}

export default function Horz(props: HorzProps) {
  return (
    <div
      className={css`
        display: flex;
        box-shadow: ${cardShadow};
      `}
    >
      <div
        className={css`
          padding: 10px;
          flex-shrink: 0;
          flex-grow: 2;
        `}
      >
        <div
          className={css`
            height: calc(100% - 8px);
            min-height: 200px;
            background: url(${props.imageurl});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          `}
        />
        <h4
          className={css`
            display: block;
            margin: 2px 0 0;

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
      </div>
      <div
        className={css`
          padding: 10px;
          width: 40%;
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
    </div>
  )
}
