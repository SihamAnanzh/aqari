import Link from 'next/link';
import React ,{useState}from 'react'
import DialogBox from '../dialogBox/DialogBox';
const ForgetPasswrod = () => {
    const [showDialog, setShowDialog] = useState(false);
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
               <input type="text" className="sign-mail" placeholder='البريد الإلكتروني' />
           </div>
        
        </div>

     
        <div className="sign-btn" onClick={()=>setShowDialog(true)}>

        استمرار
        </div>
           {
             showDialog && <DialogBox/>
           }  
         

    </div>
  )
}

export default ForgetPasswrod