import React, { useRef, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Marker = ({ children }) => {
  return <div className="">{children}</div>;
};

const SimpleMap = ({ getLat, getLng, currLat, currLng }) => {
  const [lat, setLat] = useState(29.3117);
  const [lng, setLng] = useState(47.933334);

  useEffect(() => {
    console.log(currLat);
    console.log(currLng);
    setLat(currLat != "" && currLat != "undefined" ? currLat : 29.3117);
    setLng(currLng != "" && currLng != "undefined" ? currLng : 47.933334);
  }, []);

  const center = {
    lat: 29.3117,
    lng: 47.4818,
  };

  return (
    <div style={{ height: "298px", width: "888px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDtymLZiNzrzJMemAUS6ZQyfcgmjgJ1GNc" }}
        defaultZoom={10}
        center={center}
        // onChange={(ev) => {
        //   setLat(ev.lat);
        //   setLng(ev.lng);
        //   getLat(ev.lat);
        //   getLng(ev.lng);
        // }}
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
