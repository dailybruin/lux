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
  imageurl: string
  photographer: string
  title: string
  content: string
}

export default function Tall(props: LongProps) {
  return (
    <div
      className={css`
        display: grid;
        grid-template-areas: 'left right';
        grid-template-rows: auto;
        grid-template-columns: 330px 250px;
        grid-gap: 15px;
        height: auto;
        width: 594px;
        box-shadow: ${cardShadow};
      `}
    >
      <div
        className={css`
          grid-area: left;
        `}
      >
        <img
          className={css`
            width: 307px;
            height: calc(100% - 24px);
            padding: 12px 0px 12px 12px;
            margin-bottom: -27px;
          `}
          src={props.imageurl}
        />
        <h3
          className={css`
            font-size: 7px;
            padding-right: 12px;
            text-align: right;
            margin-bottom: 0;
            font-family: ${headlineFont}, serif;
          `}
        >
          {props.photographer}
        </h3>
      </div>

      <div
        className={css`
          grid-area: right;
        `}
      >
        <h2
          className={css`
            color: #1a9ae0;
            padding-top: 8px;
            font-size: 0.7em;
            font-weight: 800;
            margin-top: 0;
            margin-bottom: -20px;
            font-family: ; //
          `}
        >
          NEWS
        </h2>
        <h1
          className={css`
            margin-bottom: -7px;
            color: black;
            line-height: normal;
            font-size: 24px;
            font-family: ${headlineFont}, serif;
          `}
        >
          {props.title}
        </h1>
        <p
          className={css`
            font-family: ${bodyFont}, serif;
            font-size: 11px;
            color: black;
            line-height: normal;
            padding-right: 14px;
            font-weight: ${regularFont};
          `}
        >
          {props.content}
        </p>
      </div>
    </div>
  )
}
