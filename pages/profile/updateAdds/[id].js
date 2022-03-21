import React,{useEffect, useContext} from 'react'
import Nav from '../../../components/shared/nav/Nav';
import Footer from '../../../components/shared/footer/Footer';
import UpdateAdd from '../../../components/profile/UpdateAdd';
import { AuthContext } from '../../../stores/auth-context';
import { useRouter } from 'next/router';
import SubNav from '../../../components/profile/SubNav'
import axios from 'axios';

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
        <UpdateAdd updateData={updateData}/>
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
      await axios.get(`https://stagingapi.aqarifinder.com/api/ads/${id}`, { headers: { 'lang': "ar" } }).then((res) => {
      
        updateData = {
          adType: res.data.results.ad_type.title,
          address: res.data.results.region.country.title + " " + res.data.results.region.title,
          autoNumber: res.data.results.auto_number,
          category: res.data.results.category.title,
          city: res.data.results.region.title,
          desc: res.data.results.desc,
          isFav: res.data.results.is_fav,
          is_premium: res.data.results.is_premium,
          lat: res.data.results.lat,
          lng: res.data.results.lng,
          phone: res.data.results.phone,
          price: res.data.results.price,
          interface: res.data.results.front,
          region_id: res.data.results.region.id,
          regionsString: res.data.results.region.title,
          area: res.data.results.area,
          time: "4",
          title: res.data.results.title,
          user_id: res.data.results.user_id,
          views: res.data.results.view_count,
          whatsApp: res.data.results.whatsapp,
          images:res.data.results.images.length > 0 ?res.data.results.images:false,
          id:res.data.results.id,
          allData:res.data.results,
          user_id:res.data.results.user_id,
          adTypeId:res.data.results.ad_type_id,
          categoryId:res.data.results.category_id
        }
      })
    }
  
    return {
      props: {
        updateData //pass it to the page props
      }
    }
  }