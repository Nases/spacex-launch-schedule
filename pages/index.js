import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Launches from '../components/Launches'

export default () => (
  <Layout>
    <div className='bg-gray-100'>
      <Navbar />
      <h1 className="primary-text">SpaceX Flights</h1>
      <Launches />
    </div>
  </Layout>
)
