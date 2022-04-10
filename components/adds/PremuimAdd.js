import Link from 'next/link'
import React from 'react'

const PremuimAdd = (props) => {

    return (

        // <Link href={{
        //     pathname: `/advertises/${props.add_id}`,
        //     query: `title=${props.title.trim().replace(' ', "-")}`
        // }} >
            <div className="prem-contanier">
            <div className="first-prem">
                <Link href={{
                    pathname: `/advertises/${props.add_id}`,
                    query: `title=${props.title.trim().replace(' ', "-")}`
                }}
                >
                    <div className="img-prem">
                        <img src={props.img == 'undefined'?"/assets/img/home.jpg":props.singleEstate.images[0] && props.singleEstate.images[0].logo_url} alt={props.title} />
                    </div>
                </Link>
                <Link href={{
                    pathname: `/advertises/${props.add_id}`,
                    query: `title=${props.title.trim().replace(' ', "-")}`
                }}
                >
                    <div className="info-prem">
                        <div className="title">{props.title}</div>
                        <div className="address">

                            <img src='/assets/img/location-gray.svg' />
                            {props.address}</div>
                        <div className="detials">
                            <span className='price'><span className='number'>{props.price}</span>{props.adsOb.priceCode}</span>
                                <span className='time'><span className='number'>
                                    <span className='address-time-icon'>
                                <img src='/assets/img/address-hour.svg' />
                            </span>
                            {props.time}</span></span>
                            <span className='views'><span className='address-views-icon'>
                                <img src='/assets/img/view.svg' />
                            </span>
                                <span className='number'>{props.views}</span>
                            </span>
                        </div>
                    </div>
                </Link>
                <div className="contact-prem main" >
                    <div className='phone'><span className='address-phone'><img src='/assets/img/phone.svg' /></span>
                        <a style={{ textDecoration: "none", color: "#fff" }} href={`tel:+962${props.phone}`}>
                            {props.phone}
                        </a>
                    </div>

                    <div className='whatsApp'><span className='whatsApp-icon'>
                        <img src='/assets/img/whatsApp.svg' />
                    </span>
                        <Link style={{ textDecoration: "none", color: "#fff" }}
                            href={`https://api.whatsapp.com/send/?phone=+9620787012409`}>
                            <a style={{ textDecoration: "none", color: "#fff" }}>
                                {props.whatsApp}</a></Link>
                    </div>

                </div>
            </div>
            <div className="second-prem ">
                <Link href={{
                    pathname: `/advertises/${props.add_id}`,
                    query: `title=${props.title.trim().replace(' ', "-")}`
                }}
                >
                    <div className="desc-prem">
                        {props.disc.length > 150 ? props.disc.substr(0, 150 - 1) + "..." : props.disc}
                    </div>
                </Link>
                <div className="contact-prem secondAdd">
                    <div className='phone'><span className='address-phone'><img src='/assets/img/phone.svg' /></span>
                        <a style={{ textDecoration: "none", color: "#fff" }} href={`tel:+962${props.phone}`}>
                            {props.phone}
                        </a>
                    </div>

                    <div className='whatsApp'><span className='whatsApp-icon'>
                        <img src='/assets/img/whatsApp.svg' />
                    </span>
                        <Link style={{ textDecoration: "none", color: "#fff" }}
                            href={`https://api.whatsapp.com/send/?phone=+9620787012409`}>
                            <a style={{ textDecoration: "none", color: "#fff" }}>
                                {props.whatsApp}</a></Link>
                    </div>

                </div>
            </div>
                <span className='prem-word'>{props.adsOb.premium}</span>
                </div>
        // </Link>

    )
}

export default PremuimAdd