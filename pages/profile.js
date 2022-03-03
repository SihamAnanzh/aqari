import React, { useState } from 'react'
import Nav from '../components/shared/nav/Nav';
import Footer from '../components/shared/footer/Footer'
import MyPorfile from '../components/profile/MyPorfile';
import MyAdds from '../components/profile/MyAdds';
import AddAdds from '../components/profile/AddAdds';
import AddService from '../components/profile/addService';
import AddOffice from '../components/profile/AddOffice';
const profile = () => {
 const  [activeState, setAcitveState]=useState(true)
const [myProfile, setmyProfile] = useState(true);
const [myAdds, setMyAdds] = useState(false);
const [favorite, setFavorite]=useState(false)
const [addAdds, setAddAdds]=useState(false)
const [addOffice, setAddOffice]=useState(false)
const [addService, setAddService]=useState(false)


const toggleClass=(id)=>{
    let items=document.querySelectorAll('.section')
    items ?
       [...items].map((section)=>{
        section.classList.remove('active')
    }):""
    let item= document.getElementById(id).classList.toggle('active')
}
    return (
        <> 
     <Nav/>
      <div className='profile-container'>
            <div className="profile-heading">الملف الشخصي</div>
            <div className="profile-sections">
            <div className="profile section active" id='profile' onClick={(e)=>{
                toggleClass(e.target.id)             
                setmyProfile(true)
                setMyAdds(false)
                setFavorite(false)
                setAddAdds(false)
                setAddOffice(false)
                setAddService(false)
            }}>شخصي</div>
            <div className="myAdds section" id='myAdds'onClick={(e)=>{
                toggleClass(e.target.id)             
                setmyProfile(false)
                setMyAdds(true)
                setFavorite(false)
                setAddAdds(false)
                setAddOffice(false)
                setAddService(false)
            }}>إعلاناتي</div>
            <div className="favorite section" id='favorite'onClick={(e)=>{
                toggleClass(e.target.id)             
                setmyProfile(false)
                setMyAdds(false)
                setFavorite(true)
                setAddAdds(false)
                setAddOffice(false)
                setAddService(false)
            }}>المفضلة</div>
            <div className="addAdds section" id='addAdds'  onClick={(e)=>{
                toggleClass(e.target.id)             
                setmyProfile(false)
                setMyAdds(false)
                setFavorite(false)
                setAddAdds(true)
                setAddOffice(false)
                setAddService(false)
            }}>اضف إعلان</div>
            <div className="addOffice section" id='addOffice'  onClick={(e)=>{
                toggleClass(e.target.id)             
                setmyProfile(false)
                setMyAdds(false)
                setFavorite(false)
                setAddAdds(false)
                setAddOffice(true)
                setAddService(false)
            }}
            >اضف مكتب</div>
            <div className="addService section" id='addService'   onClick={(e)=>{
                toggleClass(e.target.id)             
                setmyProfile(false)
                setMyAdds(false)
                setFavorite(false)
                setAddAdds(false)
                setAddOffice(false)
                setAddService(true)
            }}>اضف خدمة</div>
            </div>
            <div className="show-contanier">
            { myProfile && <MyPorfile/>}
            { myAdds && <MyAdds/>}
            { favorite && <MyAdds/>}
            { addAdds && <AddAdds/>}
            { addOffice && <AddOffice />}
            { addService && <AddService/>}

            </div>

      </div>
      <Footer/>
      </>
  )
}

export default profile