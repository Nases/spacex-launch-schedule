import { Head } from 'next/document'

import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width,height=device-height initial-scale=1" />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
