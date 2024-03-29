import { useState } from 'react'
import Launch from './Launch'
const moment = require('moment')
import { getYoutubeEmbedLink } from '../assets/utils/utils'


const Launches = ({ launchesData }) => {
  const [isLaunchesReversed, setIsLaunchesReversed] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [launchesPerPage, setLaunchesPerPage] = useState(20)

  function handlePageChange(event) {
    setCurrentPage(event.target.id)
  }

  function userOnLastPage() {
    return currentPage == pageNumbers[pageNumbers.length - 1]
  }

  function userOnFirstPage() {
    return currentPage == 1
  }

  function nextPage() {
    if (!userOnLastPage()) {
      setCurrentPage(value => value + 1)
    }
  }

  function previousPage() {
    if (!userOnFirstPage()) {
      setCurrentPage(value => value - 1)
    }
  }

  // logic for displaying page numbers
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(launchesData.length / launchesPerPage); i++) {
    pageNumbers.push(i)
  }

  // logic for displaying launches
  const indexOfLastLaunch = currentPage * launchesPerPage
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage
  const currentLaunches = launchesData.slice(indexOfFirstLaunch, indexOfLastLaunch)

  const renderPageNumbers = pageNumbers.map(pageNumber => {
    return (
      <button
        id={pageNumber}
        key={pageNumber}
        onClick={handlePageChange}
        type="button"
        className={currentPage == pageNumber
          ?
          "-ml-px relative inline-flex items-center px-4 py-2 cursor-auto border border-gray-300 bg-gray-700 text-sm leading-5 font-medium text-white transition ease-in-out duration-150"
          :
          "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white hover:bg-gray-200 text-sm leading-5 font-medium text-gray-700 transition ease-in-out duration-150"
        }
        disabled={currentPage == pageNumber}
      >
        {pageNumber}
      </button>
    )
  })

  function reverseLaunches() {
    if (launchesData) {
      setIsLaunchesReversed(!isLaunchesReversed)
      launchesData.reverse()
    }
  }

  const rockets = {
    '5e9d0d95eda69955f709d1eb': 'Falcon 1',
    '5e9d0d95eda69973a809d1ec': 'Falcon 9',
    '5e9d0d95eda69974db09d1ed': 'Falcon Heavy',
    '5e9d0d96eda699382d09d1ee': 'Starship',
  }

  return (
    <div className="flex flex-col px-2 mt-2 md:my-8 lg:max-w-2xl xl:max-w-3xl m-auto">
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden rounded-lg border-b border-gray-200">

          {/* launches table content start */}
          <table className="min-w-full">
            <thead className='bg-gray-100'>
              <tr>
                <th className="py-2 max-w-md w-4/12 md:w-6/12 text-center sm:px-6 sm:py-3 border-b border-gray-200 bg-gray-50 sm:text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Mission
                </th>
                <th onClick={() => reverseLaunches()} className="py-2 text-center sm:px-6 sm:py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                  Launch Date &nbsp;
                  {(isLaunchesReversed) ? <i aria-hidden className="fas fa-chevron-down"></i> : <i aria-hidden className="fas fa-chevron-up"></i>}
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
                currentLaunches.map((value, index) => {
                  return (
                    <Launch
                      key={value.flight_number + index + value.name}
                      id={value.id}
                      rocket_name={rockets[value.rocket]}
                      launch_date={moment.utc(value.date_utc).format('DD MMM YYYY')}
                      patch={value.links.patch.small}
                      launch_success={value.success}
                      upcoming={value.upcoming}
                      mission_name={value.name}
                      youtubeVideo={getYoutubeEmbedLink(value.links.webcast)}
                      launch_number={value.flight_number}
                      // launch_site_name_long={value.launch_site.site_name_long}
                      launch_date_utc={value.date_utc}
                    />
                  )
                })
              }
            </tbody>
          </table>
          {/* launches table content end */}

          {/* pagination start */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <a
                disabled={userOnFirstPage()}
                onClick={previousPage}
                className={userOnFirstPage()
                  ?
                  "cursor-auto relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-500 bg-white"
                  :
                  "cursor-pointer relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white"}
              >
                Previous
              </a>
              <div className='pt-2'>
                <p className="text-sm leading-5 text-gray-700">
                  <span className="font-medium">{indexOfFirstLaunch + 1}</span>
                  &nbsp;
                  to
                  &nbsp;
                  <span className="font-medium">{userOnLastPage() ? ((launchesData.length % launchesPerPage) + ((currentPage - 1) * launchesPerPage)) : indexOfLastLaunch}</span>
                  &nbsp;
                  of
                  &nbsp;
                  <span className="font-medium">{launchesData.length}</span>
                </p>
              </div>
              <a
                disabled={userOnLastPage()}
                onClick={nextPage}
                className={userOnLastPage()
                  ?
                  "cursor-auto ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-500 bg-white"
                  :
                  "cursor-pointer ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white"}
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm leading-5 text-gray-700">
                  Showing
                  &nbsp;
                  <span className="font-medium">{indexOfFirstLaunch + 1}</span>
                  &nbsp;
                  to
                  &nbsp;
                  <span className="font-medium">{userOnLastPage() ? ((launchesData.length % launchesPerPage) + ((currentPage - 1) * launchesPerPage)) : indexOfLastLaunch}</span>
                  &nbsp;
                  of
                  &nbsp;
                  <span className="font-medium">{launchesData.length}</span>
                  &nbsp;
                  launches
                </p>
              </div>
              <span className="relative inline-flex shadow-sm">
                {renderPageNumbers}
              </span>
            </div>
          </div>
          {/* pagination end */}
        </div>
      </div>
    </div >
  )
}


export default Launches