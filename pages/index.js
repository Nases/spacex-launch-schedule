import Layout from '../components/Layout'
import Launches from '../components/Launches'
import Footer from '../components/Footer'

export default () => (
  <Layout>
    <div>
      <div className='container mx-auto px-4 sm:px-1'>
        <Launches />
      </div>
      <Footer />
    </div>
  </Layout>
)
