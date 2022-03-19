import React ,{useEffect, useState}from 'react'
import Nav from '../components/shared/nav/Nav'
import Banner from '../components/banner/Banner'
import Footer from '../components/shared/footer/Footer'
import Service from '../components/singleService/Service'

const SingleServices = ({data}) => {
  const [withImg, setWithImg] = useState(false)
  const  [overlay ,setOverlay]=useState(false)

useEffect(()=>{
    data.images?
    setWithImg(true):setWithImg(false)
    console.log(data);

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
  console.log(context.query) 
  

  return {
      props: { 
         data: context.query //pass it to the page props
      }
  }
}
