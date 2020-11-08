import { useEffect } from 'react'
import Head from 'next/head'
import { initGA, logPageView } from '../assets/utils/analytics'
import Footer from './Footer'
import Header from './Header'


const Layout = ({ children, title, description }) => {
  useEffect(() => {
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
        <meta name="description" content={description} />
      </Head>
      <Header />
      <div className='min-h-screen'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout