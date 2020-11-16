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
    // if upcoming launch's date is past then remove upcoming launch
    // if (getTimeLeft(newArr[0].launch_date_utc, true) < 0 && newArr[0].upcoming) {
    //   newArr.splice(0, 1)
    // }
    // if (getTimeLeft(newArr[1].launch_date_utc, true) < 0 && newArr[1].upcoming) {
    //   newArr.splice(1, 1)
    // }
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