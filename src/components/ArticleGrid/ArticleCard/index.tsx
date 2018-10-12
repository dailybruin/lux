import * as React from 'react'
import { css } from 'react-emotion'
import { ArticleData } from '../../../utils/convertEdgesToArticles'
import Byline from '../../Byline'
import bearImage from './bear.jpg'

interface ArticleCardProps {
  article: ArticleData
}

class ArticleCard extends React.Component<ArticleCardProps> {
  public render() {
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
            src={this.props.article.image || bearImage}
            className={css`
              width: 100%;
              height: 250px;
              object-fit: cover;
              margin-bottom: 0.2rem;
            `}
            alt={this.props.article.imageAlt || 'The UCLA Bruin bear statue.'}
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
          <Byline authors={this.props.article.byline.split(',')} />
          {!!this.props.article.description && (
            <p>{this.props.article.description}</p>
          )}
        </a>
      </article>
    )
  }
}

export default ArticleCard
