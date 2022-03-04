import React ,{useEffect, useState}from 'react'
import Nav from '../components/shared/nav/Nav'
import Banner from '../components/banner/Banner'
import Footer from '../components/shared/footer/Footer'
import Estat from '../components/singleEstate/Estat'
import estatData from '../estatData.json'





// should receive a  an id for  a specific ad and then get the data for this add
const SingleEstate = () => {
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
            <Estat withImg={withImg} userAdd={false}  data={estatData}  setOverlay={setOverlay}/>
        <Footer/>
    </div>
  )


  
  

}


export default SingleEstate;


