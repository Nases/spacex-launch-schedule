
export default ({ rocket_name, launch_date, img, launch_success, upcoming }) => {
  return (
    <tr>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img class="h-10 w-10 rounded-full" src={img} alt="" />
          </div>
          <div class="ml-4">
            <div class="text-sm leading-5 font-medium text-gray-900">{rocket_name}</div>
            <div class="text-sm leading-5 text-gray-500">bernardlane@example.com</div>
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
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500 tooltip">
        <i class="fas fa-info-circle fa-2x"></i>
        <span class='tooltip-text bg-blue-200 p-3 -mt-6 -ml-6 rounded text-gray-800'>Look at this!</span>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
        <a href="#" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">More</a>
      </td>
    </tr>
  )
}
