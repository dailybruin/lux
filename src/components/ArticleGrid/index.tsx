import * as React from 'react'
import slugify from 'slugify'
import ArticleCard from './ArticleCard'
// import Img from 'gatsby-image';
// import Header from './Header';

interface Article {
  section: string
  headline: string
  authors: string
  description?: string
  link: string
  image: string
  imageAlt: string
  imageCredit: string
}

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
    console.log('nathan test', this.props.articles)
    const articles = this.props.articles.map(article => {
      // TODO: move the author split into a data section
      return (
        <ArticleCard
          headline={article.headline}
          authors={!!article.authors ? article.authors.split(',') : ''}
          link={article.link}
        />
      )
    })

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
