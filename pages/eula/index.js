import React from 'react'
import Eula from '../../src/Pages/Information/Eula'
import { useRouter } from 'next/router'


const EulaPage = (props) => {
  const router = useRouter()
  const prop = {
    ...props,
    ...router,
  }

  return <Eula {...prop}/>
}

export default EulaPage
