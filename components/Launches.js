import { useState, useEffect } from 'react'
import Launch from './Launch'
const axios = require('axios')
const moment = require('moment')
import { getYoutubeEmbedLink, getTimeLeft } from '../assets/utils/utils'

export default ({ launchesData }) => {
  const [launches, setLaunches] = useState({ data: launchesData })
  const [isLaunchesReversed, setIsLaunchesReversed] = useState(false)

  // useEffect(() => {
  //   axios.get('https://api.spacexdata.com/v3/launches').then(value => {
  //     var data = value.data

  //     // Make sure there will be only one upcoming launch
  //     var upcomingSeen = false
  //     var i = 0
  //     var newArr = []
  //     data.map(value => {
  //       if (!upcomingSeen) {
  //         if (value.upcoming) {
  //           upcomingSeen = true
  //         }
  //         newArr[i] = value
  //         i++
  //       }
  //     })
  //     newArr.reverse()

  //     // if upcoming launch's date is past then remove upcoming launch
  //     if (getTimeLeft(newArr[0].launch_date_utc, true) < 0 && newArr[0].upcoming) {
  //       newArr.shift()
  //     }
  //     setLaunches({ data: newArr })
  //   })
  // }, [])

  function reverseLaunches() {
    if (launches.data) {
      setIsLaunchesReversed(!isLaunchesReversed)
      setLaunches({ data: launches.data.reverse() })
    }
  }

  return (
    <div className="flex flex-col p-0 m-0 md:m-8 lg:mx-32">
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead className='bg-gray-100'>
              <tr>
                <th className="py-2 text-center sm:px-6 sm:py-3 border-b border-gray-200 bg-gray-50 sm:text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Mission
                </th>
                <th onClick={() => reverseLaunches()} className="py-2 text-center sm:px-6 sm:py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                  Launch Date &nbsp;
                  {(isLaunchesReversed) ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                </th>
                <th className="py-2 text-center sm:px-6 sm:py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-2 text-center sm:px-6 sm:py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Video
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {
                launches.data.map(value => {
                  return (
                    <Launch
                      key={value.flight_number}
                      rocket_name={value.rocket.rocket_name}
                      launch_date={moment.utc(value.launch_date_utc).format('DD MMM YYYY')}
                      patch={value.links.mission_patch_small}
                      launch_success={value.launch_success}
                      upcoming={value.upcoming}
                      mission_name={value.mission_name}
                      details={value.details}
                      youtubeVideo={getYoutubeEmbedLink(value.links.video_link)}
                      launch_number={value.flight_number}
                      launch_site_name_long={value.launch_site.site_name_long}
                      launch_date_utc={value.launch_date_utc}
                      wikipedia={value.links.wikipedia}
                      img1={value.links.flickr_images[0]}
                    />
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}