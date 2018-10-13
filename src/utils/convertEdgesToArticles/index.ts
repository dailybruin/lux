export interface ArticleCardData {
  section: string
  headline: string
  byline: string
  description?: string
  link: string
  image?: string
  imageAlt?: string
  imageCredit?: string
  isColumn: boolean
}

interface Edge {
  node: {
    section: string
    iscolumn: string
    headline: string
    byline: string
    imageurl: string
    imagecredits: string
    imagedescription: string
    link: string
  }
}

export default function convertEdgesToArticles(
  edges: Edge[]
): ArticleCardData[] {
  return edges
    .map(edge => edge.node)
    .map(
      ({ iscolumn, imagedescription, imagecredits, imageurl, ...props }) => ({
        image: imageurl,
        imageAlt: imagedescription,
        imageCredit: imagecredits,
        isColumn: !!iscolumn,
        ...props,
      })
    )
}
