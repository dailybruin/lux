import * as React from 'react'
import { css } from 'react-emotion'
import Image, { ImageProps } from '../Image'
import {
  headlineFont,
  storyListFont,
  cardShadow,
  regularFont,
  bodyFont,
} from '../../globals/mainsiteGlobalStyles'

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
  public static defaultProps = { imageurl: 'hi' }

  public render() {
    switch (this.props.type) {
      case ContentType.Tall:
        return (
          <div
            className={css`
              height: auto;
              width: 291px;
              box-shadow: ${cardShadow};
            `}
          >
            <img
              className={css`
                width: 267px;
                height: 209px;
                padding: 13px 12px 0px 12px;
                margin-bottom: -15px;
              `}
              src={this.props.imageurl}
            />

            <h3
              className={css`
                font-size: 7px;
                padding-right: 10.6px;
                text-align: right;
                font-family: ${headlineFont}, serif;
              `}
            >
              {this.props.photographer}
            </h3>
            <h2
              className={css`
                color: #1a9ae0;
                font-size: 0.7em;
                padding-left: 12px;
                font-weight: 800;
                margin-bottom: -20px;
                font-family: ; //
              `}
            >
              NEWS
            </h2>
            <h1
              className={css`
                margin-bottom: -7px;
                padding-left: 12px;
                padding-right: 8px;
                color: black;
                line-height: normal;
                font-size: 24px;
                font-family: ${headlineFont}, serif;
              `}
            >
              {this.props.title}
            </h1>
            <p
              className={css`
                font-family: ${bodyFont}, serif;
                font-size: 11px;
                padding: 0px 12px 12px 12px;
                line-height: normal;
                font-weight: ${regularFont};
              `}
            >
              {this.props.content}
            </p>
          </div>
        )
      case ContentType.Long:
        return (
          <div
            className={css`
              display: grid;
              grid-template-areas: 'left right';
              grid-template-rows: auto;
              grid-template-columns: 330px 250px;
              grid-gap: 15px;
              height: auto;
              width: 594px;
              box-shadow: ${cardShadow};
            `}
          >
            <div
              className={css`
                grid-area: left;
              `}
            >
              <img
                className={css`
                  width: 307px;
                  height: calc(100% - 24px);
                  padding: 12px 0px 12px 12px;
                  margin-bottom: -27px;
                `}
                src={this.props.imageurl}
              />
              <h3
                className={css`
                  font-size: 7px;
                  padding-right: 12px;
                  text-align: right;
                  margin-bottom: 0;
                  font-family: ${headlineFont}, serif;
                `}
              >
                {this.props.photographer}
              </h3>
            </div>

            <div
              className={css`
                grid-area: right;
              `}
            >
              <h2
                className={css`
                  color: #1a9ae0;
                  padding-top: 8px;
                  font-size: 0.7em;
                  font-weight: 800;
                  margin-top: 0;
                  margin-bottom: -20px;
                  font-family: ; //
                `}
              >
                NEWS
              </h2>
              <h1
                className={css`
                  margin-bottom: -7px;
                  color: black;
                  line-height: normal;
                  font-size: 24px;
                  font-family: ${headlineFont}, serif;
                `}
              >
                {this.props.title}
              </h1>
              <p
                className={css`
                  font-family: ${bodyFont}, serif;
                  font-size: 11px;
                  color: black;
                  line-height: normal;
                  padding-right: 14px;
                  font-weight: ${regularFont};
                `}
              >
                {this.props.content}
              </p>
            </div>
          </div>
        )
      case ContentType.XL:
        return (
          <div
            className={css`
              display: grid;
              grid-template-areas: 'left middle right';
              grid-template-rows: auto;
              grid-template-columns: 250px 310px 307px;
              grid-gap: 15px;
              height: auto;
              min-height: 247px;
              width: 897px;
              box-shadow: ${cardShadow};
            `}
          >
            <div
              className={css`
                grid-area: left;
                padding-left: 17px;
              `}
            >
              <h2
                className={css`
                  color: #1a9ae0;
                  padding-top: 11px;
                  font-size: 0.7em;
                  font-weight: 800;
                  margin-top: 0;
                  margin-bottom: -20px;
                  font-family: ; //
                `}
              >
                NEWS
              </h2>
              <h1
                className={css`
                  margin-bottom: -7px;
                  color: black;
                  line-height: normal;
                  font-size: 24px;
                  font-family: ${headlineFont}, serif;
                `}
              >
                {this.props.title}
              </h1>
              <h3
                className={css`
                  font-size: 11px;
                  color: black;
                  font-family: ${headlineFont}, serif;
                  font-weight: normal;
                `}
              >
                <strong>By {this.props.editor} | </strong>{' '}
                <em>Daily Bruin staff</em>
              </h3>
            </div>
            <div
              className={css`
                grid-area: middle;
              `}
            >
              <p
                className={css`
                  font-family: ${bodyFont}, serif;
                  font-size: 11px;
                  padding: 28px 95px 12px 0px;
                  margin-top: 0;
                  line-height: normal;
                  font-weight: ${regularFont};
                `}
              >
                {this.props.content}
              </p>
            </div>
            <div
              className={css`
                grid-area: right;
              `}
            >
              <img
                className={css`
                  width: 307px;
                  height: 100%;
                  padding: 0;
                `}
                src={this.props.imageurl}
              />
            </div>
          </div>
        )
    }
  }
}
