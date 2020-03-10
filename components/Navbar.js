import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">
              <i class="fas fa-rocket fa-2x text-gray-500 hover:text-gray-700"></i>
            </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center">
          <a href="https://github.com/Nases/spacex-launches" target="_blank">
            <i className="fab fa-github fa-2x text-gray-500 hover:text-gray-700"></i>
          </a>
        </ul>
      </ul>
    </div>
  )
}
