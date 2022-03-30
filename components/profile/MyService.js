import React, { useEffect,useContext, useState } from 'react'
import PremiumService from '../adds/PremiumService'
import { AuthContext } from '../../stores/auth-context'

const MyService = ({serviceData,adsOb}) => {
const [latest, setLatest]=useState([])
const [userData,setUserData]=useState([])
const authCtx=useContext(AuthContext)

console.log(serviceData);
  return (
<div className='adds-container'>
      <h1 className='premium-title'>{adsOb.newestٍervice}</h1>
      {
       serviceData&&serviceData.map((premiumAddsData)=>(
        <PremiumService singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.id} id={premiumAddsData.id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

       ))
       }
    </div> 
  )
}

export default MyService