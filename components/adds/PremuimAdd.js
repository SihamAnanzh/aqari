import Link from 'next/link'
import React from 'react'

const PremuimAdd = (props) => {
    return (
        <Link href={{
            pathname: `/advertises/${props.add_id}`,
            query:`title=${props.title.trim().replace(' ',"-")}`
        }}>
            <div className="prem-contanier">
                <div className="first-prem">
                    <div className="img-prem">
                        <img src={props.singleEstate.images[0] && props.singleEstate.images[0].logo_url} alt={ props.title}/>
                    </div>
                    <div className="info-prem">
                        <div className="title">{props.title}</div>
                        <div className="address">
                          
                                <img src='/assets/img/location-gray.svg' />
                            {props.address}</div>
                        <div className="detials">
                            <span className='price'><span className='number'>{props.price}</span>{props.adsOb.priceCode}</span>
                            <span className='time'><span className='number'><span className='address-time-icon'>
                                <img src='/assets/img/address-hour.svg' />
                            </span>{props.time}</span>{props.adsOb.hour}</span>
                            <span className='views'><span className='address-views-icon'>
                                <img src='/assets/img/view.svg' />
                            </span>
                                <span className='number'>{props.views}</span>
                            </span>
                        </div>
                    </div>
                    <div className="contact-prem main">
                    <div className='phone'><span className='address-phone'><img src='/assets/img/phone.svg' /></span>{props.phone}</div>

                        <div className='whatsApp'><span className='whatsApp-icon'><img src='/assets/img/whatsApp.svg' /></span>{props.whatsApp}</div>

                    </div>
                </div>
                <div className="second-prem ">
                    <div className="desc-prem">
                        {props.disc.length > 150 ? props.disc.substr(0, 150 - 1) + "..." : props.disc}
                    </div>
                    <div className="contact-prem secondAdd">
                        <div className='phone'>
                            <span className='address-phone'><img src='/assets/img/phone.svg' /></span>{props.phone}</div>

                        <div className='whatsApp'><span className='whatsApp-icon'><img src='/assets/img/whatsApp.svg' />
                        </span>{props.whatsApp}</div>

                    </div>
                </div>
                <span className='prem-word'>{props.adsOb.premium}</span>
            </div>
        </Link>
    )
}

export default PremuimAdd