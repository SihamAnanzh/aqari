import React, { useEffect, useState } from 'react'
import PremuimAdd from './PremuimAdd'
import Add from './Add'
import axios from 'axios'


const Adds = ({premuimAdds,latestData,ads,premium,adsOb}) => {
const [visible,setVisible]=useState(3)
  
const loadMoreHandler=()=>{

  setVisible(pre=>pre+3)
}
  return (
    <div className='adds-container'>
      <h1 className='premium-title'>{adsOb.ad1}</h1>
         {
           premuimAdds&& premuimAdds.map((premiumAddsData,index)=>(
           
              <PremuimAdd singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.add_id} add_id={premiumAddsData.add_id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

         ))
         }
            {
           premium&& premium.map((premiumAddsData)=>(
          <PremuimAdd singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.add_id} add_id={premiumAddsData.add_id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

         ))
         }
               

           <h1 className='premium-title'>{adsOb.ad2}</h1>
           {
         latestData&&latestData.slice(0,visible).map((addsData)=>(
          <Add singleEstate={addsData.singleEstatData} add_id={addsData.add_id} key={addsData.add_id} disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>

         ))
         }
         {
         ads&& ads.slice(0,2).map((addsData)=>(
          <Add singleEstate={addsData.singleEstatData} add_id={addsData.add_id} key={addsData.add_id} disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>

         ))
         }
      

  
    {
    <div className='adds-btn' onClick={loadMoreHandler}>
            {adsOb.ad3}<span className='btn-icon'>
            <img src='/assets/img/+btn.svg' style={{
              width: '20px',
              height: '20px',
            marginRight:'5px',
            marginTop:'8px',
            cursor:'pointer'
            }}/>
                </span> 
          </div>}
      </div>
  )
}


export default Adds