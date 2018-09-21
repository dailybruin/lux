import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css, keyframes } from 'react-emotion'
import Photo from './Photo'
import Masthead from './Masthead'

const darken = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.4);
  }
`

interface CoverAnimationProps {
  photos?: any
}

const positions = [
  { top: '40px', left: '60px', width: '30%' },
  { bottom: '40px', right: '160px', width: '34%' },
  { top: '60px', right: '70px', width: '36%' },
  { bottom: '80px', left: '120px', width: '28%' },
  { bottom: '10px', right: '65px', width: '26%' },
  { bottom: '60px', left: '20px', width: '34%' },
  {
    top: '50%',
    left: '50%',
    width: '16%',
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
    const photos = this.props.photos.map((photo, i) => {
      return (
        <Photo key={i} timeOffset={i * 0.6} image={photo} {...positions[i]} />
      )
    })
    return (
      <div
        className={css`
          height: 100vh;
        `}
      >
        {photos}
        <Masthead timeOffset={this.props.photos.length * 0.6} />
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
