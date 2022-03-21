import React,{useEffect, useContext} from 'react'
import Nav from '../../../components/shared/nav/Nav';
import Footer from '../../../components/shared/footer/Footer'
import SubNav from '../../../components/profile/SubNav'
import UpdateService from '../../../components/profile/UpdateService'
import {AuthContext} from '../../../stores/auth-context'
import axios from 'axios'

const Update = ({updateData}) => {
    
  const authCtx=useContext(AuthContext)
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
        <UpdateService updateData={updateData}/>
        </div> 
        <Footer/>
        </>
    }
    </>
      )
}

export default Update



export async function getServerSideProps(context) {
  let updateData;
  const { id } = context.params;
  if (id) {
    await axios.get(`https://stagingapi.aqarifinder.com/api/services/${id}`, { headers: { 'lang': "ar" } }).then((res) => {

    
      updateData = {
        address: res.data.results.regions_string ,
        description: res.data.results.description,
        phone: res.data.results.phone,
        price: res.data.results.price,
        time: "4",
        title: res.data.results.title,
        user_id: res.data.results.user_id,
        views: res.data.results.view_count,
        whatsApp: res.data.results.whatsapp,
        images:res.data.results.images.length > 0 ?res.data.results.images:false,
        id:res.data.results.id,
        regionsString:res.data.results.regions_string,
        regionId:res.data.results.region_ids,
        serviceType:res.data.results. service_type.title,
        serviceTypeId:res.data.results. service_type.id

      }
    })
  }

  return {
    props: {
      updateData //pass it to the page props
    }
  }
}