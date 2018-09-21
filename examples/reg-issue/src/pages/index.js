import * as React from 'react'
import { graphql } from 'gatsby'
import { Head, ArticleGrid, Footer } from '../../../../dist'
import CoverAnimation from '../components/CoverAnimation'
import * as uniq from 'lodash.uniq'

import 'normalize.css'

export const query = graphql`
  query IndexPageQuery {
    allGoogleSheetRow {
      edges {
        node {
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
`

export default function IndexPage({ data }) {
  const sections = uniq(
    data.allGoogleSheetRow.edges.map(edge => edge.node.section)
  )

  const articleGrids = sections.map((section, i) => {
    const articles = data.allGoogleSheetRow.edges.filter(
      edge => edge.node.section === section
    )

    return <ArticleGrid key={i} heading={section} articles={articles} />
  })

  return (
    <>
      <Head
        title="test"
        description="test2"
        url="features.dailybruin.com"
        twitter="yup"
      />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <CoverAnimation />
        {articleGrids}
      </div>
      <Footer developers="Nathan Smith" />
    </>
  )
}
