import React,{useEffect, useContext} from 'react'
import Nav from '../../components/shared/nav/Nav';
import Footer from '../../components/shared/footer/Footer'
import SubNav from '../../components/profile/SubNav'
import UpdateAdd from '../../components/profile/UpdateAdd'
import {AuthContext} from '../../stores/auth-context'
import { useRouter } from 'next/router';

const updateAdds = ({data}) => {
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
        <UpdateAdd updateData={data}/>
        </div> 
        <Footer/>
        </>
        }
        </>
    )
  
  
}
export default updateAdds  


  export async function getServerSideProps(context) {
  
  let data=context.query
  return{props:{data}}
  }
