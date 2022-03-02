import React ,{useState,useEffect} from 'react'
import Nav from '../components/shared/nav/Nav'
import Banner from '../components/banner/Banner'
import Footer from '../components/shared/footer/Footer'
import Adds from '../components/adds/Adds'
import Loader from '../components/loader/Loader'
import MainSection from '../mainSection/MainSection'
const Index = () => {
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    setLoading(false)
    // setTimeout(()=>{
    // setLoading(false)
    // },1000)
  },[])

  return (
      <>
      {
        !loading ?
        <>
        <Nav/>
         <Banner/>
         <MainSection/>
         <Adds/>
         <Footer/> 
         </>
         :<Loader/>
      }
  </>
  )
}

export default Index