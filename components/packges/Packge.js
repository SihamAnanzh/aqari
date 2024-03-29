import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import swal from "sweetalert";
import { useCookies } from "react-cookie";

const Packge = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [showPackgeDetail, setShwoPackgeDetail] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  const session = useSession();
  const route = useRouter();
  let formData = new FormData();
  formData.append("package_id", props.packgeId);
  formData.append("callbackUrl", "https://aqari-demo.herokuapp.com/packages");
  let formDataTow = new FormData();
  formDataTow.append("package_id", props.packgeId);

  useEffect(() => {
    console.log(cookies.package_id);
    route.query.paymentId &&
    cookies.package_id != "null" &&
    cookies.token != "null"
      ? axios({
          method: "post",
          url: `https://stagingapi.aqarifinder.com/api/user/package/purchase/${route.query.paymentId}`,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: cookies.token,
          },
          // data: formDataTow
        }).then((res) => {
          console.log(res);
          if (res.data.status.code == 200) {
            swal("", res.data.results, "success"),
              setCookie("package_id", null, { path: "/" });
          } else {
            swal("", "something wrong", "info");
          }
          console.log(
            `https://stagingapi.aqarifinder.com/api/user/package/purchase/${route.query.paymentId}`
          );
        })
      : "";
  }, [route]);

  const handleClick = () => {
    console.log(cookies.token);
    cookies.token != "null"
      ? axios({
          method: "post",
          url: "https://stagingapi.aqarifinder.com/api/user/package/get_link",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: cookies.token,
          },
          data: formData,
        }).then((res) => {
          console.log(res);
          res.data.status.code == 200 &&
            (setCookie("package_id", props.packgeId, { path: "/" }),
            route.replace(res.data.results.data.paymentURL),
            console.log(res.data.results.data.paymentURL));
        })
      : route.push("/signIN?callbackurl=/packages");
  };

  return (
    <>
      <div className="packge">
        <div className="type">
          <div
            className="packge-img"
            onClick={() => setShwoPackgeDetail(!showPackgeDetail)}
          >
            <img src={props.logo} />
          </div>
          <div className="packge-info">
            <span className="packge-name">{props.titleOne}</span>
            <span className="packge-type">{props.titleTwo}</span>
          </div>
        </div>
        <div className="add-type show">
          <span className="add-type-first">
            <span className="number-adds">{props.currencyId}</span>
            {props.duration} {route.locale == "ar" ? "يوم" : "day"}
            <span className="price-adds">{props.price}</span>
            {props.currencyTitle}
          </span>
        </div>
        <div className="add-type hide" onClick={handleClick}>
          <span className="add-type-first">
            <span className="number-adds">{props.currencyId}</span>
            {props.duration} {route.locale == "ar" ? "يوم" : "day"}
            <span className="price-adds">{props.price}</span>
            {props.currencyTitle}
          </span>
        </div>
        <div className="subscribe-type">
          <button className="subscribe-btn" onClick={handleClick}>
            {props.btn}
          </button>
          {/* <button className='subscribe-btn'>إشتراك</button> */}
        </div>
      </div>

      {showPackgeDetail && (
        <div
          className={showPackgeDetail ? "overlay" : ""}
          onClick={() => {
            setShwoPackgeDetail(false);
          }}
        >
          <div className="single-packge">
            <h3>{props.sginOb.premiumAda}</h3>
            <img className="packge-img" src={props.logo} alt="" />
            <button
              className="btn-packge"
              onClick={() => setShwoPackgeDetail(!showPackgeDetail)}
            >
              {props.sginOb.closeBtn}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Packge;
