import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import swal from "sweetalert";
import DialogBox from "../dialogBox/DialogBox";
const ForgetPasswrod = ({ sginOb }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const route = useRouter();

  const handleClick = () => {
    console.log();
    email.includes("@")
      ? axios
          .post("https://stagingapi.aqarifinder.com/api/user/password/forget", {
            email,
            reset_url: `http://localhost:3000/signIN/forget/reset`,
          })
          .then((res) => {
            res.data.status.code == 200 && setMessage(res.data.results);
            console.log(res);
          })
          .then((res) => {
            setShowDialog(true);
            console.log(res);
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
            type="email"
            className="sign-mail"
            placeholder={sginOb.sn2}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div
        className="forget-btn"
        onClick={() => {
          handleClick();
        }}
      >
        {sginOb.continueWrod}
      </div>
      {showDialog && (
        <div className="box">
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
          <div className="box-btns">
            <div className="box-btn signUp-btn">
              <div
                onClick={() => {
                  route.push("/", "/", { locale: route.locale });
                }}
              >
                {route.locale == "ar" ? "اغلاق" : "close"}
              </div>
            </div>
            <div className="box-btn">
              <div
                onClick={() =>
                  axios
                    .post(
                      "https://stagingapi.aqarifinder.com/api/user/password/forget",
                      { email }
                    )
                    .then((res) => {
                      res.data.status.code == 200 &&
                        setMessage(res.data.results);
                      console.log(res);
                    })
                    .then((res) => {
                      setShowDialog(true);
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
