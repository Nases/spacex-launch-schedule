import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Link from 'next/link'


const LaunchDetails = () => {
  const title = 'Default title'
  const description = 'Default description'

  const router = useRouter()
  const flight_number = router.query.flight_number
  console.log(router.query)


  return (
    <Layout title={title} description={description}>
      <div className="flex flex-col px-2 mt-4 md:my-8 lg:max-w-2xl xl:max-w-3xl m-auto">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden rounded-lg border-b border-gray-200 bg-white">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-4 mb-6">
                    <li>
                      <div>
                        <Link href="/">
                          <a className="text-gray-400 hover:text-gray-500">
                            <svg className="flex-shrink-0 h-5 w-5 transition duration-150 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                          </a>
                        </Link>
                        <span className="sr-only">Home</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-4">
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <Link href={`/launch/${flight_number}`}>
                          <a className="text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                            Launch {flight_number}
                          </a>
                        </Link>
                      </div>
                    </li>
                  </ol>
                </nav>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Applicant Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                  Personal details and application.
                </p>
              </div>
              <div className="px-4 py-5 sm:p-0">
                <dl>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                    <dt className="text-sm leading-5 font-medium text-gray-500">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                      Margot Foster
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default LaunchDetails