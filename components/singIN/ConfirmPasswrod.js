import axios from 'axios';
import React ,{useState}from 'react'

const ConfirmPasswrod = () => {
const [newPassword, setNewPassword] = useState('');



const handelClick=()=>{
    axios.post('https://stagingapi.aqarifinder.com/api/user/password/reset',{newPassword}).then((res)=>{
       console.log(res)
      
    })
    }
  return (
    <div className="signin-contanier" style={{height:'100vh'}}>
    <div className="sign">
        <h2 style={{
            fontFamily:'otfPlain',
            marginRight:"-14px"
        }
        }>إعادة تعيين كلمة السر</h2>
    </div>
    <div className="inputs-group">
       <div className="sign-input mail">
           <h3 style={{
               paddingBottom:"10px"
           }}>كلمة السر الجديدة</h3>
           <input type="text" className="sign-mail" placeholder='كلمة السر الجديدة' onChange={e=>setNewPassword(e.target.value)}/>
       </div>
       <div className="sign-btn" onClick={handelClick}>
       استمرار
        </div>
    </div>
    </div>
)
}

export default ConfirmPasswrod