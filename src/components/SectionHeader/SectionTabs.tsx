import * as React from 'react'
import { css } from 'react-emotion'

import SectionTab from './SectionTab'

export default class SectionTabs extends React.Component {
  constructor(props) {
    super(props)
  }
  public render() {
    const sections = this.props.sectionList
    const sectionTabList = []
    for (const i of sections) {
      sectionTabList.push(<SectionTab section={i} />)
    }
    return (
      <ul
        className={css`
          width: 100%;
          height: 62px;
          margin: 0;
          padding: 0;
          line-height: normal;
          font-size: 18px;

          background: #000000;

          list-style-type: none;

          overflow: hidden;
          @media (max-width: 940px) {
            display: none;
          }
        `}
        id="SectionHeaderTabs"
      >
        {sectionTabList}
      </ul>
    )
  }
}
