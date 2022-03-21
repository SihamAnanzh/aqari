import React,{useEffect, useContext} from 'react'
import Nav from '../../components/shared/nav/Nav';
import Footer from '../../components/shared/footer/Footer'
import SubNav from '../../components/profile/SubNav'
import AddService from '../../components/profile/AddService'
import {AuthContext} from '../../stores/auth-context'
import { useRouter } from 'next/router';

const Service = () => {

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
    <AddService/>
    </div> 
    <Footer/>
    </>
}
</>
  )
}

export default Service