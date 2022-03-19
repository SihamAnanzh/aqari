import React, { useEffect,useContext, useState } from 'react'
import PremiumService from '../adds/PremiumService'
import axios from 'axios'
import { AuthContext } from '../../stores/auth-context'

const MyService = () => {
const [latest, setLatest]=useState([])
const [userData,setUserData]=useState([])
const authCtx=useContext(AuthContext)
useEffect(()=>{

axios({
method: "get",
url: "https://stagingapi.aqarifinder.com/api/user/services/list",
headers: {"lang":'ar' , 'Authorization':authCtx.token},

})  .then(res=>{
setUserData(res.data.results)
console.log(res.data.results);


})
}
,[])



useEffect(()=>{
  userData&&userData.map((adds)=>{

let data={ 
add_id:adds.id,
user_id:adds.user_id,
images:adds.images.length >0?adds.images:'/assets/img/home.jpg',
title:adds.title,
address:adds.regions_string,
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
address:adds.regions_string,
discriptions:adds.description,
city:adds.regions.title,
price:adds.price,
phone:adds.phone,
whatsApp:adds.whatsapp,
views:adds.view_count,
time:'4',
user_id:adds.user_id,

}
}

setLatest(pre=>[...pre,data])
authCtx.loadding(false)



})
},[userData])

console.log(latest);
  return (
<div className='adds-container'>
         <h1 className='premium-title'>أحدث الخدمات</h1>
      {
       latest&&latest.map((premiumAddsData)=>(
        <PremiumService singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.add_id} add_id={premiumAddsData.add_id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

       ))
       }
    </div> 
  )
}

export default MyService