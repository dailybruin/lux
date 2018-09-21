import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'react-emotion'
import Photo, { CaptionPosition } from './Photo'

interface CoverAnimationProps {
  photos?: any
}

class CoverAnimation extends React.Component<CoverAnimationProps> {
  render() {
    const x = this.props.photos.map((photo, i) => (
      <Photo
        key={i}
        caption="hello test"
        timeOffset={2 * (i + 1)}
        captionPosition={CaptionPosition.LEFT}
        image={photo}
        top={i * 20}
        right={i * 20}
      />
    ))
    return (
      <div
        className={css`
          height: 100vh;
        `}
      >
        {x}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query CoverAnimationQuery {
        allFile(filter: { relativePath: { regex: "/coverphoto/" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 200, height: 200, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => <CoverAnimation photos={data.allFile.edges} />}
  />
)
