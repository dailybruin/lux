import * as React from 'react'
import { cleanup, render } from 'react-testing-library'
import Video from '.'

describe('Footer', () => {
  afterEach(cleanup)

  it('Matches its snapshot', () => {
    const { container } = render(<Video videoId="ZzjB5Sd8fOE" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
