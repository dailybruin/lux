import * as React from 'react'
import { css } from 'react-emotion'
import * as MainSiteStyles from '../../globals/mainsiteGlobalStyles'
import Header from './Header'
import Story from './Story'

/**
 * Story List Properties
 */

enum StoryListType {}

interface StoryListProps {
  text: string
  story: Story
  image?: string
  alt?: string
}

class StoryList extends React.Component<StoryListProps> {
  public render() {
    return (
      <div
        className={css`
          background-color: #fff;
          justify-content: center;
          margin: 0 auto;
          max-width: 18.25rem;
          box-shadow: ${MainSiteStyles.cardShadow};
        `}
      >
        <Header title={this.props.text} />
        <div
          className={css`
            padding: 0.8125rem 1rem 1.25rem;
          `}
        >
          <Story />
        </div>
      </div>
    )
  }
}

export default StoryList
