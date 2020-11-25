import React from 'react'
import AppScreenshots from '../../src/Pages/AppScreenshots'
import { useRouter } from 'next/router'

const AppScreenshotsPage = (props) => {
  const router = useRouter()
  const prop = {
    ...props,
    ...router,
  }

  return <AppScreenshots {...prop}/>
}

AppScreenshotsPage.getInitialProps = (ctx) => ({ ctx })

export default AppScreenshotsPage
