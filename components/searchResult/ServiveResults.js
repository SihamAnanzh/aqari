import React ,{useState,useEffect,useContext} from 'react'
import PremuimAdd from '../adds/PremuimAdd'
import Footer from '../shared/footer/Footer'
import Nav from '../shared/nav/Nav'
import Add from '../adds/Add'
import { FilterContext } from '../../stores/filter';
const ServiveResults = () => {
    const [latestData,setLeastestAdd]=useState([])
    const filterCtx=useContext(FilterContext)

     
    useEffect(()=>{

      filterCtx.serviceResults&&filterCtx.serviceResults.map((adds)=>{
      
      let data={ 
      add_id:adds.service_type_id.id,
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
      views:adds.view_count,
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
    <Nav/>
    <div className='results'>    
        <div className="adds-results">
        <h1 className='premium-title'>أحدث الإعلانات</h1>
        {
          latestData&&latestData.map((addsData)=>(
          <Add singleEstate={addsData.singleEstatData} add_id={addsData.add_id} key={addsData.add_id} disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>
  
          ))
          }
        </div>
      
          <span className="end-results">
          انتهت نتائج البحث ولا يوجد المزيد من الإعلانات
          </span>
    </div>
      <Footer/>
    </div>  )
}

export default ServiveResults