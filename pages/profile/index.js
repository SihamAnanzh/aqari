import React from 'react'
import Nav from '../../components/shared/nav/Nav';
import Footer from '../../components/shared/footer/Footer'
import SubNav from '../../components/profile/SubNav'
import MyProfile from '../../components/profile/MyPorfile'


const index = () => {
  return (
 <>
<Nav/>
<div className='profile-container'>
<h1 className="profile-heading">الملف الشخصي</h1>
<SubNav/>
<MyProfile/>
</div> 
<Footer/>
</>
 )
}

export default index