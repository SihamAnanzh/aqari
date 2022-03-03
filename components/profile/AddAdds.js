import React, { useState } from 'react'
import SimpleMap from '../map/MapAdds'
const AddAdds = () => {
  const [category,setCategory]=useState('')
  const [typeEstat,setTypeEstat]=useState('')
  const [showListCategory,setShwoListCategory]=useState(false)
  const [showListType,setShwoListType]=useState(false)
const [checkedAdd ,setCheckedAdd]=useState(false)
const [checkedOffice ,setCheckedOffice]=useState(false)
const [checkedConditions,setCheckedConditions]=useState(false)


const items = [
  {
    id: 1,
    value: 'محلات',
    icon:"assets/img/offices.svg"
  },
  {
    id: 2,
    value: 'اراضي',
    icon:"assets/img/lands.svg"
  },
  {
    id: 3,
    value: 'شقق',
    icon:"assets/img/apartments.svg"
  },
  {
    id: 4,
    value: 'عمارات',
    icon:"assets/img/bulding.svg"
  },{
    id: 5,
    value: 'بيوت',
    icon:"assets/img/houses.svg"

  },{
    id: 6,
    value: 'مزارع',
    icon:"assets/img/farms.svg"
  },{
    id: 7,
    value: 'شالية',
    icon:"assets/img/shalleh .svg"
  }
];

  return (
    <div>  
      <div className='profile-tab' id='profile-tab' onClick={(e)=>{
              console.log(e.target);
                 e.target.id !== "category-list"?setShwoListCategory(false):setShwoListCategory(true)
                 e.target.id !== "type-list"?setShwoListType(false):setShwoListType(true)

           }}>
    <div className="signin-contanier addAdds-tab-container ">
      <div className="addAdds-heading">
        <h3>إضافة إعلان</h3>
      </div>
    <div className="inputs-group addAdds-group">
    <div className="sign-input  addAdds-phone ">
           <h3>عنوان الأعلان</h3>
           <input type="text" className="sign-mail" placeholder='عنوان الأعلان' tabIndex={1} autoFocus />
       </div>
    <div className="sign-input  addAdds-phone ">
           <h3>رقم الهاتف</h3>
           <input type="number" className="sign-mail" placeholder='رقم الهاتف' tabIndex={2}  />
       </div>
       <div className="sign-input profile-category mail " id='category-list' >
           <h3>الفئة</h3>
           <input type="text" className="sign-mail" placeholder='الفئة' tabIndex={3} id='category-list' value={category} onClick={(e)=>{
               setShwoListCategory(!showListCategory)
           }} />
           <img src="assets/img/Stroke 1.svg" alt="" className='category-icon' />

           <ul className="dropdown-category"  style={{
             display: !showListCategory ?'none':""
           }}  >
              <li     onClick={(e)=>{
                setCategory('ايجار')
              }} className={`category-item ${category==="ايجار" ? 'active-category':""}`} value='ايجار
                            '>ايجار</li>
              <li className={`category-item ${category==="بيع" ? 'active-category':""}`}  value='بيع'
                 onClick={(e)=>{
            
                setCategory('بيع')
              }} >بيع</li>
           </ul>
       </div>
       <div className="sign-input addAdds-type" id='type-list'>
           <h3>نوع العقار</h3>
           <input type="text" className="sign-mail" placeholder='نوع العقار' tabIndex={3}  id='type-list' value={typeEstat}
             onClick={()=>{
               setShwoListType(!showListType)
           }}/>
          <img src="assets/img/Stroke 1.svg" alt="" className='category-icon type-icon' />
        {
          <ul className="dropdown-typeList" id='type-list' style={{
            display: !showListType ?'none':""
          }} >
                {items.map((item)=>(
                    <li 
                    className={`list-item ${typeEstat===item.value? 'active-type':""}`}
                     key={item.id} id={`${item.id} type-list`} onClick={(e)=>
                        {
                            let selectInfo= {
                                value:item.value,
                                id:item.id
                            }
          
                            console.log(selectInfo);
                         setTypeEstat(selectInfo.value)
                       }
                    }>
                       <span id='type-list'>
                        <img  id='type-list' style={{  
                            paddingLeft:'10px'
                        }} src={item.icon}/></span>{item.value}</li>
                ))}
           </ul>
        }
       </div>
       <div className="sign-input  addAdds-region">
           <h3>المنطقة</h3>
           <input type="text" className="sign-mail" placeholder='المنطقة' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-space">
           <h3>المساحة</h3>
           <input type="text" className="sign-mail" placeholder='المساحة' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-price">
           <h3>السعر</h3>
           <input type="text" className="sign-mail" placeholder='السعر' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-interface">
           <h3>الواجهة</h3>
           <input type="text" className="sign-mail" placeholder='الواجهة' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-auto-num">
           <h3>الرقم الآلي</h3>
           <input type="text" className="sign-mail" placeholder='الرقم الآلي' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-disc">
           <h3>وصف العقار</h3>
           <textarea className="sign-mail" placeholder='وصف العقار' tabIndex={3}  />
       </div>
       <div className="sign-input  addAdds-auto-num">
           <h3>تحديد المواقع</h3>
           <div className="map-adds">
           <SimpleMap/>
           </div>
       </div>
       <div className="checksbox">
         <div className="premium-add chack-groub" onClick={()=>{
           setCheckedAdd(!checkedAdd)
         }}>
           <img src={`assets/img/${!checkedAdd?'emptyCheck':'fullCheck'}.svg`} alt="" />
           <span>أجعل الإعلان مميز</span>
         </div>
         <div className="post-add chack-groub" onClick={()=>{
           setCheckedOffice(!checkedOffice)
         }}>
         <img src={`assets/img/${!checkedOffice?'emptyCheck':'fullCheck'}.svg`} alt="" />
         <span>نشر الإعلان لدى المكاتب</span>

         </div>
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

export default AddAdds