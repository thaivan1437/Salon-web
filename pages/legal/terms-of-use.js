import React from 'react'
import TermsOfUse from '../../src/Pages/Information/TermsOfUse'
// import { auth } from '../../src/commons/auth'

const TermsOfUsePage = (props) => (
  <TermsOfUse {...props}/>
)

TermsOfUsePage.getInitialProps = (ctx) => ({ query: ctx.query })

export default TermsOfUsePage
