import React from 'react'
import PrivacyPolicy from '../../src/Pages/Information/PrivacyPolicy'
import { useRouter } from 'next/router'

const PrivacyPolicyPage = (props) => {
  const router = useRouter()
  const prop = {
    ...props,
    ...router,
  }

  return <PrivacyPolicy {...prop}/>
}

PrivacyPolicyPage.getInitialProps = (ctx) => ({ ctx })

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

