import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import axios from 'axios'
import moment from 'moment'
import Modal from 'react-modal'
import { getYoutubeEmbedLink } from '../../assets/utils/utils'
import { getTimeLeft } from '../../assets/utils/utils'
import BreadCrumbs from '../../components/BreadCrumbs'
import Skeleton from 'react-loading-skeleton'
import Img from 'react-cool-img'


const LaunchDetails = () => {
  var title
  var description
  var youtubeVideo
  const router = useRouter()
  const flight_number = router.query.flight_number
  const [launchData, setLaunchData] = useState()
  const [timeLeft, setTimeLeft] = useState('')

  if (launchData) {
    var { mission_name, details, launch_date_utc, launch_success, upcoming } = launchData
    var imgs = launchData?.links?.flickr_images
    var launchDate = moment.utc(launch_date_utc).format('DD MMM YYYY')
    var rocket_name = launchData?.rocket?.rocket_name
    var launch_site = launchData?.launch_site?.site_name_long
    var patch = launchData?.links?.mission_patch_small
    title = mission_name
    description = details
    youtubeVideo = getYoutubeEmbedLink(launchData?.links?.video_link)
  }

  useEffect(() => {
    if (flight_number) {
      const newArr = axios.get(`https://api.spacexdata.com/v3/launches/${flight_number}`).then(value => {
        var data = value.data
        setLaunchData(data)
      })
    }
    if (upcoming) {
      const intervalId = setInterval(() => { setTimeLeft(getTimeLeft(launch_date_utc)) }, 1000)
      return () => clearInterval(intervalId)
    }
  }, [flight_number, upcoming])


  const youtubeModalCustomStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(100, 100, 100, 0.75)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: null,
      border: null
    }
  }

  const [youtubeModalIsOpen, setYoutubeModalIsOpen] = useState(false)
  function openYoutubeModal() {
    setYoutubeModalIsOpen(true)
  }

  function closeYoutubeModal() {
    setYoutubeModalIsOpen(false)
  }



  return (
    <Layout title={title + ' | SpaceX Launch Schedule'} description={description}>
      {
        launchData && false ?
          <div className="flex flex-col px-2 mt-2 md:my-8 lg:max-w-2xl xl:max-w-3xl m-auto">
            <div className="overflow-x-auto">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden rounded-lg border-b border-gray-200 bg-white">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="py-5 border-b border-gray-200">
                    <div className='px-4 sm:px-6 mb-6'>
                      <BreadCrumbs>
                        <BreadCrumbs.BreadCrumb href='/'>
                          <svg className="flex-shrink-0 h-5 w-5 transition duration-150 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                          </svg>
                        </BreadCrumbs.BreadCrumb>
                        <BreadCrumbs.Arrow />
                        <BreadCrumbs.BreadCrumb href={`/launch/${flight_number}`}>
                          Launch # {flight_number}
                        </BreadCrumbs.BreadCrumb>
                      </BreadCrumbs>
                    </div>
                    {
                      imgs[0] ?
                        <img className='overflow-visible' src={imgs[0]} alt="Launch image" />
                        : ''
                    }
                    <div className='px-4 sm:px-6 mt-4'>
                      <h1 className="text-lg leading-6 font-medium text-gray-900">
                        {mission_name}
                      </h1>
                      <h2 className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                        {details}
                      </h2>
                    </div>
                  </div>
                  <div className="px-4 py-5 sm:p-0">
                    <dl>
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Status
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          {
                            (launch_success)
                              ?
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Success
                              </span>
                              :
                              (upcoming)
                                ?
                                <div className='flex'>
                                  <p className='mr-2 text-sm leading-5 text-gray-600'>
                                    {(getTimeLeft(launch_date_utc, true) > 0) ? timeLeft : ''}
                                  </p>
                                  <span className="px-2 text-xs leading-5 font-semibold rounded-full bg-teal-100 text-teal-800">
                                    {(getTimeLeft(launch_date_utc, true) > 0) ? 'Upcoming' : 'Launched'}
                                  </span>
                                </div>
                                :
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                  Failed
                                </span>
                          }
                        </dd>
                      </div>
                      <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Launch date
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          {launchDate}
                        </dd>
                      </div>
                      {
                        (youtubeVideo)
                          ?
                          <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                              Video
                            </dt>
                            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                              <i aria-hidden onClick={openYoutubeModal} className="fab fa-youtube fa-2x text-red-700 hover:text-red-800 cursor-pointer"></i>
                            </dd>
                          </div>
                          :
                          ''
                      }
                      <Modal
                        isOpen={youtubeModalIsOpen}
                        onRequestClose={closeYoutubeModal}
                        style={youtubeModalCustomStyles}
                      >
                        <iframe
                          className='youtubeVideo'
                          src={youtubeVideo}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen={true}
                        >
                        </iframe>
                      </Modal>
                    </dl>
                    {(rocket_name === 'Falcon 9') ?
                      <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Mission cost
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          ~ $50.000.000
                        </dd>
                      </div>
                      : ''
                    }
                    {patch
                      ?
                      <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Mission patch
                      </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          <img className='bg-gray-200 h-16 w-16 rounded-full' src={patch} alt={mission_name + ' patch'} />
                        </dd>
                      </div>
                      : ''
                    }
                    <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Rocket
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        {rocket_name}
                      </dd>
                    </div>
                    <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Launch Site
                    </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        {launch_site}
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="flex flex-col px-2 mt-2 md:my-8 lg:max-w-2xl xl:max-w-3xl m-auto">
            <div className="overflow-x-auto">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden rounded-lg border-b border-gray-200 bg-white">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="py-5 px-5 border-b border-gray-200">
                    <Skeleton className='mb-10' height={40} />
                    <br />
                    <Skeleton className='mb-2' height={20} width={240} />
                    <br />
                    <Skeleton className='mb-2' height={20} width={180} />
                    <br />
                    <Skeleton className='mb-2' height={20} width={260} />
                    <br />
                    <Skeleton className='mb-2' height={20} width={200} />
                    <br />
                    <Skeleton className='mb-2' height={20} width={130} />
                    <br />
                    <Skeleton className='mb-2' height={20} width={220} />
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </Layout>
  )
}


export default LaunchDetails