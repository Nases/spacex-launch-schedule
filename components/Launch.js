import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import { getTimeLeft } from '../assets/utils/utils'
import Img from 'react-cool-img'
import { Router, useRouter } from 'next/router'


const Launch = ({
  flight_number,
  rocket_name,
  launch_date,
  patch,
  launch_success,
  upcoming,
  mission_name,
  details,
  youtubeVideo,
  launch_date_utc
}) => {
  const [timeLeft, setTimeLeft] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (upcoming) {
      const intervalId = setInterval(() => { setTimeLeft(getTimeLeft(launch_date_utc)) }, 1000)
      return () => clearInterval(intervalId)
    }
  }, [])

  // Make sure to bind modal to appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#__next')

  const patchModalCustomStyles = {
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
  };

  const [patchModalIsOpen, setPatchModalIsOpen] = useState(false);
  function openPatchModal() {
    setPatchModalIsOpen(true);
  }

  function closePatchModal() {
    setPatchModalIsOpen(false);
  }


  // ------------------------------------------------


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
  };

  const [youtubeModalIsOpen, setYoutubeModalIsOpen] = useState(false);
  function openYoutubeModal() {
    setYoutubeModalIsOpen(true);
  }

  function closeYoutubeModal() {
    setYoutubeModalIsOpen(false);
  }


  // ------------------------------------------------


  const launchDetailsModalCustomStyles = {
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
  };

  const [launchDetailsModal, setLaunchDetailsModal] = useState(false);
  function openLaunchDetailsModal() {
    setLaunchDetailsModal(true);
  }

  function closeLaunchDetailsModal() {
    setLaunchDetailsModal(false);
  }


  return (
    <>
      <tr className='hover:bg-gray-200 cursor-pointer' onClick={() => router.push(`/launch/${flight_number}`)}>
        <td className="pl-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">
            <div className="hidden md:flex-shrink-0 md:h-10 md:w-10">
              <Img
                className="bg-gray-200 h-10 w-10 rounded-full cursor-pointer"
                src={patch}
                alt={mission_name + ' patch'}
                onClick={openPatchModal}
              />
              <Modal
                isOpen={patchModalIsOpen}
                onRequestClose={closePatchModal}
                style={patchModalCustomStyles}
              >
                <img src={patch} alt={mission_name + ' patch'} />
              </Modal>
            </div>
            <div className="ml-1 md:ml-4">
              <div className="text-sm leading-5 tooltip font-medium text-gray-900">
                <div className='whitespace-normal'>{mission_name}</div>
                {
                  (details)
                    ?
                    <div className='tooltip-text text-gray-800 bg-white whitespace-normal text-left w-2/5 p-4 rounded-lg border border-gray-900'>
                      {details}
                    </div>
                    :
                    ''
                }
              </div>
              <div className="text-sm leading-5 text-gray-500">
                {rocket_name}
              </div>
            </div>
          </div>
        </td>
        <td className="py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200 text-center">
          <div className="text-sm leading-5 text-gray-500">{launch_date}</div>
        </td>
        <td className="py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200 text-center tooltip">
          {
            (launch_success)
              ?
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Success
            </span>
              :
              (upcoming)
                ?
                <div>
                  <p className='text-sm leading-5 text-gray-600'>
                    {(getTimeLeft(launch_date_utc, true) > 0) ? timeLeft : ''}
                  </p>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-100 text-teal-800">
                    {(getTimeLeft(launch_date_utc, true) > 0) ? 'Upcoming' : 'Launched'}
                  </span>
                </div>
                :
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Failed
              </span>
          }
        </td>
        <td className="pr-1 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200 text-center">
          {
            (youtubeVideo)
              ?
              <i aria-hidden onClick={openYoutubeModal} className="fab fa-youtube fa-2x text-red-700 hover:text-red-800 cursor-pointer"></i>
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
        </td>
      </tr>
      <Modal
        isOpen={launchDetailsModal}
        onRequestClose={closeLaunchDetailsModal}
        style={launchDetailsModalCustomStyles}
      >
        <div className="justify-center text-center">
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button onClick={closeLaunchDetailsModal} type="button" className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150" aria-label="Close">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex">
              <div className='w-16 h-16'>
                <img src={patch} alt={mission_name + ' patch'} />
              </div>
              <div className='ml-4'>
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                  {mission_name}
                </h3>
                <p className='text-gray-500'>{rocket_name}</p>
              </div>
            </div>
            <div className='mt-2'>
              ~<i aria-hidden className="fas fa-dollar-sign text-green-800">50.000.000</i>
            </div>
            <div className="pt-2 mt-2 border-t">
              <p className="leading-5 text-gray-700">
                {details}
              </p>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                  Deactivate
              </button>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                  Cancel
              </button>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}


export default Launch