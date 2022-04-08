import axios from 'axios';
import Link from 'next/link';
import React ,{useState}from 'react'
import DialogBox from '../dialogBox/DialogBox';
const ForgetPasswrod = ({sginOb}) => {
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
    <div className="signin-contanier forget-contanier">
        <div className="forget-heading">
        <h2 >{sginOb.sn4}</h2>
        </div>
        <div className="forget-input">
           <div className="forget-input-contanier ">
               <h3 style={{
                   paddingBottom:"10px"
          }}>{sginOb.sn2}</h3>
               <input type="text" className="sign-mail" placeholder={sginOb.sn2}  onChange={e=>setEmail(e.target.value)}/>
           </div>
        
        </div>

     
        <div className="forget-btn" onClick={()=>{
          handleClick()
      
        }}>

        {sginOb.continueWrod}
        </div>
           {
             showDialog && <DialogBox message={message}/>
           }  
         

    </div>
  )
}

export default ForgetPasswrod