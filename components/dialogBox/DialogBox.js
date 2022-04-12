import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios'
import { useSession } from 'next-auth/react';
const DialogBox = ({ message }) => {
  const seesion=useSession()
  const route=useRouter()
  return (
    <div className='box'>
        <div className="icon-box">
            <img src="/assets/img/dialog-icon.svg" alt=""  style={{
                marginTop:'-32px'
            }}/>
        </div>
        <div className="content-box">
        <p>
          {route.locale=='ar'?"من فضلك تفقد بريدك الالكتروني لإعادة تعيين كلمة المرور":"Please check your email to reset your password"}
        </p>
        </div>
        <div className="box-btns">
           
              <div className="box-btn signUp-btn">
          <Link href='/signIN/forgetPasswrod/confirmPassword'>{route.locale=='ar'?"اغلاق":"close"}</Link>
              </div>
              <div className="box-btn">
          <div onClick={() =>
               axios.post('https://stagingapi.aqarifinder.com/api/user/password/forget',{email}).then((res)=>{
               
                console.log(res);
              }
              ).then((res) => {
                console.log(res);
              })
              }>{route.locale == 'ar' ? "إعادة الإرسال" : "resend email"}</div>
            </div>
      </div>
      </div>
  )
}

export default DialogBox