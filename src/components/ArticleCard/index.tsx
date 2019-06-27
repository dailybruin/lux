import * as React from 'react'
import { render } from 'react-dom'

import Vert from './Vert'
import Horz from './Horz'
import Long from './Long'
import Full from './Full'
import Mini from './Mini'

enum ContentType {
  Vert = 'vert',
  Horz = 'horz',
  Long = 'long',
  Full = 'full',
  Mini = 'mini',
}

interface ArticleCardProps {
  displayType: string
  category: string
  headline: string
  imageurl: string
  photographer: string
  content: string
  editor: string
  link: string
}

export default class ArticleCard extends React.Component<ArticleCardProps> {
  constructor(props) {
    super(props)
  }

  public render() {
    let card
    switch (this.props.displayType) {
      case 'vert':
        card = <Vert {...this.props} />
        break
      case 'horz':
        card = <Horz {...this.props} />
        break
      case 'long':
        card = <Long {...this.props} />
        break
      case 'full':
        card = <Full {...this.props} />
        break
      case 'mini':
        card = <Mini {...this.props} />
        break
      default:
        card = <Horz {...this.props} />
    }
    return (
      <a href={this.props.link} style={{ textDecoration: 'none' }}>
        {card}
      </a>
    )
  }
}
