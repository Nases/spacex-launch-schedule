import Head from 'next/head'

export default ({ children }) => {
  return (
    <div>
      <Head>
        <title>SpaceX Launches</title>
      </Head>
      <div>
        {children}
      </div>
    </div>
  )
}