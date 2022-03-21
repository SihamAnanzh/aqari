import React ,{useEffect, useState}from 'react'
import Nav from '../../components/shared/nav/Nav'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/shared/footer/Footer'
import Service from '../../components/singleService/Service'
import axios from 'axios'

const SingleServices = ({data}) => {
  const [withImg, setWithImg] = useState(false)
  const  [overlay ,setOverlay]=useState(false)
useEffect(()=>{
    // data.images?
    // setWithImg(true):setWithImg(false)
    // console.log(data);

},[])





let content='/assets/img/estate.svg'
return (
  <div className={`single-estat${overlay ? 'overlay':""} `}>
      <Nav/>
      <Banner content={content}/>
      <Service withImg={withImg}   data={data}  setOverlay={setOverlay}/>
      <Footer/>
  </div>
)}

export default SingleServices

export async function getServerSideProps(context){
  let data;
  const { id } = context.params;
  if (id) {
    await axios.get(`https://stagingapi.aqarifinder.com/api/services/${id}`, { headers: { 'lang': "ar" } }).then((res) => {
      data = {
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
        add_id:res.data.results.id,
        regionId:res.data.results.region_ids,
        serviceType:res.data.results. service_type.title,
        serviceTypeId:res.data.results. service_type.id,
        regionsString:res.data.results.regions_string,

      }
    })
  }
  

  return {
      props: { 
         data//pass it to the page props
      }
  }
}
