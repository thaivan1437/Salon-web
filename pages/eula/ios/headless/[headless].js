import React from 'react'
import EulaIOS from '../../../../src/Pages/Information/EulaIOS'
// import { auth } from '../../src/commons/auth'

const EulaIOSPage = (props) => (
  <EulaIOS {...props}/>
)

// EulaIOSPage.getInitialProps = (ctx) => ({ query: ctx.query })
export async function getStaticPaths() {
  
  return {
    paths: [
      { params: { headless: '1'} } // See the "paths" section below
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  const browser = {on: 'web'}
  return { props: { params, browser } }
}


export default EulaIOSPage