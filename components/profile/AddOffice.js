import React ,{useState ,useEffect,useContext} from 'react'
import SoicalInput from '../socialInput/SoicalInput'
import axios from 'axios'
import swal from 'sweetalert'
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
  title == " " ||  descOffice == " " || phone  =="" || email =='' || imageSrc ==  "" ?
  swal('تحذير', 'يرجى تعبئة جميع الحقول', 'warning'):(
    
    formData.append('title',title),
    formData.append('desc',descOffice),
    formData.append('phone',phone),
    formData.append('whatsapp',phone),
    formData.append('is_premium',false),
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