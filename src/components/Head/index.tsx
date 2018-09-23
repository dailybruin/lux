import * as React from 'react'
import { Helmet } from 'react-helmet'

interface HeadProps {
  title: string
  pageTitle?: string
  description: string
  url: string
  image: any // idk what require(image) type is
  twitter: string
}

export default function Head(props: HeadProps) {
  const title = props.pageTitle
    ? `${props.pageTitle} | ${props.title}`
    : props.title
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={props.description} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={require('./images/favicons/apple-touch-icon.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={require('./images/favicons/favicon-32x32.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={require('./images/favicons/favicon-16x16.png')}
      />
      {/* <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0080c6" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" /> */}

      {/* Canonical URL */}
      <link rel="canonical" href={props.url} />

      {/* Facebook Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={props.image} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Tags */}
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
