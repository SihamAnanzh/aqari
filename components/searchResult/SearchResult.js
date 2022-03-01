import React ,{} from 'react'
import PremuimAdd from '../adds/PremuimAdd'
import Footer from '../shared/footer/Footer'
import Nav from '../shared/nav/Nav'
import Add from '../adds/Add'

const premiumAddsData={
    img:'assets/img/home.jpg',
    tilte:'منزل للإيجار',
    address:'الكويت ميدان حولي',
    price:'450',
    time:'4',
    views:'199',
    whatsApp:"50351216",
    phone:'50351216',
    disc:"منزل فخم شبه جديد في الصديق منزل فخم شبه جديد في منزل فخم شبه جديد في الصديق منزل فخم شبه جديد في منزل فخم شبه جديد في الصديق منزل فخم شبه جديد"

  } 
  const addsData={
    img:'assets/img/home.jpg',
    title:'منزل للإيجار',
    address:'الكويت ميدان حولي',
    price:'450',
    time:'4',
disc:"منزل فخم شبه جديد في الصديق منزل فخم شبه جديد في منزل فخم شبه جديد في الصديق"
  } 
const SearchResultComponents = () => {
  return (
  <div className='results-container'>
  <Nav/>
  <div className='results'>
      <h2 className='results-heading'>منازل للإيجار في حولي</h2>
        <div className="premium-adds-results">
        <h1 className='premium-title'>إعلانات مميزة</h1>
        <PremuimAdd img={premiumAddsData.img} title={premiumAddsData.tilte} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>
        <PremuimAdd img={premiumAddsData.img} title={premiumAddsData.tilte} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>
        <PremuimAdd img={premiumAddsData.img} title={premiumAddsData.tilte} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc}/>

        </div>
        <div className="adds-results">
        <h1 className='premium-title'>أحدث الإعلانات</h1>
        <Add disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>
        <Add disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>
        <Add disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img}/>

        </div>
      
           <span className="end-results">
           انتهت نتائج البحث ولا يوجد المزيد من الإعلانات
           </span>
    </div>

    <Footer/>
  </div>
  )
}

export default SearchResultComponents