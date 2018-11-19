import * as uniq from 'lodash.uniq'

/**
 * A function that takes in a string and capitalizes the first letter of each word.
 * @author Dustin Newman
 * @export
 * @param {string} The string.
 * @returns {string} A capitalized string.
 */
function capitalizeSection(section: string): string {
  if (section.length === 0) {
    return ''
  }

  if (section === 'prime') {
    return 'prime'
  }

  return section
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
}

export default function extractSectionsFromArticleEdges(edges: any): string[] {
  return uniq(edges.map(edge => capitalizeSection(edge.node.section)))
}
