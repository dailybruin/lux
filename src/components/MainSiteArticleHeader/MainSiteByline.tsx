// support for multiple authors
import * as React from 'react'
import { css } from 'react-emotion'
import { MainSiteArticleHeaderProps } from './index'

export default function MainSiteByline(props: MainSiteArticleHeaderProps) {
  // first check if there's only one author with a profile photo
  if (props.bylineInfo.length === 1 && props.bylineInfo[0].authorPhotoURL) {
    return <div>Only one author</div>
  } else {
    return <div>Tere is more than one author</div>
  }
}
