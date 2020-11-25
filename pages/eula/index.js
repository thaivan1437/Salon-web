import React from 'react'
import Eula from '../../src/Pages/Information/Eula'
// import { auth } from '../../src/commons/auth'

const EulaPage = (props) => (
  <Eula {...props}/>
)

EulaPage.getInitialProps = (ctx) => ({ query: ctx.query })


export default EulaPage
