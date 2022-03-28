import React ,{useState,useEffect,useContext} from 'react'
import PremiumService from '../adds/PremiumService'
import Footer from '../shared/footer/Footer'
import Nav from '../shared/nav/Nav'
import Add from '../adds/Add'
import { FilterContext } from '../../stores/filter';
import { TranslateContext } from '../../stores/translate-context'

const ServiveResults = ({navOb,adsOb, fo1}) => {
    const [latestData,setLeastestAdd]=useState([])
    const filterCtx=useContext(FilterContext)
    const tranCtx=useContext(TranslateContext)
     console.log(navOb);
    useEffect(()=>{

      filterCtx.serviceResults&&filterCtx.serviceResults.map((adds)=>{
      
      let data={ 
        id:adds.id,
      serviceId:adds.service_type_id.id,
      user_id:adds.user_id,
      images:adds.images.length >0?adds.images.logo_url:'/assets/img/home.jpg',
      title:adds.title,
      address:adds.service_type.title,
      price:adds.price,
      time:'4',
      views:adds.view_count,
      whatsApp:adds.whatsapp,
      phone:adds.phone,
      disc:adds.description,
      singleEstatData:{
      id:adds.id,
      images:adds.images,
      title:adds.title,
      address: adds.regions_string,
      discriptions:adds.desc,
      price:adds.price,
      phone:adds.phone,
      whatsApp:adds.whatsapp,
      time:'4',
      user_id:adds.user_id,
      
      }
      }
      
      setLeastestAdd(pre=>[...pre,data])

      
      })
      console.log(filterCtx.serviceResults);      
      },[])


  return (
    <div className='results-container'>
    <Nav navOb={navOb}/>
    <div className='results'>    
        <div className="adds-results">
        <h1 className='premium-title'>{adsOb.ad6}</h1>
        {
       latestData&&latestData.map((premiumAddsData)=>(
        <PremiumService singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.id} id={premiumAddsData.id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

       ))
       }
        </div>
      
          <span className="end-results">
     {adsOb.ad5}
          </span>
    </div>
      <Footer fo1={fo1}/>
    </div>  )
}

export default ServiveResults