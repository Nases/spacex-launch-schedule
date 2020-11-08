import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mt-10 pt-4 border-gray-800 border-t border-solid text-gray-300 text-lg text-center p-4 bg-gray-900">
      <div>
        This is not an official <a className='hover:text-white' href="https://www.spacex.com/" target="_blank">SpaceX</a> service.
        Data is provided by <a className='hover:text-white' href="https://docs.spacexdata.com/" target="_blank">spacexdata.com</a>.
      </div>
      <div>
        &copy; {new Date().getFullYear()}{' '}
        <a className='hover:text-white' href="https://hasansefaozalp.com/" target="_blank">Hasan Sefa Ozalp</a>
        &nbsp;
        |
        &nbsp;
        <Link href="/terms-and-conditions">
          <a>
            Terms and Conditions
          </a>
        </Link>
        &nbsp;
        |
        &nbsp;
        <Link href="/privacy-policy">
          <a>
            Privacy Policy
          </a>
        </Link>
        &nbsp;
        |
        &nbsp;
        <a href="https://github.com/Nases/spacex-launches" target="_blank">
          <i aria-hidden className="fab fa-github hover:text-white"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer