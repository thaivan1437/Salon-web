import React from 'react'
import PrivacyPolicy from '../../../src/Pages/Information/PrivacyPolicy'

const PrivacyPolicyPage = (props) => {
  const prop = {
    ...props,
    params:
    {
      headless: 'privacy-policy'
    },
  }
  return <PrivacyPolicy {...prop}/>
}


// PrivacyPolicyPage.getInitialProps = (ctx) => ({ query: ctx.query })

export default PrivacyPolicyPage

