import Link from 'next/link'


const BreadCrumb = ({ children, href }) => {
  return (
    <li>
      <div className="flex items-center space-x-4">
        <Link href={href}>
          <a className="text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
            {children}
          </a>
        </Link>
      </div>
    </li>
  )
}

const Arrow = () => {
  return (
    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  )
}


const BreadCrumbs = ({ children }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {children}
      </ol>
    </nav>
  )
}


BreadCrumbs.BreadCrumb = BreadCrumb
BreadCrumbs.Arrow = Arrow

export default BreadCrumbs