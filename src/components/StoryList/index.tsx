import * as React from 'react'
import { css } from 'react-emotion'
import * as MainSiteStyles from '../../globals/mainsiteGlobalStyles'
import Header from './Header'
import Story from './Story'

/**
 * Story List Properties
 */

interface StoryContent {
  title: string
  text: string
  link: string
}

interface ImageContent {
  src: string
  alt: string
}

enum StoryListType {
  Popular = 'popular',
  Print = 'print',
}

interface StoryListProps {
  /** A list of the most popular stories. The list should contain exactly 3 stories. */
  story: StoryContent[]
  /** An image relating to the most popular story (i.e. the first in the list). */
  image?: ImageContent
  /** Determines the title of the black top-bar (see example below). Defaults to popular stories. */
  type: StoryListType
}

class StoryList extends React.Component<StoryListProps> {
  public static defaultProps = { type: StoryListType.Popular }

  public render() {
    const renderedStories = this.props.story.map((story, index) => (
      <Story
        title={story.title}
        text={story.text}
        link={story.link}
        color={!!this.props.image ? '#ABABAB' : '#000'}
        padding={!!this.props.image ? 0.3125 : 0.74}
        key={index}
      />
    ))

    return (
      <div
        className={css`
          background-color: #fff;
          justify-content: center;
          margin: 1rem auto;
          max-width: 18.25rem;
          box-shadow: ${MainSiteStyles.cardShadow};
        `}
      >
        <Header
          title={
            !!this.props.image
              ? 'IN THE NEWS'
              : this.props.type === StoryListType.Popular
                ? 'POPULAR'
                : 'IN THE PRINT'
          }
        />
        {!!this.props.image && (
          <a
            className={css`
              display: block;
              margin: 1rem auto 0rem;
              text-decoration: none;
              width: 89%;
            `}
            href={!!this.props.story[0].link ? this.props.story[0].link : '#'}
          >
            <img
              className={css`
                object-fit: contain;
                vertical-align: top;
                width: 100%;
                &:hover {
                  opacity: 0.85;
                }
              `}
              src={this.props.image.src}
              alt={this.props.image.alt}
            />
          </a>
        )}
        <div
          className={css`
            padding: 0.8125rem 1rem ${!!this.props.image ? 0.8125 : 1.25}rem;
          `}
        >
          {renderedStories}
        </div>
      </div>
    )
  }
}

export default StoryList
