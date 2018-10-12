import * as React from 'react'
import { render } from 'react-dom'
import Byline from '../src'
import Footer from '../src/components/Footer/Footer'
import Headline from '../src/components/Headline/Headline'

function App() {
  return (
    <>
      <Headline>The Headline</Headline>
      <Byline authors={['Nathan Smith']} />
      <Footer
        githubName={'lux'}
        developers={['Nathan Smith']}
        copyrightYear={2018}
      />
    </>
  )
}

render(<App />, document.getElementById('app'))
