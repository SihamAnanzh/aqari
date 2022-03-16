import axios from 'axios';
import Link from 'next/link';
import React ,{useState}from 'react'
import DialogBox from '../dialogBox/DialogBox';
const ForgetPasswrod = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')


    const handleClick=()=>{
      axios.post('https://stagingapi.aqarifinder.com/api/user/password/forget',{email}).then((res)=>{
        res.data.status.code == 200 &&setMessage(res.data.results)
      }
      ).then(()=>setShowDialog(true))
    }
  return (
    <div className="signin-contanier forget-password-contanier">
        <div className="sign">
            <h2 >نسيت كلمة السر</h2>
        </div>
        <div className="inputs-group">
           <div className="sign-input mail">
               <h3 style={{
                   paddingBottom:"10px"
               }}>البريد الإلكتروني</h3>
               <input type="text" className="sign-mail" placeholder='البريد الإلكتروني'  onChange={e=>setEmail(e.target.value)}/>
           </div>
        
        </div>

     
        <div className="sign-btn" onClick={()=>{
          handleClick()
      
        }}>

        استمرار
        </div>
           {
             showDialog && <DialogBox message={message}/>
           }  
         

    </div>
  )
}

export default ForgetPasswrod