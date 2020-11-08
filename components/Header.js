const Header = () => {
  return (
    <nav class="bg-gray-900 border-b border-solid border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img src="/favicon.png" alt="" />
              <h1 className='hidden lg:block text-white tracking-tight leading-10 font-bold text-lg ml-2'>SpaceX Launch Schedule</h1>
            </div>
            <div class="ml-6 flex items-center">
              <a href="#" class="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Launches</a>
            </div>
          </div>
          <div class="flex items-center">
            <a href="https://github.com/Nases/spacex-launches" target="_blank">
              <i aria-hidden className="fab fa-github fa-lg text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Header