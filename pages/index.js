import Layout from '../components/Layout'
import Launches from '../components/Launches'
import Footer from '../components/Footer'
const axios = require('axios')
import { getTimeLeft } from '../assets/utils/utils'


export async function getStaticProps() {
  const newArr = await axios.get('https://api.spacexdata.com/v3/launches').then(value => {
    var data = value.data
    // Make sure there will be only one upcoming launch
    var upcomingSeen = false
    var i = 0
    var newArr = []
    var nextUpcomingLaunch = 1;
    // var exitLoopAfter = true
    data.map(value => {
      if (!upcomingSeen) {
        newArr[i] = value
        i++
        if (value.upcoming) {
          upcomingSeen = true
        }
      }
      // else if (exitLoopAfter) {
      // console.log('test')
      // exitLoopAfter = false
      // nextUpcomingLaunch = value
      // }
    })
    newArr.reverse()
    // if upcoming launch's date is past then remove upcoming launch
    if (getTimeLeft(newArr[0].launch_date_utc, true) < 0 && newArr[0].upcoming) {
      newArr.shift()
    }
    return newArr
  })

  return {
    props: {
      data: JSON.stringify(newArr),
    },
  }
}

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <Launches launchesData={JSON.parse(data)} nextUpcomingLaunch />
        <Footer />
      </div>
    </Layout>
  )
}