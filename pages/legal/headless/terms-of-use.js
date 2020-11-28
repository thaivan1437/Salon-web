import React from 'react'
import TermsOfUse from '../../../src/Pages/Information/TermsOfUse'
// import { auth } from '../../src/commons/auth'

const TermsOfUsePage = (props) => {
  const prop = {
    ...props,
    params:
    {
      headless: 'terms-of-use'
    },
  }
  return <TermsOfUse {...prop}/>
}

// TermsOfUsePage.getInitialProps = (ctx) => ({ query: ctx.query })


export default TermsOfUsePage
