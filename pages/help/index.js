import React from 'react'
import Help from '../../src/Pages/Information/Help'

const HelpPage = (props) => (
  <Help {...props}/>
)

HelpPage.getInitialProps = (ctx) => ({ query: ctx.query })

export default HelpPage
