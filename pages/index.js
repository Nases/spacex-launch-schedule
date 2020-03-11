import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Launches from '../components/Launches'

export default () => (
  <Layout>
    <div>
      <Navbar />
      <div className='container mx-auto px-4'>
        <Launches />
      </div>
    </div>
  </Layout>
)
