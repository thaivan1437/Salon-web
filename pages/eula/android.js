import React from 'react'
import EulaAndroid from '../../src/Pages/Information/EulaAndroid'
import { useRouter } from 'next/router'

const EulaAndroidPage = (props) => {
  const router = useRouter()
  const prop = {
    ...props,
    ...router,
  }
  return <EulaAndroid {...prop}/>
}

export default EulaAndroidPage
