import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import DialogBox from "../dialogBox/DialogBox";
const ForgetPasswrod = ({ sginOb }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const route = useRouter();

  const handleClick = () => {
    email.includes("@")
      ? axios
          .post("https://stagingapi.aqarifinder.com/api/user/password/forget", {
            email,
            reset_url: "https://aqari-demo.herokuapp.com/signIN/forget/reset",
          })
          .then((res) => {
            res.data.status.code == 200 && setMessage(res.data.results);
            console.log(res);
            res.data.status.code == 401
              ? route.locale == "ar"
                ? swal("", "المستخدم غير موجود", "info")
                : swal("", "invalid user", "info")
              : setShowDialog(true);
          })
      : route.locale == "ar"
      ? swal("", "بريد إلكتروني خاطئ", "info")
      : swal("", "invalid email", "info");
  };

  return (
    <div className="signin-contanier forget-contanier">
      <div className="forget-heading">
        <h2>{sginOb.sn4}</h2>
      </div>
      <div className="forget-input">
        <div className="forget-input-contanier ">
          <h3
            style={{
              paddingBottom: "10px",
            }}
          >
            {sginOb.sn2}
          </h3>
          <input
            autoFocus={true}
            tabIndex={showDialog ? "" : 1}
            type="email"
            className="sign-mail"
            placeholder={sginOb.sn2}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div
        tabIndex={showDialog ? "" : 2}
        className="forget-btn"
        onClick={() => {
          handleClick();
        }}
      >
        {sginOb.continueWrod}
      </div>
      {showDialog && (
        <div
          tabIndex={showDialog ? 1 : ""}
          className="box"
          style={{
            zIndex: "1000",
          }}
        >
          <div className="icon-box">
            <img
              src="/assets/img/dialog-icon.svg"
              alt=""
              style={{
                marginTop: "-32px",
              }}
            />
          </div>
          <div className="content-box">
            <p>
              {route.locale == "ar"
                ? "من فضلك تفقد بريدك الالكتروني لإعادة تعيين كلمة المرور"
                : "Please check your email to reset your password"}
            </p>
          </div>
          <div
            className="box-btns forget"
            style={{
              width: "70%",
              justifyContent: "space-around",
            }}
          >
            <div
              className="box-btn signUp-btn"
              tabIndex={showDialog ? 2 : ""}
              id="close"
              onKeyDown={(e) => {
                e.code == "NumpadEnter" &&
                  route.push("/signIN/", "/signIN/", {
                    locale: route.locale,
                  });
              }}
            >
              <div
                onClick={() => {
                  route.push(
                    "/signIN/forgetPasswrod/confirmPassword",
                    "/signIN/forgetPasswrod/confirmPassword",
                    { locale: route.locale }
                  );
                }}
              >
                {route.locale == "ar" ? "اغلاق" : "close"}
              </div>
            </div>
            <div
              className="box-btn"
              tabIndex={showDialog ? 3 : ""}
              id="resend"
              style={{
                cursor: "pointer",
              }}
              onKeyDown={(e) => {
                e.code == "NumpadEnter" &&
                  axios
                    .post(
                      "https://stagingapi.aqarifinder.com/api/user/password/forget",
                      {
                        email,
                      }
                    )
                    .then((res) => console.log(res));
              }}
            >
              <div
                onClick={() =>
                  axios
                    .post(
                      "https://stagingapi.aqarifinder.com/api/user/password/forget",
                      { email }
                    )
                    .then((res) => {
                      console.log(res);
                    })
                    .then((res) => {
                      console.log(res);
                    })
                }
              >
                {route.locale == "ar" ? "إعادة الإرسال" : "resend email"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgetPasswrod;
