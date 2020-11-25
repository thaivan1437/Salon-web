import React from 'react'
import AppScreenshots from '../../src/Pages/AppScreenshots'

const AppScreenshotsPage = (props) => (
  <AppScreenshots {...props}/>
)

AppScreenshotsPage.getInitialProps = (ctx) => {
  return ({ query: ctx.query, pathname: ctx.pathname, params: ctx.params || {} })
}

export default AppScreenshotsPage
