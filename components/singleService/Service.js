import axios from 'axios'
import React ,{useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../stores/auth-context'
import Slideshow from '../imgSlider/ImgSlider'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Service = ({withImg,setOverlay,data }) => {
const [addToFav,setAddtoFav]=useState(false)
const authCtx=useContext(AuthContext)
const [userAdd,setUserAdd]=useState(false)
const [allInfo ,setAllInfo]=useState({})
const route =useRouter()
  useEffect(()=>{

    axios.get(`https://stagingapi.aqarifinder.com/api/ads/${data.id}`)
    setAllInfo({
      id:data.id,
      title:data.title,
      desc:data.discriptions,
      region_id:data.regionId,
       price:data.price,
       address:data.address,
       phone:data.phone,
       whatsaap:data.whatsaap,
       regionsString:data.regionsString,
       category:data.category,
       adType:data.adType
   
  
  })
  },[])
  useEffect(()=>{
    authCtx.userId == data.user_id ?setUserAdd(true):setUserAdd(false)
  },[data.user_id])
  
  console.log(data.id);
  
  const toggleFavAdds=()=>{
    authCtx.token?
    (
    !data.isFav?
     ( axios.post(`https://stagingapi.aqarifinder.com/api/user/ad/fav/add/${data.id}`,{
      headers: {
        
        "Authorization":authCtx.token
         },
  
    }).then((res)=>{console.log(res)
      setAddtoFav(!addToFav)})
     )
    :
    axios.post(`https://stagingapi.aqarifinder.com/api/user/ad/fav/remove/${data.id}`,
      {
        headers: {
          'Authorization':authCtx.token
           },
    }).then((res)=>  setAddtoFav(!addToFav)
    )
    )
    :route.replace('/signIN')
     
  
  }
  
  
    return (

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
                  <div className="fav-estat" onClick={toggleFavAdds}>
                {addToFav?  <img src="/assets/img/fav-icon.svg" alt="" />:
                  <img src="/assets/img/emptyHearrt.svg" alt="" />
                }
                
              </div>: <h4 className='editAdd'  style={{
                width:'103px',
                height:'35px',
                background:"#00416B",
                color:'#fff',
                fontFamily:'otfPlain',
                textAlign:'center',
                fontSize:"18px",
                borderRadius:'10px',
                padding:'5px',
                cursor:'pointer'
              }}><Link 
              href={{
                pathname:'/profile/updateService',
                query:{...allInfo}
            }}
                     
              as={`update/${data.title}`}
              >تعديل</Link></h4> }
              
            </div>
            <div className="data">
            <div className='data-time'>
             <img src='/assets/img/time-estat.svg' width={8.63} height={8.63} />4 ساعة</div>
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
            <div className="second-line">
            <div className="price estat-deatils" style={{width:'173px'}}>
            <span className="att">السعر</span>
            <span> د.ك <span>{data.price}</span></span>  

            </div>
      
          </div>
        </div>
      
        
        
  
    <div className='contact-estate'>
      <div className='whatsApp'><span className='whatsApp-icon'><img src='/assets/img/whatsApp.svg'/></span><a style={{textDecoration:"none",color:"#fff" ,fontFamily:"fangsong"}} target="_blank" href={`https://api.whatsapp.com/send/?phone=+9620787012409`}>0787012409</a></div>
      <div className='phone' style={{fontFamily:"fangsong"}}><span className='address-phone'><img src='/assets/img/phone.svg'/></span>{data.phone}</div>
    </div>
    </div>
  )
}

export default Service