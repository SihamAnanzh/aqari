import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const SingleOffice = ({office}) => {


  return (
    <>
    <Link href={{
                pathname:'/offices/id',
                query: {id:office.id}
            }}
                      
  
     as={`/offices/${office.id}`} 
    
  >
       <div className='office'>
        <div className='office-info-container'>
        <div className='office-info'>
          <div className='office-img'>
              <img src='assets/img/packge.jpg'/>
          </div>
          <div className='office-details'>
            <div className='office-name-contaier'>
              <h3 className='office-name'>{office.title}</h3>
            </div>
            <div className='office-social'>
              <ul className='office-list'>
              <li className='office-social-item'>
                <a href={office.email}>
                  <img className='soical-icon' src='assets/img/mail.svg'/>
                  </a>
                </li>
              
                {office.facebook_url &&
                  <li className='office-social-item'>
                    <a href={office.facebook_url}>
                    <img className='soical-icon' src='assets/img/face.svg'/>
                    </a>
                </li>
                }             
               {
                 office.twitter_url &&
                 <li className='office-social-item'>
                 <a href={ office.twitter_url}>
                 <img className='soical-icon' src='assets/img/twitter.svg'/>
                 </a>
               </li>
               }
                
                {office.instagram_url && <li className='office-social-item'>
                  <a href={office.instagram_url}>
                  <img className='soical-icon' src='assets/img/insta.svg'/>
                  </a>
                </li>}
               
              </ul>
            </div>
          </div>
        </div>
        <div className='office-contact'>
          <div className='office-whatsapp'>
            <span className='whatsapp-icon'>
                <img src='assets/img/whatsApp.svg'/>
            </span>
            <span className='number'>{office.whatsapp}</span>
          </div>
          <div className='office-phone'>
          <span className='phone-icon'>
              <img src='assets/img/phone.svg'/>
          </span>
            <span className='number'>{office.phone}</span>
          </div>

        </div>
        </div>
      
      </div>
      </Link>
    </>
  )
}

export default SingleOffice