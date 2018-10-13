/**
 * A function that takes in an array of strings and returns a single string of all elements conjoined with commas and an 'and' or ampersand.
 * @author Nathan Smith
 * @export
 * @param {Array<string>} arr The array of strings.
 * @param {boolean} [ampersand=false] Whether or not to separate the last to elements with an 'and' or ampersand. Setting this to true means that an ampersand will be used.
 * @returns {string} The elements in a human readable string.
 */
export default function toSentence(
  arr: string[],
  ampersand: boolean = false
): string {
  if (arr.length === 0) {
    return ''
  } else if (arr.length === 1) {
    return arr[0]
  }

  const conjoiner = ampersand ? '&' : 'and'
  return (
    arr.slice(0, arr.length - 1).join(', ') + ` ${conjoiner} ` + arr.slice(-1)
  )
}
