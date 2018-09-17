import * as React from 'react'
import { css } from 'react-emotion'
import Byline from '../../Byline'

interface ArticleCardProps {
  headline: string
  italicize: boolean
  authors: string | Array<string>
  description?: string
  link: string
}

class ArticleCard extends React.Component<ArticleCardProps> {
  static defaultProps = {
    italicize: false,
  }

  render() {
    return (
      <article>
        <a
          href={this.props.link}
          className={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <img
            src="https://via.placeholder.com/500x500"
            className={css`
              max-width: 100%;
            `}
          />
          <h2
            className={css`
              margin: 0;
            `}
          >
            {this.props.headline}
          </h2>
          <Byline authors={this.props.authors} />
          {!!this.props.description && <p>{this.props.description}</p>}
        </a>
      </article>
    )
  }
}

export default ArticleCard
