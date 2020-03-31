import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import { getTimeLeft } from '../assets/utils/utils'
import Img from 'react-cool-img';

export default ({
  rocket_name,
  launch_date,
  patch,
  launch_success,
  upcoming,
  mission_name,
  details,
  youtubeVideo,
  launch_date_utc,
  wikipedia,
}) => {

  const [timeLeft, setTimeLeft] = useState('')

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


  return (
    <tr className='hover:bg-gray-200'>
      <td className="py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <Img
              className="bg-gray-600 h-10 w-10 rounded-full cursor-pointer"
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
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">{rocket_name}</div>
            <div className="text-sm leading-5 text-gray-500 tooltip hover:text-gray-800">
              <a className='whitespace-normal' href={wikipedia} target='_blank'>{mission_name}</a>
              {
                (details)
                  ?
                  <div className='tooltip-text text-gray-800 bg-gray-300 whitespace-normal text-left w-2/5 p-4 rounded-lg'>
                    {details}
                  </div>
                  :
                  ''
              }
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
                  {timeLeft}
                </p>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-100 text-teal-800">
                  Upcoming
                </span>
              </div>
              :
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Failed
              </span>
        }
      </td>
      <td className="py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {
          (youtubeVideo)
            ?
            <i onClick={openYoutubeModal} className="fab fa-youtube fa-2x text-red-700 hover:text-red-800 cursor-pointer"></i>
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
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="true"
          >
          </iframe>
        </Modal>
      </td>
    </tr>
  )
}
