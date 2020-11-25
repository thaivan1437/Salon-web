import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import {config} from '../src/helper/get_config';

// if (config.env !== 'local') {
//   Sentry.init({
//     dsn: config.SENTRY_URL,
//     integrations: [new Integrations.BrowserTracing()],
//     tracesSampleRate: 1.0,
//     environment: config.env,
//   });
// }

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <div>
      <Head>
        <title>Salon Manager</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  }
}

export default MyApp
