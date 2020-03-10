import { useState, useEffect } from 'react'

export default ({ rocket_name }) => {
  return (
    <tr>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div class="ml-4">
            <div class="text-sm leading-5 font-medium text-gray-900">{rocket_name}</div>
            <div class="text-sm leading-5 text-gray-500">bernardlane@example.com</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="text-sm leading-5 text-gray-900"></div>
        <div class="text-sm leading-5 text-gray-500">Human Resources</div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Success
        </span>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        Owner
      </td>
      <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
        <a href="#" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">More</a>
      </td>
    </tr>
  )
}
