import React ,{useState ,useEffect} from 'react'

const AddOffice = () => {
const [checkedConditions,setCheckedConditions]=useState(false)
const [imageSrc, setImageSrc]=useState('')
const [imageUpLoaded, setImageUpLoaded]=useState(false)


const handleClickFileBtn=()=>{
    let fileButton=document.getElementById('select-file').click()

}
const handleChange=(e)=>{
    setImageUpLoaded(true)
    let file= e.target.files
    setImageSrc(file[0].name)
    console.log(file);
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
        إضافة المكتب تعطيك فرصة اكبر إضافة المكتب تعطيك فرصة إضافة المكتب تعطيك فرصة اكبر إضافة المكتب تعطيك فرصة اكبر إضافة المكتب تعطيك فرصة إضافة المكتب تعطيك فرصة اكبر
        </p>
      </div>
    <div className="inputs-group addAdds-group">
    <div className="sign-input  addAdds-phone ">
    <div className="sign-input  addAdds-phone ">
           <h3>عنوان المكتب</h3>
           <input type="text" className="sign-mail" placeholder='عنوان الأعلان' tabIndex={1} autoFocus />
       </div>
           <h3>رقم الهاتف</h3>
           <input type="number" className="sign-mail" placeholder='رقم الهاتف' tabIndex={3}  />
       </div>
     
       <div className="sign-input ">
           <h3 style={{
               paddingTop:"20px"
           }}>البريد الإلكتروني</h3>
           <input type="text" className="sign-mail" placeholder='البريد الإلكتروني' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-price">
           <h3>اسم النشاط التجاري</h3>
           <input type="text" className="sign-mail" placeholder='اسم النشاط التجاري' tabIndex={3} />
       </div>
       <div className={`sign-input submit-logo ${imageUpLoaded ?'office-logo':""}`}>
           <h3>تفاصيل عن النشاط التجاري</h3>
           <button
           onClick={handleClickFileBtn}
            style={{
               color:"#fff",
               width: '911px',
               height: '72px',
                background:"#00416B",
                display: imageUpLoaded?'none':"flex",
                justifyContent:"center",    
                alignItems:"center",
                fontSize:"28px",
                fontFamily:"otfPlain",
                fontWeight:"normal",
                border:'none',
                borderRadius:"10px",
                marginTop:"15px",
                cursor:'pointer'
                
           }}>تحميل</button>
           <input type="file" id='select-file' tabIndex={3}
           style={{
            display: 'none',
           }}
             onChange={(e)=>handleChange(e)}/>
                    
       </div>
  
       <div className={`${imageUpLoaded?"showUploadedImage":""}`   } 
        style={{
            display: !imageUpLoaded?'none':"block",

           }}>
                    <img src={`/assets/img/${imageSrc}`} height={446} width={446} alt="" style={{
                        borderRadius:"10px"
                    }} />
                    <img src="assets/img/removeImg.svg" alt="" className='remove-img' onClick={()=>setImageUpLoaded(false)} />
                    </div>
       <div className="checksbox">
         <div className="conditions chack-groub" onClick={()=>{
           setCheckedConditions(!checkedConditions)
         }}>
         <img src={`assets/img/${!checkedConditions?'emptyCheck':'fullCheck'}.svg`} alt="" />
         <span>موافق على الشروط والقواعد</span>
      
         </div>
       </div>
    </div>

    <div className="sign-btn">
    اضافة
    </div>

   </div>
    </div>
    </div>
  )
}

export default AddOffice