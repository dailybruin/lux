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
    const articles = this.props.articles.map((article, i) => (
      <ArticleCard article={article} key={i} />
    ))

    const gridStyles =
      this.props.articles.length > 1
        ? css`
            display: grid;
            grid-template-columns: repeat(${this.props.maxColumns}, 1fr);
            grid-gap: 16px;

            @media (max-width: 900px) {
              grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: 700px) {
              grid-template-columns: 1fr;
            }
          `
        : css`
            text-align: center;
          `

    return (
      <section
        id={!!this.props.heading ? slugify(this.props.heading) : undefined}
        className={css`
          margin-top: 20px;
        `}
      >
        {!!this.props.heading && (
          <h2
            className={css`
              text-align: center;
              font: bold 4rem 'EB Garamond', Garamond, Georgia, serif;
            `}
          >
            {this.props.heading}
          </h2>
        )}
        {!!this.props.descriptionText && <p>{this.props.descriptionText}</p>}
        <div className={gridStyles}>{articles}</div>
      </section>
    )
  }
}
