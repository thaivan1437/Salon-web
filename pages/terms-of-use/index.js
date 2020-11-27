import React from 'react'
import TermsOfUse from '../../src/Pages/Information/TermsOfUse'
import { useRouter } from 'next/router'

const TermsOfUsePage = (props) => {
  const router = useRouter()
  const prop = {
    ...props,
    ...router,
  }
  return <TermsOfUse {...prop}/>
}

export default TermsOfUsePage
