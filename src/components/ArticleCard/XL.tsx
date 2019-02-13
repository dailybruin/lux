import * as React from 'react'
import { css } from 'react-emotion'
import {
  headlineFont,
  storyListFont,
  cardShadow,
  regularFont,
  bodyFont,
} from '../../globals/mainsiteGlobalStyles'

interface XLProps {
  imageurl: string
  editor: string
  title: string
  content: string
}

export default function Tall(props: XLProps) {
  return (
    <div
      className={css`
        display: grid;
        grid-template-areas: 'left middle right';
        grid-template-rows: auto;
        grid-template-columns: 250px 310px 307px;
        grid-gap: 15px;
        height: auto;
        min-height: 247px;
        width: 897px;
        box-shadow: ${cardShadow};
      `}
    >
      <div
        className={css`
          grid-area: left;
          padding-left: 17px;
        `}
      >
        <h2
          className={css`
            color: #1a9ae0;
            padding-top: 11px;
            font-size: 0.7em;
            font-weight: 800;
            margin-top: 0;
            margin-bottom: -20px;
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
        <h3
          className={css`
            font-size: 11px;
            color: black;
            font-family: ${headlineFont}, serif;
            font-weight: normal;
          `}
        >
          <strong>By {props.editor} </strong> |<em> Daily Bruin staff</em>
        </h3>
      </div>
      <div
        className={css`
          grid-area: middle;
        `}
      >
        <p
          className={css`
            font-family: ${bodyFont}, serif;
            font-size: 11px;
            padding: 28px 95px 12px 0px;
            margin-top: 0;
            line-height: normal;
            font-weight: ${regularFont};
          `}
        >
          {props.content}
        </p>
      </div>
      <div
        className={css`
          grid-area: right;
        `}
      >
        <img
          className={css`
            width: 307px;
            height: 100%;
            padding: 0;
          `}
          src={props.imageurl}
        />
      </div>
    </div>
  )
}
