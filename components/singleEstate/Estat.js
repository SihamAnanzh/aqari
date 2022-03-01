import React ,{useState} from 'react'
import Slideshow from '../imgSlider/ImgSlider'
import SimpleMap from '../map/Map'

const Estat = ({withImg}) => {
  const [addToFav,setAddtoFav]=useState(false)
  return (
    <>

    <div className='estat-conianer'>
      {withImg && <Slideshow
        imgs={[
         'assets/img/home.jpg',
         'assets/img/packge.jpg',
         'assets/img/home.jpg',
         'assets/img/home.jpg',
        'assets/img/packge.jpg',
        'assets/img/home.jpg',
        'assets/img/packge.jpg',

        ]}
      />
      }
   
        <div className="header-estat">
            <div className="info-estate">
                <div className="estat-address">
                <h3 className="estat-name">منزل للإيجار</h3>
                <h5 className="estate-address" >
                    <img src="/assets/img/location.svg" alt="" />
                    الكويت حولي
                </h5>
                </div>
              <div className="fav-estat" onClick={()=>setAddtoFav(!addToFav)}>
                {addToFav?  <img src="assets/img/fav-icon.svg" alt="" />:
                  <img src="/assets/img/emptyHearrt.svg" alt="" />
                }
                
              </div>
            </div>
            <div className="disc-estate">
            منزل فخم شبه جديد في الصديق منزل فخم شبه جديد في منزل فخم شبه جديد في الصديق منزل فخم شبه جديد في منزل فخم شبه جديد في الصديق منزل فخم شبه جديد في
            </div>
        </div>
        <div className="content-estat">
          <div className="first-line">
          <div className="city estat-deatils">
              <span className="att">المنطقة</span>  
              
              <span>حولي</span>
            </div>
            <div className="space estat-deatils">
            <span className="att">المساحة</span>  
            <span> متر <span>500</span></span>

            </div>
            <div className="destination estat-deatils">
            <span className="att">الواجهة</span>  
            <span>حولي</span>
            </div>
      
            </div>
            <div className="second-line">
            <div className="price estat-deatils">
            <span className="att">السعر</span>
            <span> د.ك <span>350</span></span>  

            </div>
            <div className="automated-number estat-deatils">
            <span className="att">الرقم الآلي</span>  
            <span className='autom-value'>حولي</span>

            </div>
          </div>
        </div>
        <div className="estat-map">
      <SimpleMap/>
    </div>
    <div className='contact-estate'>
      <div className='whatsApp'><span className='whatsApp-icon'><img src='assets/img/whatsApp.svg'/></span>50351216</div>
      <div className='phone'><span className='address-phone'><img src='assets/img/phone.svg'/></span>50351216</div>
    </div>
    </div>
  
    </>
  )
}

export default Estat