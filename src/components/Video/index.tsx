// tslint:disable-next-line:no-reference
/// <reference path="index.d.ts"/>

import * as React from 'react'
import Plyr from 'react-plyr'
// tslint:disable-next-line
import 'plyr/dist/plyr.css'

export interface VideoProps {
  /** The id of the YouTube video. */
  videoId: string
}

export default function Video(props: VideoProps) {
  return <Plyr type="youtube" {...props} />
}
