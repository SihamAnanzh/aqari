import React from 'react'
import Link from 'next/link'
const SignUpComponents = () => {
  return (
    <div className="signin-contanier signup-container ">
    <div className="sign">
        <h2>تسجيل</h2>
    </div>
    <div className="inputs-group">
    <div className="sign-input name">
            <h3>الاسم</h3>
               <input type="text" className="sign-name" placeholder='الاسم' tabIndex={1} autoFocus />
           </div>
       <div className="sign-input mail">
           <h3>البريد الإلكتروني</h3>
           <input type="text" className="sign-mail" placeholder='البريد الإلكتروني' tabIndex={2}  />
       </div>
       <div className="sign-input phone-singup">
           <h3>رقم الموبايل</h3>
           <input type="text" className="sign-mail" placeholder='رقم الموبايل' tabIndex={3} />
       </div>
       <div className="sign-input password">
           <h3>كلمة السر</h3>
           <input type="text" className="sign-password" placeholder='كلمة السر' tabIndex={4} />
       </div>
       <div className="sign-input password">
           <h3>تاكيد كلمة السر</h3>
           <input type="text" className="sign-password" placeholder=' تاكيد كلمة السر ' />
       </div>

    </div>

    <div className="sign-btn">
    تسجيل
    </div>
    <div className="social-sign">
       <p>او يمكنك التسجيل من خلال</p>
       <ul className="social-icon" style={{
           marginBottom:"40px"
       }}>
            <li className="google">
                <img src="assets/img/google-icon.svg" alt="" />
            </li>
            <li className="face">
                <img src="assets/img/facebook-2.svg" alt="" />
            </li>
            <li className="apple">
                <img src="assets/img/appSgin.svg" alt="" />
            </li>
       </ul>
 
    </div>
</div>
  )
}

export default SignUpComponents