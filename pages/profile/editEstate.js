import React ,{useEffect, useState}from 'react'
import Nav from '../../components/shared/nav/Nav'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/shared/footer/Footer'
import Estat from '../../components/singleEstate/Estat'
import estatData from '../../estatData.json'
import SubNav from '../../components/profile/SubNav'




// should receive a  an id for  a specific ad and then get the data for this add
const EditEstate = () => {
    const [withImg, setWithImg] = useState(true)
    const  [overlay ,setOverlay]=useState(false)
     const [userAdd,setUserAdd]=useState(true)


  useEffect(()=>{
      estatData[0].images.length>0?
      setWithImg(true):setWithImg(false)
    
  },[])

    let content='/assets/img/estate.svg'
  return (
    <div className={`single-estat${overlay ? 'overlay':""} `}>
        <Nav/>

        <div className='profile-container' style={{
          background:"#F2F5F7"
        }}>
        <h1 className="profile-heading">الملف الشخصي</h1>

        <div style={{
          paddingBottom:'40px',
          paddingTop:'40px'
        }} >

        <SubNav/>

        </div>
            <Estat withImg={withImg} userAdd={userAdd}   data={estatData}  setOverlay={setOverlay}/>
            </div>
        <Footer/>
    </div>
  )


  
  

}


export default EditEstate;


