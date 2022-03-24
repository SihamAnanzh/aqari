import React, { useState,useEffect } from 'react'
import Nav from '../shared/nav/Nav'
import Footer from '../shared/footer/Footer'
import axios from 'axios'
import swal from 'sweetalert';
import { useRouter } from 'next/router';

export const ContactUs = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [message,setMessage]=useState('')
    const route=useRouter()
     const [clear,setClear]=useState(false)
    useEffect(()=>{
        setName('')
        setEmail('')
        setMessage('')
        setPhone('')

    },[clear])
   const  handleClick=()=>{
       name ==''||email==""||phone==''||message==""?
       swal('تحذير', 'يرجى تعبئة جميع الحقول', 'warning')

       :axios.post('https://stagingapi.aqarifinder.com/api/contact_us/create',{name, email,message, phone}).then(res=>{
        swal("شكرا للتواصل",'تم ارسال الرسالة بنجاح','success')
        route.reload('/')
  setClear(true)
       })
   }
  return (
    <>
    <Nav/>
    <div className="contact-container">
        <div className="contact-header">
        <h1 className="call-us">
         اتصل بنا
         </h1>
         <div className="messega">الرجاء تعبئة النموذج وسوف نقوم بالرد عليك بأقرب وقت</div>
        </div>
     
         <div className="input-box">
             <h2>الاسم</h2>
             <input type='text'   className="name-input" placeholder='الاسم' onChange={e=>setName(e.target.value)} tabIndex={1}/>
         </div>
         <div className="input-box">
             <h2>البريد الإلكتروني</h2>
             <input type='email' className="email-input" placeholder='البريد الإلكتروني' tabIndex={2} onChange={e=>setEmail(e.target.value)}/>
         </div>
         <div className="input-box">
             <h2>رقم الهاتف</h2>
             <input type='text'  className="phone-unm-input" placeholder='رقم الهاتف' tabIndex={3} onChange={e=>setPhone(e.target.value)}/>
         </div>
         <div className="input-box">
             <h2>الرسالة</h2>
             <textarea className="user-message-input" placeholder='الرسالة' onChange={e=>setMessage(e.target.value)} tabIndex={4}/>
         </div>
         <div className="send-btn-contact" tabIndex={5} onClick={handleClick}>
         ارسال
         </div>
        </div>
    <Footer/>
    </>
  )
}
