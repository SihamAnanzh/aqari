import React,{useEffect, useContext,useState} from 'react'
import Nav from '../../components/shared/nav/Nav';
import Footer from '../../components/shared/footer/Footer'
import SubNav from '../../components/profile/SubNav'
import {AuthContext} from '../../stores/auth-context'
import { useRouter } from 'next/router';
import MyService from '../../components/profile/MyService';
import axios from 'axios';



const ProfileService = () => {
  const authCtx=useContext(AuthContext)
  const [serviceData,setServicseData]=useState([])
  const [services,setService]=useState([])
  const route =useRouter()


  useEffect(()=>{
     axios.get('https://stagingapi.aqarifinder.com/api/user/services/list',{
      headers: {
        "lang":'ar',
        "Authorization":authCtx.token
         },
    })
    .then(res=>{
        // res.data.status.code === 200 &&console.log()
        setService(res.data.results)
        console.log(res.data.results);
  
    })

    console.log(serviceData);

  },[])
  useEffect(()=>{
    services && services.map((adds)=>{
    let data={ 
    id:adds.id,
    user_id:adds.user_id,
    address:adds.regions_string,
    images:adds.images.length >0?adds.images.logo_url:'/assets/img/home.jpg',
    title:adds.title,
    price:adds.price,
    time:'4',
    views:adds.view_count,
    whatsApp:adds.whatsapp,
    phone:adds.phone,
    disc:adds.description,
    regionsString:adds.regions_string,
    serviceTypeString:adds.service_type.title,
    serviceTypeId:adds.service_type.id,
    regionsId:adds.region_ids,
    singleEstatData:{
    id:adds.id,
    images:adds.images,
    discriptions:adds.description,
    price:adds.price,
    phone:adds.phone,
    whatsApp:adds.whatsapp,
    views:adds.view_count,
    time:'4',
    user_id:adds.user_id,
    regionsString:adds.regions_string,
    serviceTypeString:adds.service_type.title,
    serviceTypeId:adds.service_type.id,
    regionsId:adds.region_ids,
    title:adds.title,
    address:adds.regions_string,

    }
    }
    
    setServicseData(pre=>[...pre,data])
    
    })

    },[services])
  useEffect(()=>{
    !authCtx.isLoggedIn  && route.replace('/signIN')

  },[])

  return (
    <>
  {
      authCtx.isLoggedIn &&
     <>
    <Nav/>
    <div className='profile-container'>
    <h1 className="profile-heading">الملف الشخصي</h1>
    <SubNav/>
    <MyService serviceData={serviceData}/>
    </div> 
    <Footer/>
    </>
}
</>

 )
}

export default ProfileService


