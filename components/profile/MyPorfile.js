import axios from 'axios'
import React, { useEffect, useState ,useContext} from 'react'
import { AuthContext } from '../../stores/auth-context'

const MyPorfile = ({props}) => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')
const authCtx=useContext(AuthContext)

useEffect(()=>{


  axios.get('https://stagingapi.aqarifinder.com/api/user/profile',{
    headers: {
      "lang":'ar' ,
      "Authorization":authCtx.token
       },

  }).then(res=>{
  const {name, email,phone}= res.data.results
      setName(name)
      setEmail(email)
      setPhone(phone)
  })



},[])


 const handleSubmit=()=>{
 let data ={name, email , phone}
 console.log(data);
 axios.post('https://stagingapi.aqarifinder.com/api/user/update',{...data},{headers:{'Authorization':authCtx.token}})
  .then(res=>{ console.log(res);
  })

 } 



  const handleChange=(e)=>{
    return e.target.value
  }
  return (
    <div className='profile-tab'>
    <div className="signin-contanier profile-tab-container  ">
    <div className="inputs-group profile-group">
    <div className="sign-input profile-name">
            <h3>الاسم</h3>
               <input type="text" className="sign-name" placeholder='الاسم' tabIndex={1} autoFocus value={name} onChange={e=>setName(handleChange(e))} />
           </div>
       <div className="sign-input profile-mail mail">
           <h3>البريد الإلكتروني</h3>
           <input type="text" className="sign-mail" placeholder='البريد الإلكتروني' tabIndex={2}  value={email} onChange={e=>setEmail(handleChange(e))}  />
       </div>
       <div className="sign-input  profile-phone phone-singup">
           <h3>رقم الهاتف</h3>
           <input type="text" className="sign-mail" placeholder='رقم الهاتف' tabIndex={3} value={phone} onChange={e=>setPhone(handleChange(e))}/>
       </div>


    </div>

    <div className="sign-btn" onClick={handleSubmit}>
    حفظ
    </div>

   </div>
    </div>
  )
}

export default MyPorfile