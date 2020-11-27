import React from 'react'
import Help from '../../../src/Pages/Information/Help'

const HelpPage = (props) => (
  <Help {...props}/>
)

// HelpPage.getInitialProps = (ctx) => ({ query: ctx.query })

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

export default HelpPage
