import Link from 'next/link'
import React from 'react'

const DialogBox = () => {
  return (
    <div className='box'>
        <div className="icon-box">
            <img src="/assets/img/dialog-icon.svg" alt=""  style={{
                marginTop:'-32px'
            }}/>
        </div>
        <div className="content-box">
            <p>
        من فضلك تفقد بريدك الالكتروني لإعادة تعيين كلمة المرور
        </p>
        </div>
        <div className="box-btns">
           
              <div className="box-btn signUp-btn">
              <Link href='/signIN'>تسجيل</Link>
              </div>
              <div className="box-btn">
            <div  onClick={()=>console.log(res)}>إعادة الإرسال</div>
            </div>
        </div>
    </div>
  )
}

export default DialogBox