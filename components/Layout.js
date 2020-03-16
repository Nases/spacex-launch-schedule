import Head from 'next/head'
import ReactGA from 'react-ga'

const trackingId = "UA-160643323-1"
ReactGA.initialize(trackingId)

export default ({ children }) => {
  return (
    <div>
      <Head>
        <title>SpaceX Launches</title>
      </Head>
      <div>
        {children}
      </div>
    </div>
  )
}