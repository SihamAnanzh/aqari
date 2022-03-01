import React,{useEffect,useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const Loader = ({}) => {
    
   


// const override = css`
//  position:absolute,
//  top:50%,
//  left:50%,
//  width:100px,
//  height:100px,
// transform:translate(-50%,-50%)
// `;


  return (
    <div className='sppiner-container'>
        <video muted autoPlay loop  style={{
            zIndex:'-1',
            // width:'100%',
            // height:'100%',
        
        }}>
            <source  src='assets/video/111.mp4' type='video/mp4' />
        </video>
        <img src='assets/img/Aqare-Finder-Logo-Png.png' className='img-sppiner' />
        <div className="spinners">
        <ClipLoader  color='#fff' loading='true'  size={100} />

        </div>

    </div>
  )
}

export default Loader