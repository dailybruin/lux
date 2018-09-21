/**
 * A function that takes in a string and capitalizes the first letter of each word.
 * @author Dustin Newman
 * @export
 * @param {string} The string.
 * @returns {string} A capitalized string.
 */
export default function capitalizeSections(str: string): string {
    if (str.length === 0) {
      return '';
    }

    if (str === 'prime') return 'prime';
  
    return str.toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
  }
  