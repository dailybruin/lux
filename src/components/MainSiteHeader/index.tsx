import * as React from 'react'
import { css } from 'react-emotion'

import dbLogo from './db_logo.svg'
import * as MainSiteStyles from '../../globals/mainsiteGlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'

interface MainSiteHeaderLink {
  /** Category name */
  category: string
  /** Link location */
  categoryURL: string
}

interface MainSiteHeaderProps {
  /** Array of links that refer to sections on the main site */
  links: MainSiteHeaderLink[]
  /** Display smaller version with hamburger */
  hamburger: boolean
}

interface MainSiteHeaderState {
  /** Keeps track of hamburger menu */
  isHamburgerOpen: boolean
}

class MainSiteHeader extends React.Component<
  MainSiteHeaderProps,
  MainSiteHeaderState
> {
  public static defaultProps = {
    hamburger: false,
    links: [
      {
        category: 'News',
        categoryURL: 'http://dailybruin.com/news',
      },
      {
        category: 'Sports',
        categoryURL: 'http://dailybruin.com/sports',
      },
      {
        category: 'Arts',
        categoryURL: 'http://dailybruin.com/arts-entertainment',
      },
      {
        category: 'Opinion',
        categoryURL: 'http://dailybruin.com/opinion',
      },
      {
        category: 'Photo',
        categoryURL: 'http://dailybruin.com/spectrum',
      },
      {
        category: 'Video',
        categoryURL: 'http://dailybruin.com/video',
      },
      {
        category: 'Illustrations',
        categoryURL: 'http://dailybruin.com/illustrations',
      },
      {
        category: 'Graphics',
        categoryURL: 'http://dailybruin.com/graphics',
      },
      {
        category: 'PRIME',
        categoryURL: 'http://prime.dailybruin.com',
      },
      {
        category: 'The Quad',
        categoryURL: 'http://dailybruin.com/quad',
      },
      {
        category: 'The Stack',
        categoryURL: 'http://stack.dailybruin.com',
      },
    ],
  }

  constructor(props: MainSiteHeaderProps) {
    super(props)
    this.state = { isHamburgerOpen: false }
    this.hamburgerClicked = this.hamburgerClicked.bind(this)
  }

  public hamburgerClicked() {
    this.setState(state => ({
      isHamburgerOpen: !state.isHamburgerOpen,
    }))
  }

  public render() {
    const date = new Date()

    const dateOptions = {
      day: 'numeric',
      month: 'long',
      weekday: 'long',
      year: 'numeric',
    }

    const dateString = date.toLocaleDateString('en-US', dateOptions)
    const linksInNav = this.props.links.map(propLink => {
      return (
        <a
          key={propLink.categoryURL}
          href={propLink.categoryURL}
          className={css`
            text-decoration: none;
            color: #000;
          `}
        >
          {propLink.category}
        </a>
      )
    })

    return (
      <header
        className={css`
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 0.95rem;
          padding: 10px 15px 10px 15px;
          box-shadow: ${MainSiteStyles.cardShadow};
          font-family: ${MainSiteStyles.headlineFont};
          color: '#000';
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            width: 100%;

            ${MainSiteStyles.mediaMobileBreakpoint} {
              // justify-content: space-even;
            }
          `}
        >
          {!this.props.hamburger && (
            <div
              className={css`
                flex: 1;

                ${MainSiteStyles.mediaMobileBreakpoint} {
                  display: none;
                }
              `}
            >
              {dateString}
            </div>
          )}
          {this.props.hamburger && (
            <FontAwesomeIcon
              className={css`
                margin-top: auto;
                margin-bottom: auto;
              `}
              icon={this.state.isHamburgerOpen ? faTimes : faBars}
              onClick={this.hamburgerClicked}
              fixedWidth={true}
            />
          )}
          <img
            src={dbLogo}
            className={css`
              width: ${this.props.hamburger ? '200px' : '420px'};

              ${MainSiteStyles.mediaMobileBreakpoint} {
                width: 200px;
              }
            `}
          />
          <div
            className={css`
              flex: ${this.props.hamburger ? 0 : 1};
              text-align: right;

              ${MainSiteStyles.mediaMobileBreakpoint} {
                display: none;
              }
            `}
          >
            {!this.props.hamburger && <a>Advertise</a>}
            <FontAwesomeIcon
              icon={faSearch}
              className={css`
                margin-top: auto;
                margin-bottom: auto;
              `}
            />
          </div>
        </div>
        {!this.props.hamburger && (
          <div
            className={css`
            margin: 10px 0px 10px 0px;
            height: 1px; width: 100%;
            opacity: 0.5;
            background-color: #5f5f5f;}
            ${MainSiteStyles.mediaMobileBreakpoint} {
              display: none;
            }
          `}
          />
        )}
        {(this.state.isHamburgerOpen || !this.props.hamburger) && (
          <nav
            className={css`
              display: flex;
              flex-direction: row;
              align-self: stretch;
              justify-content: space-evenly;
              text-decoration: none;
              font-size: 0.85rem;

              ${MainSiteStyles.mediaMobileBreakpoint} {
                flex-direction: column;
                text-align: center;
              }
            `}
          >
            {linksInNav}
          </nav>
        )}
      </header>
    )
  }
}

export default MainSiteHeader
