import React, { useEffect, useState } from 'react'
import PremuimAdd from './PremuimAdd'
import Add from './Add'
const Adds = () => {


  const premiumAddsData={
    img:'/assets/img/home.jpg',
    tilte:'منزل للإيجار',
    address:'الكويت ميدان حولي',
    price:'450',
    time:'4',
    views:'199',
    whatsApp:"50351216",
    phone:'50351216',
    disc:"منزل فخم شبه جديد في الصديق منزل فخم شبه جديد في منزل فخم شبه جديد في الصديق منزل فخم شبه جديد في منزل فخم شبه جديد في الصديق منزل فخم شبه جديد"

  } 
  const addsData={
    img:'assets/img/home.jpg',
    title:'منزل للإيجار',
    address:'الكويت ميدان حولي',
    price:'450',
    time:'4',
disc:"منزل فخم شبه جديد في الصديق منزل فخم شبه جديد في منزل فخم شبه جديد في الصديق"
  } 

  
  return (
    <div className='adds-container'>
      <h1 className='premium-title'>إعلانات مميزة</h1>
       
        <PremuimAdd img={premiumAddsData.img} title={premiumAddsData.tilte} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>
        <PremuimAdd img={premiumAddsData.img} title={premiumAddsData.tilte} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>
        <PremuimAdd img={premiumAddsData.img} title={premiumAddsData.tilte} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

           <h1 className='premium-title'>أحدث الإعلانات</h1>
           <Add disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>
           <Add disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>
           <Add disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>

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