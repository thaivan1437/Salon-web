import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

process.on('unhandledRejection', err => {
  Sentry.captureException(err)
})

process.on('uncaughtException', err => {
  Sentry.captureException(err)
})

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
        <link
          rel="stylesheet"
          href="/css/bootstrap.min.css"
        />
        
        <link
          rel="stylesheet"
          href="/css/progress.css"
        />
        <link
          rel="stylesheet"
          href="/css/style.css"
        />
        <link
          rel="stylesheet"
          href="/css/image-gallery.css"
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
