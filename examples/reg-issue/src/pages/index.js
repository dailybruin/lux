import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Head,
  ArticleGrid,
  Footer,
  convertEdgesToArticles,
} from '../../../../dist'
import CoverAnimation from '../components/CoverAnimation'
import * as uniq from 'lodash.uniq';
import capitalizeSection from '../utils/capitalizeSection';

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
    data.allGoogleSheetRow.edges.map(edge => capitalizeSection(edge.node.section))
  )

  const articleGrids = sections.map((section, i) => {
    const articles = convertEdgesToArticles(
      data.allGoogleSheetRow.edges
    ).filter(article => article.section === section.toLowerCase())

    return <ArticleGrid key={i} heading={section} articles={articles} />
  })


  
  return (
    <>
      <Head
        title="test"
        description="test2"
        url="features.dailybruin.com/2018/registration-issue"
        twitter="yup"
      />
      <CoverAnimation />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1080,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {articleGrids}
      </div>
      <Footer developers="Nathan Smith, Dustin Newman" />
    </>
  )
}
