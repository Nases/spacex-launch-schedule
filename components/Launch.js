import Modal from 'react-modal'
import { useState } from 'react'

export default ({ rocket_name, launch_date, img, launch_success, upcoming, mission_name, details }) => {

  const customStyles = {
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

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  // Modal.setAppElement('#yourAppElement')

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <tr className='hover:bg-gray-200'>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img onClick={openModal} class="h-10 w-10 rounded-full cursor-pointer" src={img} alt="" />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <img src={img} alt="" />
            </Modal>
          </div>
          <div class="ml-4">
            <div class="text-sm leading-5 font-medium text-gray-900">{rocket_name}</div>
            <div class="text-sm leading-5 text-gray-500 tooltip">
              {mission_name}
              <div className='tooltip-text text-gray-800 bg-gray-300'>{details}</div>
            </div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="text-sm leading-5 text-gray-500">{launch_date}</div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 tooltip">
        {
          (launch_success)
            ?
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Success
            </span>
            :
            (upcoming)
              ?
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-100 text-teal-800">
                Upcoming
              </span>
              :
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Failed
              </span>
        }
      </td>
      <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
        <a href="#" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Details</a>
      </td>
    </tr>
  )
}
