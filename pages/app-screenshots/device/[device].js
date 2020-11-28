import React from 'react'
import AppScreenshots from '../../../src/Pages/AppScreenshots'

const AppScreenshotsPage = (props) => (
  <AppScreenshots {...props}/>
)

// AppScreenshotsPage.getInitialProps = (ctx) => {
//   return ({ query: ctx.query, pathname: ctx.pathname, params: ctx.params || {} })
// }
export async function getStaticPaths() {
  
  return {
    paths: [
      { params: { device: 'mobile'} },
      { params: { device: 'ipad'} } // See the "paths" section below
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  return { props: { params } }
}


export default AppScreenshotsPage
