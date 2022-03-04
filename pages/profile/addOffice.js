import React from 'react'
import Nav from '../../components/shared/nav/Nav';
import Footer from '../../components/shared/footer/Footer'
import SubNav from '../../components/profile/SubNav'
import AddOffice from '../../components/profile/AddOffice'
const addOffice = () => {
  return (
    <>
    <Nav/>
    <div className='profile-container'>
    <h1 className="profile-heading">الملف الشخصي</h1>
    <SubNav/>
    <AddOffice/>
    </div> 
    <Footer/>
  </>  
  )
}

export default addOffice