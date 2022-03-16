import React ,{useState,useEffect, useContext} from 'react'
import Nav from '../components/shared/nav/Nav'
import Banner from '../components/banner/Banner'
import Footer from '../components/shared/footer/Footer'
import Adds from '../components/adds/Adds'
import Loader from '../components/loader/Loader'
import MainSection from '../components/mainSection/MainSection'
import axios from 'axios'
import { AuthContext } from '../stores/auth-context'
import { FliterProvider } from '../stores/filter'



const Index = ({prem,latest,services}) => {
const [premuimAdds,setPremuimAdds]=useState([])
const [latestData,setLeastestAdd]=useState([])
const [servicesData,setServicse]=useState([])
const authCtx=useContext(AuthContext)

console.log(services);
useEffect(()=>{
prem && prem.map((adds)=>{
let data={ 
  add_id:adds.id,
  user_id:adds.user_id,
  images:adds.images,
  title:adds.title,
  address:adds.region.country.title+" " + adds.region.title,
  price:adds.price,
  time:'4',
  views:adds.view_count,
  whatsApp:adds.whatsapp,
  phone:adds.phone,
  disc:adds.desc,
  lat:adds.lat,
  lng:adds.lng,
  singleEstatData:{
  id:adds.id,
  images:adds.images,
  title:adds.title,
  address:adds.region.country.title+" " + adds.region.title,
  discriptions:adds.desc,
  city:adds.region.title,
  space:adds.area,
  interface:adds.front,
  price:adds.price,
  autoNumber:adds.auto_number,
  phone:adds.phone,
  whatsApp:adds.whatsapp,
  lat:adds.lat,
  lng:adds.lng,
  views:adds.view_count,
  time:'4',
  user_id:adds.user_id,

}
      }
      setPremuimAdds(pre=>[...pre,data])      
  
})
},[prem])

useEffect(()=>{
latest&&latest.map((adds)=>{

let data={ 
add_id:adds.id,
user_id:adds.user_id,
images:adds.images.length >0?adds.images:'/assets/img/home.jpg',
title:adds.title,
address:adds.region.country.title+" " + adds.region.title,
price:adds.price,
time:'4',
views:adds.view_count,
whatsApp:adds.whatsapp,
phone:adds.phone,
disc:adds.desc,
lat:adds.lat,
lng:adds.lng,
singleEstatData:{
id:adds.id,
images:adds.images,
title:adds.title,
address:adds.region.country.title+" " + adds.region.title,
discriptions:adds.desc,
city:adds.region.title,
space:adds.area,
interface:adds.front,
price:adds.price,
autoNumber:adds.auto_number,
phone:adds.phone,
whatsApp:adds.whatsapp,
lat:adds.lat,
lng:adds.lng,
views:adds.view_count,
time:'4',
user_id:adds.user_id,

}
}

setLeastestAdd(pre=>[...pre,data])
authCtx.loadding(false)


})
},[latest])
// useEffect(()=>{
//   services && services.map((adds)=>{
  
//   let data={ 
//   add_id:adds.id,
//   user_id:adds.user_id,
//   images:adds.images.length >0?adds.images:'/assets/img/home.jpg',
//   title:adds.title,
//   address:adds.region.country.title+" " + adds.region.title,
//   price:adds.price,
//   time:'4',
//   views:adds.view_count,
//   whatsApp:adds.whatsapp,
//   phone:adds.phone,
//   disc:adds.discriptions,
//   lat:adds.lat,
//   lng:adds.lng,
//   singleEstatData:{
//   id:adds.id,
//   images:adds.images,
//   title:adds.title,
//   address:adds.region.country.title+" " + adds.region.title,
//   discriptions:adds.desc,
//   city:adds.region.title,
//   space:adds.area,
//   interface:adds.front,
//   price:adds.price,
//   autoNumber:adds.auto_number,
//   phone:adds.phone,
//   whatsApp:adds.whatsapp,
//   lat:adds.lat,
//   lng:adds.lng,
//   views:adds.view_count,
//   time:'4',
//   user_id:adds.user_id,
  
//   }
//   }
  
//   setServicse(pre=>[...pre,data])
//   authCtx.loadding(false)
  
  
//   })
//   },[services])
  

  return (
      <>
      {
        !authCtx.isLoadding ?
        <>
        <Nav/>
         <Banner/>
         <MainSection  />
         <Adds latestData={latestData}  premuimAdds={premuimAdds} servicesData={servicesData} />
         <Footer/> 
         </>
         :<Loader/>
      }
  </>
  )
}

export default Index


export async function getServerSideProps() {
  let prem;
  let latest;
  let services;
     let data=await axios.get('https://stagingapi.aqarifinder.com/api/ads/premium/list?',{
        headers: {
          "lang":'ar' 
           },
      })
      .then(res=>{
        // console.log(res.data.results);
          // res.data.status.code === 200 &&console.log('success')
           prem=res.data.results

      })

      let latestData= await axios.get('https://stagingapi.aqarifinder.com/api/ads/latest/list',{
        headers: {
          "lang":'ar' 
           },
      })
      .then(res=>{
  
          // res.data.status.code === 200 &&console.log('success')
          latest=res.data.results

      
      })
      let serviceData=await axios.get('https://stagingapi.aqarifinder.com/api/services/list',{
        headers: {
          "lang":'ar' 
           },
      })
      .then(res=>{
          // res.data.status.code === 200 &&console.log()
          services=res.data.results

      })

    



  // Pass data to the page via props
  return { props: { prem,latest,services } }
}
