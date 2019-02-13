import * as React from 'react'
import Tall from './Tall'
import Long from './Long'
import XL from './XL'

enum ContentType {
  Tall = 'tall',
  Long = 'long',
  XL = 'longest',
}

interface ArticleCardProps {
  type: string
  title: string
  content: string
  imageurl: string
  photographer: string
  editor: string
}

export default class ArticleCard extends React.Component<ArticleCardProps> {
  public static defaultProps = {
    imageurl: 'http://dailybruin.com/images/2017/03/db-logo.png',
  }

  public render() {
    switch (this.props.type) {
      case ContentType.Tall:
        return (
          <div>
            <Tall {...this.props} />
          </div>
        )
      case ContentType.Long:
        return (
          <div>
            <Long {...this.props} />
          </div>
        )
      case ContentType.XL:
        return (
          <div>
            <XL {...this.props} />
          </div>
        )
    }
  }
}
