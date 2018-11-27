import * as React from 'react'
import { css } from 'react-emotion'
import * as MainSiteStyles from '../../globals/mainsiteGlobalStyles'
import Story from './Story'
import TopBar from './TopBar'

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
  /** A list of the most popular stories. */
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
        key={index}
      />
    ))

    return (
      <div
        className={css`
          background-color: ${MainSiteStyles.white};
          box-shadow: ${MainSiteStyles.cardShadow};
          justify-content: center;
          margin: 16px auto;
          max-width: 292px;
        `}
      >
        <TopBar
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
              margin: 15px auto 0px;
              text-decoration: none;
              width: 90%;
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
            padding: ${MainSiteStyles.cardInnerPadding};
          `}
        >
          {renderedStories}
        </div>
      </div>
    )
  }
}

export default StoryList
