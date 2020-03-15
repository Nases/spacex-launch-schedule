export default () => {
  return (
    <footer className="mt-10 pt-4 border-gray-500 border-t-2 border-solid text-gray-300 text-lg text-center p-4">
      <div>
        This is not an official <a className='hover:text-white' href="https://www.spacex.com/" target="_blank">SpaceX</a> service.
      </div>
      <div>
        &copy; {new Date().getFullYear()}{' '}
        <a className='hover:text-white' href="https://hasansefaozalp.com/" target="_blank">Hasan Sefa Ozalp</a>
        &nbsp;
        |
        &nbsp;
      <a href="https://github.com/Nases/spacex-launches" target="_blank">
          <i className="fab fa-github hover:text-white"></i>
        </a>
      </div>
    </footer>
  )
}