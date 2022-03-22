import React ,{useContext, useEffect} from 'react'
import Nav from '../../components/shared/nav/Nav';
import Footer from '../../components/shared/footer/Footer'
import SubNav from '../../components/profile/SubNav'
import MyProfile from '../../components/profile/MyPorfile'
import {AuthContext} from '../../stores/auth-context'
import { useRouter } from 'next/router';



const Index = ({adds}) => {
  const authCtx=useContext(AuthContext)
  const route=useRouter()
let infoUser;
  useEffect(()=>{
    !authCtx.isLoggedIn  && route.replace('/signIN')
 ;
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
     <MyProfile  infoUser={infoUser} />
     </div> 
     <Footer/>
     </> 

   
}
</>

 )
}

export default Index




      

