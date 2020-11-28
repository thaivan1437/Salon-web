import React from 'react'
import Help from '../../../src/Pages/Information/Help'

const HelpPage = (props) => {
  const prop = {
    ...props,
    params:
    {
      headless: 'help'
    },
  }
  return <Help {...prop}/>
}

// HelpPage.getInitialProps = (ctx) => ({ query: ctx.query })

export default HelpPage
