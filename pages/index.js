import React from 'react'
import HomePageComponent from '../src/Pages/Home'
// import { auth } from '../../src/commons/auth'

const HomePage = (props) => (
  <HomePageComponent {...props}/>
)

HomePage.getInitialProps = (ctx) => ({ query: ctx.query, pathname: ctx.pathname })


export default HomePage
