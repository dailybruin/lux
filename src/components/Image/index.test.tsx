import * as React from 'react'
import { cleanup, render } from 'react-testing-library'
import Image from '.'

describe('Image', () => {
  afterEach(cleanup)

  it('Matches its snapshot', () => {
    const { container } = render(
      <Image
        url="http://dailybruin.com/images/2018/10/web.sp_.mwp_.nbk_.ADX_-640x461.jpg"
        caption="Freshman attacker Ashworth Molthen has registered 21 goals on the season, finding the back of the net in 13 of the 16 games so far this year for UCLA men’s water polo. UCLA is one of two teams remaining in the MPSF conference that remains undefeated."
        credit="Amy Dixon/Photo editor"
        alt="Ashworth Molthen playing water polo."
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Throws an error if it does not receive an alt prop', () => {
    expect(() => {
      render(
        <Image
          url="http://dailybruin.com/images/2018/10/web.sp_.mwp_.nbk_.ADX_-640x461.jpg"
          caption="Freshman attacker Ashworth Molthen has registered 21 goals on the season, finding the back of the net in 13 of the 16 games so far this year for UCLA men’s water polo. UCLA is one of two teams remaining in the MPSF conference that remains undefeated."
          credit="Amy Dixon/Photo editor"
          alt=""
        />
      )
    }).toThrowError()
  })
})
