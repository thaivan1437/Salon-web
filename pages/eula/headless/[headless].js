import React from 'react'
import Eula from '../../../src/Pages/Information/Eula'
// import { auth } from '../../src/commons/auth'

const EulaPage = (props) => (
  <Eula {...props}/>
)
// TermsOfUsePage.getInitialProps = (ctx) => ({ query: ctx.query })

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
  return { props: { params } }
}

export default EulaPage
