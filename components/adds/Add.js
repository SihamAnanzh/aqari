import Link from 'next/link'
import React from 'react'

const Add = (props) => {
  return (
    <>
    <Link  style={{textDecoration:'none'}}  href={{
      pathname: `/advertises/${props.add_id}`,
      query:`title=${props.title.trim().replace(' ',"-")}`
    }}>  
    
      <div className="prem-contanier ad-contanier ad-main">
        <div className="img-prem">
          <img src={props.singleEstate.images.length == 0 ?"/assets/img/home.jpg":props.singleEstate.images[0] && props.singleEstate.images[0].logo_url} alt={props.title} />
        </div>
        <div className="first-prem">
          <div className="info-prem">
            <div className="title">{props.title}</div>
            <div className="address">
              <img src='/assets/img/location-gray.svg' />
              {props.address}</div>
          <div className="desc-prem  ">
              {props.disc.length > 70 ? props.disc.substr(0, 70 - 1) + "..." : props.disc}
            </div>
            
          </div>
          
        <div className="detials">
          <span className='price'>
                <span className='number'>{props.price}</span>
                {props.adsOb.priceCode}
              </span>
                  <span className='time'><span className='number'>
                    <span className='address-time-icon'>
                                <img src='/assets/img/address-hour.svg' />
              </span>{props.time}</span></span>
        </div>
         </div>
   
         
        </div>
            
      </Link>
        <Link  style={{textDecoration:'none'}}  href={{
      pathname: `/advertises/${props.add_id}`,
      query:`title=${props.title.trim().replace(' ',"-")}`
    }}>
      <div className="prem-contanier ad-contanier ad-second">
       
          <div className="first-prem">
          <div className="img-prem">
          <img src={props.singleEstate.images[0] && props.singleEstate.images[0].logo_url} alt={props.title} />
        </div>
          <div className="info-prem">
            <div className="title">{props.title}</div>
            <div className="address">
              <img src='/assets/img/location-gray.svg' />
              {props.address}</div>
              <div className="detials detials-second-regular">
         
                  <span className='time'><span className='number'><span className='address-time-icon'>
                                <img src='/assets/img/address-hour.svg' />
                </span>{props.time}</span></span>
                <span className='price'>
            <span className='number'>{props.price}</span>{props.adsOb.priceCode}</span>
        </div>
            
          </div>
          
        <div className="detials detials-main-regular">
          <span className='price'>
            <span className='number'>{props.price}</span>{props.adsOb.priceCode}</span>
                  <span className='time'><span className='number'><span className='address-time-icon'>
                                <img src='/assets/img/address-hour.svg' />
              </span>{props.time}</span></span>
        </div>
         </div>
         <div className="desc-prem  ">
              {props.disc.length > 50 ? props.disc.substr(0, 50 - 1) + "..." : props.disc}
            </div>
        
        </div>
       
      </Link>
      </>
  )
}

export default Add