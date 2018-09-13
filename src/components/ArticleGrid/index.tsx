import * as React from 'react'
import slugify from 'slugify'
import { css } from 'react-emotion'
import ArticleCard from './ArticleCard'
// import Img from 'gatsby-image';
// import Header from './Header';

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
    const articles = this.props.articles.map(article => (
      <ArticleCard headline={article.headline} />
    ))

    return (
      <section
        id={!!this.props.heading ? slugify(this.props.heading) : undefined}
      >
        {!!this.props.heading && <h2>{this.props.heading}</h2>}
        {!!this.props.descriptionText && <p>{this.props.descriptionText}</p>}
        {articles}
      </section>
    )
  }
}
