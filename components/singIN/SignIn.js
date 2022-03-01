import React ,{useState} from 'react'
import Link from 'next/link'

export const SignInComponent = () => {
    const [rememberME,setRememberMe]=useState(false)
    const [showPassword, setShowPassword]=useState(false)
    const [wrongPassword, setWrongPassword] = useState(true);
  return (
    <div className="signin-contanier">
        <div className="sign">
            <h2>دخول</h2>
        </div>
        <div className="inputs-group">
           <div className="sign-input mail">
               <h3>البريد الإلكتروني</h3>
               <input type="text" className="sign-mail" placeholder='البريد الإلكتروني' tabIndex={1} autoFocus />
           </div>
           <div className="sign-input password">
               <h3>كلمة السر</h3>
               <input type={showPassword ?"text":"password"} className="sign-password" placeholder='كلمة السر' tabIndex={2} />
               <span className='passwrod-icon' onClick={()=>setShowPassword(!showPassword)}>
               <img src={`assets/img/${showPassword?"showPassword":"hidePassword"}.svg`}alt="" />
            </span>
           </div>

        </div>
        <div className="forget-passwrod" >
           
            <div style={{
                PaddingBottom:'15px'
            }}> 
            <span className="error-message" style={{
                       display:`${wrongPassword ? 'none':""}`
            }}>
                <img src="assets/img/Error.svg"  alt="" style={{
             
                    paddingLeft:"4px"
                }}/>
                كلمة السر او الايميل غير صحيح
                </span>        
                   <Link  href="/signIN/forgetPasswrod">
                   اضغط هنا اذا نسيت كلمة السر؟
                
                   </Link>
                 </div>

                 <span>
             
                 <span className='remember-word' onClick={()=>setRememberMe(!rememberME)} >
                 {/* <span style={{
                     display:"block"
                 }}></span> */}
                     تذكرني</span>
                <img  onClick={()=>setRememberMe(!rememberME)} src={`assets/img/${rememberME?'checked.svg':"unChecked.svg"}`} alt="" />
                 </span>

        </div>
        <div className="sign-btn">
        دخول
        </div>
        <div className="social-sign">
           <p>او يمكنك الدخول من خلال</p>
           <ul className="social-icon">
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
           <span className="goSignUp">
               <span>لا تملك حساب لدينا؟</span>
               <Link href="/signUp">تسجيل</Link>

           </span>
        </div>
    </div>
  )
}
