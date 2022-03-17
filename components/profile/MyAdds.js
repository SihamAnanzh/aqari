import React, { useEffect,useContext, useState } from 'react'
import Adds from '../adds/Adds'
import Add from '../adds/Add'
import axios from 'axios'
import { AuthContext } from '../../stores/auth-context'
const MyAdds = () => {
const [latest, setLatest]=useState([])
const [useData,setUserData]=useState([])
const authCtx=useContext(AuthContext)
  useEffect(()=>{

    axios({
      method: "get",
      url: "https://stagingapi.aqarifinder.com/api/user/ads/list",
      headers: {"lang":'ar' , 'Authorization':authCtx.token},

    })  .then(res=>{
      setUserData(res.data.results)
      console.log(res.data.results);
     

    })
  }
  ,[])



  useEffect(()=>{
    useData&&useData.map((adds)=>{
    
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
    
    setLatest(pre=>[...pre,data])
    authCtx.loadding(false)
    console.log();
    
    
    })
    },[useData])
  return (
    <div className='adds-container'>
         <h1 className='premium-title'>أحدث الإعلانات</h1>
      {
       latest&&latest.map((addsData)=>(
        <Add singleEstate={addsData.singleEstatData} add_id={addsData.add_id} key={addsData.add_id} disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>

       ))
       }
    </div> 
    
    
    
    )
}

export default MyAdds