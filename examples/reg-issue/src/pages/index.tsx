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
import capitalizeSection from '../utils/capitalizeSection'
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
    data.allGoogleSheetRow.edges.map(edge =>
      capitalizeSection(edge.node.section)
    )
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
        title="Registration Issue 2018 | The Daily Bruin"
        description=""
        url="features.dailybruin.com/2018/registration-issue"
        twitter="@dailybruin"
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
        <p
          className={css`
            text-align: center;
            margin: 1rem 8rem;
            font-size: 1.2rem;
          `}
          id="explainer"
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
      <Footer
        developers={['Nathan Smith', 'Dustin Newman']}
        copyrightYear={2018}
      />
    </>
  )
}
