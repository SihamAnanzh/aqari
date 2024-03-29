import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { AuthContext } from "../../stores/auth-context";
import { useRouter } from "next/router";
import {
  getCsrfToken,
  signIn,
  getSession,
  useSession,
  getProviders,
  signOut,
} from "next-auth/react";
import swal from "sweetalert";
import { useCookies } from "react-cookie";

const SignUpComponents = ({ sginUpOb, providers }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [matching, setMaching] = useState(true);
  const [phone, setPhone] = useState("");
  const authCtx = useContext(AuthContext);
  const [checkedConditions, setCheckedConditions] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [wrongEmail, setwrongEmail] = useState(false);
  const route = useRouter();
  const handleChnage = (e) => {
    return e.target.value;
  };
  const session = useSession();

  useEffect(() => {
    cookies.token == "null"
      ? setCookie(
          "token",
          session.data != null ? session.data.id : null,
          {
            path: "/",
          },
          setCookie(
            "userId",
            session.data != null ? session.data.xyz.sub : null,
            {
              path: "/",
            }
          )
        )
      : console.log(session);
  }, [session.data]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    name == "" &&
    email == "" &&
    password == "" &&
    confirmPassword == "" &&
    phone == ""
      ? route.locale == "ar"
        ? swal("تنبيه", "يرجى تعبئة جميع الحقول", "info")
        : swal("warning", "Fill all the field please", "info")
      : password !== confirmPassword
      ? route.locale == "ar"
        ? swal("تنبيه", "كلمة السر غير متطابقة", "info")
        : swal("warning", "password does not match", "info")
      : !checkedConditions
      ? route.locale == "ar"
        ? swal("", "الرجاء الموافقة على الشروط والاحكام", "info")
        : swal("", "Please agree to the terms and conditions", "info")
      : phone.length < 8 || phone.length > 12
      ? route.locale == "ar"
        ? swal("", "رقم الهاتف خاطئ", "info")
        : swal("", "invalid phone number", "info")
      : password.length < 8
      ? route.locale == "ar"
        ? swal("", " كلمة المرور قصيرة جدًا ، ويجب ألا تقل عن 8 أحرف ", "info")
        : swal(
            "",
            "The password is too short, should not be less than 8 characters",
            "info"
          )
      : await axios
          .post("https://stagingapi.aqarifinder.com/api/user/register", {
            email,
            name,
            password,
            phone,
          })
          .then(async (response) => {
            if (response && response.data.status.code === 200) {
              const res = await signIn("aqari-login-auth", {
                redirect: false,
                username: email,
                password: password,
                callbackUrl: `/`,
              });
              if (res?.error) {
                console.log(response);
                swal(response.data.status.message);
              } else {
                console.log(response);

                if (res.url) route.push(res.url);
              }
            } else {
              swal(response.data.status.message);
            }
          });
  };

  return (
    <div className="signin-contanier signup-container ">
      <form method="post" onSubmit={handleSubmit}>
        <div className="inputs-group">
          <div className="sign-input signUp">
            <div className="sign">
              <h2>{sginUpOb.su6}</h2>
            </div>
          </div>
          <div className="sign-input name">
            <h3>{sginUpOb.su1}</h3>
            <input
              autoComplete="off"
              type="text"
              id="name"
              className="sign-name"
              placeholder={sginUpOb.su1}
              required
              tabIndex={1}
              autoFocus
              onChange={(e) => {
                setName(handleChnage(e));
                e.target.classList.remove("error-input");
              }}
            />
          </div>
          <div className="sign-input mail">
            <h3>{sginUpOb.su2}</h3>
            <input
              autoComplete="off"
              type="email"
              id="email"
              required
              className="sign-mail"
              placeholder={sginUpOb.su2}
              tabIndex={2}
              onChange={(e) => {
                e.target.classList.remove("error-input");

                setEmail(handleChnage(e));
              }}
            />
            {/* {wrongEmail && <div> البريد الاكتروني غير صحيح</div>} */}
          </div>
          <div className="sign-input phone-singup">
            <h3>{sginUpOb.su3}</h3>
            <input
              autoComplete="off"
              type="text"
              id="phone"
              required
              className="sign-mail"
              placeholder={sginUpOb.su3}
              maxLength="12"
              minLength={8}
              tabIndex={3}
              onChange={(e) => {
                e.target.classList.remove("error-input");

                setPhone(handleChnage(e));
              }}
            />
          </div>
          <div className="sign-input password">
            <h3>{sginUpOb.su4}</h3>
            <input
              autoComplete="off"
              type="password"
              id="password"
              required
              className="sign-password"
              placeholder={sginUpOb.su4}
              tabIndex={4}
              onChange={(e) => {
                e.target.classList.remove("error-input");

                setPassowrd(handleChnage(e));
              }}
            />
          </div>
          <div className="sign-input password">
            <h3>{sginUpOb.su5}</h3>
            <input
              autoComplete="off"
              type="password"
              id="password"
              className="sign-password error-input"
              required
              placeholder={sginUpOb.su5}
              tabIndex={5}
              onChange={(e) => {
                e.target.classList.remove("error-input");

                setConfirmPassowrd(handleChnage(e));
              }}
            />
          </div>

          <div
            tabIndex={6}
            className="conditions chack-groub"
            style={{ cursor: "pointer", marginTop: "20px" }}
            onClick={() => {
              setCheckedConditions(!checkedConditions);
            }}
          >
            <img
              src={`/assets/img/${
                !checkedConditions ? "emptyCheck" : "fullCheck"
              }.svg`}
              alt=""
            />

            <span
              style={{
                color: "#00416b",

                fontFamily: "otfPlain",
                fontWeight: "400",
                fontSize: "18px",
                paddingLeft: route.locale == "en" ? "10px" : "0",
                paddingRight: route.locale == "ar" ? "10px" : "0",
              }}
            >
              {sginUpOb.su8}{" "}
              <a
                target="_blank"
                style={{
                  color: "#00416b",
                  textDecoration: "underline",
                  fontFamily: "otfPlain",
                }}
                href={`https://aqari-demo.herokuapp.com/${route.locale}/terms`}
              >
                {sginUpOb.su9}
              </a>
              <a
                target="_blank"
                style={{
                  color: "#00416b",
                  textDecoration: "underline",
                  fontFamily: "otfPlain",
                }}
                href={`https://aqari-demo.herokuapp.com/${route.locale}/privacy`}
              >
                {" "}
                {sginUpOb.su10}
              </a>
            </span>
          </div>
          <div className="sign-input">
            <button
              tabIndex={7}
              type="submit"
              className="sign-btn"
              style={{
                outline: "none",
                border: "none",
                fontSize: "22px",
                fontFamily: "otfPlain",
              }}
            >
              {sginUpOb.su6}
            </button>
          </div>
        </div>
      </form>
      <div className="social-sign" style={{ cursor: "pointer" }}>
        <p>{sginUpOb.su7}</p>

        <ul
          className="social-icon"
          style={{
            marginBottom: "40px",
          }}
        >
          {Object.values(providers)
            .filter((q) => q.type !== "credentials")
            .map((provider) => (
              <li
                style={{ cursor: "pointer" }}
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
              >
                {provider.name == "Google" && (
                  <img src="/assets/img/google-icon.svg" alt="" />
                )}
                {provider.name == "Facebook" && (
                  <img src="/assets/img/facebook-2.svg" alt="" />
                )}
                {provider.name == "Apple" && (
                  <img src="/assets/img/appSgin.svg" alt="" />
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SignUpComponents;
