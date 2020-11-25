import React from 'react'
import Help from '../../src/Pages/Information/Help'
import { useRouter } from 'next/router'

const HelpPage = (props) => {
  const router = useRouter()
  const prop = {
    ...props,
    ...router,
  }
  return <Help {...prop}/>
}

HelpPage.getInitialProps = (ctx) => ({ ctx })

export default HelpPage
