import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { AuthContext } from '../../stores/auth-context'
import { useRouter } from 'next/router'
import { getCsrfToken, signIn, getSession, useSession, getProviders, signOut } from 'next-auth/react';
import swal from 'sweetalert'

const SignUpComponents = ({ sginUpOb,providers }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassowrd] = useState('')
    const [confirmPassword, setConfirmPassowrd] = useState('')
    const [matching, setMaching] = useState(true)
    const [phone, setPhone] = useState('')
    const authCtx = useContext(AuthContext)
    const [checkedConditions, setCheckedConditions] = useState(false)

    const [wrongEmail, setwrongEmail] = useState(false)
    const route = useRouter()
    const handleChnage = (e) => {
        return e.target.value
    }




    const handleSubmit = async (e) => {
        let nameIn = document.getElementById('name')
        let emailIn=document.getElementById('email')
        let phoneIn = document.getElementById('phone')
        let passwrodIn=document.getElementById('name')
        let passwrodConfrimIn=document.getElementById('name')


        name == "" && email == "" && password == "" && confirmPassword == "" && phone == "" ?
            (
                nameIn.classList.add('error-input'),
                emailIn.classList.add('error-input'),
                phoneIn.classList.add('error-input'),
                passwrodIn.classList.add('error-input'),
                passwrodConfrimIn.classList.add('error-input')

         

            ) : (
                name == "" && nameIn.classList.add('error-input'),
                email == "" && emailIn.classList.add('error-input'),
                password == "" && passwrodIn.classList.add('error-input'),
                confirmPassword == "" && passwrodConfrimIn.classList.add('error-input'),
                phone == "" && phoneIn.classList.add('error-input')


            )
        
        
        e.preventDefault();
        if (password !== confirmPassword) {
            route.locale == 'ar' && swal('تنبيه', 'كلمة السر غير متطابقة','info')
            route.locale == 'en' && swal('warning', 'password does not match', 'info')
             passwrodConfrimIn.classList.add('error-input'),
              passwrodIn.classList.add('error-input')
            console.log(passwrodIn);

            return;
        }
        if (!checkedConditions) {
            route.locale=='ar'&& swal("",'الرجاء الموافقة على الشروط والاحكام',"info")
            route.locale=='en'&&swal("",'Please agree to the terms and conditions','info')
            return
        }
        if (phone.length < 8 || phone.length < 12) {
            route.locale == 'ar' ? swal("", "رقم الهاتف خاطئ", 'info'):
                swal("", 'invalid phone number', 'info')
                phoneIn.classList.add('error-input')

            
               
        }
        const response = await axios.post('https://stagingapi.aqarifinder.com/api/user/register', { email, name, password, phone })
        if (response && response.data.status.code === 200) {
            const res = await signIn('aqari-login-auth', {
                redirect: false,
                username: email,
                password: password,
                callbackUrl: `/`,
            });
            if (res?.error) {
   console.log(response);
                swal(response.data.status.message)
            }
            else {
                console.log(response);

                if (res.url) route.push(res.url);
            }
        } else {

            swal(response.data.status.message)
        }
    }

    return (
        <div className="signin-contanier signup-container ">
            <form method="post" onSubmit={handleSubmit}>

                <div className="inputs-group">
                    <div className="sign-input signUp">
                        <div className="sign">
                            <h2>{sginUpOb.su6}</h2>
                        </div>
                    </div>
                    <div className="sign-input name">
                        <h3>{sginUpOb.su1}</h3>
                        <input type="text" id='name'
                            className="sign-name" placeholder={sginUpOb.su1} required
                            tabIndex={1} autoFocus
                            onChange={(e) => {
                                setName(handleChnage(e))
                                e.target.classList.remove('error-input')
                            }} />
                    </div>
                    <div className="sign-input mail"  >
                        <h3>{sginUpOb.su2}</h3>
                        <input type="email" id='email' required className="sign-mail"
                            placeholder={sginUpOb.su2} tabIndex={2} onChange={(e) => {
                                e.target.classList.remove('error-input')

                            setEmail(handleChnage(e))
                        }} />
                        {/* {wrongEmail && <div> البريد الاكتروني غير صحيح</div>} */}
                    </div>
                    <div className="sign-input phone-singup">
                        <h3>{sginUpOb.su3}</h3>
                        <input type="text" id='phone' required className="sign-mail"
                            placeholder={sginUpOb.su3} maxLength='12' minLength={8} tabIndex={3}
                            onChange={(e) => {
                                e.target.classList.remove('error-input')

                                setPhone(handleChnage(e))
                            }} />
                    </div>
                    <div className="sign-input password">
                        <h3>{sginUpOb.su4}</h3>
                        <input type="password" id='password' required className="sign-password" placeholder={sginUpOb.su4} tabIndex={4}
                            onChange={(e) => {
                                e.target.classList.remove('error-input')

                                setPassowrd(handleChnage(e))

                            }} />
                    </div>
                    <div className="sign-input password">
                        <h3>{sginUpOb.su5}</h3>
                        <input  type="password" id='password' className="sign-password error-input" required placeholder={sginUpOb.su5}
                            onChange={(e) => {
                                e.target.classList.remove('error-input')

                                setConfirmPassowrd(handleChnage(e))
                            }} />
                    </div>

             
                <div className="conditions chack-groub" style={{ cursor: 'pointer' ,marginTop:"20px"}} onClick={() => {
                setCheckedConditions(!checkedConditions)
       
              }}>
                        <img src={`/assets/img/${!checkedConditions ? 'emptyCheck' : 'fullCheck'}.svg`} alt="" />
                          
                     
                        
                    <span  style={{
                        color: "#00416b",
                      
                        fontFamily: "otfPlain",
                        fontWeight:"400",
                        fontSize: '18px', paddingLeft: route.locale == 'en' ? '10px' : "0",
                        paddingRight: route.locale =='ar'?'10px':'0'
                        }}>
                            {sginUpOb.su8}{" "}<a  target='_blank' style={{
                                  color: "#00416b",
                                  textDecoration:"underline",
                                  fontFamily: "otfPlain",
                            }} href={`https://akarii-demo.herokuapp.com/${route.locale}/terms`}
                            >{sginUpOb.su9}</a>
                         <a  target='_blank' style={{
                                color: "#00416b",
                                textDecoration:"underline",
                                fontFamily: "otfPlain",
                            }} href={`https://akarii-demo.herokuapp.com/${route.locale}/privacy`}>{" "} {sginUpOb.su10}</a>
                        </span>

                </div>
                    <div className="sign-input">
                        
                <button type='submit' tabIndex={5} className="sign-btn" style={{ outline: 'none', border: "none",fontSize:'22px',fontFamily:"otfPlain" }}>
                    {sginUpOb.su6}
                </button>
                </div>
                </div>
               
            </form>
            <div className="social-sign" style={{cursor:"pointer"}}>
                <p>{sginUpOb.su7}</p>

                <ul className="social-icon" style={{
                    marginBottom: "40px"
                }}>
                    {Object.values(providers).filter(q => q.type !== 'credentials').map((provider) => (
                        <li style={{cursor:"pointer"}} key={provider.name} onClick={() => {
                            signIn(provider.id)
                        }}>
                            {provider.name == 'Google' && <img src="/assets/img/google-icon.svg" alt="" />}
                            {provider.name == 'Facebook' && <img src="/assets/img/facebook-2.svg" alt="" />}
                            {provider.name == 'Apple' && <img src="/assets/img/appSgin.svg" alt="" />}

                        </li>

                    ))}
                </ul>
               
            </div>
        </div>
    )
}

export default SignUpComponents