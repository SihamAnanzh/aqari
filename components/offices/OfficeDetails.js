import React from 'react'
import Adds from '../adds/Adds'
const OfficeDetails = ({ office, ads, premium,ofOb }) => {


  return (
    <>
      <div className='headerOffice'>
        <div className="single-office-img">
          <img src="/assets/img/packge.jpg" alt="" />
        </div>
        <div className="office-info">
          <h3>{office.title}</h3>
          <div className='office-social'>
            <ul className='office-list '>

              <li className='office-social-item'>
              <a href={office.email}>
                  <img className='soical-icon' src='/assets/img/mailW.svg'/>
                  </a>
                </li>
              
                {office.facebook_url &&
                  <li className='office-social-item'>
                    <a href={office.facebook_url}>
                    <img className='soical-icon' src='/assets/img/faceW.svg'/>
                    </a>
                </li>
                }             
               {
                 office.twitter_url &&
                 <li className='office-social-item'>
                 <a href={ office.twitter_url}>
                 <img className='soical-icon' src='/assets/img/twitterW.svg'/>
                 </a>
               </li>
               }
                
                {office.instagram_url && <li className='office-social-item'>
                  <a href={office.instagram_url}>
                  <img className='soical-icon' src='/assets/img/instaW.svg'/>
                  </a>
                </li>}
               
            </ul>
          </div>
          <div className='office-contact'>

            <div className='office-phone'>
              <span className='phone-icon'>
                <img src='/assets/img/phone.svg' />
              </span>
              <span className='number'>{office.phone}</span>
            </div>
            <div className='office-whatsapp'>
              <span className='whatsapp-icon'>
                <img src='/assets/img/whatsApp.svg' />
              </span>
              <span className='number'>{office.whatsapp}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="office-adds" style={{height:"100vh"}}>
        <h4 className='office-add-title'>{ofOb.of2}</h4>
        {ads && premium ? <span className='office-add-title'>{ofOb.of3}</span> : <Adds ads={ads} premium={premium} />}


      </div>

    </>
  )
}

export default OfficeDetails