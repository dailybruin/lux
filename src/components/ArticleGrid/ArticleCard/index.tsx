import * as React from 'react'
import Headline from '../../Headline'
import Byline from '../../Byline'
import { render } from 'react-dom'

// interface Article {
//   headline: string
//   authors: string | Array<String>
//   description?: string
//   link: string
//   image: string
//   imageAlt: string
//   imageCredit: string
// }

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
        <a href={this.props.link}>
          <img src="https://via.placeholder.com/500x500" />
          <h2>{this.props.headline}</h2>
          <Byline authors={this.props.authors} />
          {!!this.props.description && <p>{this.props.description}</p>}
        </a>
      </article>
    )
  }
}

export default ArticleCard
