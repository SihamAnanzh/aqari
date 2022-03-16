import React ,{useState,useEffect,useContext} from 'react'
import PremuimAdd from '../adds/PremuimAdd'
import Footer from '../shared/footer/Footer'
import Nav from '../shared/nav/Nav'
import Add from '../adds/Add'
import { FilterContext } from '../../stores/filter';


const SearchResultComponents = ({showAds}) => {
const [premuimAdds,setPremuimAdds]=useState([])
const [latestData,setLeastestAdd]=useState([])
const [servicesData,setSericesData]=useState([])
const filterCtx=useContext(FilterContext)
useEffect(()=>{
  filterCtx.addsResults.premium_ads && (filterCtx.addsResults.premium_ads).map((adds)=>{
  let data={ 
    add_id:adds.id,
    user_id:adds.user_id,
    images:adds.images,
    title:adds.title,
    address:adds.region.country.title+" " + adds.region.title,
    price:adds.price,
    time:'4',
    views:adds.view_count,
    whatsApp:adds.whatsapp,
    phone:adds.phone,
    disc:adds.desc,
    lat:adds.lat,
    lng:adds.lng,
    singleEstatData:{
    id:adds.id,
    images:adds.images,
    title:adds.title,
    address:adds.region.country.title+" " + adds.region.title,
    discriptions:adds.desc,
    city:adds.region.title,
    space:adds.area,
    interface:adds.front,
    price:adds.price,
    autoNumber:adds.auto_number,
    phone:adds.phone,
    whatsApp:adds.whatsapp,
    lat:adds.lat,
    lng:adds.lng,
    views:adds.view_count,
    time:'4',
    user_id:adds.user_id,
  
  }
        }
        setPremuimAdds(pre=>[...pre,data])      
    
  })
  },[filterCtx.addsResults])

  useEffect(()=>{
    filterCtx.addsResults.ads && (filterCtx.addsResults.ads).map((adds)=>{
    let data={ 
      add_id:adds.id,
      user_id:adds.user_id,
      images:adds.images,
      title:adds.title,
      address:adds.region.country.title+" " + adds.region.title,
      price:adds.price,
      time:'4',
      views:adds.view_count,
      whatsApp:adds.whatsapp,
      phone:adds.phone,
      disc:adds.desc,
      lat:adds.lat,
      lng:adds.lng,
      singleEstatData:{
      id:adds.id,
      images:adds.images,
      title:adds.title,
      address:adds.region.country.title+" " + adds.region.title,
      discriptions:adds.desc,
      city:adds.region.title,
      space:adds.area,
      interface:adds.front,
      price:adds.price,
      autoNumber:adds.auto_number,
      phone:adds.phone,
      whatsApp:adds.whatsapp,
      lat:adds.lat,
      lng:adds.lng,
      views:adds.view_count,
      time:'4',
      user_id:adds.user_id,
    
    }
          }
          setLeastestAdd(pre=>[...pre,data])      
      
    })
    },[filterCtx.addsResults])
    


  useEffect(()=>{
      filterCtx.addsResults.ads&&(filterCtx.addsResults.ads).map((adds)=>{
    
    let data={ 
    add_id:adds.id,
    user_id:adds.user_id,
    images:adds.images.length >0?adds.images:'/assets/img/home.jpg',
    title:adds.title,
    address:adds.region.country.title+" " + adds.region.title,
    price:adds.price,
    time:'4',
    views:adds.view_count,
    whatsApp:adds.whatsapp,
    phone:adds.phone,
    disc:adds.desc,
    lat:adds.lat,
    lng:adds.lng,
    singleEstatData:{
    id:adds.id,
    images:adds.images,
    title:adds.title,
    address:adds.region.country.title+" " + adds.region.title,
    discriptions:adds.desc,
    city:adds.region.title,
    space:adds.area,
    interface:adds.front,
    price:adds.price,
    autoNumber:adds.auto_number,
    phone:adds.phone,
    whatsApp:adds.whatsapp,
    lat:adds.lat,
    lng:adds.lng,
    views:adds.view_count,
    time:'4',
    user_id:adds.user_id,
    
    }
    }
    
    setLeastestAdd(pre=>[...pre,data])
    
    
    })
    },[])
    useEffect(()=>{
      console.log(filterCtx.serviceResults);
      servicesData&&servicesData.map((adds)=>{
      
      // let data={ 
      // add_id:adds.id,
      // user_id:adds.user_id,
      // images:adds.images.length >0?adds.images:'/assets/img/home.jpg',
      // title:adds.title,
      // address:adds.region.country.title+" " + adds.region.title,
      // price:adds.price,
      // time:'4',
      // views:adds.view_count,
      // whatsApp:adds.whatsapp,
      // phone:adds.phone,
      // disc:adds.discriptions,
      // lat:adds.lat,
      // lng:adds.lng,
      // singleEstatData:{
      // id:adds.id,
      // images:adds.images,
      // title:adds.title,
      // address:adds.region.country.title+" " + adds.region.title,
      // discriptions:adds.desc,
      // city:adds.region.title,
      // space:adds.area,
      // interface:adds.front,
      // price:adds.price,
      // autoNumber:adds.auto_number,
      // phone:adds.phone,
      // whatsApp:adds.whatsapp,
      // lat:adds.lat,
      // lng:adds.lng,
      // views:adds.view_count,
      // time:'4',
      // user_id:adds.user_id,
      
      // }
      // }
      
      // setServicse(pre=>[...pre,data])
    console.log(filterCtx.serviceResults);      
      
      })
      },[])


  return (
  <div className='results-container'>
  <Nav/>
{showAds?<div className='results'>
    {/* <h2 className='results-heading'>منازل للإيجار في حولي</h2> */}
      <div className="premium-adds-results">
      <h1 className='premium-title'>إعلانات مميزة</h1>
      {
          premuimAdds&& premuimAdds.map((premiumAddsData)=>(
        <PremuimAdd  singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.add_id} add_id={premiumAddsData.add_id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

        ))
        }
      </div>
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
  </div>  :
      <div className='results'>
      {/* <h2 className='results-heading'>منازل للإيجار في حولي</h2> */}
        <div className="adds-results">
        <h1 className='premium-title'>أحدث الإعلانات</h1>
        {
          servicesData&&servicesData.map((addsData)=>(
          <Add singleEstate={addsData.singleEstatData} add_id={addsData.add_id} key={addsData.add_id} disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>
  
          ))
          }
        </div>
      
          <span className="end-results">
          انتهت نتائج البحث ولا يوجد المزيد من الإعلانات
          </span>
    </div>  }

    <Footer/>
  </div>
  )
}

export default SearchResultComponents