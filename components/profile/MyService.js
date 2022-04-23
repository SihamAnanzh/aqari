import React, { useEffect, useContext, useState } from "react";
import PremiumService from "../adds/PremiumService";
import { AuthContext } from "../../stores/auth-context";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const MyService = ({ adsOb }) => {
  const [latest, setLatest] = useState([]);
  const [userData, setUserData] = useState([]);
  const authCtx = useContext(AuthContext);
  const route = useRouter();
  const session = useSession();
  useEffect(() => {
    axios
      .get("https://stagingapi.aqarifinder.com/api/user/services/list", {
        headers: {
          lang: route.locale,
          Authorization: session && session.data != null && session.data.id,
        },
      })
      .then((res) => {
        console.log(res);
        setLatest(res.data.results);
      });
  }, []);
  useEffect(() => {
    latest &&
      latest.map((adds) => {
        let data = {
          id: adds.id,
          user_id: adds.user_id,
          address: adds.regions_string,
          images:
            adds.images.length > 0
              ? adds.images.logo_url
              : "/assets/img/home.jpg",
          title: adds.title,
          price: adds.price,
          time: adds.issue_date_string.slice(0, 5),

          views: adds.view_count,
          whatsApp: adds.whatsapp,
          phone: adds.phone,
          disc: adds.description,
          regionsString: adds.regions_string,
          serviceTypeString: adds.service_type.title,
          serviceTypeId: adds.service_type.id,
          regionsId: adds.region_ids,
          singleEstatData: {
            id: adds.id,
            images: adds.images,
            discriptions: adds.description,
            price: adds.price,
            phone: adds.phone,
            whatsApp: adds.whatsapp,
            views: adds.view_count,
            time: adds.issue_date_string.slice(0, 5),
            user_id: adds.user_id,
            regionsString: adds.regions_string,
            serviceTypeString: adds.service_type.title,
            serviceTypeId: adds.service_type.id,
            regionsId: adds.region_ids,
            title: adds.title,
            address: adds.regions_string,
          },
        };

        setUserData((pre) => [...pre, data]);
      });
  }, [latest]);

  return (
    <div className="adds-container" style={{ marginTop: "40px" }}>
      <h1 className="premium-title">{adsOb.newestٍervice}</h1>
      {userData.length == 0 && (
        <h5 className="premium-title" style={{ fontSize: "15px" }}>
          {route.locale == "ar"
            ? "لايوجد لديك اعلانات في الوقت الحالي"
            : "You have no ads at the moment"}
        </h5>
      )}
      {userData &&
        userData.map((premiumAddsData) => (
          <PremiumService
            time={premiumAddsData.time}
            adsOb={adsOb}
            singleEstate={premiumAddsData.singleEstatData}
            key={premiumAddsData.id}
            id={premiumAddsData.id}
            img={premiumAddsData.img}
            title={premiumAddsData.title}
            address={premiumAddsData.address}
            price={premiumAddsData.price}
            views={premiumAddsData.views}
            whatsApp={premiumAddsData.whatsApp}
            phone={premiumAddsData.phone}
            disc={premiumAddsData.disc}
          />
        ))}
    </div>
  );
};

export default MyService;
