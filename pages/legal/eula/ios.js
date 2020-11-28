import React from 'react'
import EulaIOS from '../../../src/Pages/Information/EulaIOS'
// import { auth } from '../../src/commons/auth'

const EulaIOSPage = (props) => (
  <EulaIOS {...props}/>
)

EulaIOSPage.getInitialProps = (ctx) => ({ query: ctx.query })


export default EulaIOSPage
