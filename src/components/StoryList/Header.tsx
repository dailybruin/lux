import * as React from 'react'
import { css } from 'react-emotion'
import * as MainSiteStyles from '../../globals/mainsiteGlobalStyles'

interface HeaderProps {
  title: string
}

export default function Header(props: HeaderProps) {
  return (
    <div
      className={css`
        background-color: #000;
        padding: 0.125rem 0rem 0.125rem 0.5rem;
      `}
    >
      <h2
        className={css`
          color: #fff;
          font-family: ${MainSiteStyles.topBarFont}, sans-serif;
          font-size: 1.1875rem;
          font-weight: 900;
          line-height: 1.4375rem;
          margin: 0.125rem;
          overflow-wrap: break-word;
        `}
      >
        {props.title}
      </h2>
    </div>
  )
}
