import React, { useEffect, useContext, useState } from "react";
import Adds from "../adds/Adds";
import Add from "../adds/Add";
import axios from "axios";
import { AuthContext } from "../../stores/auth-context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
const MyFav = ({ adsOb }) => {
  const [latest, setLatest] = useState([]);
  const [useData, setUserData] = useState();
  const authCtx = useContext(AuthContext);
  const route = useRouter();
  const [token, setoken] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [hasMore, setHasMore] = useState(latest.length < 0 ? false : true);

  useEffect(() => {
    setoken(cookies.token);
    console.log(cookies.token);
  }, [cookies.token]);

  const session = useSession();

  console.log(hasMore);
  useEffect(() => {
    setoken(cookies.token);
    console.log(cookies.token);
  }, [cookies.token]);
  const loadMoreHandler = () => {
    let latestData = axios
      .get("https://stagingapi.aqarifinder.com/api/user/ad/fav/list", {
        headers: {
          Authorization: cookies.token,
          lang: route.locale,
          limit: 11,
          offset: latest.length,
        },
      })
      .then((res) => {
        console.log(res.data.length);
        if (res.data.results.length < 11) {
          console.log(hasMore);
          setHasMore(false);
        }
        res.data.results.slice(0, 10).map((adds) => {
          let data = {
            add_id: adds.id,
            user_id: adds.user_id,
            images:
              adds.images.length > 0 ? adds.images : "/assets/img/home.jpg",
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
        });
      });
  };
  useEffect(() => {
    axios
      .get("https://stagingapi.aqarifinder.com/api/user/ad/fav/list", {
        headers: {
          Authorization: cookies.token,
          lang: route.locale,
        },
      })
      .then((res) => {
        console.log(res);
        setUserData(res.data.results);
      });
  }, []);

  useEffect(() => {
    useData &&
      useData.map((adds) => {
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
  }, [useData]);
  return (
    <div className="adds-container" style={{ marginTop: "40px" }}>
      {latest.length == 0 && (
        <h5 className="premium-title" style={{ fontSize: "15px" }}>
          {route.locale == "ar"
            ? "لايوجد لديك اعلانات في الوقت الحالي"
            : "You have no ads at the moment"}
        </h5>
      )}
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
            img={addsData.images}
          />
        ))}
      {!hasMore && (
        <div
          className="adds-btn"
          onClick={loadMoreHandler}
          style={{
            cursor: "pointer",
          }}
        >
          {adsOb.ad3}
          <span className="btn-icon">
            <img
              src="/assets/img/+btn.svg"
              style={{
                width: "20px",
                height: "20px",
                marginRight: "12px",
                marginTop: "8px",
                cursor: "pointer",
              }}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default MyFav;
