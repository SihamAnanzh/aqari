import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../stores/auth-context'
import Slideshow from '../imgSlider/ImgSlider'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import axios from 'axios'


const Service = ({ withImg, setOverlay, data, priceWrod, addAdsOb }) => {
  const [addToFav, setAddtoFav] = useState(data.isFav)
  const authCtx = useContext(AuthContext)
  const [userAdd, setUserAdd] = useState(false)
  const [allInfo, setAllInfo] = useState({})
  const route = useRouter()

  const session = useSession()

  useEffect(() => {
    session.data != null && session.data.xyz.sub == data.user_id ? setUserAdd(true) : setUserAdd(false)
  }, [])


  const toggleFavAdds = () => {
    session.data != null ?
      (
        console.log(data.isFav),
        !addToFav ?
          (axios.post(`https://stagingapi.aqarifinder.com/api/user/ad/fav/add/${data.add_id}`, null, {
            headers: {
              "Authorization": session.data != null ? session.data.id : null
            },
          }).then((res) => {
            console.log(res);
            setAddtoFav(true);
          })
          )
          :
          axios.post(`https://stagingapi.aqarifinder.com/api/user/ad/fav/remove/${data.add_id}`, null,
            {
              headers: {
                'Authorization': session.data != null ? session.data.id : null
              },

            }).then((res) => {
              console.log(res)
              setAddtoFav(false);
            }
            )
      )
      : route.replace('/signIN')


  }






  return (

    <div className='estat-conianer'>
      <div className="imgSliderAdd" style={{ position: 'relative', direction: "rtl" }}>
        {withImg && <Slideshow
          setOverlay={setOverlay}
          imgs={data.images}
        />
        }
      </div>


      <div className="header-estat">
        <div className="info-estate">
          <div className="estat-address">
            <h3 className="estat-name">{data.title}</h3>
            <h5 className="estate-address" >
              <img src="/assets/img/location.svg" alt="" />
              {data.address}
            </h5>
          </div>
          {/* {!userAdd ? 
                  <div className="fav-estat" onClick={toggleFavAdds}>
                {addToFav?  <img src="/assets/img/fav-icon.svg" alt="" />:
                  <img src="/assets/img/emptyHearrt.svg" alt="" />
                }
                
              </div>: <h4 className='editAdd'  style={{
                width:'103px',
                height:'35px',
                background:"#00416B",
                color:'#fff',
                fontFamily:'otfPlain',
                textAlign:'center',
                fontSize:"18px",
                borderRadius:'10px',
                padding:'5px',
                cursor:'pointer'
              }}><Link  
     
              href={{
                pathname:`/profile/updateService/${data.add_id}`,
                query:data.id
            }}
                     
              // as={'/profile/updateService/'+ data.title.trim().replace(' ', '-') + "/" + data.id}
              >تعديل</Link></h4> } */}
          {userAdd ?
            <div className="fav-estat" onClick={toggleFavAdds}>
              {addToFav ? <img src="/assets/img/fav-icon.svg" alt="" /> :
                <img src="/assets/img/emptyHearrt.svg" alt="" />
              }

            </div> : <h4 className='editAdd' style={{
              width: '103px',
              height: '35px',
              background: "#00416B",
              color: '#fff',
              fontFamily: 'otfPlain',
              textAlign: 'center',
              fontSize: "20px",
              borderRadius: '10px',
              padding: '5px',
              cursor: 'pointer'
            }}><Link href={
              `/profile/updateService/${data.add_id}`

            }
            //  as={`/profile/updateAdds/${data.title.trim().replace(' ', '-')}`}

              >{addAdsOb.edit}</Link></h4>}


        </div>
        <div className="data">
          <div className='data-time'>
            <img src='/assets/img/time-estat.svg' width={8.63} height={8.63} />4 {addAdsOb.hour}</div>
          <div className='data-views'>
            <img src='/assets/img/view2-01 (2).svg' width={12.47} height={7.95} />

            <span className='number' style={{ paddingRight: '5px' }}>{data.views}</span>
          </div>

        </div>
        <div className="disc-estate">
          {data.description}
        </div>
      </div>

      <div className="content-estat estat-origin">
        <div className="second-line">
          <div className="price estat-deatils" style={{ width: '173px' }}>
            <span className="att">{priceWrod}</span>
            <span className=''>
              <img src='/assets/img/bar.svg' style={{
                  height: "28px",
                marginTop: "8px",
                zIndex:'10'
                
                }}/>              
                
                </span>
            <span><span>{data.price}</span>{ addAdsOb.priceCode}</span>

          </div>

        </div>
      </div>

      <div className="content-estat  estat-fallback">
        <div className="second-line">
          <div className="price estat-deatils" style={{ width: '173px' }}>
            <span className="att">{priceWrod}</span>
            <span className=''>
              <img src='/assets/img/bar.svg' style={{
                  height: "28px",
                marginTop: "8px",
                zIndex:'10'
                
                }}/>              
                
                </span>
            <span>{ addAdsOb.priceCode}<span> {data.price}</span></span>

          </div>

        </div>
      </div>
      




      <div className='contact-estate'>
        <div className='whatsApp'><span className='whatsApp-icon'><img src='/assets/img/whatsApp.svg' /></span><a style={{ textDecoration: "none", color: "#fff", fontFamily: "fangsong" }} href={`https://api.whatsapp.com/send/?phone=+9620787012409`} >0787012409</a></div>
        <div className='phone' style={{ fontFamily: "fangsong" }}><span className='address-phone'><img src='/assets/img/phone.svg' /></span>{data.phone}</div>
      </div>
    </div>
  )
}

export default Service