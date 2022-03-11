import React, { useEffect, useState } from 'react'
import PremuimAdd from './PremuimAdd'
import Add from './Add'
import axios from 'axios'


const Adds = ({singleEstateLatest,premuimAdds,latestData,singleEstate}) => {


  
  return (
    <div className='adds-container'>
      <h1 className='premium-title'>إعلانات مميزة</h1>
         {
         premuimAdds.map((premiumAddsData)=>(
          <PremuimAdd singleEstate={singleEstate} key={premiumAddsData.add_id} add_id={premiumAddsData.add_id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

         ))
         }      

           <h1 className='premium-title'>أحدث الإعلانات</h1>
           {
         latestData.map((addsData)=>(
          <Add singleEstate={singleEstateLatest} add_id={addsData.add_id} key={addsData.add_id} disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>

         ))
         }


         <div className='adds-btn'>
             المزيد<span className='btn-icon'>
              <img src='/assets/img/+btn.svg' style={{
                width: '20px',
                height: '20px',
              marginRight:'5px',
              marginTop:'8px'
              }}/>
                  </span> 
           </div>
      </div>
  )
}


export default Adds