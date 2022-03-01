import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <Link href='/contactus'>  
      <h2 className='contact-us'>اتصل بنا</h2>

      </Link>
    </div>
  )
}

export default Footer