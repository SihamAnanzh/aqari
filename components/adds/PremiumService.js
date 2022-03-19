import React from 'react'
import Link from 'next/link'

const PremiumService = (props) => {
  return (
    <>
    <Link href={{
            pathname:'/SingleServices',
            query: props.singleEstate
        }}
                        
        as={`SingleServices/${props.title}`}
    >
    <div className='premuim-add origin fallback-origin '>
        <div className='details'>
            <div className='img-add'><img  src='/assets/img/home.jpg'   style={{
                          objectFit:'cover'
                                   }} /></div>
            <div className='estat-details'>
                <h2 className='card-title'>{props.title}</h2>
                <span className='address'><span className='location-add-icon'><img src='/assets/img/location-gray.svg' /></span>
                {props.address}</span>
                <div className='info'>
                    <span className='price'><span className='number'>{props.price}</span>د.ك</span>
                    <span className='time'><span className='number'><span className='address-time-icon'><img src='/assets/img/address-hour.svg' /></span>{props.time}</span>ساعة</span>
                    <span className='views'><span className='address-views-icon'>
                        <img src='/assets/img/view.svg'/>
                    </span>
                        <span className='number'>{props.views}</span>
                    </span>
                </div>

            </div>
            <div className='contact-details'>
                <div className='whatsApp'><span className='whatsApp-icon'><img src='/assets/img/whatsApp.svg'/></span>{props.whatsApp}</div>
                <div className='phone'><span className='address-phone'><img src='/assets/img/phone.svg'/></span>{props.phone}</div>
            </div>
        </div>
        <div className='disc'> 
        {props.disc.length >125 ?props.disc.substr(0, 125- 1) + "..." : props.disc}
</div>

    </div>
    </Link>

    <Link href={{
      
            pathname:'/SingleServices',
            query: props.singleEstate
        }}
                        
        as={`SingleServices${props.title}`}
    
                        


    >
    <div className='premuim-add origin fallback-adds'>
        <div className='details'>
            <div className='img-add'><img src='/assets/img/home.jpg'  style={{
                       objectFit:'cover'
                                 }} /></div>
            <div className="fallback-img-details">
            <div className='estat-details'>
                <h2 className='card-title'>{props.title}</h2>
                <span className='address'><span className='location-add-icon'><img src='/assets/img/location-gray.svg' /></span>
                {props.address}</span>
                <div className='info'>
                    <span className='price'><span className='number'>{props.price}</span>د.ك</span>
                    <span className='time'><span className='number'><span className='address-time-icon'><img src='/assets/img/address-hour.svg' /></span>{props.time}</span>ساعة</span>
                    <span className='views'><span className='address-views-icon'>
                        <img src='/assets/img/view.svg'/>
                    </span>
                        <span className='number'>{props.views}</span>
                    </span>
                </div>

            </div>
            </div>

        </div>
        <div className='disc'>
        {props.disc.length >80 ?props.disc.substr(0, 80- 1) + "..." : props.disc}
            </div>

        <div className='contact-details'>
                <div className='whatsApp'><span className='whatsApp-icon'><img src='/assets/img/whatsApp.svg'/></span>{props.whatsApp}</div>
                <div className='phone'><span className='address-phone'><img src='/assets/img/phone.svg'/></span>{props.phone}</div>
            </div>
    </div>
    </Link>
    </>  )
}

export default PremiumService