import React from 'react'
import Eula from '../../../src/Pages/Information/Eula'
// import { auth } from '../../src/commons/auth'

const EulaPage = (props) => {
  const prop = {
    ...props,
    params:
    {
      headless: 'eula'
    },
  }
  return <Eula {...prop}/>
}
// TermsOfUsePage.getInitialProps = (ctx) => ({ query: ctx.query })

export default EulaPage
