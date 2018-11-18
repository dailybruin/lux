import * as React from 'react'
import { css } from 'react-emotion'
import * as MainSiteStyles from '../../globals/mainsiteGlobalStyles'

interface StoryProps {
  title: string
  text: string
  link: string
  color: string
  padding: number
}

export default function Story(props: StoryProps) {
  return (
    <div
      className={css`
        border-bottom: solid ${props.color} 0.1rem;
        padding: 0.3125rem 0rem ${props.padding}rem;
        &:first-child {
          padding-top: 0rem;
        }
        &:last-child {
          border-bottom: none;
          padding-bottom: 0rem;
        }
      `}
    >
      <h3
        className={css`
          font-family: ${MainSiteStyles.storyListFont}, serif;
          font-size: 0.8125rem;
          font-weight: 700;
          line-height: 1.125rem;
          margin: 0rem 0rem 0.125rem;
          overflow-wrap: break-word;
          text-align: left;
        `}
      >
        <a
          href={props.link}
          className={css`
            color: #000;
            padding: 0.35rem 0.25rem 0.25rem 0rem;
            text-decoration: none;
            &:hover {
              opacity: 0.8;
            }
          `}
        >
          {props.title}
        </a>
      </h3>
      <p
        className={css`
          color: #000;
          font-family: 'PT Serif', serif;
          font-size: 0.78125rem;
          line-height: 1.09375rem;
          margin: 0rem;
          overflow-wrap: break-word;
        `}
      >
        {props.text}
      </p>
    </div>
  )
}
