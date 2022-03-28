import Link from 'next/link'
import React from 'react'

const Footer = ({fo1}) => {
  return (
    <div className='footer'>
      <Link href='/contactus'>  
      <h2 className='contact-us'>{fo1}</h2>
      </Link>
    </div>
  )
}

export default Footer