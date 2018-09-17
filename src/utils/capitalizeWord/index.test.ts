import capitalizeWord from '.'

describe('capitalizeWord', () => {
  it('returns an empty string if given an empty string', () => {
    expect(capitalizeWord('')).toBe('')
  })
  it('returns a capitalized word when given a lowercased word', () => {
    expect(capitalizeWord('effervescent')).toBe('Effervescent')
  })
  it('handles spongebob-case words', () => {
    expect(capitalizeWord('dAiLyBrUin')).toBe('Dailybruin')
  })
  it('Handles multiple words by only uppercasing the first letter', () => {
    expect(capitalizeWord('one, two and three')).toBe('One, two and three')
  })
})
