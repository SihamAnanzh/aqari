import React, { useState } from 'react'

const Packge = (props) => {
    const [showPackgeDetail,setShwoPackgeDetail]=useState(false)
  
    
  
    return (
      <>
    <div className='packge'>
        <div className='type'>
            <div className='packge-img'  onClick={()=>setShwoPackgeDetail(!showPackgeDetail)}>
                <img src={props.logo}/>
            </div>
            <div className='packge-info'>
                <span className='packge-name'>{props.titleOne}</span>
                <span className='packge-type'>{props.titleTwo}</span>
            </div>
        </div>
        <div className='add-type'>
            <span className='add-type-first'>
            <span className='number-adds'>{props.currencyId}</span>{props.titleTwo}
             <span className='price-adds'>{props.price}</span>{props.currencyTitle}
             </span>   
             {/* <span className='add-type-second'>
            <span className='number-adds'>{props.currencyId}</span>{props.titleTwo}
            <span className='price-adds'>{props.price}</span>{props.currencyTitle}
             </span>       */}
        </div>
        <div className='subscribe-type'>
            <button className='subscribe-btn'>إشتراك</button>
            {/* <button className='subscribe-btn'>إشتراك</button> */}

        </div>
    </div>
        

        { showPackgeDetail&&
          <div className={showPackgeDetail?"overlay":""}   onClick={()=>{
            setShwoPackgeDetail(false)
          }}>

                <div className="single-packge">
                <h3>اجعل إعلانك مميز</h3>
                <img className='packge-img' src={props.logo} alt="" />
                <button className='btn-packge'  onClick={()=>setShwoPackgeDetail(!showPackgeDetail)}>إغلاق</button>
            </div>
            </div>
        }
       
   
    </>
  )
}

export default Packge