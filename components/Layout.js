import Head from 'next/head'
import { initGA, logPageView } from '../assets/utils/analytics'

export default ({ children, title }) => {
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
        <title>{title}</title>
      </Head>
      <div>
        {children}
      </div>
    </div>
  )
}