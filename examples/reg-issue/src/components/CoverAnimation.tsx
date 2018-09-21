import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'react-emotion'
import Img from 'gatsby-image'
import Photo, { CaptionPosition } from './Photo'

const placeholderPhotos = Array.from(
  'https://via.placeholder.com/350x150'.repeat(10)
)

interface CoverAnimationProps {
  photos?: any
}

class CoverAnimation extends React.Component<CoverAnimationProps> {
  render() {
    const x = this.props.photos.map((photo, i) => (
      <Photo
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
        allImageSharp {
          edges {
            node {
              fixed(width: 200, height: 200, cropFocus: CENTER) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    `}
    render={data => <CoverAnimation photos={data.allImageSharp.edges} />}
  />
)
