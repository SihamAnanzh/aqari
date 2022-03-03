import React, { useState } from 'react'

const AddService = () => {
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




  return (
<div>  
      <div className='profile-tab'>
    <div className="signin-contanier addAdds-tab-container ">
      <div className="addAdds-heading">
        <h3>إضافة خدمة</h3>
 
      </div>
    <div className="inputs-group addAdds-group">
    <div className="sign-input  addAdds-phone ">
           <h3>رقم الهاتف</h3>
           <input type="number" className="sign-mail" placeholder='رقم الهاتف' tabIndex={3} autoFocus />
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
    </div>  )
}

export default AddService