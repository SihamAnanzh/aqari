import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import swal from "sweetalert";

const ConfirmPasswrod = ({ sginOb }) => {
  const [newPassword, setNewPassword] = useState("");
  const route = useRouter();

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
        console.log(res);
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
      <div className="forget-input">
        <div className="forget-input-contanier">
          <h3
            style={{
              paddingBottom: "10px",
            }}
          >
            {sginOb.newPasswrod}
          </h3>
          <input
            type="password"
            className="sign-mail"
            placeholder={sginOb.newPasswrod}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="forget-btn" onClick={handelClick}>
          {sginOb.continueWrod}
        </div>
      </div>
    </div>
  );
};

export default ConfirmPasswrod;
