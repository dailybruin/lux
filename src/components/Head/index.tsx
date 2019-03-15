import * as React from 'react'
import { Helmet } from 'react-helmet'

import appleTouchIcon from './favicons/apple-touch-icon.png'
import favicon16 from './favicons/favicon-16x16.png'
import favicon32 from './favicons/favicon-32x32.png'
import safariPinnedTab from './favicons/safari-pinned-tab.svg'

/**
 * Head Properties
 */
interface HeadProps {
  /** The name of the website. This is used in setting the page's title. */
  siteName: string
  /** The name of the specific page. If provided, the title of the website is `pageName | siteName` */
  pageName?: string
  /** A short description of the page, in 150 characters or less. This is used in search results and link previews. */
  description: string
  /** The canonical URL of the site. */
  url: string
  /** The image to display for link previews. */
  image: any // idk what require(image) type is
}

export default function Head(props: HeadProps) {
  const title = !!props.pageName
    ? `${props.pageName} | ${props.siteName}`
    : props.siteName
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={props.description} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="mask-icon" href={safariPinnedTab} color="#0080c6" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      {/* Canonical URL */}
      <link rel="canonical" href={props.url} />
      {/* Facebook Tags
      Guide: https://developers.facebook.com/docs/sharing/webmasters
      Best Practices: https://developers.facebook.com/docs/sharing/best-practices
      */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={props.image} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />
      {/*
      Twitter Tags
      Always prefer `summary_large_image` unless there's a good reason not to.
      About: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards
      About large image summary: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image
      Markup reference: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
      */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={props.twitter} /> */}
      <meta name="twitter:site" content="@dailybruin" />
      <meta name="twitter:url" content={props.url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image} />
      <html lang="en" />
    </Helmet>
  )
}
