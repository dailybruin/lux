import * as React from 'react'
import { css } from 'react-emotion'
import * as MainSiteStyles from '../../globals/mainsiteGlobalStyles'

interface TopBarProps {
  title: string
}

export default function TopBar(props: TopBarProps) {
  return (
    <div
      className={css`
        background-color: ${MainSiteStyles.black};
        padding: 2px 0px 4px 8px;
      `}
    >
      <h2
        className={css`
          color: ${MainSiteStyles.white};
          font-family: ${MainSiteStyles.topBarFont}, sans-serif;
          font-size: 1.125rem;
          font-weight: 900;
          line-height: 1.4375rem;
          margin: 0px;
          overflow-wrap: break-word;
        `}
      >
        {props.title}
      </h2>
    </div>
  )
}
