import React, { useEffect, useContext, useState } from "react";
import PremiumService from "../adds/PremiumService";
import { AuthContext } from "../../stores/auth-context";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useCookies } from "react-cookie";
import swal from "sweetalert";

const MyService = ({ adsOb }) => {
  const [latest, setLatest] = useState([]);
  const [userData, setUserData] = useState([]);
  const authCtx = useContext(AuthContext);
  const route = useRouter();
  const session = useSession();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [token, setoken] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    console.log(cookies.service_id);
    cookies.service_id &&
      route.query.paymentId &&
      cookies.token != "null" &&
      axios({
        method: "post",
        url: `https://stagingapi.aqarifinder.com/api/user/package/purchase/${route.query.paymentId}`,
        headers: {
          Authorization: session.data != null && session.data.id,
        },
      }).then(async (res) => {
        console.log(res);
        //if the resposent from the payment is success then you need to call the set as premium add and sec back the id of the add

        axios({
          method: "post",
          url: `https://stagingapi.aqarifinder.com/api/user/services/set_premium/${cookies.service_id}/${cookies.service_id_package}`,
          headers: {
            Authorization: session.data != null && session.data.id,
          },
        }).then((res) => {
          console.log(res);
          res.data.status.code == 200 &&
            (route.locale == "ar"
              ? swal("تهانينا", "تمت إضافة الخدمة بنجاح", "success")
              : swal("'well done", "Add service Successfully", "success"));
          setCookie("service_id", "", { path: "/" });
          setCookie("service_id_package", "", { path: "/" });

          swal("", res.data.results, "info");
        });
      });
  }, [route, session.status]);

  useEffect(() => {
    setoken(cookies.token);
  }, [cookies.token]);

  const loadMoreHandler = () => {
    console.log(latest.length);
    let latestData = axios
      .get("https://stagingapi.aqarifinder.com/api/user/services/list", {
        headers: {
          Authorization: cookies.token,
          lang: route.locale,
          limit: 11,
          offset: userData.length,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.results.length < 11) {
          setHasMore(false);
        }
        res.data.results.slice(0, 10).map((adds) => {
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
      });
  };
  useEffect(() => {
    axios
      .get("https://stagingapi.aqarifinder.com/api/user/services/list", {
        headers: {
          lang: route.locale,
          Authorization: cookies.token,
        },
      })
      .then((res) => {
        setLatest(res.data.results);
        setHasMore(res.data.results.length < 10 ? false : true);
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

export default MyService;
