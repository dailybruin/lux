import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import Byline from '.'

describe('Byline', () => {
  afterEach(cleanup)

  it('Matches its snapshot', () => {
    const { container } = render(
      <Byline authors={['Nathan Smith', 'Michael Zhang']} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
