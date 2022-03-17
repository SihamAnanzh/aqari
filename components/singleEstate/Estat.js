import axios from 'axios'
import React ,{useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../stores/auth-context'
import Slideshow from '../imgSlider/ImgSlider'
import SimpleMap from '../map/Map'
import  SimpleMap2 from '../map/phone-map'
const Estat = ({withImg,setOverlay,data ,userAdd}) => {
  const [addToFav,setAddtoFav]=useState(false)
const authCtx=useContext(AuthContext)
useEffect(()=>{

  axios.get(`https://stagingapi.aqarifinder.com/api/ads/${data.id}`)

  console.log(data.user_id + "  " + authCtx.userId);
},[])



const toggleFavAdds=()=>{
  setAddtoFav(!addToFav)
  addToFav?
  axios.post(`https://stagingapi.aqarifinder.com/api/user/ad/fav/remove/${data.id}`,{
    headers: {
      
      "Authorization":authCtx.token
       },

  }).then((res)=>console.log(res))
  :
  axios.post(`https://stagingapi.aqarifinder.com/api/user/ad/fav/remove/${data.id}`,
    {
      headers: {
        Authorization:authCtx.token
         },
  }).then((res)=>console.log(res))

}

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
                {authCtx.userId !== data.user_id ? 
                  <div className="fav-estat" onClick={toggleFavAdds}>
                {addToFav?  <img src="/assets/img/fav-icon.svg" alt="" />:
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
          
                            <span className='number' style={{paddingRight:'5px'}}>{data.views}</span>
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
      <div className='whatsApp'><span className='whatsApp-icon'><img src='/assets/img/whatsApp.svg'/></span><a style={{textDecoration:"none",color:"#fff" ,fontFamily:"fangsong"}} target="_blank" href={`https://api.whatsapp.com/send/?phone=+9620787012409`}>0787012409</a></div>
      <div className='phone' style={{fontFamily:"fangsong"}}><span className='address-phone'><img src='/assets/img/phone.svg'/></span>{data.phone}</div>
    </div>
    </div>
  
    </>
  )
}


export default Estat