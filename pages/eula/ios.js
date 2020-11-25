import React from 'react'
import EulaIOS from '../../src/Pages/Information/EulaIOS'
import { useRouter } from 'next/router'

const EulaIOSPage = (props) => {
  const router = useRouter()
  const prop = {
    ...props,
    ...router,
  }
  return <EulaIOS {...prop}/>
}

EulaIOSPage.getInitialProps = (ctx) => ({ ctx })


export default EulaIOSPage
