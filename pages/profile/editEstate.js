import React ,{useEffect, useState,useContext}from 'react'
import Nav from '../../components/shared/nav/Nav'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/shared/footer/Footer'
import Estat from '../../components/singleEstate/Estat'
import estatData from '../../estatData.json'
import SubNav from '../../components/profile/SubNav'
import {AuthContext} from '../../stores/auth-context'
import { useRouter } from 'next/router';
import {useTranslation} from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";




// should receive a  an id for  a specific ad and then get the data for this add
const EditEstate = () => {
    const [withImg, setWithImg] = useState(true)
    const  [overlay ,setOverlay]=useState(false)
     const [userAdd,setUserAdd]=useState(true)
     const authCtx=useContext(AuthContext)
     const route =useRouter()

     let { t } = useTranslation();
    
     // translations
     
     //nav
     let nav1=t('home:nav-1')
     let nav2=t('home:nav-2')
     let nav3=t('home:nav-3')
     let nav4=t('home:nav-4')
     let nav5=t('home:nav-5')
     let nav6=t('home:nav-6')
     let nav7=t('home:nav-7')
     let nav8=t('home:nav-8')
     let nav9=t('home:nav-9')
     let nav10=t('home:nav-10')
     let nav11=t('home:nav-11')
     
     //banner 
     let bn=t('home:banner')
     let navOb={
       nav1,
       nav2,
       nav3,
       nav4,
       nav5,
       nav6,
       nav7,
       nav8,
       nav9,
       nav10,
       nav11
     }
     
   
     //footer
   let fo1=t('home:footer')
   
   //adds section
   let ad1=t('home:ads-1')
   let ad2=t('home:ads-2')
   let ad3=t('home:ads-3')
   
   let adsOb={
     ad1,
     ad2,
     ad3
   }


  useEffect(()=>{
      estatData[0].images.length>0?
      setWithImg(true):setWithImg(false)
    
  },[])

    let content='/assets/img/estate.svg'
 
    useEffect(()=>{
      !authCtx.isLoggedIn  && route.replace('/signIN')
    },[])
  
    return (
      <>
    {
          authCtx.isLoggedIn &&

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

}
</>
  )


  
  

}


export default EditEstate;





export async function getServerSideProps({locale}) {
  return { props: {...(await serverSideTranslations(locale, ['home','signUp']))} }
}
