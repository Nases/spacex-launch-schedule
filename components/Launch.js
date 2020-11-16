import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import { getTimeLeft } from '../assets/utils/utils'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'


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


  return (
    <>
      <tr className='hover:bg-gray-200 cursor-pointer' onClick={() => router.push(`/launch/${flight_number}`)}>
        <td className="pl-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">
            <div className="hidden md:flex md:flex-shrink-0 md:h-10 md:w-10">
              <Image
                className={`bg-gray-200 h-10 w-10 rounded-full ${patch ? 'cursor-pointer' : 'cursor-default'}`}
                src={patch || '/placeholder40x40.png'}
                width={40}
                height={40}
                alt={mission_name + ' patch'}
                onClick={e => {
                  e.stopPropagation()
                  patch && openPatchModal()
                }}
              />
              <Modal
                isOpen={patchModalIsOpen}
                onRequestClose={e => {
                  e.stopPropagation()
                  closePatchModal()
                }}
                style={patchModalCustomStyles}
              >
                <Image
                  src={patch || '/placeholder256x256.png'}
                  width={256}
                  height={256}
                  alt={mission_name + ' patch'}
                />
              </Modal>
            </div>
            <div className="ml-1 md:ml-4">
              <div className="text-sm leading-5 font-medium text-gray-900">
                <div className='whitespace-normal'>{mission_name}</div>
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
              <i aria-hidden onClick={e => {
                e.stopPropagation()
                openYoutubeModal()
              }
              } className="fab fa-youtube fa-2x text-red-700 hover:text-red-800 cursor-pointer"></i>
              :
              ''
          }
          <Modal
            isOpen={youtubeModalIsOpen}
            onRequestClose={e => {
              e.stopPropagation()
              closeYoutubeModal()
            }}
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
    </>
  )
}


export default Launch