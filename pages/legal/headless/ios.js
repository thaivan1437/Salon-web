import React from 'react'
import EulaIOS from '../../../src/Pages/Information/EulaIOS'
// import { auth } from '../../src/commons/auth'

const EulaIOSPage = (props) => {
  const prop = {
    ...props,
    params:
    {
      headless: 'ios',
      on: 'web',
    },
  }
  return <EulaIOS {...prop}/>
}

// EulaIOSPage.getInitialProps = (ctx) => ({ query: ctx.query })

export default EulaIOSPage