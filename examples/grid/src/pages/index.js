import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import 'normalize.css'

import { Footer, ArticleGrid } from '../../../../dist'

export const query = graphql`
  query IndexQuery {
    allGridJson {
      edges {
        node {
          rows {
            section
            iscolumn
            headline
            byline
            imageurl
            imagecredits
            imagedescription
            link
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) =>
  console.log(data.allGridJson.edges[0].node.rows) || (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <ArticleGrid
        heading="News"
        articles={data.allGridJson.edges[0].node.rows}
        maxColumns={4}
      />
      <Footer developers="Nathan Smith" />
    </Layout>
  )

export default IndexPage
