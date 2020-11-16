import Layout from '../components/Layout'
import Launches from '../components/Launches'
const axios = require('axios')
import { getTimeLeft } from '../assets/utils/utils'


export async function getStaticProps() {
  const newArr = await axios.get('https://api.spacexdata.com/v3/launches').then(value => {
    var data = value.data

    var upcomingCounter = 0
    var numberOfUpcomingToBeShown = 2
    var i = 0
    var newArr = []
    data.map(value => {
      if (upcomingCounter !== numberOfUpcomingToBeShown) {
        newArr[i] = value
        i++
        if (value.upcoming) {
          upcomingCounter++
        }
      }
    })

    newArr.reverse()

    return newArr
  })

  return {
    props: {
      data: JSON.stringify(newArr)
    },
    revalidate: 60 * 60,
  }
}

const Home = ({ data }) => {
  return (
    <Layout title='SpaceX Launch Schedule | Live' description='Get detailed information about SpaceX launch schedule.'>
      <Launches launchesData={JSON.parse(data)} />
    </Layout>
  )
}


export default Home