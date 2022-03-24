import React ,{useState ,useEffect,useContext} from 'react'
import SoicalInput from '../socialInput/SoicalInput'
import axios from 'axios'
import swal from 'sweetalert'
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../../stores/auth-context'
const AddOffice = () => {
  const authCtx=useContext(AuthContext)
const [checkedConditions,setCheckedConditions]=useState(false)
const [imageSrc, setImageSrc]=useState('')
const [imageUpLoaded, setImageUpLoaded]=useState(false)
const [disable,setdisable]=useState(true)
const [title,setTitle]=useState('')
const [phone, setPhone]=useState('')
const [email,setEmail]=useState('')
const  [descOffice,setDecOffice]=useState('')
const [showLinkBtnI,setShowLinkBtnI]=useState(true)
const [showLinkBtnF,setShowLinkBtnF]=useState(true)
const [showLinkBtnE,setShowLinkBtnE]=useState(true)
const [showLinkBtnT,setShowLinkBtnT]=useState(true)

const [showBoxI,setShowBoxI]=useState(false)
const [showBoxF,setShowBoxF]=useState(false)
const [showBoxE,setShowBoxE]=useState(false)
const [showBoxT,setShowBoxT]=useState(false)

const [showSpanI,setShowSpanI]=useState(false)
const [showSpanF,setShowSpanF]=useState(false)
const [showSpanT,setShowSpanT]=useState(false)
const [showSpanE,setShowSpanE]=useState(false)

const [iUrl,setIUrl]=useState('')
const [fUrl,setFUrl]=useState('')
const [EUrl,setEUrl]=useState('')
const [Turl,setTUrl]=useState('')

const handleClickFileBtn=()=>{
    let fileButton=document.getElementById('select-file').click()

}
const handleChange=(e)=>{
    setImageUpLoaded(true)
    let file= e.target.files
    setImageSrc(file[0])
    console.log(file);

}

const handelSubmit=()=>{
  let data={}
  let formData=new FormData()
  title == " " ||  descOffice == " " || phone  =="" || email =='' || imageSrc ==  "" ||EUrl == "" ?
  swal('تحذير', 'يرجى تعبئة جميع الحقول', 'warning'):(
    
    formData.append('title',title),
    formData.append('desc',descOffice),
    formData.append('phone',phone),
    formData.append('whatsapp',phone),
    formData.append('is_premium',false),
    formData.append('facebook_url',fUrl),
    formData.append('instagram_url',iUrl),
    formData.append('twitter_url',Turl),
    formData.append('email',EUrl),
    formData.append('logo_file',imageSrc),
    axios({
      method: "post",
      url: "https://stagingapi.aqarifinder.com/api/user/office/add",
      headers: { "Content-Type": "multipart/form-data" , 'Authorization':authCtx.token},
      data: formData,
    })
      .then( (response) =>{
        response.data.status.code == 400 ?swal("تحذير",response.data.status.message, 'warning'):
        (swal('تهانيا','تمت اضافة المكتب بنجاح', 'success'),
        route.replace('/profile')
        )
   
      })
      .catch( (response)=> {

        swal("لا يمكنك إضافة في الوقت الحالي",'الرجاء المحاولة في وقت لاحق','error')
      }))

}
useEffect(() => {
  setImageSrc(imageSrc)
}, [imageSrc]);

  return (
<div>  
      <div className='profile-tab'>
    <div className="signin-contanier addAdds-tab-container ">
      <div className="addAdds-heading">
        <h3>إضافة مكتب</h3>
        <p className="office-heading-paragraph">
        إضافة المكتب تعطيك فرصة اكبر إضافة المكتب تعطيك فرصة إضافة المكتب تعطيك فرصة اكبر
        </p>
      </div>
    <div className="inputs-group addAdds-group">
    <div className="sign-input  ">

           <h3>رقم الهاتف</h3>
           <input type="text" maxLength={12} className="sign-mail" placeholder='رقم الهاتف' tabIndex={2} onChange={(e)=>setPhone(e.target.value)}  />
       </div>
     
       <div className="sign-input ">
           <h3 style={{
           }}>البريد الإلكتروني</h3>
           <input type="email" className="sign-mail" placeholder='البريد الإلكتروني' tabIndex={3} onChange={(e)=>setEmail(e.target.value)} />
       </div>
       <div className="sign-input ">
           <h3>اسم النشاط التجاري</h3>
           <input type="text" className="sign-mail" placeholder='اسم النشاط التجاري' tabIndex={4} onChange={(e)=>setTitle(e.target.value)} />
       </div>
       <div className="sign-input  addAdds-disc">
           <h3>تفاصيل عن النشاط التجاري</h3>
           <input type="text" className="sign-mail" placeholder='تفاصيل عن النشاط التجاري' tabIndex={5} onChange={(e)=>setDecOffice(e.target.value)} />
       </div>
       <div className="social-contanier">
     <div className="input-social insta">
        <div className="title">
          <h3>Instgram</h3>
          <img src="/assets/img/insta.svg" alt="" />
        </div>
        <div className="text">
          {
            showLinkBtnI &&  <button onClick={e=>{
              setShowLinkBtnI(false)
              setShowBoxI(true)}
              
            }>Link</button>
          }
          {
            showBoxI &&
            <div className=" content-box content-boxI">
            <div className="submit-Btn" onClick={()=>{
              setShowBoxI(false)
              setShowSpanI(true)
            
            }}>Submit</div>
            <input type='url' className="field" placeholder='Enter Username' onChange={e=>setIUrl(e.target.value)} />
          </div>
          }
            {showSpanI&&
            <div className="userUrl">
              {/* <img src="removeUrl" alt="" /> */}
              <CloseIcon  onClick={()=>{
                setIUrl('')
                setShowSpanI(false)
                setShowLinkBtnI(true)

              }} style={{
                color:'black'
              }} fontSize='small'/>
            <span>{iUrl}</span>
            </div>  } 
    


        </div>
     </div>
     <div className="input-social twitter">
     <div className="title">

          <h3>Twitter</h3>
          <img src="/assets/img/twitter.svg" alt="" />

        </div>
        <div className="text">
        {
            showLinkBtnT &&  <button  onClick={e=>{
              setShowLinkBtnT(false)
              setShowBoxT(true)}
              
            }>Link</button>
          }
          {showBoxT && <div className=" content-box content-boxT">
           <img src="/assets/img/close/svg" alt="" />
           <div className="submit-Btn" 
           onClick={()=>{
            setShowBoxT(false)
            setShowSpanT(true)
          
          }}
           >Submit</div>

             <input type='url' className="field"  placeholder='Enter Username' onChange={e=>setTUrl(e.target.value)}  />
           </div>}
           {showSpanT&&<div className="userUrl">
              {/* <img src="removeUrl" alt="" /> */}
              <CloseIcon  onClick={()=>{
                setTUrl('')
                setShowSpanT(false)
                setShowLinkBtnT(true)
              }} style={{
                color:'black'
              }} fontSize='small'/>
            <span>{Turl}</span>
            </div>  } 
    

        </div>
     </div>
     <div className="input-social facebook">
     <div className="title">

          <h3>Facebook</h3>
          <img src="/assets/img/face.svg" alt="" />

        </div>
        <div className="text">
        {
            showLinkBtnF &&  <button  onClick={e=>{
              setShowLinkBtnF(false)
              setShowBoxF(true)}
              
            }
              
            >Link</button>
          }
          {
            showBoxF &&  <div className=" content-box content-boxF">
            <img src="/assets/img/close/svg" alt="" />
            <div className="submit-Btn" onClick={()=>{
              setShowBoxF(false)
              setShowSpanF(true)
            
            }}>Submit</div>
              <input type='url' className="field"   placeholder='Enter Username' onChange={e=>setFUrl(e.target.value)}  />
            </div>
          }
              {showSpanF&&<div className="userUrl">
              {/* <img src="removeUrl" alt="" /> */}
              <CloseIcon  onClick={()=>{
                setFUrl('')
                setShowSpanF(false)
                setShowLinkBtnF(true)
              }} style={{
                color:'black'
              }} fontSize='small'/>
            <span>{fUrl}</span>
            </div>  } 
    
         

        </div>
     </div>
     <div className="input-social mail">
     <div className="title">

          <h3>Email</h3>
          <img src="/assets/img/mail.svg" alt="" />

        </div>
        <div className="text">
        {
            showLinkBtnE &&  <button onClick={e=>{
              setShowLinkBtnE(false)
              setShowBoxE(true)}
              
            }>Link</button>
          }

          {showBoxE &&   <div className="content-box content-boxE">
           <img src="/assets/img/close/svg" alt="" />
           <div className="submit-Btn" onClick={()=>{
              setShowBoxE(false)
              setShowSpanE(true)
            
            }}>Submit</div>
             <input type='url' className="field"   placeholder='Enter Username' onChange={e=>setEUrl(e.target.value)}/>
           

           </div> }

           {showSpanE&&<div className="userUrl">
              {/* <img src="removeUrl" alt="" /> */}
              <CloseIcon  onClick={()=>{
                setEUrl('')
                setShowSpanE(false)
                setShowLinkBtnE(true)
              }} style={{
                color:'black'
              }} fontSize='small'/>
            <span>{EUrl}</span>
            </div>  } 
    
        

        </div>
     </div>

   </div>
       <div className={`sign-input submit-logo ${imageUpLoaded ?'office-logo':""}`}  style={{
                         display: imageUpLoaded?'none':"block",

           }}>
           <h3>شعار النشاط التجاري</h3>
           <button
           onClick={handleClickFileBtn}
           >تحميل</button>
           <input type="file" id='select-file' tabIndex={3}
           style={{
            display: 'none',
           }}
             onChange={(e)=>handleChange(e)}/>
                    
       </div>
  
       <div className={`${imageUpLoaded?"showUploadedImage":""}`   } 
        style={{
            display: !imageUpLoaded?'none':"block",
            position:"relative",
            marginTop:"25px",
            marginBottom:"25px"

           }}>
                    <img src={`/assets/img/${imageSrc.name}`}  className='img-submite' alt="" style={{
                        borderRadius:"10px"
                    }} />
                    <img src="/assets/img/removeImg.svg" alt="" className='remove-img' onClick={()=>setImageUpLoaded(false)} />
       </div>

       <div className="checksbox" style={{cursor:'pointer'}}>
       <div className="conditions chack-groub" onClick={()=>{
           setCheckedConditions(!checkedConditions)
              setdisable(()=>{
                checkedConditions &&setdisable(!disable)
              })
         }}>
         <img  src={`/assets/img/${!checkedConditions?'emptyCheck':'fullCheck'}.svg`} alt="" />
         <span>موافق على الشروط والقواعد</span>
      
         </div>
       </div>
    </div>
  
    <div className="sign-btn" aria-disabled="true" onClick={handelSubmit} style={{
         backgroundColor:disable ? "#F1E6D3":"#EDAA43"
    }}> 
    اضافة
    </div>

   </div>
    </div>
    </div>
  )
}

export default AddOffice