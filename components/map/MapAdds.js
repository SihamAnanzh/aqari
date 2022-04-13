
import React, { useRef, useState } from 'react';
import GoogleMapReact  from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Marker = ({ children }) => <div className="">{children}</div>;



const SimpleMap = ({getLat, getLng , currLat, currLng}) => {
  const [lat,setLat]=useState( !currLat?29.266666:currLat)
  const [lng,setLng]=useState(!currLng?47.933334:currLng)




  return (
<div style={{ height: '202px', width: '911px'}}>
    <GoogleMapReact
      bootstrapURLKeys={{ key:'AIzaSyCcY5aS5-7z5NW5226234uPiKhswMx6LqY' }}
      // center={{lat:lat,lng:lng}}
      center={{lat:'5.666',lng:'2.3333'}}

      defaultZoom={10}
      onClick={ev => {
        setLat(ev.lat)
        setLng(ev.lng)
        getLat(ev.lat)
        getLng(ev.lng)
     
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