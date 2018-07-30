import toSentence from './toSentence';

describe('toSentence', () => {
  it('returns an empty string if given an empty array', () => {
    expect(toSentence([])).toBe('');
  });
  it('returns the string of that element if given an array with one element', () => {
    expect(toSentence(['one'])).toBe('one');
  });
  it('returns a string of two elements with an "and" in between them when given an array with two elements', () => {
    expect(toSentence(['one', 'two'])).toBe('one and two');
  });
  it('returns each item separated by a comma except for the last element when given 3+ items in the array', () => {
    expect(toSentence(['one', 'two', 'three'])).toBe('one, two and three');
    expect(toSentence(['one', 'two', 'three', 'four'])).toBe(
      'one, two, three and four'
    );
  });
  it('uses an & when `ampersand=true`', () => {
    expect(toSentence(['one', 'two'], true)).toBe('one & two');
    expect(toSentence(['one', 'two', 'three', 'four'], true)).toBe(
      'one, two, three & four'
    );
  });
});
