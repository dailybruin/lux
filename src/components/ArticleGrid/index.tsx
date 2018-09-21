import * as React from 'react'
import slugify from 'slugify'
import { css } from 'react-emotion'
import ArticleCard from './ArticleCard'
import { Article } from '../../utils/convertEdgesToArticles'

interface ArticleGridProps {
  heading?: string
  descriptionText?: string
  articles: Array<Article>
  maxColumns: number
  minColumns: number
}

export default class ArticleGrid extends React.Component<ArticleGridProps> {
  static defaultProps = {
    maxColumns: 3,
    minColumns: 1,
  }

  render() {
    const articles = this.props.articles.map((article, i) => {
      // TODO: move the byline split into a data section
      return (
        <ArticleCard
          headline={article.headline}
          authors={article.byline ? article.byline.split(',') : article.byline}
          link={article.link}
          key={i}
        />
      )
    })

    return (
      <section
        id={!!this.props.heading ? slugify(this.props.heading) : undefined}
      >
        {!!this.props.heading && (
          <h2
            className={css`
              text-align: center;
            `}
          >
            {this.props.heading}
          </h2>
        )}
        {!!this.props.descriptionText && <p>{this.props.descriptionText}</p>}
        <div
          className={css`
            display: grid;
            grid-template-columns: repeat(${this.props.maxColumns}, 1fr);
            grid-gap: 16px;
          `}
        >
          {articles}
        </div>
      </section>
    )
  }
}
