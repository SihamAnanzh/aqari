import React from 'react'
import Slideshow from '../imgSlider/ImgSlider'

const Service = ({withImg,setOverlay,data ,userAdd="false"}) => {
  const [addToFav,setAddtoFav]=useState(false)
  return (
    <div className='estat-conianer'>
    {withImg && <Slideshow 
    setOverlay={setOverlay}
      imgs={data[0].images}
    />
    }
 
      <div className="header-estat">
          <div className="info-estate">
              <div className="estat-address">
              <h3 className="estat-name">{data[0].title}</h3>
              <h5 className="estate-address" >
                  <img src="/assets/img/location.svg" alt="" />
                 {data[0].address}
              </h5>
              </div>
              {!userAdd ? 
                <div className="fav-estat" onClick={()=>setAddtoFav(!addToFav)}>
              {addToFav?  <img src="assets/img/fav-icon.svg" alt="" />:
                <img src="/assets/img/emptyHearrt.svg" alt="" />
              }
              
            </div>: <h4>تعديل</h4> }
            
          </div>
          <div className="disc-estate">
          {data[0].discriptions}
          </div>
      </div>
  
  <div className='contact-estate'>
    <div className='whatsApp'><span className='whatsApp-icon'><img src='assets/img/whatsApp.svg'/></span>{data[0].whatsapp}</div>
    <div className='phone'><span className='address-phone'><img src='assets/img/phone.svg'/></span>{data[0].phone}</div>
  </div>
  </div>
  )
}

export default Service