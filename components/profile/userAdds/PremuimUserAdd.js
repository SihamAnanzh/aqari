import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const PremuimUserAdd = (props) => {



  return (
    <Link href='/profile/editEstate'>
    <div className='premuim-add origin'>
        <div className='details'>
            <div className='img-add'><img src={props.img} /></div>
            <div className='estat-details'>
                <h2 className='card-title'>{props.title}</h2>
                <span className='address'><span className='location-add-icon'><img src='/assets/img/location-gray.svg' /></span>
                {props.address}</span>
                <div className='info'>
                    <span className='price'><span className='number'>{props.price}</span>د.ك</span>
                    <span className='time'><span className='number'><span className='address-time-icon'><img src='/assets/img/address-hour.svg' /></span>{props.time}</span>ساعة</span>
                    <span className='views'><span className='address-views-icon'>
                        <img src='/assets/img/view.svg' />
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
        <div className='disc'>{props.disc}</div>

    </div>
    </Link>

  )
}

export default PremuimUserAdd