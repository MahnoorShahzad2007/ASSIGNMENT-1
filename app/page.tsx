import Link from 'next/link';
import React from 'react'

const HomePage = () => {
  return (
    <div> 
      <ul>
        <li>
          <Link href="/">HomePage</Link>
        </li>
        <li>
          <Link href="/about">AboutPage</Link>
        </li>
        <li>
          <Link href="/contact">ContactPage</Link>
        </li>
        <li>
          <Link href="/services">ServicesPage</Link>
        </li>
      </ul>
      <h1 className='text-4xl text-center'>This is Home Page!</h1>
    </div>
  )
}

export default HomePage;