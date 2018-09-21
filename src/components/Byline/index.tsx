import * as React from 'react'
import { css } from 'react-emotion'
import toSentence from '../../utils/toSentence'

/**
 * Byline properties.
 */
interface BylineProps {
  /** The authors of the story. */
  authors: string | Array<string>
  isColumn: boolean
}

/** The byline of the story. */
export default class Byline extends React.Component<BylineProps> {
  static defaultProps = {
    isColumn: false,
  }

  render() {
    return (
      <div className="byline">
        By{' '}
        {typeof this.props.authors === 'string'
          ? this.props.authors
          : toSentence(this.props.authors)}
      </div>
    )
  }
}
