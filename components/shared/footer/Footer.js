import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const Footer = ({fo1}) => {
  return (
    <div className='footer'>
      {/* <Link href='/contactus'>
        
      <h2 className='contact-us'>{fo1}</h2>
      </Link> */}
      <div className="footer-container">
        <div className="first">
        <div className="links">
          <Link href='/contactUs'><a  style={{textDecoration:"none",color:"#fff"}}>- Contact Us</a></Link>
          <Link href='/contactUs'><a style={{textDecoration:"none",color:"#fff"}}>- Privacy Policy</a></Link>
          <Link href='/contactUs'><a style={{textDecoration:"none",color:"#fff"}}>- Terms & Conditions </a></Link>

        

          </div>
          <div className="category">
          <div className="categ">- Rent</div>
          <div className="categ">- Salling</div>
          <div className="categ">- Services</div>

        </div>
        <div className="socail">
          <Instagram />
          <Facebook />
          <Twitter/>
          </div>
        </div>
       
        <div className="second-fotter">
           All rights reserved © AqariFinder 2022
        </div>
      </div>
    </div>
  )
}

export default Footer