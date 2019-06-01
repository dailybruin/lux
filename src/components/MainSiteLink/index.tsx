import * as React from 'react'
import { css } from 'react-emotion'
import { dailyBruinBlue } from '../../globals/mainsiteGlobalStyles'

export interface MainSiteLinkProps {
  /** URL to link to */
  href: string
}

class MainSiteLink extends React.Component<MainSiteLinkProps> {
  public render() {
    return (
      <a
        href={this.props.href}
        className={css`
          text-decoration: none;
          color: ${dailyBruinBlue};

          :hover {
            opacity: 0.75;
          }
        `}
      >
        {this.props.children}
      </a>
    )
  }
}

export default MainSiteLink
