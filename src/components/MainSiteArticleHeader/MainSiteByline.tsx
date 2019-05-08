// support for multiple authors
import * as React from 'react'
import { css } from 'react-emotion'

interface MainSiteBylineProps {
  info: BylineInfo[]
  /** When was this article published? */
  date: string
}

export default function MainSiteByline(props: MainSiteBylineProps) {
  return <div>Byline goes here</div>
}
