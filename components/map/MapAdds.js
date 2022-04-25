import React, { useRef, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Marker = ({ children }) => (
  <div
    className=""
    style={{
      backgroundColor: "#000",
      width: "20px",
      height: "20px",
      position: "absolute",
      top: "-10px",
      left: "-10px",
    }}
  >
    {children}
  </div>
);

const SimpleMap = ({ getLat, getLng }) => {
  const [lat, setLat] = useState(29.3117);
  const [lng, setLng] = useState(47.4818);
  const center = {
    lat: 29.3117,
    lng: 47.4818,
  };

  return (
    <div id="map" style={{ height: "202px", width: "911px", display: "flex" }}>
      <GoogleMapReact
        draggable
        bootstrapURLKeys={{ key: "AIzaSyDtymLZiNzrzJMemAUS6ZQyfcgmjgJ1GNc" }}
        defaultZoom={10}
        center={center}
        onClick={(ev, map, cor) => {
          console.log(map);
          setLat(ev.lat);
          setLng(ev.lng);
          getLat(ev.lat);
          getLng(ev.lng);
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
