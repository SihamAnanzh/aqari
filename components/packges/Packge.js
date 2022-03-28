import axios from 'axios'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Packge = (props) => {
    const [showPackgeDetail,setShwoPackgeDetail]=useState(false)
    const [invoiceId,setInvoiceId]=useState('')
  const session=useSession()
    const route=useRouter()
    const handleClick=()=>{
        let formData=new FormData()
        formData.append('package_id',props.id)
        axios({
            method: "post",
            url: "https://stagingapi.aqarifinder.com/api/user/package/get_link",
            headers: { "Content-Type": "multipart/form-data" , 'Authorization':session.data !=null?session.data.id:route.replace('/signIN')},
            data: formData,
        
      
        }).then((res)=>{
            res.data.results.isSuccess?setInvoiceId(res.data.results.data.invoiceId):alert('something wrong')
            // route.push(res.data.results.data.paymentURL)

        }).then(res=>{
            axios({
                method: "post",
                url: `https://stagingapi.aqarifinder.com/api/user/package/purchase/${invoiceId}`,
                headers: { "Content-Type": "multipart/form-data" , 'Authorization':session.data !=null?session.data.id:route.replace('/signIN')},
            
            }).then((res)=>{
                console.log(res);
                res.data.status.code == 200?route.replace('/'):""
            })
        })
    }
  
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
        <div className='add-type show'>
            <span className='add-type-first'>
            <span className='number-adds'>{props.currencyId}</span>{props.titleTwo}
             <span className='price-adds'>{props.price}</span>{props.currencyTitle}
             </span>   
         
        </div>
        <div className='add-type hide' onClick={handleClick}>
            <span className='add-type-first'>
            <span className='number-adds'>{props.currencyId}</span>{props.titleTwo}
             <span className='price-adds'>{props.price}</span>{props.currencyTitle}
             </span>   
         
        </div>
        <div className='subscribe-type'>
            <button className='subscribe-btn' onClick={handleClick}>{props.btn}</button>
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