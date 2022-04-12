import React,{useEffect,useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({}) => {
    
   



  return (
    <>
        <div className='sppiner-container first-loader'>
        <video muted autoPlay loop  src='/assets/video/111.mp4'   playsInline style={{
            zIndex:'-1',
          position: "fixed",
            objectFit:"cover"
        
        }}>
           
        </video>
        <img src='/assets/img/Aqare-Finder-Logo.png' className='img-sppiner' />
        <div className="spinners">
        <ClipLoader  color='#fff' loading='true'  size={100} />

        </div>

    </div>
    <div className='sppiner-container second-loader'>
        <div className="bg">
          <img src="/assets/img/bg.png" alt=""  style={{objectFit:'cover'}}/>
          </div>
        <img src='/assets/img/Aqare-Finder-Logo.png' className='img-sppiner' />
        <div className="spinners">
        <ClipLoader  color='#fff' loading='true'  size={100} />

        </div>

    </div>
    </>
 
  )
}

export default Loader