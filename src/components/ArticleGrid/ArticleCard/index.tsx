import * as React from 'react'
import { css } from 'react-emotion'
import Byline from '../../Byline'
import { Article } from '../../../utils/convertEdgesToArticles'

interface ArticleCardProps {
  article: Article
}

class ArticleCard extends React.Component<ArticleCardProps> {
  render() {
    return (
      <article>
        <a
          href={this.props.article.link}
          className={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <img
            src={this.props.article.image}
            className={css`
              width: 100%;
              height: 250px;
              object-fit: cover;
              margin-bottom: 0.2rem;
            `}
            alt={this.props.article.imageAlt}
          />
          <h2
            className={css`
              margin: 0;
              font-style: ${this.props.article.isColumn ? 'italic' : 'normal'};
              font-size: 1.6rem;
            `}
          >
            {this.props.article.headline}
          </h2>
          <Byline authors={this.props.article.byline} />
          {!!this.props.article.description && (
            <p>{this.props.article.description}</p>
          )}
        </a>
      </article>
    )
  }
}

export default ArticleCard
