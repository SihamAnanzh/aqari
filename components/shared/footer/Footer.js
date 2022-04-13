import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
const Footer = ({ fo1 }) =>
{
  const route = useRouter()
  

  return (
    <div className='footer'>
      {/* <Link href='/contactus'>
        
      <h2 className='contact-us'>{fo1}</h2>
      </Link> */}
      <div className="footer-container">
        <div className="first">
        <div className="links">
            <Link href='/contactus'><a style={{ textDecoration: "none", color: "#fff" }}>- {route.locale=='en'?"Contact Us":"اتصل بنا"}</a></Link>
            <Link href='/privacy'><a style={{ textDecoration: "none", color: "#fff" }}>- {route.locale=='en'?'Privacy Policy':"سياسة الخصوصية"}</a></Link>
            <Link href='/terms'><a style={{ textDecoration: "none", color: "#fff" }}>- { route.locale=='en'?"Terms & Conditions":"الشروط والقواعد"} </a></Link>

        

          </div>
          <div className="category">
            <div className="categ">- {route.locale=='en'?"Rent":"إيجار"}</div>
            <div className="categ">- { route.locale=='en'?'Salling':'بيع'}</div>
            <div className="categ">- { route.locale=='en'?"Services":"خدمات"}</div>

        </div>
          <div className="socail">
            <a target='_blank' style={{ textDecoration: "none", color: "#fff" }} href="https://www.instagram.com/aqarifinderkw/">
            <Instagram />
            </a>
            {/* <a target='_blank' style={{ textDecoration: "none", color: "#fff" }} href="">
            <Facebook />
          </a>
            <a target='_blank' style={{ textDecoration: "none", color: "#fff" }} href="">
            <Twitter/>
        </a> */}
         
          </div>
        </div>
       
        <div className="second-fotter">
          {route.locale == 'en' ?
            "All rights reserved © AqariFinder 2022" :
            "جميع الحقوق محفوظة © عقاري 2022"}
        </div>
      </div>
    </div>
  )
}

export default Footer