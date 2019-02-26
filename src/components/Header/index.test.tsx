import * as React from 'react'
import { cleanup, render } from 'react-testing-library'
import Navbar from '.'

describe('Navbar', () => {
  afterEach(cleanup)

  it('Matches its snapshot', () => {
    const { container } = render(
      <Navbar
        sticky={true}
        showLogo={true}
        title={'Fake Title'}
        links={[
          <a key={1} href="/">
            Index
          </a>,
          <a key={2} href="/page-two">
            Page Two
          </a>,
          <a key={3} href="/page-three">
            Page Three
          </a>,
        ]}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
