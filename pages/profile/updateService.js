import React,{useEffect, useContext} from 'react'
import Nav from '../../components/shared/nav/Nav';
import Footer from '../../components/shared/footer/Footer'
import SubNav from '../../components/profile/SubNav'
import UpdateService from '../../components/profile/UpdateService'
import {AuthContext} from '../../stores/auth-context'
import { useRouter } from 'next/router';

const updateService = () => {
    
  const authCtx=useContext(AuthContext)
  const route =useRouter()
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
        <UpdateService/>
        </div> 
        <Footer/>
        </>
    }
    </>
      )
}

export default updateService