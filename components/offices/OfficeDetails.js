import React from 'react'
import Adds from '../adds/Adds'
const OfficeDetails = () => {
  return (
      <>
    <div className='headerOffice'>
         <div className="single-office-img">
             <img src="/assets/img/packge.jpg" alt="" />
         </div>
         <div className="office-info">
             <h3>شركة عبدالله العقارية</h3>
             <div className='office-social'>
              <ul className='office-list'>
          
                <li className='office-social-item'>
                  <img className='soical-icon' src='/assets/img/mailW.svg'/>
                </li>
                <li className='office-social-item'>
                  <img className='soical-icon' src='/assets/img/faceW.svg'/>
                </li>
                <li className='office-social-item'>
                  <img className='soical-icon' src='/assets/img/twtterW.svg'/>
                </li>
                <li className='office-social-item'>
                  <img className='soical-icon' src='/assets/img/instaW.svg'/>
                </li>
              </ul>
            </div>
            <div className='office-contact'>
         
          <div className='office-phone'>
          <span className='phone-icon'>
              <img src='/assets/img/phone.svg'/>
          </span>
            <span className='number'>50351216</span>
          </div>
          <div className='office-whatsapp'>
            <span className='whatsapp-icon'>
                <img src='/assets/img/whatsApp.svg'/>
            </span>
            <span className='number'>50351216</span>
          </div>
        </div>
         </div>
    </div>
  <div className="office-adds">
      <h4 className='office-add-title'>إعلانات المكتب </h4>
      <Adds/>

  </div>

         </> 
  )
}

export default OfficeDetails