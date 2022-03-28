import React, { useState,useEffect,useContext } from 'react'
import { AuthContext } from '../../stores/auth-context';
import { useRouter } from 'next/router'
import { FilterContext } from '../../stores/filter';
import axios from 'axios'
import swal from 'sweetalert';
import { useSession } from 'next-auth/react';


const UpdateService = ({updateData,serviceOb}) => {
    const authCtx=useContext(AuthContext)

    const [checkedConditions,setCheckedConditions]=useState(false)
    const [imageUpLoaded, setImageUpLoaded]=useState(false)
    const [showListService,setShowListService]=useState(false)
    const [service,setService]=useState(updateData&&updateData.serviceType)
    const [disable,setdisable]=useState(true)
    const [regions,setRegions]=useState([])
    const [items,setItem]=useState([])
    const [showListNames, setShowListNames]=useState(false)
    const [services, setSerivces] =useState([])
    const [selectItem,setSelectItems]=useState([])
    const [regionsId,setRegionsId]=useState(updateData&&updateData.regionId)
    const filterCtx=useContext(FilterContext)
    const [selection, setSelection] = useState([]);
    const [price, setPrice]=useState(updateData&&updateData.price)
    const [title, setTitle]=useState(updateData&&updateData.title)
    const [desc ,setDesc]=useState(updateData&&updateData.desc)
    const [phoneNumber ,setPhone]=useState(updateData&&updateData.phone)
    const [whatsPhone,setWhatsPhone]=useState(updateData&&updateData.whatsApp)
    const [selectServId,setSelectServiId]=useState(updateData&&updateData.serviceTypeId)
    const [selectCategoryId,setSelectCategoryId]=useState(updateData&&updateData.regionId)
    const route = useRouter()
    useEffect(() => { 
    
    selectItem?
    selectItem.map(item=>{
    toggleAcitveElement(item.id)
    }):""
    }, [showListNames]); 
    
    
     
    
    useEffect(() => { 
      
         filterCtx.setRegionsId(regionsId)
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

    
    useEffect(()=>{
      const region=axios.get('https://stagingapi.aqarifinder.com/api/region/list/',{
        headers: {
          "lang":route.locale
           },
      })
      .then(res=>{
        !res.data.status.message == 'OK' ?console.log(res.data):setRegions(res.data.results)
    
      })
    },[])
    
    useEffect(()=>{
      axios.get('https://stagingapi.aqarifinder.com/api/service_type/list',{
          headers: {
            "lang":route.locale
            
             },
        })
        .then(res=>{
            !res.data.status.message == 'OK' ?console.log(res.data):setSerivces(res.data.results)
        })
      },[])

  const session=useSession()
  let userData=session.data.xyz

      const  handelSubmit=(e)=>{
 
        let formData;
        title == ''|| desc == ''|| price == ''||  phoneNumber == " ",whatsPhone == ""?
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
            formData.append('whatsapp',whatsPhone),
            formData.append('id',updateData.id),

      
            axios({
              method: "post",
              url: "https://stagingapi.aqarifinder.com/api/user/services/update",
              headers: { "Content-Type": "multipart/form-data" , 'Authorization':userData.id},
              data: formData,
            })
              .then( (response) =>{
                         response.data.status.code == 200&& swal("تهانينا",'تمت تعديل الخدمة بنجاح','success')
                         route.replace('/profile/mySerivces')
              })
              .catch( (response)=> {
        
                swal("لا يمكنك التعديل في الوقت الحالي",'الرجاء المحاولة في وقت لاحق','error')
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
        <h3>{serviceOb.pro8}</h3>
      </div>
    <div className="inputs-group addAdds-group">
    <div className="sign-input  addAdds-phone ">
           <h3>{serviceOb.title}</h3>
           <input type="text" className="sign-mail" placeholder={serviceOb.title} tabIndex={1} autoFocus onChange={(e)=>setTitle(e.target.value)} value={title} />
       </div>

    <div className="sign-input  addAdds-phone ">
           <h3>{serviceOb.phone}</h3>
           <input type="txet" min="8" max='12' className="sign-mail" placeholder={serviceOb.phone} tabIndex={2}  value={phoneNumber} onChange={(e)=>setPhone(e.target.value)} />
       </div>
       <div className="sign-input  addAdds-phone " style={{position:'relative'}}>
           <h3>{serviceOb.serviceType}</h3>
           <input type="text" id='serivce-list' className="sign-mail" placeholder={serviceOb.serviceType} tabIndex={3} value={service} 
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
           }}>{serviceOb.whatsaap}</h3>
           <input type="txet" min="8" max='12'  className="sign-mail" placeholder={serviceOb.whatsaap} tabIndex={4} value={whatsPhone}  onChange={e=>setWhatsPhone(e.target.value)}s />
       </div>
       <div className="sign-input  addAdds-region" id='city-list' style={{position:'relative'}} >
           <h3>{serviceOb.city}</h3>
           <input type="text" className="sign-mail" placeholder={serviceOb.city}tabIndex={3}   id='city-list'  value={[...selection]}
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
                       
                          
                       
                 
                        
                       }
                    }>{item.title}</li>
                ))}
           </ul>
        }
       </div>
       <div className="sign-input  addAdds-price">
           <h3>{serviceOb.price}</h3>
           <input type="text" className="sign-mail" placeholder={serviceOb.price}   tabIndex={3} onChange={e=>setPrice(e.target.value)} value={price} />
       </div>
       <div className="sign-input ">
           <h3 style={{
               paddingTop:"20px"
           }}>{serviceOb.serivceDetails}</h3>
           <textarea type="text" className="sign-mail" placeholder={serviceOb.serivceDetails} tabIndex={5} onChange={(e)=>setDesc(e.target.value)} value={desc}/>
       </div>
 

     
                 
     
       <div className="checksbox">
       <div className="conditions chack-groub" style={{cursor:'pointer'}} onClick={()=>{
           setCheckedConditions(!checkedConditions)
              setdisable(()=>{
                checkedConditions &&setdisable(!disable)
              })
         }}>
         <img src={`/assets/img/${!checkedConditions?'emptyCheck':'fullCheck'}.svg`} alt="" />
         <span>{serviceOb.tearmAndCondition}</span>
      
         </div>
       </div>
    </div>

    <div className="sign-btn" aria-disabled="true"  onClick={handelSubmit} style={{
         backgroundColor:disable ? "#F1E6D3":"#EDAA43"
    }}> 
    {serviceOb.edit}
    </div>

   </div>
    </div>
    </div>  
  )
}

export default UpdateService