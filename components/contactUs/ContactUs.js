import React from 'react'
import Nav from '../shared/nav/Nav'
import Footer from '../shared/footer/Footer'
export const ContactUs = () => {
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
             <input className="name-input" placeholder='الاسم'/>
         </div>
         <div className="input-box">
             <h2>البريد الإلكتروني</h2>
             <input className="email-input" placeholder='البريد الإلكتروني'/>
         </div>
         <div className="input-box">
             <h2>رقم الهاتف</h2>
             <input  className="phone-unm-input" placeholder='رقم الهاتف'/>
         </div>
         <div className="input-box">
             <h2>الرسالة</h2>
             <textarea className="user-message-input" placeholder='الرسالة'/>
         </div>
         <div className="send-btn-contact">
         ارسال
         </div>
        </div>
    <Footer/>
    </>
  )
}
