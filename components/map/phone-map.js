import React, { useEffect, useRef, useState } from 'react';
import GoogleMapReact  from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Marker = ({ children }) => <div className="">{children}</div>;

const SimpleMap = ({getLat, getLng , currLat, currLng}) => {
  const [lat,setLat]=useState( !currLat?"29.266666":currLat)
  const [lng,setLng]=useState(!currLat?'47.933334':currLng)



  return (
<div style={{ height: '168px', width: '90vw'}}>
    <GoogleMapReact
      bootstrapURLKeys={{ key:'AIzaSyCcY5aS5-7z5NW5226234uPiKhswMx6LqY' }}
      defaultCenter={{ lat: lat, lng:lng}}
      defaultZoom={10}
      onClick={ev => {
        setLat(ev.lat)
        setLng(ev.lng)
        getLat(ev.lat)
        getLng(ev.lng)
        console.log("latitide = ", ev.lat)
        console.log("longitude = ", ev.lng)
      }}
  
    >
    
      <Marker lat={lat} lng={lng} >
      <div className="">
        <LocationOnIcon style={{color:'red'}} fontSize='large'/>
      </div>
      </Marker>

    </GoogleMapReact>
  </div>
  )
}

export default SimpleMap