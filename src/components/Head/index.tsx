import * as React from 'react'
import { Helmet } from 'react-helmet'

import favicon32 from './favicons/favicon-32x32.png'
import favicon16 from './favicons/favicon-16x16.png'

interface HeadProps {
  title: string
  pageTitle?: string
  description: string
  url: string
  // image: string
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

      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={require('./favicons/apple-touch-icon.png')}
      /> */}
      {/* <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} /> */}
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
      {/* <meta property="og:image" content="https://example.com/image.jpg" /> */}
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={props.twitter} />
      <meta name="twitter:url" content={props.url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={props.description} />
      {/* <meta name="twitter:image" content="https://example.com/image.jpg" /> */}

      <html lang="en" />
    </Helmet>
  )
}
