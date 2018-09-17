/**
 * @description A function that takes a word and lowercases all letters except the first letter, which is uppercased.
 * @author Nathan Smith
 * @export
 * @param {string} word
 * @returns {string}
 */
export default function capitalizeWord(word: string): string {
  return word.length > 0
    ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    : ''
}
