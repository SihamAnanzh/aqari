import React,{useEffect, useContext} from 'react'
import Nav from '../../components/shared/nav/Nav';
import Footer from '../../components/shared/footer/Footer'
import SubNav from '../../components/profile/SubNav'
import AddOffice from '../../components/profile/AddOffice'
import {AuthContext} from '../../stores/auth-context'
import { useRouter } from 'next/router';
import axios from 'axios';

const Office = () => {
  
  const authCtx=useContext(AuthContext)
  const route =useRouter()
  useEffect(()=>{
    !authCtx.isLoggedIn  && route.replace('/signIN')
      axios.get('https://stagingapi.aqarifinder.com/api/user/office',{headers:{'Authorization':authCtx.token}})
      .then((res)=>{
        console.log(res.data.results);
      })
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
    <AddOffice/>
    
    </div> 
    <Footer/>
    </>
  }
  </>
    )
}

export default Office