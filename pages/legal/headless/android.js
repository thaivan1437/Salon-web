import React from 'react'
import EulaAndroid from '../../../src/Pages/Information/EulaAndroid'
// import { auth } from '../../src/commons/auth'

const EulaAndroidPage = (props) => {
  const prop = {
    ...props,
    params:
    {
      headless: 'android',
      on: 'web',
    },
  }
  return <EulaAndroid {...prop}/>
}

// EulaAndroidPage.getInitialProps = (ctx) => ({ query: ctx.query })

export default EulaAndroidPage
