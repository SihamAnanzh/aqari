import React,{useEffect,useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({}) => {
    
   



  return (
    <div className='sppiner-container'>
        <video muted autoPlay loop  style={{
            zIndex:'-1',
            position:"fixed"
        
        }}>
            <source  src='/assets/video/111.mp4' type='video/mp4' />
        </video>
        <img src='/assets/img/Aqare-Finder-Logo-Png.png' className='img-sppiner' />
        <div className="spinners">
        <ClipLoader  color='#fff' loading='true'  size={100} />

        </div>

    </div>
  )
}

export default Loader