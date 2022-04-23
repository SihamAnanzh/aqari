import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../stores/auth-context";

const MyPorfile = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const authCtx = useContext(AuthContext);
  const route = useRouter();
  const session = useSession();
  useEffect(() => {
    axios
      .get("https://stagingapi.aqarifinder.com/api/user/profile", {
        headers: {
          lang: route.locale,
          Authorization: session && session.data.id,
        },
      })
      .then((res) => {
        const { name, email, phone } = res.data.results;
        setName(name);
        setEmail(email);
        setPhone(phone);
      });
  }, []);

  // let userData= session.data !== null && session.data

  const handleSubmit = () => {
    let data = { name, email, phone };
    phone.length < 8 || phone.length > 12
      ? route.locale == "ar"
        ? swal("حاول مرة أخرى", "رقم الهاتف خاطئ", "info")
        : swal("try again", "invalid phone number", "info")
      : axios
          .post(
            "https://stagingapi.aqarifinder.com/api/user/update",
            { ...data },
            { headers: { Authorization: session.data.id } }
          )
          .then((res) => {
            res.data.status.code == 200 &&
              swal(
                route.locale == "ar"
                  ? "تم تعديل بنجاح"
                  : "profile updated successfully"
              );
          });
  };

  const handleChange = (e) => {
    return e.target.value;
  };
  return (
    <div className="profile-tab">
      <div className="signin-contanier profile-tab-container  ">
        <div className="inputs-group profile-group">
          <div className="sign-input profile-name">
            <h3>{props.sginOb.sn10}</h3>
            <input
              type="text"
              className="sign-name"
              placeholder={props.sginOb.sn10}
              tabIndex={1}
              value={name}
              onChange={(e) => setName(handleChange(e))}
            />
          </div>
          <div className="sign-input profile-mail mail">
            <h3>{props.sginOb.sn2}</h3>
            <input
              type="text"
              className="sign-mail"
              placeholder={props.sginOb.sn2}
              tabIndex={2}
              value={email}
              onChange={(e) => setEmail(handleChange(e))}
            />
          </div>
          <div className="sign-input  profile-phone phone-singup">
            <h3>{props.sginOb.sn11}</h3>
            <input
              type="text"
              className="sign-mail"
              placeholder={props.sginOb.sn11}
              tabIndex={3}
              value={phone}
              onChange={(e) => setPhone(handleChange(e))}
            />
          </div>
        </div>

        <div
          className="sign-btn"
          onClick={handleSubmit}
          style={{ marginRight: "0" }}
        >
          {props.sginOb.sn12}
        </div>
      </div>
    </div>
  );
};

export default MyPorfile;
