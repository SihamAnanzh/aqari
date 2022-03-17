import Link from 'next/link'
import React from 'react'

const Add = (props) => {
  
  console.log(props);

  return (
    <>
       <Link href={{
                pathname:'/SingleEstate',
                query: props.singleEstate
            }}
                            
            as={`SingleEstate/${props.add_id}`}
        >
    <div className=' premuim-add  regular regular-origin '>
      <div className=' details-adds'>
        <div className='img-add'><img src='/assets/img/home.jpg'   style={{
          objectFit:'cover'
        }}/></div>
        <div className='estat-details'>
          <h2 className='card-title'>{props.title}</h2>
          <span className='address'><span className='location-add-icon'><img src='/assets/img/location-gray.svg' /></span>
          {props.address}</span>
            <div className='disc'>
            {props.disc.length >78 ?props.disc.substr(0, 78- 1) + "..." : props.disc}
                </div>
      </div>
        </div>
        <div className='info'>
          <span className='price'><span className='number'>{props.price}</span>د.ك</span>
          <span className='time'><span className='number'><span className='address-time-icon'><img src='/assets/img/address-hour.svg' /></span>{props.time}</span>ساعة</span>

        </div>
      
    
    </div>
    </Link>
    <Link href={{
                pathname:'/SingleEstate',
                query: props.singleEstate
            }}
                            
            as={`SingleEstate/${props.add_id}`}
        >
    <div className='premuim-add regular fallback-regular'>
      <div className=' details-adds'>
        <div className='img-add'><img src='/assets/img/home.jpg'  style={{
          objectFit:'cover'
        }}/></div>
        <div className='estat-details'>
          <h2 className='card-title'>{props.title}</h2>
          <span className='address'><span className='location-add-icon'><img src='/assets/img/location-gray.svg' /></span>
          {props.address}</span>
         
      </div>
      
        </div>
        <div className='disc'>
                 {props.disc.length >50 ?props.disc.substr(0, 50- 1) + "..." : props.disc}
                </div>
        <div className='info'>
          <span className='price'><span className='number'>{props.price}</span>د.ك</span>
          <span className='time'><span className='number'><span className='address-time-icon'><img src='/assets/img/address-hour.svg' /></span>{props.time}</span>ساعة</span>

        </div>

      
    
    </div>
    </Link>
    </>
  )
}

export default Add