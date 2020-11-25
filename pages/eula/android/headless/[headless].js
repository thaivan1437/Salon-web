import React from 'react'
import EulaAndroid from '../../../../src/Pages/Information/EulaAndroid'
// import { auth } from '../../src/commons/auth'

const EulaAndroidPage = (props) => (
  <EulaAndroid {...props}/>
)

// EulaAndroidPage.getInitialProps = (ctx) => ({ query: ctx.query })
export async function getStaticPaths() {
  
  return {
    paths: [
      { params: { headless: '1'} }// See the "paths" section below
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  const browser = {on: 'web'}
  return { props: { params, browser } }
}

export default EulaAndroidPage
