import React from 'react'
import Link from 'next/link'

export async function getStaticProps() {
  return {
    props: {
      stars: 1322,
    },
  }
}

export default ({ stars }) => {
  console.log(stars)
  return (
    < div >
      <p>Next.js has {stars} ⭐️</p>
      <Link href="/preact">
        <a>How about preact?</a>
      </Link>
    </div >
  )
}

