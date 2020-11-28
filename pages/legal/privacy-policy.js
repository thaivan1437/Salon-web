import React from 'react'
import PrivacyPolicy from '../../src/Pages/Information/PrivacyPolicy'

const PrivacyPolicyPage = (props) => {
  return <PrivacyPolicy {...props}/>
}

PrivacyPolicyPage.getInitialProps = (ctx) => ({ query: ctx.query })

export default PrivacyPolicyPage

