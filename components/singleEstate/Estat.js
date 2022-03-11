import React ,{useEffect, useState} from 'react'
import Slideshow from '../imgSlider/ImgSlider'
import SimpleMap from '../map/Map'
import  SimpleMap2 from '../map/phone-map'
const Estat = ({withImg,setOverlay,data ,userAdd}) => {
  const [addToFav,setAddtoFav]=useState(false)



  return (
    <>

    <div className='estat-conianer'>
      {withImg && <Slideshow 
      setOverlay={setOverlay}
        imgs={data.images}
      />
      }
   
        <div className="header-estat">
            <div className="info-estate">
                <div className="estat-address">
                <h3 className="estat-name">{data.title}</h3>
                <h5 className="estate-address" >
                    <img src="/assets/img/location.svg" alt="" />
                   {data.address}
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
            <div className="data">
            <div className='data-time'>
             <img src='/assets/img/time-estat.svg' width={8.63} height={8.63} />4ساعة</div>
                        <div className='data-views'>
                            <img src='/assets/img/view2-01 (2).svg' width={12.47} height={7.95}/>
          
                            <span className='number'>199</span>
                        </div>

              </div>
            <div className="disc-estate">
            {data.discriptions}
            </div>
        </div>
        
        <div className="content-estat estat-origin">
          <div className="first-line">
          <div className="city estat-deatils">
              <span className="att">المنطقة</span>  
              
              <span>{data.city}</span>
            </div>
            <div className="space estat-deatils">
            <span className="att">المساحة</span>  
            <span> متر <span>{data.space}</span></span>

            </div>
            <div className="destination estat-deatils">
            <span className="att">الواجهة</span>  
            <span>{data.interface}</span>
            </div>
      
            </div>
            <div className="second-line">
            <div className="price estat-deatils">
            <span className="att">السعر</span>
            <span> د.ك <span>{data.price}</span></span>  

            </div>
            <div className="automated-number estat-deatils">
            <span className="att">الرقم الآلي</span>  
            <span className='autom-value'>{data.autoNumber}</span>

            </div>
          </div>
        </div>
      
        
         <div className="content-estat estat-fallback">
         
          <div className="city estat-deatils">
              <span className="att">المنطقة</span>  
              
              <span>{data.city}</span>
            </div>
            <div className="space estat-deatils">
            <span className="att">المساحة</span>  
            <span> متر <span>{data.space}</span></span>

            </div>
            <div className="destination estat-deatils">
            <span className="att">الواجهة</span>  
            <span>{data.interface}</span>
            </div>
                     
            <div className="price estat-deatils">
            <span className="att">السعر</span>
            <span> د.ك <span>{data.price}</span></span>  

            </div>
            <div className="automated-number estat-deatils">
            <span className="att">الرقم الآلي</span>  
            <span className='autom-value'>{data.autoNumber}</span>
            </div>
          
        </div>
        
        <div className="estat-map map-origin">
      <SimpleMap lat={data.lat} lng={data.lang}/>
    </div>
    <div className="estat-map map-copy">
    <SimpleMap2 lat={data.lat} lng={data.lang}/>
    </div>
    <div className='contact-estate'>
      <div className='whatsApp'><span className='whatsApp-icon'><img src='/assets/img/whatsApp.svg'/></span>{data.whatsApp}</div>
      <div className='phone'><span className='address-phone'><img src='/assets/img/phone.svg'/></span>{data.phone}</div>
    </div>
    </div>
  
    </>
  )
}


export default Estat