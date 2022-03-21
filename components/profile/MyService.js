import React, { useEffect,useContext, useState } from 'react'
import PremiumService from '../adds/PremiumService'
import { AuthContext } from '../../stores/auth-context'

const MyService = ({serviceData}) => {
const [latest, setLatest]=useState([])
const [userData,setUserData]=useState([])
const authCtx=useContext(AuthContext)


  return (
<div className='adds-container'>
         <h1 className='premium-title'>أحدث الخدمات</h1>
      {
       serviceData&&serviceData.map((premiumAddsData)=>(
        <PremiumService singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.add_id} add_id={premiumAddsData.add_id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

       ))
       }
    </div> 
  )
}

export default MyService