import { useState, useEffect } from 'react'
import Launch from './Launch'
const axios = require('axios')
const moment = require('moment')

export default () => {
  const [launches, setLaunches] = useState({
    data: []
  })

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches').then(value => {
      var data = value.data
      setLaunches({ data })
    })
  }, [])

  return (
    <div class="flex flex-col">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Rocket Name
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Launch Date
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Info
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              {
                launches.data.map(value => (
                  <Launch
                    rocket_name={value.rocket.rocket_name}
                    launch_date={moment.utc(value.launch_date_utc).format('MM/DD/YYYY')}
                    img={value.links.mission_patch_small}
                    launch_success={value.launch_success}
                    upcoming={value.upcoming}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>


  )
}