import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Head,
  ArticleGrid,
  Footer,
  convertEdgesToArticles,
} from '../../../../dist'
import CoverAnimation from '../components/CoverAnimation'
import * as uniq from 'lodash.uniq'
import { css } from 'react-emotion'

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
    const articles = convertEdgesToArticles(
      data.allGoogleSheetRow.edges
    ).filter(article => article.section === section)

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
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <p
          className={css`
            text-align: center;
            margin: 1rem 0;
          `}
        >
          The Registration Issue is the Daily Bruin’s first issue of the new
          school year. These images combine protest and demonstration documented
          in The Bruin’s film and digital archives to depict expressions of
          student voices on campus. Students have and continue to protest
          injustices such as the marginalization of communities or the silencing
          of student voices since the campus’ inception, and we hope to
          recognize the ongoing problems that have become ingrained into UCLA’s
          history as the university nears its centennial year.
        </p>
        {articleGrids}
      </div>
      <Footer developers="Nathan Smith" />
    </>
  )
}
