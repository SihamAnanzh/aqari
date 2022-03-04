import React from 'react'
import Nav from '../../components/shared/nav/Nav';
import Footer from '../../components/shared/footer/Footer'
import SubNav from '../../components/profile/SubNav'
import AddAdds from '../../components/profile/AddAdds'
const addAdds = () => {
  return (
  <>
    <Nav/>
    <div className='profile-container'>
    <h1 className="profile-heading">الملف الشخصي</h1>
    <SubNav/>
    <AddAdds/>
    </div> 
    <Footer/>
  </>
  )
}

export default addAdds