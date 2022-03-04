import React from 'react'
import Link from 'next/link'
const UserAdd = (props) => {
  return (
    <Link href='/profile/editEstate'>
    <div className='premuim-add regular'>
      <div className=' details-adds'>
        <div className='img-add'><img src='/assets/img/home.jpg' /></div>
        <div className='estat-details'>
          <h2 className='card-title'>{props.title}</h2>
          <span className='address'><span className='location-add-icon'><img src='/assets/img/location-gray.svg' /></span>
          {props.address}</span>
            <div className='disc'>
            {props.disc}     
                </div>
      </div>
        </div>
        <div className='info'>
          <span className='price'><span className='number'>{props.price}</span>د.ك</span>
          <span className='time'><span className='number'><span className='address-time-icon'><img src='/assets/img/address-hour.svg' /></span>{props.time}</span>ساعة</span>

        </div>
      
    
    </div>
    </Link>
  )
}

export default UserAdd