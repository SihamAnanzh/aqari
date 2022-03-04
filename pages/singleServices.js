import React ,{useEffect, useState}from 'react'
import Nav from '../components/shared/nav/Nav'
import Banner from '../components/banner/Banner'
import Footer from '../components/shared/footer/Footer'
import estatData from '../estatData.json'
import Service from '../components/singleService/Service'

const singleServices = () => {

  const [withImg, setWithImg] = useState(true)
  const  [overlay ,setOverlay]=useState(false)
  


useEffect(()=>{
    estatData[0].images.length>0?
    setWithImg(true):setWithImg(false)
  
},[])

let content='assets/img/estate.svg'
return (
  <div className={`single-estat${overlay ? 'overlay':""} `}>
      <Nav/>
      <Banner content={content}/>
          <Service withImg={withImg} userAdd={false}  data={estatData}  setOverlay={setOverlay}/>
      <Footer/>
  </div>
)}

export default singleServices