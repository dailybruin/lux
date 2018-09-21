import * as React from 'react'
import { Head } from '../../../../dist'
import CoverAnimation from '../components/CoverAnimation'

import 'normalize.css'

export default function IndexPage() {
  return (
    <>
      <Head
        title="test"
        description="test2"
        url="features.dailybruin.com"
        twitter="yup"
      />
      <CoverAnimation />
    </>
  )
}
