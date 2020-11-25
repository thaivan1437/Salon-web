import React from 'react'
import PrivacyPolicy from '../../src/Pages/Information/PrivacyPolicy'
import { useRouter } from 'next/router'

const PrivacyPolicyPage = (props) => {
  const router = useRouter()
  console.log('pid',router)

  return <PrivacyPolicy {...props}/>
}

PrivacyPolicyPage.getInitialProps = (ctx) => ({ query: ctx.query })

// export async function getStaticPaths() {
  
//   return {
//     paths: [
//       { params: { headless: '1'} } // See the "paths" section below
//     ],
//     fallback: false
//   };
// }

// export async function getStaticProps({ params }) {
//   // Pass post data to the page via props
//   return { props: params }
// }

export default PrivacyPolicyPage

