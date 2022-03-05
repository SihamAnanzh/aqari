import React, { useEffect, useState } from 'react'

const AddService = () => {
const [checkedConditions,setCheckedConditions]=useState(false)
const [imageSrc, setImageSrc]=useState('')
const [imageUpLoaded, setImageUpLoaded]=useState(false)
const [showListService,setShowListService]=useState(false)
const [service,setService]=useState("")

const handleClickFileBtn=()=>{
    let fileButton=document.getElementById('select-file').click()

}


useEffect(()=>{
  let services=document.querySelectorAll('.profile-list-service')
  services.length >0 ? [...services].map((serivec)=>{
    serivec.classList.remove('.selected')
    
  }):""
},[service])
const handleChange=(e)=>{
    setImageUpLoaded(true)
    let file= e.target.files
    setImageSrc(file[0].name)
    console.log(file);
}
const items = [
    {
      id: 1,
      value: 'محركات',
    },
    {
      id: 2,
      value: 'حرف',
    },
    {
      id: 3,
      value: 'تركيب ستالايت',
    },
    {
      id: 4,
      value: 'مكافحة حشرات',
    },{
      id: 5,
      value: 'نقل عفش',
    },{
      id: 6,
      value: 'اصباغ',
    },{
      id: 7,
      value: 'تنظيف',
    }
  ];



  return (
<div>  
      <div className='profile-tab add-servie-tab' onClick={(e)=>{
              console.log(e.target);
                 e.target.id !== "serivce-list"?setShowListService(false):""

           }}>
    <div className="signin-contanier addAdds-tab-container ">
      <div className="addAdds-heading">
        <h3>إضافة خدمة</h3>
      </div>
    <div className="inputs-group addAdds-group">
    <div className="sign-input  addAdds-phone ">
           <h3>عنوان الخدمة</h3>
           <input type="text" className="sign-mail" placeholder='عنوان الخدمة' tabIndex={1} autoFocus />
       </div>

    <div className="sign-input  addAdds-phone ">
           <h3>رقم الهاتف</h3>
           <input type="number" min={0} className="sign-mail" placeholder='رقم الهاتف' tabIndex={2}  />
       </div>
       <div className="sign-input  addAdds-phone ">
           <h3>نوع الخدمة</h3>
           <input type="text" id='serivce-list' className="sign-mail" placeholder='نوع الخدمة' tabIndex={3} value={service} 
            onClick={()=>{
               setShowListService(!showListService)
           }}/>
           <img src="/assets/img/Stroke 1.svg" alt="" className='category-icon type-icon' />
        {
          <ul className="dropdown-typeList" id='serivce-list'  style={{
            display: !showListService ?'none':""
          }} >          
              
                {items.map((item)=>(
                    <li className='list-item profile-list-service'  key={item.id} id={`${item.id} serivce-list`} onClick={(e)=>
                        {
                         e.target.classList.add('selected')   
                             setService(item.value)
                          
                            let selectInfo= {
                                value:item.value,
                                id:item.id
                            }
             
                            }
                    
                    }>{item.value}</li>
                ))}
           </ul>
        }
       </div>
       <div className="sign-input ">
           <h3 style={{
               paddingTop:"20px"
           }}>رقم الواتس اب</h3>
           <input type="number" min={0} className="sign-mail" placeholder='رقم الواتس اب' tabIndex={4} />
       </div>
       <div className="sign-input ">
           <h3 style={{
               paddingTop:"20px"
           }}>تفاصيل الخدمة</h3>
           <input type="text" className="sign-mail" placeholder='تفاصيل الخدمة'  tabIndex={5} />
       </div>

       <div className={`sign-input submit-logo ${imageUpLoaded ?'office-logo':""}`}>
           <h3>صورة</h3>
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

           }}>
                    <img src={`/assets/img/${imageSrc}`} height={446} width={446} alt="" style={{
                        borderRadius:"10px"
                    }} />
                    <img src="/assets/img/removeImg.svg" alt="" className='remove-img-serivce' onClick={()=>setImageUpLoaded(false)} />
                    </div>
       <div className="checksbox">
         <div className="conditions chack-groub" onClick={()=>{
           setCheckedConditions(!checkedConditions)
         }}>
         <img src={`/assets/img/${!checkedConditions?'emptyCheck':'fullCheck'}.svg`} alt="" />
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