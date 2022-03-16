import React,{useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import axios from 'axios'
import {AuthContext} from '../../stores/auth-context'
import { useRouter } from 'next/router'
const SignUpComponents = () => {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassowrd]=useState('')
    const [confirmPassword,setConfirmPassowrd]=useState('')
    const [matching,setMaching]=useState(true)
    const [phone,setPhone]=useState('')
    const authCtx=useContext(AuthContext)
     
const route=useRouter()
const handleChnage=(e)=>{
      return e.target.value
    }

useEffect(()=>{
        password !== "" && confirmPassword !== ""?
        password === confirmPassword ?setMaching(true):setMaching(false):""
    
},[confirmPassword,password])


useEffect(()=>{
    console.log(authCtx);
    authCtx.loadding(true)
},[])

const handleSubmit=()=>{
    authCtx.loadding(!authCtx.isLoadding)
    let resData={}
    email !=="" &&name !=="" &&(password !== "" && matching)&&phone !==null ?(
        axios.post('https://stagingapi.aqarifinder.com/api/user/register',{email,name ,password,phone})
        .then(res=>{
            res.data.status.code === 400?alert(res.data.status.message):
            (
                console.log(res),
                authCtx.token=res.data.resutls.token,
                route.replace('/signIN'),
                authCtx.loadding(false)

            )
    
            
        })
        .catch(err=>console.log(err))
    ):alert('الرجاء تعبئة جميع الحقول')


}
  return (
    <div className="signin-contanier signup-container ">
    <div className="sign">
        <h2>تسجيل</h2>
    </div>
    <div className="inputs-group">
    <div className="sign-input name">
            <h3>الاسم</h3>
               <input type="text" className="sign-name" placeholder='الاسم' tabIndex={1} autoFocus onChange={(e)=>setName(handleChnage(e))} />
           </div>
       <div className="sign-input mail">
           <h3>البريد الإلكتروني</h3>
           <input type="email" className="sign-mail" placeholder='البريد الإلكتروني' tabIndex={2}  onChange={(e)=>setEmail(handleChnage(e))} />
       </div>
       <div className="sign-input phone-singup">
           <h3>رقم الموبايل</h3>
           <input type="number" className="sign-mail" placeholder='رقم الموبايل' maxLength='4'tabIndex={3}  onChange={(e)=>setPhone
            (handleChnage(e))}/>
       </div>
       <div className="sign-input password">
           <h3>كلمة السر</h3>
           <input type="password" className="sign-password" placeholder='كلمة السر' tabIndex={4} 
           onChange={(e)=>{
               setPassowrd(handleChnage(e))
              
            }}/>
       </div>
       <div className="sign-input password">
           <h3>
          {matching?"تاكيد كلمة السر":"لا يوجد تطابق" } </h3>
           <input type="password" className="sign-password" placeholder=' تاكيد كلمة السر '   onChange={(e)=>{
               setConfirmPassowrd(handleChnage(e))
            
            }}/>
       </div>

    </div>

    <div className="sign-btn" onClick={handleSubmit}>
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