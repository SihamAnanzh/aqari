import React, { useState,useEffect,useContext } from 'react'
import { AuthContext } from '../../stores/auth-context';
import { useRouter } from 'next/router'
import { FilterContext } from '../../stores/filter';
import axios from 'axios'
import swal from 'sweetalert';


const UpdateService = () => {
    const authCtx=useContext(AuthContext)

    const [checkedConditions,setCheckedConditions]=useState(false)
    const [imageUpLoaded, setImageUpLoaded]=useState(false)
    const [showListService,setShowListService]=useState(false)
    const [service,setService]=useState("")
    const [disable,setdisable]=useState(true)
    const [imageOne,setImageOne]=useState()
    const [imageTwo,setImageTwo]=useState()
    const [imageThree,setImageThree]=useState()
    const [imageFour,setImageFour]=useState()
    const [regions,setRegions]=useState([])
    const [items,setItem]=useState([])
    const [city ,setCity]=useState('')
    const [showListNames, setShowListNames]=useState(false)
    const [services, setSerivces] =useState([])
    const [selectItem,setSelectItems]=useState([])
    const [regionsId,setRegionsId]=useState([])
    const filterCtx=useContext(FilterContext)
    const [selection, setSelection] = useState([]);
    const [price, setPrice]=useState('')
    const [title, setTitle]=useState('')
    const [desc ,setDesc]=useState('')
    const [phoneNumber ,setPhone]=useState('')
    const [files,setFiles]=useState([])
    const [selectServId,setSelectServiId]=useState('')
    const [selectCategoryId,setSelectCategoryId]=useState([])
    const route = useRouter()
    useEffect(() => { 
    
    selectItem?
    selectItem.map(item=>{
    toggleAcitveElement(item.id)
    }):""
    console.log(items);
    }, [showListNames]); 
    
    
     
    
    useEffect(() => { 
      
         filterCtx.setRegionsId(regionsId)
      console.log(filterCtx);
        }, [regionsId]); 
        
        
    
        
    
    
    const toggleAcitveElement=(id)=>{
    let item=document.getElementById(id)
    item!== null ?item.classList.add('selected'):""
    
    
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
      axios.get('https://stagingapi.aqarifinder.com/api/service_type/list',{
          headers: {
            "lang":'ar' ,
            
             },
        })
        .then(res=>{
            !res.data.status.message == 'OK' ?console.log(res.data):setSerivces(res.data.results)
        })
      },[])
    

      const  handelSubmit=(e)=>{
 
        console.log(files);
        let formData;
        title == ''|| desc == ''|| price == ''||  phoneNumber == " " ||files.length ==0?
        swal('تحذير', 'يرجى تعبئة جميع الحقول', 'warning')     
          :
          (
            formData=new FormData(),
            formData.append('title',title),
            formData.append('description',desc),
            selectCategoryId.map((categ)=>{
              formData.append('region_ids',categ)
            }),
            formData.append('price',price),
            formData.append('service_type_id',selectServId),
            formData.append('phone',phoneNumber),
            formData.append('whatsapp',phoneNumber),
            formData.append('id',props.add_id),

      
            axios({
              method: "post",
              url: "https://stagingapi.aqarifinder.com/api/user/services/add",
              headers: { "Content-Type": "multipart/form-data" , 'Authorization':authCtx.token},
              data: formData,
            })
              .then( (response) =>{
                         console.log(response.data);
                response.data.status.code == 200&& swal("تهانينا",'تمت إضافة الخدمة بنجاح','success')
                route.replace('/profile/mySerivces')
              })
              .catch( (response)=> {
        
                swal("لا يمكنك إضافة في الوقت الحالي",'الرجاء المحاولة في وقت لاحق','error')
              })
    
          )
      
          
      }
    
      
  return (
    <div>  
      <div className='profile-tab add-servie-tab' onClick={(e)=>{
                 e.target.id !== "serivce-list"?setShowListService(false):""

           }}>
    <div className="signin-contanier addAdds-tab-container ">
      <div className="addAdds-heading">
        <h3>إضافة خدمة</h3>
      </div>
    <div className="inputs-group addAdds-group">
    <div className="sign-input  addAdds-phone ">
           <h3>عنوان الخدمة</h3>
           <input type="text" className="sign-mail" placeholder='عنوان الخدمة' tabIndex={1} autoFocus onChange={(e)=>setTitle(e.target.value)} />
       </div>

    <div className="sign-input  addAdds-phone ">
           <h3>رقم الهاتف</h3>
           <input type="number" min={0} className="sign-mail" placeholder='رقم الهاتف' tabIndex={2} onChange={(e)=>setPhone(e.target.value)} />
       </div>
       <div className="sign-input  addAdds-phone " style={{position:'relative'}}>
           <h3>نوع الخدمة</h3>
           <input type="text" id='serivce-list' className="sign-mail" placeholder='نوع الخدمة' tabIndex={3} value={service} 
            onClick={()=>{
               setShowListService(!showListService)
           }}/>
           <img src="/assets/img/Stroke 1.svg" alt="" className='add-service-stroke-category' />
        {
          <ul className="dropdown-typeList" id='serivce-list'  style={{
            display: !showListService ?'none':"",
            position:"absolute",
            zIndex:"5"
          }} >          
              
                {services.map((item)=>(
                    <li className='list-item profile-list-service'  key={item.id} id={`${item.id} serivce-list`} onClick={(e)=>
                        {
                         e.target.classList.add('selected')   
                             setService(item.title)
                          
                            let selectInfo= {
                                value:item.title,
                                id:item.id
                            }
                            setSelectServiId(item.id)
             
                            }
                    
                    }>{item.title}</li>
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
       <div className="sign-input  addAdds-region" id='city-list' style={{position:'relative'}} >
           <h3>المنطقة</h3>
           <input type="text" className="sign-mail" placeholder='المنطقة' tabIndex={3}   id='city-list'  value={[...selection]}
           onChange={e=>setCity(e.target.value)}
             onClick={()=>{
               setShowListNames(!showListNames)
               setShowListService(false)
           
           }}/>
          <img src="/assets/img/Stroke 1.svg" alt="" className='add-service-stroke-city' />
        {
          <ul className="dropdown-typeList" id='city-list' style={{
            display: !showListNames ?'none':"",
            position:"absolute",
            zIndex:"5"
        
          }} >
                 {regions.map((item)=>(
                    <li className='list-item'  key={item.id}  id={item.id} onClick={(e)=>
                       
                        
                        {
                            e.target.classList.add('selected')
                            let indexRegion=regionsId.findIndex((el)=>el===item.id)
                            let newArray=[...regionsId]
                            newArray.splice(indexRegion,1)
                            regionsId.push(item.id)
                            toggleAcitveElement(item.id)
              
                             let selectInfo= {
                               value:item.title,
                               id:item.id
                           }
                       
                           let index=selection.findIndex((el)=>el===item.title)
                           if(index == -1){
                               setSelection(pre=>[...pre,item.title])
                               setSelectItems(pre=>[...pre,selectInfo])
                               selectCategoryId.push(item.id)


                           }else{
                            e.target.classList.remove('selected')
                               let newArray=[...selection]
                               newArray.splice(index,1)
                                setSelection(newArray)
                                selectCategoryId.pop(item.id)

                                
                       
                           }
                             console.log(selectCategoryId);
                       
                          
                       
                 
                        
                       }
                    }>{item.title}</li>
                ))}
           </ul>
        }
       </div>
       <div className="sign-input  addAdds-price">
           <h3>السعر</h3>
           <input type="text" className="sign-mail" placeholder='السعر' tabIndex={3} onChange={e=>setPrice(e.target.value)} />
       </div>
       <div className="sign-input ">
           <h3 style={{
               paddingTop:"20px"
           }}>تفاصيل الخدمة</h3>
           <textarea type="text" className="sign-mail" placeholder='تفاصيل الخدمة'  tabIndex={5} onChange={(e)=>setDesc(e.target.value)}/>
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
                 
     
       <div className="checksbox">
       <div className="conditions chack-groub" style={{cursor:'pointer'}} onClick={()=>{
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

    <div className="sign-btn" aria-disabled="true"  onClick={handelSubmit} style={{
         backgroundColor:disable ? "#F1E6D3":"#EDAA43"
    }}> 
    اضافة
    </div>

   </div>
    </div>
    </div>  
  )
}

export default UpdateService