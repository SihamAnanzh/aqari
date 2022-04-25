import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import swal from "sweetalert";

const ConfirmPasswrod = ({ sginOb }) => {
  const [newPassword, setNewPassword] = useState("");
  const route = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handelClick = () => {
    console.log(route.query.pid);
    console.log(route.query.m);

    axios
      .post("https://stagingapi.aqarifinder.com/api/user/password/reset", {
        password: newPassword,
        pin_code: route.query.pid,
        email: route.query.m,
      })
      .then((res) => {
        console.log(res.data);

        route.locale == "ar"
          ? swal("", "تم تعديل بنجاح", "success")
          : swal("", "Updated successfully", "success");
        route.push("/signIN");
      });
  };
  return (
    <div className="signin-contanier forget-contanier">
      <div className="forget-heading">
        <h2>{sginOb.reset}</h2>
      </div>
      <div className="forget-input" style={{ position: "relative" }}>
        <div className="forget-input-contanier">
          <h3
            style={{
              paddingBottom: "10px",
            }}
          >
            {sginOb.newPasswrod}
          </h3>
          <input
            style={{ position: "relative" }}
            autoFocus
            tabIndex={1}
            type={showPassword ? "text" : "password"}
            className="sign-mail"
            placeholder={sginOb.newPasswrod}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span
            className="passwrod-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img
              src={`/assets/img/${
                showPassword ? "showPassword" : "hidePassword"
              }.svg`}
              alt=""
              style={{
                cursor: "pointer",
              }}
            />
          </span>
        </div>
        <div className="forget-btn" onClick={handelClick} tabIndex={2}>
          {sginOb.continueWrod}
        </div>
      </div>
    </div>
  );
};

export default ConfirmPasswrod;
