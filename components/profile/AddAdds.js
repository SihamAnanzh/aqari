import { style } from '@mui/system'
import axios from 'axios'
import React, { useContext, useEffect, useState ,} from 'react'
import { AuthContext } from '../../stores/auth-context'
import PackgeBox from '../dialogBox/PackgeBox'
import SimpleMap from '../map/MapAdds'
import swal from 'sweetalert';


const AddAdds = () => {
const authCtx=useContext(AuthContext)
const [showListCategory,setShwoListCategory]=useState(false)
const [showListType,setShwoListType]=useState(false)
const [showListNames, setShowListNames]=useState(false)
const [checkedAdd ,setCheckedAdd]=useState(false)
const [checkedOffice ,setCheckedOffice]=useState(false)
const [checkedConditions,setCheckedConditions]=useState(false)
const [imageUpLoaded, setImageUpLoaded]=useState(false)
const [imageSrc, setImageSrc]=useState([])
const [disable,setdisable]=useState(true)
const [showDialogBox, setShowDialogiBox]=useState(false)
const [addTitle,setAddTitle]=useState('')
const [phoneNumber,setPhoneNumber]=useState('')
const [category,setCategory]=useState('')
const [typeEstat,setTypeEstat]=useState('')
const [city ,setCity]=useState('')
const [space, setSpace]=useState('')
const [price , setPrice]=useState('')
const [front,setFront]=useState('')
const [autoNum,setAutoNum]=useState('')
const [desc,setDesc]=useState('')
const [files,setFiles]=useState([])
const [lat,setLat]=useState('')
const [lng ,setLng]=useState('')
const [imageOne,setImageOne]=useState()
const [imageTwo,setImageTwo]=useState()
const [imageThree,setImageThree]=useState()
const [imageFour,setImageFour]=useState()
const [regions,setRegions]=useState([])
const [items,setItem]=useState([])
const [imgList,setImgList]=useState([{}])
//ids for api
const [type_id, setType_id]=useState('')
const [category_id,setCategory_id]=useState('')
const [region_id,setRegion_id]=useState('')



useEffect(()=>{
setFiles([imageOne,imageTwo,imageThree,imageFour])
console.log(imageOne==''?'true':"false");

},[imageFour,imageOne,imageThree,imageTwo])

const  handelSubmit=(e)=>{
  let formData;

addTitle == ''|| desc == ''|| space =="" || front ==''|| price == ''|| autoNum 
==""||phoneNumber == " " || imageOne == ""||imageTwo == '' ||imageThree == ''||imageFour == '' ?
swal('تحذير', 'يرجى تعبئة جميع الحقول', 'warning'):(
  setFiles([imageOne,imageTwo,imageThree,imageFour]),

  formData=new FormData(),
  formData.append('title',addTitle),
  formData.append('desc',desc),
  formData.append('area',space),
  formData.append('front',front),
  formData.append('price',price),
  formData.append('currency_id','1'),
  formData.append('category_id',category_id)  ,
  formData.append('ad_type_id',type_id),
  formData.append('region_id',region_id),
  formData.append('lat',lat),
  formData.append('lng', lng),
  formData.append('phone',phoneNumber),
  formData.append('whatsapp',phoneNumber),
  formData.append('is_premium',showDialogBox),
  files.map((file)=>{
    formData.append('image_files',file)
  }),

  formData.append('auto_number',autoNum),


  axios({
  method: "post",
  url: "https://stagingapi.aqarifinder.com/api/user/ad/add",
  headers: { "Content-Type": "multipart/form-data" , 'Authorization':authCtx.token},
  data: formData,
  })
  .then( (response) =>{
    response.data.status.code == 200&& swal("تهانينا",'تمت إضافة الإعلان بنجاح','success')
    route.replace('profile/myAdds')

  })
  .catch( (response)=> {
     swal("لا يمكنك إضافة في الوقت الحالي",'الرجاء المحاولة في وقت لاحق','error')
  })

)
}


useEffect(()=>{
  setShowDialogiBox(showDialogBox)
},[showDialogBox])


useEffect(()=>{
  const region=axios.get('https://stagingapi.aqarifinder.com/api/region/list/',{
    headers: {
      "lang":'ar' 
       },
  })
  .then(res=>{
    !res.data.status.message == 'OK' ?console.log(res.data):setRegions(res.data.results)

  })
},[])
  
useEffect(()=>{
  axios.get('https://stagingapi.aqarifinder.com/api/category/list',{
      headers: {
        "lang":'ar',
    

         },
    })
    .then(res=>{
  
        !res.data.status.message == 'OK' ?console.log(res.data):setItem(res.data.results)
   
  
    })
  },[])




  return (
    <div>  
    
      <div className='profile-tab' id='profile-tab' onClick={(e)=>{

                 e.target.id !== "category-list"?setShwoListCategory(false):setShwoListCategory(true)
                 e.target.id !== "type-list"?setShwoListType(false):setShwoListType(true)
                 e.target.id !== 'city-list'?setShowListNames(false):setShowListNames(true)

           }}>
    <div className="signin-contanier addAdds-tab-container ">
      <div className="addAdds-heading">
        <h3>إضافة إعلان</h3>
      </div>
    <div className="inputs-group addAdds-group">
    <div className="sign-input  addAdds-phone ">
           <h3>عنوان الأعلان</h3>
           <input type="text" className="sign-mail" placeholder='عنوان الأعلان' value={addTitle} tabIndex={1} autoFocus  onChange={e=>setAddTitle(e.target.value)}/>
       </div>
    <div className="sign-input  addAdds-phone ">
           <h3>رقم الهاتف</h3>
           <input type="text" maxLength={12} className="sign-mail" placeholder='رقم الهاتف' value={phoneNumber} tabIndex={2} onChange={e=>setPhoneNumber(e.target.value)}/>
       </div>
       <div className="sign-input profile-category mail " id='category-list' >
           <h3>الفئة</h3>
           <input type="text" className="sign-mail" placeholder='الفئة'tabIndex={3} id='category-list' value={category} onChange={e=>setCategory(e.target.value)} onClick={(e)=>{
               setShwoListCategory(!showListCategory)
               setShwoListType(false)
               setShowListNames(false)
           }} />
           <img src="/assets/img/Stroke 1.svg" alt="" className='category-icon' />

           <ul className="dropdown-category"  style={{
             display: !showListCategory ?'none':""
           }}  >
              <li  id='1' onClick={(e)=>{
                 setType_id(e.target.id)

                setCategory('ايجار')
              }} className={`category-item ${category==="ايجار" ? 'active-category':""}`} value='ايجار
                            '>ايجار</li>
              <li id='2' className={`category-item ${category==="بيع" ? 'active-category':""}`}  value='بيع'
                 onClick={(e)=>{
                  setType_id(e.target.id)
                setCategory('بيع')
              }} >بيع</li>
           </ul>
       </div>
       <div className="sign-input addAdds-type" id='type-list'>
           <h3>نوع العقار</h3>
           <input type="text" className="sign-mail" placeholder='نوع العقار' tabIndex={3}  id='type-list' value={typeEstat}
           onChange={e=>setTypeEstat(e.target.value)}
             onClick={()=>{
               setShwoListType(!showListType)
               setShowListNames(false)
               setShwoListCategory(false)
            
           }}/>
           
          <img src="/assets/img/Stroke 1.svg" alt="" className='category-icon type-icon' />
        {
          <ul className="dropdown-typeList" id='type-list' style={{
            display: !showListType ?'none':""
          }} >
                {items.map((item)=>(
                    <li 
                    className={`list-item ${typeEstat===item.title? 'active-type':""}`}
                     key={item.id} id={`${item.id} type-list`} onClick={(e)=>
                        {
                            let selectInfo= {
                                value:item.title,
                                id:item.id
                            }
          
                
                         setTypeEstat(item.title)
                         setCategory_id(item.id)
                       }
                    }>
                       <span id='type-list'>
                        <img  id='type-list' style={{  
                            paddingLeft:'10px',
                            width:"20px",
                            height:"20px",
                            objectFit:'cover'

                        }} src={item.logo_url}/></span>{item.title}</li>
                ))}
           </ul>
        }
       </div>
       <div className="sign-input  addAdds-region" id='city-list' >
           <h3>المنطقة</h3>
           <input type="text" className="sign-mail" placeholder='المنطقة' value={city} tabIndex={3}   id='city-list'
           onChange={e=>setCity(e.target.value)}
             onClick={()=>{
               setShowListNames(!showListNames)
               setShwoListType(false)
               setShwoListCategory(false)
           
           }}/>
          <img src="/assets/img/Stroke 1.svg" alt="" className='category-icon type-icon city' />
        {
          <ul className="dropdown-typeList" id='city-list' style={{
            display: !showListNames ?'none':""
          }} >
                {regions.map((item)=>(
                    <li 
                    className={`list-item ${city===item.title? 'active-city':""}`}
                     key={item.id} id={`${item.id} city-list`} onClick={(e)=>
                        {
                            let selectInfo= {
                                value:item.title,
                                id:item.id
                            }
          
                    
                         setCity(item.title)
                         setRegion_id(item.id)
                       }
                    }>
                       {item.title}</li>
                ))}
           </ul>
        }
       </div>
       <div className="sign-input  addAdds-space">
           <h3>المساحة</h3>
           <input type="text" className="sign-mail" placeholder='المساحة' value={space} tabIndex={3} onChange={e=>setSpace(e.target.value)} />
       </div>
       <div className="sign-input  addAdds-price">
           <h3>السعر</h3>
           <input type="text" className="sign-mail" placeholder='السعر' tabIndex={3} value={price} onChange={e=>setPrice(e.target.value)} />
       </div>
       <div className="sign-input  addAdds-interface">
           <h3>الواجهة</h3>
           <input type="text" className="sign-mail" placeholder='الواجهة' value={front} tabIndex={3}  onChange={e=>setFront(e.target.value)}/>
       </div>
       <div className="sign-input  addAdds-auto-num">
           <h3>الرقم الآلي</h3>
           <input type="text" className="sign-mail" placeholder='الرقم الآلي' value={autoNum} tabIndex={3} onChange={e=>setAutoNum(e.target.value)}/>
       </div>
       <div className="sign-input  addAdds-disc">
           <h3>وصف العقار</h3>
           <textarea className="sign-mail" placeholder='وصف العقار' tabIndex={3} value={desc} onChange={e=>setDesc(e.target.value)}  />
       </div>

       <div className={`sign-input submit-logo ${imageUpLoaded ?'office-logo':""}`} style={{ display:imageUpLoaded ?'none':"block",width:"66vw"
           }}>
           <h3 >صور</h3>
           <div className="wrrap-images">
              {
              !imageOne ?
              <div className="submit-imgs" onClick={(e)=>{
                document.getElementById('select-file').click()
               
              }}  >
            <input type="file" id='select-file' tabIndex={3}
           style={{
            display: 'none',
           }}
             onChange={(e)=>{
               setImageOne(e.target.files[0])
        }
            
             }/>
                    
          <img src="/assets/img/img.svg" alt=""/>
          <p>صورة 1</p>
          </div>

          : <div className="" style={{position:'relative'}}>
            <img src={`/assets/img/${imageOne.name}`} alt=""   className='uploadedImage' style={{objectFit:'cover'}}/> 
            <img src="/assets/img/removeImg.svg" alt="" className='remove-img'  onClick={(e)=>{ 
          setImageOne('')
          }} />
          </div> 
          }
           {
              !imageTwo ?
              <div className="submit-imgs" onClick={(e)=>{
                    document.getElementById('select-file-2').click()             
              }}  >
            <input type="file" id='select-file-2' tabIndex={3}
           style={{
            display: 'none',
           }}
             onChange={(e)=>{
               setImageTwo(e.target.files[0])
           

          
              
             }
             }/>
                    
          <img src="/assets/img/img.svg" alt=""/>
          <p>صورة 2</p>
          </div>

          : <div className="" style={{position:'relative'}}>
          <img src={`/assets/img/${imageTwo.name}`} alt=""   className='uploadedImage' style={{objectFit:'cover'}}/> 
          <img src="/assets/img/removeImg.svg" alt="" className='remove-img'  onClick={(e)=>{ 
          setImageTwo('')
          }} />
        </div>
          }
            {
              !imageThree ?
              <div className="submit-imgs" onClick={(e)=>{
                    document.getElementById('select-file-3').click()             
              }}  >
            <input type="file" id='select-file-3' tabIndex={3}
           style={{
            display: 'none',
           }}
             onChange={(e)=>{
               setImageThree(e.target.files[0])
         
          
              
             }
             }/>
                    
          <img src="/assets/img/img.svg" alt=""/>
          <p>صورة 3</p>
          </div>

          : <div className="" style={{position:'relative'}}>
          <img src={`/assets/img/${imageThree.name}`} alt=""   className='uploadedImage' style={{objectFit:'cover'}}/> 
          <img src="/assets/img/removeImg.svg" alt="" className='remove-img'  onClick={(e)=>{ 
          setImageThree('')
          }} />
        </div>
          }
       {
              !imageFour ?
              <div className="submit-imgs" onClick={(e)=>{
                    document.querySelector('input#select-file-4').click()             
              }}  >
            <input type="file" id='select-file-4' tabIndex={3}
           style={{
            display: 'none',
           }}
             onChange={(e)=>{
               setImageFour(e.target.files[0])
            

              
             }
             }/>
                    
          <img src="/assets/img/img.svg" alt=""/>
          <p>صورة 4</p>
          </div>

          :<div className="" style={{position:'relative'}}>
          <img src={`/assets/img/${imageFour.name}`} alt=""   className='uploadedImage' style={{objectFit:'cover'}}/> 
          <img src="/assets/img/removeImg.svg" alt="" className='remove-img' id='select-file-4'  onClick={(e)=>{ 
          setImageFour('')
          }}/>
          </div>
          }
          </div>
         
       </div>
       <div className={`${imageUpLoaded?"shoUploadedImages":""}`   } 
        style={{
            display: !imageUpLoaded?'none':"block",
          

           }}> 
          </div>
                 
       <div className="sign-input  addAdds-auto-num">
           <h3>تحديد المواقع</h3>
           <div className="map-adds">
           <SimpleMap getLat={setLat} getLng={setLng} />
           </div>
       </div>
       <div className="checksbox" style={{cursor:'pointer'}}>
         <div className="premium-add chack-groub" onClick={()=>{
           setCheckedAdd(!checkedAdd)
           setShowDialogiBox(!showDialogBox)
         }}>
           {showDialogBox && authCtx.premiumAdd >0 && <PackgeBox setShowDialogiBox={setShowDialogiBox} showDialogBox={showDialogBox} count={authCtx.premiumAdd}/>}

           <img src={`/assets/img/${!checkedAdd?'emptyCheck':'fullCheck'}.svg`} alt="" />
           <span>أجعل الإعلان مميز</span>
         </div>
         <div className="post-add chack-groub" onClick={()=>{
           setCheckedOffice(!checkedOffice)
         }}>
         <img src={`/assets/img/${!checkedOffice?'emptyCheck':'fullCheck'}.svg`} alt="" />
         <span>نشر الإعلان لدى المكاتب</span>

         </div>
         <div className="conditions chack-groub"   style={{cursor:'pointer'}} onClick={()=>{
           setCheckedConditions(!checkedConditions)
              setdisable(()=>{
                checkedConditions &&setdisable(!disable)
              })
         }}>
         <img src={`/assets/img/${!checkedConditions?'emptyCheck':'fullCheck'}.svg`} alt="" />
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

export default AddAdds