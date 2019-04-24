import * as React from 'react'
import { css } from 'react-emotion'
import {
  headlineFont,
  storyListFont,
  cardShadow,
  regularFont,
  bodyFont,
} from '../../globals/mainsiteGlobalStyles'

interface TallProps {
  imageurl: string
  photographer: string
  title: string
  content: string
}

export default function Tall(props: TallProps) {
  return (
    <div
      className={css`
        height: auto;
        width: 291px;
        box-shadow: ${cardShadow};
      `}
    >
      <img
        className={css`
          width: 267px;
          height: 209px;
          padding: 13px 12px 0px 12px;
          margin-bottom: -15px;
        `}
        src={props.imageurl}
      />
      <h3
        className={css`
          font-size: 7px;
          padding-right: 10.6px;
          text-align: right;
          font-family: ${headlineFont}, serif;
        `}
      >
        {props.photographer}
      </h3>
      <h2
        className={css`
          color: #1a9ae0;
          font-size: 0.7em;
          padding-left: 12px;
          font-weight: 800;
          margin-bottom: -20px;
        `}
      >
        NEWS
      </h2>
      <h1
        className={css`
          margin-bottom: -7px;
          padding-left: 12px;
          padding-right: 8px;
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
          padding: 0px 12px 12px 12px;
          line-height: normal;
          font-weight: ${regularFont};
        `}
      >
        {props.content}
      </p>
    </div>
  )
}
