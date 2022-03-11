import React ,{useState,useEffect} from 'react'
import Nav from '../components/shared/nav/Nav'
import Banner from '../components/banner/Banner'
import Footer from '../components/shared/footer/Footer'
import Adds from '../components/adds/Adds'
import Loader from '../components/loader/Loader'
import MainSection from '../components/mainSection/MainSection'
import axios from 'axios'
const Index = ({prem,latest}) => {
  const [loading,setLoading]=useState(true)
  const [singleEstate, setSingleEsate]=useState([])
  const [singleEstateLatest, setSingleEsateLatest]=useState([])
  const [premuimAdds,setPremuimAdds]=useState([])
  const [latestData,setLeastestAdd]=useState([])
 
    

  useEffect(()=>{
    setLoading(false)
    
    prem && prem.map((adds)=>{
      let singleEstatData= {
        id:adds.id,
       images:adds.images.length >0?adds.images:[
       
        "/assets/img/packge.jpg",
        "/assets/img/packge.jpg",
       
        "/assets/img/packge.jpg"
       ],
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
      let data={ 
        add_id:adds.id,
        user_id:adds.user_id,
        img:adds.images.length >0?adds.images:'/assets/img/home.jpg',
        title:adds.title,
        address:adds.region.country.title+" " + adds.region.title,
        price:adds.price,
        time:'4',
        views:adds.view_count,
        whatsApp:adds.whatsapp,
        phone:adds.phone,
        disc:adds.desc,
       lat:adds.lat,
       lng:adds.lng
            }
      
            setPremuimAdds(pre=>[...pre,data])
            setSingleEsate(pre=>[...pre,singleEstatData])
           
            // console.log(singelEstate)
     })

 
    
    },[prem])

    useEffect(()=>{
      setLoading(false)
      latest&&latest.map((adds)=>{
        let singleEstatData= {
          id:adds.id,
         images:adds.images.length >0?adds.images:[
          "/assets/img/home.jpg",
          "/assets/img/home.jpg",
  
          "/assets/img/home.jpg",
          
         ],
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
        let data={ 
          add_id:adds.id,
          user_id:adds.user_id,
          img:adds.images.length >0?adds.images:'/assets/img/home.jpg',
          title:adds.title,
          address:adds.region.country.title+" " + adds.region.title,
          price:adds.price,
          time:'4',
          views:adds.view_count,
          whatsApp:adds.whatsapp,
          phone:adds.phone,
          disc:adds.desc,
         lat:adds.lat,
         lng:adds.lng
              }
  
              setLeastestAdd(pre=>[...pre,data])
              setSingleEsateLatest(singleEstatData)
              console.log(latestData)
        
    })
      },[latest])

  return (
      <>
      {
        !loading ?
        <>
        <Nav/>
         <Banner/>
         <MainSection  />
         <Adds latestData={latestData}  premuimAdds={premuimAdds} singleEstate={singleEstate} singleEstateLatest={singleEstateLatest}/>
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
     let data=await axios.get('https://stagingapi.aqarifinder.com/api/ads/premium/list?',{
        headers: {
          "lang":'ar' 
           },
      })
      .then(res=>{
        console.log(res.data.results);
          res.data.status.code === 200 &&console.log('sucsuss')
           prem=res.data.results

      })

      let latestData= await axios.get('https://stagingapi.aqarifinder.com/api/ads/latest/list',{
        headers: {
          "lang":'ar' 
           },
      })
      .then(res=>{
        console.log(res.data.results);
          res.data.status.code === 200 &&console.log('sucsuss')
          latest=res.data.results

      
      })
    



  // Pass data to the page via props
  return { props: { prem,latest } }
}