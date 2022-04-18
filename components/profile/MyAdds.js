import React, { useEffect, useContext, useState } from "react";
import Adds from "../adds/Adds";
import Add from "../adds/Add";
import axios from "axios";
import { AuthContext } from "../../stores/auth-context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const MyAdds = ({ adsOb }) => {
  const [latest, setLatest] = useState([]);
  const [userData, setUserData] = useState([]);
  const authCtx = useContext(AuthContext);
  const route = useRouter();

  const session = useSession();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://stagingapi.aqarifinder.com/api/user/ads/list",
      headers: {
        lang: route.locale,
        Authorization: session.data !== null && session.data.id,
      },
    }).then((res) => {
      console.log(res);
      setUserData(res.data.results);
    });
  }, []);

  useEffect(() => {
    userData &&
      userData.map((adds) => {
        let data = {
          add_id: adds.id,
          user_id: adds.user_id,
          images: adds.images.length > 0 ? adds.images : "/assets/img/home.jpg",
          title: adds.title,
          address: adds.region.country.title + " " + adds.region.title,
          price: adds.price,
          time: adds.issue_date_string.slice(0, 5),

          views: adds.view_count,
          whatsApp: adds.whatsapp,
          phone: adds.phone,
          disc: adds.desc,
          lat: adds.lat,
          lng: adds.lng,
          singleEstatData: {
            id: adds.id,
            images: adds.images,
            title: adds.title,
            address: adds.region.country.title + " " + adds.region.title,
            discriptions: adds.desc,
            city: adds.region.title,
            space: adds.area,
            interface: adds.front,
            price: adds.price,
            autoNumber: adds.auto_number,
            phone: adds.phone,
            whatsApp: adds.whatsapp,
            lat: adds.lat,
            lng: adds.lng,
            views: adds.view_count,
            time: adds.issue_date_string.slice(0, 5),

            user_id: adds.user_id,
          },
        };

        setLatest((pre) => [...pre, data]);
        authCtx.loadding(false);
      });
  }, [userData]);
  return (
    <div className="adds-container" style={{ marginTop: "40px" }}>
      <h1 className="premium-title">{adsOb.ad2}</h1>
      {latest &&
        latest.map((addsData) => (
          <Add
            adsOb={adsOb}
            singleEstate={addsData.singleEstatData}
            add_id={addsData.add_id}
            key={addsData.add_id}
            disc={addsData.disc}
            time={addsData.time}
            price={addsData.price}
            address={addsData.address}
            title={addsData.title}
            img={addsData.img}
          />
        ))}
    </div>
  );
};

export default MyAdds;
