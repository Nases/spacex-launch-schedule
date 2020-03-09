import Link from 'next/link'

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center">
          <a href="https://github.com/Nases/spacex-launches" target="_blank">
            <i className="fab fa-github fa-2x text-gray-500 hover:text-gray-700"></i>
          </a>
        </ul>
      </ul>
    </nav>
  )
}
