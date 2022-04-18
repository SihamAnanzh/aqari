import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Marker = ({ children }) => {
  return <div className="">{children}</div>;
};
const SimpleMap = ({ getLat, getLng, currLat, currLng }) => {
  const [lat, setLat] = useState(29.3117);
  const [lng, setLng] = useState(47.4818);

  useEffect(() => {
    setLat(!currLat ? 29.266666 : currLat);
    setLng(!currLng ? 47.933334 : currLng);
  }, []);

  const center = {
    lat: 29.3117,
    lng: 47.4818,
  };
  return (
    <div style={{ height: "168px", width: "89vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDtymLZiNzrzJMemAUS6ZQyfcgmjgJ1GNc" }}
        center={center}
        defaultZoom={10}
        onClick={(ev) => {
          setLat(ev.lat);
          setLng(ev.lng);
          // getLat(ev.lat);
          // getLng(ev.lng);
        }}
      >
        <Marker lat={lat} lng={lng}>
          <div className="">
            <LocationOnIcon style={{ color: "red" }} fontSize="large" />
          </div>
        </Marker>
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
