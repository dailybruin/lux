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

interface VertProps {
  displayType: string
  headline: string
  excerpt: string
  url: string
  date: Date
  authors: Link[]
  category: Link
  imageurl: string
}

export default function Vert(props: VertProps) {
  //  collect authors
  const authors = []
  if (props.authors.length === 0) {
    authors[0] = <span>Daily Bruin Staff</span>
  } else {
    for (const author of props.authors) {
      authors.push(
        <a
          href={author.url}
          className={css`
            text-decoration: none;
            color: #0080c6;

            &:hover {
              text-decoration: underline;
            }
          `}
        >
          {author.name}
        </a>
      )
    }
  }
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
      <span
        className={css`
          margin: 0;
          font-family: Source Sans Pro, sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          text-transform: uppercase;
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
              font-family: Source Sans Pro, sans-serif;
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
        dangerouslySetInnerHTML={{ __html: props.headline }}
      />
      <p
        className={css`
          margin: 0 0 5px;

          font-family: PT Serif;
          font-style: normal;
          font-weight: normal;
          font-size: 11px;

          color: #000000;

          p {
            margin: 0;
          }
        `}
        dangerouslySetInnerHTML={{ __html: props.excerpt }}
      />
      <h3
        className={css`
          margin: 0;

          font-family: Arimo;
          font-style: normal;
          font-weight: bold;
          font-size: 11px;

          color: #000000;
        `}
      >
        By {authors}
      </h3>
    </div>
  )
}
