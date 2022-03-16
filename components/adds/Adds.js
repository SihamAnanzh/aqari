import React, { useEffect, useState } from 'react'
import PremuimAdd from './PremuimAdd'
import Add from './Add'
import axios from 'axios'


const Adds = ({premuimAdds,latestData,servicesData,ads,premium}) => {

  
  return (
    <div className='adds-container'>
      <h1 className='premium-title'>إعلانات مميزة</h1>
         {
           premuimAdds&& premuimAdds.map((premiumAddsData)=>(
          <PremuimAdd singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.add_id} add_id={premiumAddsData.add_id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

         ))
         }
            {
           premium&& premium.map((premiumAddsData)=>(
          <PremuimAdd singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.add_id} add_id={premiumAddsData.add_id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

         ))
         }
               

           <h1 className='premium-title'>أحدث الإعلانات</h1>
           {
         latestData&&latestData.map((addsData)=>(
          <Add singleEstate={addsData.singleEstatData} add_id={addsData.add_id} key={addsData.add_id} disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>

         ))
         }
         {
         ads&&ads.map((addsData)=>(
          <Add singleEstate={addsData.singleEstatData} add_id={addsData.add_id} key={addsData.add_id} disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>

         ))
         }
      

  
    {  premuimAdds&&premuimAdds.length>10&&
    <div className='adds-btn'>
            المزيد<span className='btn-icon'>
            <img src='/assets/img/+btn.svg' style={{
              width: '20px',
              height: '20px',
            marginRight:'5px',
            marginTop:'8px'
            }}/>
                </span> 
          </div>}
      </div>
  )
}


export default Adds