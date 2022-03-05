import React from 'react'
import Nav from '../../components/shared/nav/Nav';
import Footer from '../../components/shared/footer/Footer'
import SubNav from '../../components/profile/SubNav'
import MyAdds from '../../components/profile/MyAdds'
const mySerivces = () => {
  return (
    <>
    <Nav/>
    <div className='profile-container'>
    <h1 className="profile-heading">الملف الشخصي</h1>
    <SubNav/>
    <MyAdds/>
    </div> 
    <Footer/>
    </>
  )
}

export default mySerivces