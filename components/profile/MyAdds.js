import React, { useEffect, useContext, useState } from "react";
import Adds from "../adds/Adds";
import Add from "../adds/Add";
import axios from "axios";
import { AuthContext } from "../../stores/auth-context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const MyAdds = ({ adsOb }) => {
  const [latest, setLatest] = useState([]);
  const [userData, setUserData] = useState([]);
  const authCtx = useContext(AuthContext);
  const route = useRouter();
  const [hasMore, setHasMore] = useState(true);
  const session = useSession();
  const [token, setoken] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    setoken(cookies.token);
  }, [cookies.token]);

  useEffect(() => {
    console.log(route.query.paymentId + "rtoue.query");
    console.log(session);
    route.query.paymentId &&
      session.data != null &&
      axios({
        method: "post",
        url: `https://stagingapi.aqarifinder.com/api/user/package/purchase/${route.query.paymentId}`,
        headers: {
          Authorization: session.data != null && session.data.id,
        },
      }).then((res) => {
        console.log(res);

        //if the resposent from the payment is success then you need to call the set as premium add and sec back the id of the add

        axios({
          method: "post",
          url: `https://stagingapi.aqarifinder.com/api/user/ads/set_premium/${cookies.add_id}`,
          headers: {
            Authorization: session.data != null && session.data.id,
          },
        }).then((res) => {
          console.log(res);
          response.data.status.code == 200 &&
            (route.locale == "ar"
              ? swal("تهانينا", "تمت إضافة الإعلان بنجاح", "success")
              : swal("'well done", "Ad Added Successfully", "success"));
          setCookie("add_id", "", { path: "/" });

          swal("", res.data.results, "info");
        });
      });
  }, [route, session.status]);
  const loadMoreHandler = () => {
    let latestData = axios
      .get("https://stagingapi.aqarifinder.com/api/user/ads/list", {
        headers: {
          Authorization: cookies.token,
          lang: route.locale,
          limit: 11,
          offset: latest.length,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.results.length < 11) {
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
      .get("https://stagingapi.aqarifinder.com/api/user/ads/list", {
        headers: {
          Authorization: cookies.token,
          lang: route.locale,
          limit: 11,
          offset: 0,
        },
      })
      .then((res) => {
        setUserData(res.data.results);
        setHasMore(res.data.results.length < 10 ? false : true);
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
      });
  }, [userData]);
  return (
    <div className="adds-container" style={{ marginTop: "40px" }}>
      <h1 className="premium-title">{adsOb.ad2}</h1>
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
            img={addsData.img}
          />
        ))}
      {hasMore && (
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

export default MyAdds;
