import React from 'react'
import PrivacyPolicy from '../../src/Pages/Information/PrivacyPolicy'
import { useRouter } from 'next/router'

const PrivacyPolicyPage = (props) => {
  const router = useRouter()
  const prop = {
    ...props,
    ...router,
  }

  return <PrivacyPolicy {...prop}/>
}

export default PrivacyPolicyPage

