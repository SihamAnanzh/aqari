import React ,{useEffect, useState} from 'react'
import Slideshow from '../imgSlider/ImgSlider'
import SimpleMap from '../map/Map'
const Estat = ({withImg,setOverlay,data ,userAdd="false"}) => {
  const [addToFav,setAddtoFav]=useState(false)



  return (
    <>

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
                
              </div>: <h4 style={{
                width:'113px',
                height:'41px',
                background:"#00416B",
                color:'#fff',
                fontFamily:'otfPlain',
                textAlign:'center',
                fontSize:"20px",
                borderRadius:'10px',
                padding:'5px',
                cursor:'pointer'
              }}>تعديل</h4> }
              
            </div>
            <div className="disc-estate">
            {data[0].discriptions}
            </div>
        </div>
        <div className="content-estat">
          <div className="first-line">
          <div className="city estat-deatils">
              <span className="att">المنطقة</span>  
              
              <span>{data[0].city}</span>
            </div>
            <div className="space estat-deatils">
            <span className="att">المساحة</span>  
            <span> متر <span>{data[0].space}</span></span>

            </div>
            <div className="destination estat-deatils">
            <span className="att">الواجهة</span>  
            <span>{data[0].interface}</span>
            </div>
      
            </div>
            <div className="second-line">
            <div className="price estat-deatils">
            <span className="att">السعر</span>
            <span> د.ك <span>{data[0].price}</span></span>  

            </div>
            <div className="automated-number estat-deatils">
            <span className="att">الرقم الآلي</span>  
            <span className='autom-value'>{data[0].autoNumber}</span>

            </div>
          </div>
        </div>
        <div className="estat-map">
      <SimpleMap/>
    </div>
    <div className='contact-estate'>
      <div className='whatsApp'><span className='whatsApp-icon'><img src='/assets/img/whatsApp.svg'/></span>{data[0].whatsapp}</div>
      <div className='phone'><span className='address-phone'><img src='/assets/img/phone.svg'/></span>{data[0].phone}</div>
    </div>
    </div>
  
    </>
  )
}


export default Estat