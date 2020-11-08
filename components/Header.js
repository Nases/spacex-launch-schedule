import Link from 'next/link'
import { useRouter } from 'next/router'


const Header = () => {
  const router = useRouter()

  return (
    <nav className="bg-gray-900 border-b border-solid border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <div className="flex-shrink-0 flex items-center">
                  <img src="/favicon.png" alt="" />
                  <h1 className='hidden lg:block text-white tracking-tight leading-10 font-bold text-lg ml-2'>SpaceX Launch Schedule</h1>
                </div>
              </a>
            </Link>
            <div className="ml-6 flex items-center">
              <Link href="/">
                <a className={`${(router.pathname === '/') && 'bg-gray-800'} px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:bg-gray-700 transition duration-150 ease-in-out`}>
                  Launches
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
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