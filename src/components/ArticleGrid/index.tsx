import * as React from 'react'
import { css } from 'react-emotion'
// import Img from 'gatsby-image';
// import Header from './Header';

// const style = css`
//   z-index: -1;
// `

interface Article {
  headline: string
  authors: string | Array<String>
  description?: string
  link: string
  image: string
  imageAlt: string
  imageCredit: string
}

interface ArticleGridProps {
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
    return (
      <div
        className={css`
          display: grid;
        `}
      />
    )
  }
}
