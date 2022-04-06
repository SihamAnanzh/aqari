import React from 'react'
import Link from 'next/link'

const PremiumService = (props) => {
console.log(props.adsOb);
  return (
 


      <div className="prem-contanier">
      <div className="first-prem">
          <Link href={{
              pathname: `/services/${props.add_id}`,
              query: `title=${props.title.trim().replace(' ', "-")}`
          }}
              >
                  <div className="img-prem">
              <img src={props.singleEstate.images[0] && props.singleEstate.images[0].logo_url} alt={props.title} />
              </div>
              </Link>
      
               <Link  href={{
            pathname: `/services/${props.id}`,
            query:`title=${props.title.trim().replace(' ',"-")}`
                  }}>
                      <div className="info-prem">
                <div className="title">{props.title}</div>
                <div className="address">
                  
                        <img src='/assets/img/location-gray.svg' />
                    {props.address}</div>
                <div className="detials">
                    <span className='price'><span className='number'>{props.price}</span>{props.priceCode}</span>
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
                  <Link style={{ textDecoration: "none", color: "#fff"}}
                      href={`https://api.whatsapp.com/send/?phone=+9620787012409`}>
                      <a style={{ textDecoration: "none", color: "#fff" }}>
                          {props.whatsApp}</a></Link>
              </div>

          </div>
      </div>
      <div className="second-prem ">
          <Link href={{
              pathname: `/services/${props.id}`,
              query: `title=${props.title.trim().replace(' ', "-")}`
              }}
                  
                  >
                  <div className="desc-prem">
                      {props.disc.length > 140 ? props.disc.substr(0, 140 - 1) + "..." : props.disc}
                      </div>
          </Link>
          <div className="contact-prem secondAdd serv">
              <div className='phone'><span className='address-phone'><img src='/assets/img/phone.svg' /></span>
                  <a style={{ textDecoration: "none", color: "#fff"}} href={`tel:+962${props.phone}`}>
                      {props.phone}
                  </a>
              </div>

              <div className='whatsApp'><span className='whatsApp-icon'>
                  <img src='/assets/img/whatsApp.svg' />
              </span>
                  <Link style={{ textDecoration: "none", color: "#fff" }}
                      href={`https://api.whatsapp.com/send/?phone=+9620787012409`}>
                      <a style={{ textDecoration: "none", color: "#fff"}}>
                          {props.whatsApp}</a></Link>
              </div>

          </div>
      </div>
      <span className='prem-word'>{props.adsOb.premium}</span>
  </div>
    
  )
}

export default PremiumService