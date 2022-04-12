import React, { useState,useEffect } from 'react'
import Nav from '../shared/nav/Nav'
import Footer from '../shared/footer/Footer'
import axios from 'axios'
import swal from 'sweetalert';
import { useRouter } from 'next/router';
import BackBtn from '../BackBtn'
export const ContactUs = ({navOb,fo1,contactOB}) => {
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
    
    const handleClick = () => {
        
     
       name == '' || email == "" || phone == '' || message == "" ?
           route.locale == "en" ? swal('warning','Fill all field please' ,'warning') :
           swal('تنبيه','يرجى تعبئة جميع الحقول',  'warning')
               

           :
           (
               email.indexOf('@') == -1 ? (
                route.locale == 'ar' ? swal("", "بريد إلكتروني خاطئ", 'info') :
                swal("", 'invalid email', 'info')
               ) :
                   (phone.length < 8  ||phone.length >12?
                       (
                           route.locale == 'ar' ? swal("", "رقم الهاتف خاطئ", 'info'):
                               swal("", 'invalid phone number', 'info')
                       )
                   :
                   
                    axios.post('https://stagingapi.aqarifinder.com/api/contact_us/create', { name, email, message, phone }).then(res => {
                        route.locale == 'ar' ? swal("شكرا للتواصل", "تم ارسال الرسالة بنجاح", 'success') :
                               swal("Done", 'message sent successfully', 'success')
                           setTimeout(() => {
                            route.push('/')
                           },1000)
                    
                        setClear(true)
                        setEmail('')
                        setName('')
                        setPhone('')
                        setMessage('')
                   
              
                    })
               )    
        
       )
   }
  return (
    <>
    <Nav navOb={navOb}/>
          <div className="contact-container">
              
        <div className="contact-header">
        <h1 className="call-us">
        {contactOB.call}
         </h1>
         <div className="messega">
         {contactOB.paragaph}
                      </div>
        </div>
     
         <div className="input-box">
             <h2>{contactOB.name}</h2>
                  <input type='text' className="name-input" placeholder={contactOB.name} value={name}
                      onChange={e => setName(e.target.value)} tabIndex={1} />
         </div>
         <div className="input-box">
             <h2>{contactOB.email}</h2>
             <input type='email' className="email-input" placeholder={contactOB.email} value={email} tabIndex={2} onChange={e=>setEmail(e.target.value)}/>
         </div>
         <div className="input-box">
             <h2>{contactOB.phone}</h2>
             <input type='text' min={8} max={12} required  className="phone-unm-input" placeholder={contactOB.phone} value={phone} tabIndex={3} onChange={e=>setPhone(e.target.value)}/>
         </div>
         <div className="input-box">
             <h2>{contactOB.message}</h2>
             <textarea className="user-message-input" placeholder={contactOB.message} value={message}  onChange={e=>setMessage(e.target.value)} tabIndex={4}/>
         </div>
         <div className="send-btn-contact" tabIndex={5} onClick={handleClick}>
         {contactOB.send}
         </div>
          </div>


    <Footer fo1={fo1}/>
    </>
  )
}
