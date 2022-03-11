import React ,{useEffect, useState}from 'react'
import Nav from '../components/shared/nav/Nav'
import Banner from '../components/banner/Banner'
import Footer from '../components/shared/footer/Footer'
import Estat from '../components/singleEstate/Estat'
import estatData from '../estatData.json'
import axios from 'axios'




// should receive a  an id for  a specific ad and then get the data for this add
//and check if the adds belong to this user or not 
const SingleEstate = ({data}) => {
    const [withImg, setWithImg] = useState(true)
    const  [overlay ,setOverlay]=useState(false)
    const [userAdd, setUserAdd]=useState(false)
    const [estat, setEstateData]=useState([])


  console.log(data);


  useEffect(()=>{
      data.images.length>0?
      setWithImg(true):setWithImg(false)
    
  },[])

    let content='/assets/img/estate.svg'
  return (
    <div className={`single-estat${overlay ? 'overlay':""} `}>
        <Nav/>
        <Banner content={content}/>
            <Estat withImg={withImg} userAdd={userAdd}  data={data}  setOverlay={setOverlay}/>
        <Footer/>
    </div>
  )


  
  

}


export default SingleEstate;

export async function getServerSideProps(context){
  console.log(context.query) 
  

  return {
      props: { 
         data: context.query //pass it to the page props
      }
  }
}
