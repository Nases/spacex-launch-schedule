import Head from 'next/head'
import { initGA, logPageView } from '../assets/utils/analytics'

const Layout = ({ children, title }) => {
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
      <div className='stars'>
        <div className='pt-4 twinkling'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout