import * as React from 'react'
import { css } from 'react-emotion'
import {
  headlineFont,
  storyListFont,
  cardShadow,
  regularFont,
  bodyFont,
} from '../../globals/mainsiteGlobalStyles'

interface LongProps {
  displayType: string
  headline: string
  excerpt: string
  url: string
  date: string
  authors: Link[]
  category: Link
  imageurl: string
}

export default function Long(props: LongProps) {
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
        display: flex;
        box-shadow: ${cardShadow};
        height: 100%;
      `}
    >
      <div
        className={css`
          padding: 10px;
          flex: 3;
        `}
      >
        <span>
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
          &nbsp;| {props.date}
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
      <div
        className={css`
          padding: 20px 30px 20px 10px;
          flex: 4;
        `}
      >
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
      </div>
      <div
        className={css`
          flex: 4;
        `}
      >
        <div
          className={css`
            height: 100%;
            min-width: 200px;
            background: url(${props.imageurl});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          `}
        />
      </div>
    </div>
  )
}
