import Head from 'next/head'
import { initGA, logPageView } from '../assets/utils/main'

export default ({ children }) => {
  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])
  return (
    <div>
      <Head>
        <title>SpaceX Launch Schedule | Live</title>
      </Head>
      <div>
        {children}
      </div>
    </div>
  )
}