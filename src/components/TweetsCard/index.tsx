import * as React from 'react'
import { css } from 'react-emotion'

export enum Sections {
  Blah = 'BLAH',
  Bloop = 'BLOOP',
}

interface TweetsCardProps {
  section: Sections
}

class TweetsCard extends React.Component<TweetsCardProps> {
  public render() {
    return (
      <div>
        <div class="Title">TWEETS FROM OUR WRITERS</div>
        <div class="Tweet1" />
        <div class="ProfilePic" />
        <div class="Username" />
        <div class="TweetBody" />
        <div class="Tweet2" />
        <div class="ProfilePic" />
        <div class="Username" />
        <div class="TweetBody" />
      </div>
    )
  }
}

export default TweetsCard
