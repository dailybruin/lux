import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'react-emotion'
import Photo from './Photo'

interface CoverAnimationProps {
  photos?: any
}

const positions = [
  { top: '40px', left: '60px', width: '30%' },
  { bottom: '40px', right: '160px', width: '20%' },
  { top: '60px', right: '70px', width: '36%' },
  { bottom: '80px', left: '120px', right: 'auto', width: '28%' },
  { bottom: '120px', right: '65px', width: '26%' },
  { top: '60px', left: 'auto', right: 'auto', width: '34%' },
  {
    top: '50%',
    left: '50%',
    width: '10%',
  },
  {
    bottom: '20%',
    left: '70%',
    width: '18%',
  },
  {
    top: '10%',
    left: '21%',
    width: '30%',
  },
  {
    top: '20px',
    left: '20px',
    width: '24%',
  },
  {
    top: '10px',
    left: '50%',
    width: '25%',
  },
  {
    top: '50%',
    left: '50%',
    width: '25%',
  },
  {
    top: '20%',
    left: '40%',
    width: '40%',
  },
]

class CoverAnimation extends React.Component<CoverAnimationProps> {
  render() {
    const x = this.props.photos.map((photo, i) => {
      return (
        <Photo
          key={i}
          caption="hello test"
          timeOffset={2 * (i + 1)}
          image={photo}
          {...positions[i]}
        />
      )
    })
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
                fluid {
                  ...GatsbyImageSharpFluid
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
