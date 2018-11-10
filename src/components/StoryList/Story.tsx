import * as React from 'react'
import { css } from 'react-emotion'

interface StoryProps {
  blurb: string
  headline: string
  link: string
}

class Story extends React.Component<StoryProps> {
  public static defaultProps: Partial<StoryProps> = {
    blurb:
      'This movie was bonker but #nospoilers because of character limit alright pals',
    headline: 'Most Popular Story',
    link: '#',
  }

  public render() {
    return (
      <div>
        <h3
          className={css`
            font-family: 'Lora', serif;
            font-size: 0.875rem;
            font-weight: 700;
            line-height: 1.125rem;
            margin: 0rem 0rem 0.1875rem;
            text-align: left;
          `}
        >
          <a
            href={this.props.link}
            className={css`
              color: #000;
              padding: 0.25rem 0.25rem 0.25rem 0rem;
              text-decoration: none;
              &:hover {
                opacity: 0.8;
              }
            `}
          >
            {this.props.headline}
          </a>
        </h3>
        <p
          className={css`
            color: #000;
            font-family: 'PT Serif', serif;
            font-size: 0.76rem;
            line-height: 1rem;
            margin: 0rem;
          `}
        >
          {this.props.blurb}
        </p>
      </div>
    )
  }
}

export default Story
