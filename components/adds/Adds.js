import React, { useEffect, useState } from 'react'
import PremuimAdd from './PremuimAdd'
import Add from './Add'
import axios from 'axios'


const Adds = ({premuimAdds,latestData,ads,premium,adsOb}) => {
const [visible,setVisible]=useState(5)
const loadMoreHandler=()=>{

  setVisible(pre=>pre+5)
}
  return (
    <div className='adds-container'>
      <h1 className='premium-title'>{adsOb.ad1}</h1>
         {
           premuimAdds&& premuimAdds.map((premiumAddsData,index)=>(
           
              <PremuimAdd  adsOb={adsOb} singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.add_id} add_id={premiumAddsData.add_id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

         ))
         }
            {
           premium&& premium.map((premiumAddsData)=>(
          <PremuimAdd   adsOb={adsOb} singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.add_id} add_id={premiumAddsData.add_id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

         ))
         }
               

           <h1 className='premium-title'>{adsOb.ad2}</h1>
           {
        latestData && latestData.slice(0, visible).map((addsData) => (
        
          <Add  adsOb={adsOb} singleEstate={addsData.singleEstatData}  add_id={addsData.add_id} key={addsData.add_id} disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>

         ))
         }
         {
        ads && ads.slice(0, visible).map((addsData) => (
         <Add   adsOb={adsOb} singleEstate={addsData.singleEstatData} add_id={addsData.add_id} key={addsData.add_id} disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.images}/>
 
         ))
         }
      

  
      {
        latestData.length!== visible &&
    <div className='adds-btn' onClick={loadMoreHandler} style={{
      cursor:'pointer'
        }}>{adsOb.ad3}<span className='btn-icon'>
            <img src='/assets/img/+btn.svg' style={{
              width: '20px',
              height: '20px',
              marginRight:'12px',
              marginTop:'8px',
              cursor:'pointer'
            }}/>
                </span> 
          </div>}
      </div>
  )
}


export default Adds