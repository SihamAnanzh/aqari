import React, { useState } from 'react'

const Packge = ({titleOne , titleTwo}) => {
    const [showPackgeDetail,setShwoPackgeDetail]=useState(false)
  
    
  
    return (
      <>
    <div className='packge'>
        <div className='type'>
            <div className='packge-img'  onClick={()=>setShwoPackgeDetail(!showPackgeDetail)}>
                <img src='assets/img/packge.jpg'/>
            </div>
            <div className='packge-info'>
                <span className='packge-name'>{titleOne}</span>
                <span className='packge-type'>{titleTwo}</span>
            </div>
        </div>
        <div className='add-type'>
            <span className='add-type-first'>
            <span className='number-adds'>1</span>إعلان مميز
             <span className='price-adds'>8</span>د.ك
             </span>      
             
             <span className='add-type-second'>
            <span className='number-adds'>1</span>إعلان مميز
             <span className='price-adds'>8</span>د.ك
             </span>      
        </div>
        <div className='subscribe-type'>
            <button className='subscribe-btn'>إشتراك</button>
            <button className='subscribe-btn'>إشتراك</button>

        </div>
    </div>
        

        { showPackgeDetail&&
          <div className={showPackgeDetail?"overlay":""}   onClick={()=>{
            setShwoPackgeDetail(false)
          }}>

                <div className="single-packge">
                <h3>اجعل إعلانك مميز</h3>
                <img className='packge-img' src="/assets/img/packge.jpg" alt="" />
                <button className='btn-packge'  onClick={()=>setShwoPackgeDetail(!showPackgeDetail)}>إغلاق</button>
            </div>
            </div>
        }
       
   
    </>
  )
}

export default Packge