import * as React from 'react'
import { css } from 'react-emotion'

import ExpandingTab from './ExpandingTab'

export default class ExpandingTabs extends React.Component<ExpandingTabsProps> {
  constructor(props: ExpandingTabsProps) {
    super(props)
  }
  public underlineHovered(idTitle: string) {
    document.getElementById(
      'SectionHeaderExpandingTab' + idTitle
    ).style.textDecoration = 'underline'
  }
  public underlineClear(idTitle: string) {
    document.getElementById(
      'SectionHeaderExpandingTab' + idTitle
    ).style.textDecoration = 'none'
  }
  public render() {
    const sections = this.props.sectionList
    const sectionTabList = []
    for (const i of sections) {
      sectionTabList.push(<ExpandingTab section={i} />)
    }
    return (
      <ul
        className={css`
          width: 100%;
          height: auto;

          margin: 7px 0 0;
          padding: 0 0 7px;

          background: #000000;

          list-style-type: none;
          @media (min-width: 940px) {
            display: none;
          }
        `}
        id="SectionHeaderExpandingTabs"
      >
        {sectionTabList}
      </ul>
    )
  }
}
