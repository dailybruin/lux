import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import { Footer } from '../../../../dist'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Footer developers="Nathan Smith" />
  </Layout>
)

export default IndexPage
