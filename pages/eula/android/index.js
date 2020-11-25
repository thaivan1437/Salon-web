import React from 'react'
import EulaAndroid from '../../../src/Pages/Information/EulaAndroid'
// import { auth } from '../../src/commons/auth'

const EulaAndroidPage = (props) => (
  <EulaAndroid {...props}/>
)

EulaAndroidPage.getInitialProps = (ctx) => ({ query: ctx.query })


export default EulaAndroidPage
