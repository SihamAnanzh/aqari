import React from 'react'
import Nav from '../../components/shared/nav/Nav';
import Footer from '../../components/shared/footer/Footer'
import SubNav from '../../components/profile/SubNav'
import AddService from '../../components/profile/AddService'
const addSevice = () => {
  return (
    <>
    <Nav/>
    <div className='profile-container'>
    <h1 className="profile-heading">الملف الشخصي</h1>
    <SubNav/>
    <AddService/>
    </div> 
    <Footer/>
  </>    )
}

export default addSevice