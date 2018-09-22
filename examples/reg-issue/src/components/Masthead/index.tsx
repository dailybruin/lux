import * as React from 'react'
import { css, keyframes } from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

interface MastheadProps {
  timeOffset: number
}

export default class Masthead extends React.Component<MastheadProps> {
  onDownClick = () => {
    window.scroll({ top: window.innerHeight - 100, behavior: 'smooth' })
  }

  render() {
    return (
      <div
        className={css`
          height: 100vh;
          opacity: 0;
          animation: ${fadeIn} 0.5s ease-in-out forwards;
          animation-delay: ${this.props.timeOffset}s;
          margin-bottom: 3rem;
          background-color: rgba(0, 0, 0, 0.6);
          display: grid;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          className={css`
            display: grid;
            justify-content: center;
            align-items: center;
          `}
        >
          <img
            src={require('./logo.svg')}
            className={css`
              margin: 0;
            `}
          />
          <h1
            className={css`
              text-align: center;
              color: #fff;
              margin: 0;
            `}
          >
            The Registration Issue
          </h1>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={css`
              color: #fff;
              margin: 16px auto 0;
              :hover {
                cursor: pointer;
              }
            `}
            size="4x"
            onClick={this.onDownClick}
          />
        </div>
      </div>
    )
  }
}
