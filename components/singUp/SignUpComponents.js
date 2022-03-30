import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { AuthContext } from '../../stores/auth-context'
import { useRouter } from 'next/router'
const SignUpComponents = ({ sginUpOb }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassowrd] = useState('')
    const [confirmPassword, setConfirmPassowrd] = useState('')
    const [matching, setMaching] = useState(true)
    const [phone, setPhone] = useState('')
    const authCtx = useContext(AuthContext)
    const [wrongEmail, setwrongEmail] = useState(false)
    const route = useRouter()
    const handleChnage = (e) => {
        return e.target.value
    }

    // useEffect(()=>{
    //         password !== "" && confirmPassword !== ""?
    //         password === confirmPassword ?setMaching(true):setMaching(false):""

    // },[confirmPassword,password])

    const handleSubmit = () => {
        authCtx.loadding(!authCtx.isLoadding)
        let resData = {}
        email !== "" && name !== "" && (password !== "" && matching) && phone !== null ? (
            password == confirmPassword &&
                email.indexOf('@') != -1 ?
                axios.post('https://stagingapi.aqarifinder.com/api/user/register', { email, name, password, phone })
                    .then(res => {
                        console.log(res.data);
                        res.data.status.code === 400 ? alert(res.data.status.message) :
                            (
                                console.log(res),
                                route.replace('/signIN')

                            )


                    }) : setwrongEmail(true)

        ) : alert('الرجاء تعبئة جميع الحقول')


    }
    return (
        <div className="signin-contanier signup-container ">

            <div className="inputs-group">
                <div className="sign-input ">
                    <div className="sign">
                        <h2>{sginUpOb.su6}</h2>
                    </div>
                </div>
                <div className="sign-input name">
                    <h3>{sginUpOb.su1}</h3>
                    <input type="text" className="sign-name" placeholder={sginUpOb.su1} tabIndex={1} autoFocus onChange={(e) => setName(handleChnage(e))} />
                </div>
                <div className="sign-input mail"  >
                    <h3>{sginUpOb.su2}</h3>
                    <input type="email" style={{
                        border: wrongEmail && "2px solid red"
                    }} className="sign-mail" placeholder={sginUpOb.su2} tabIndex={2} onChange={(e) => {
                        setwrongEmail(false)
                        setEmail(handleChnage(e))
                    }} />
                    {wrongEmail && <div> البريد الاكتروني غير صحيح</div>}
                </div>
                <div className="sign-input phone-singup">
                    <h3>{sginUpOb.su3}</h3>
                    <input type="text" className="sign-mail" placeholder={sginUpOb.su3} maxLength='12' minLength={8} tabIndex={3} onChange={(e) => setPhone
                        (handleChnage(e))} />
                </div>
                <div className="sign-input password">
                    <h3>{sginUpOb.su4}</h3>
                    <input type="password" className="sign-password" placeholder={sginUpOb.su4} tabIndex={4}
                        onChange={(e) => {
                            setPassowrd(handleChnage(e))

                        }} />
                </div>
                <div className="sign-input password">
                    <h3>{sginUpOb.su5}</h3>
                    <input type="password" className="sign-password" placeholder={sginUpOb.su5}
                        onChange={(e) => {
                            setConfirmPassowrd(handleChnage(e))
                        }} />
                </div>

            </div>

            <div className="sign-btn" onClick={handleSubmit}>
                {sginUpOb.su6}    </div>
            <div className="social-sign">
                <p>{sginUpOb.su7}</p>

                <ul className="social-icon" style={{
                    marginBottom: "40px"
                }}>
                    {Object.values(providers).filter(q => q.type !== 'credentials').map((provider) => (
                        <li key={provider.name} onClick={() => {
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