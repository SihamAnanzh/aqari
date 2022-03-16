import React ,{useEffect, useState,useContext} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { AuthContext } from '../../stores/auth-context'

export const SignInComponent = () => {
    const [rememberME,setRememberMe]=useState(false)
    const [showPassword, setShowPassword]=useState(false)
    const [wrongPassword, setWrongPassword] = useState(true);
    const [email,setEmail]=useState('')
    const [password,setPassowrd]=useState('')
    const route=useRouter()
    const authCtx=useContext(AuthContext)
    const handleChnage=(e)=>{
    return e.target.value
  }


 const  handleSubmit=()=>{
     password !=="" && email !=="" ?(
     axios.post('https://stagingapi.aqarifinder.com/api/user/login',{email ,password})
     .then(res=>{
   
         res.data.status.code === 401 ?setWrongPassword(false): (
             console.log(res),
             authCtx.login(res.data.results.token,res.data.results.id),
             authCtx.premiumAdd=res.data.results.premium_ads_left,
             route.replace('/profile')

         )
         
     }).catch(err=>console.log(err))
    ):    alert('الرجاء تعبئة جميع الحقول')

       
 }

  return (
    <div className="signin-contanier">
        <div className="sign">
            <h2>دخول</h2>
        </div>
        <div className="inputs-group">
           <div className="sign-input mail">
               <h3>البريد الإلكتروني</h3>
               <input type="email" className="sign-mail" placeholder='البريد الإلكتروني' tabIndex={1} autoFocus onChange={e=>{
                   setEmail(handleChnage(e))
                   setWrongPassword(true)
               }} />
           </div>
           <div className="sign-input password">
               <h3>كلمة السر</h3>
               <input type={showPassword ?"text":"password"} className="sign-password" placeholder='كلمة السر' tabIndex={2} onChange={e=>{
                   setPassowrd(handleChnage(e))
                   setWrongPassword(true)
               }} />
               <span className='passwrod-icon' onClick={()=>setShowPassword(!showPassword)}>
               <img src={`assets/img/${showPassword?"showPassword":"hidePassword"}.svg`}alt="" style={{
                   cursor:'pointer'
               }} />
            </span>
           </div>

        </div>
        <div className="forget-passwrod" >
           
            <div style={{
                PaddingBottom:'15px'
            }}> 
            <span className="error-message" style={{
                       display:`${wrongPassword ? 'none':""}`,
                       marginRight: '-13px',
                       paddingBottom:"9px"
            }}>
                <img src="assets/img/Error.svg"  alt="" style={{
             
                    paddingLeft:"4px",
                    
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
        <div className="sign-btn" onClick={handleSubmit}>
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
