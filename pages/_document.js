import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" /> */}
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" /> */}
          <meta content="width=640, initial-scale=0.47, maximum-scale=1.0, user-scalable=1" name="viewport" />

          <meta name="description" content="Detailed information about SpaceX launches 🚀" />
          <link rel="shortcut icon" href="/favicon.png" />
          <script src="https://kit.fontawesome.com/c9c5a1adc4.js" crossorigin="anonymous"></script>
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