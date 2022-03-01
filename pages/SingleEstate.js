import React ,{useState}from 'react'
import Nav from '../components/shared/nav/Nav'
import Banner from '../components/banner/Banner'
import Footer from '../components/shared/footer/Footer'
import Estat from '../components/singleEstate/Estat'


// should receive a  an id for  a specific ad and then get the data for this add
const SingleEstate = () => {
    const [withImg, setWithImg] = useState(true)

    let content='assets/img/estate.svg'
  return (
    <div className='single-estat'>
        <Nav/>
        <Banner content={content}/>
        
            <Estat withImg={withImg}/>
        
        <Footer/>
    </div>
  )
}

export default SingleEstate