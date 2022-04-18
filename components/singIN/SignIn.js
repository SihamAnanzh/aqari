import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "../../stores/auth-context";
import { useCookies } from "react-cookie";
import { getCookieParser } from "next/dist/server/api-utils";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@mui/material";
import BackBtn from "../BackBtn";

export const SignInComponent = ({ csrfToken, providers, sginOb }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const session = useSession();
  const [rememberME, setRememberMe] = useState(
    cookies.Name ? (cookies.Name == "" ? false : true) : false
  );
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(
    cookies.Name ? (cookies.Name !== " " ? cookies.Name : "") : ""
  );
  const [password, setPassowrd] = useState(
    cookies.Password ? (cookies.Password !== "" ? cookies.Password : "") : ""
  );
  const [showWrongMessage, setShowWrongPassword] = useState(true);
  const [messateError, setMessageError] = useState("");
  const route = useRouter();
  const { callbackurl } = route.query;

  const handleChnage = (e) => {
    return e.target.value;
  };

  useEffect(() => {
    setEmail(cookies.Name);
    setPassowrd(cookies.Password);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("aqari-login-auth", {
      redirect: false,
      username: e.target.username.value,
      password: e.target.password.value,
      callbackUrl: `${callbackurl}`,
    });
    if (res?.error) {
      setShowWrongPassword(false);
      // setMessageError(res.error)
    } else {
      setShowWrongPassword(true);

      if (res.url) {
        console.log(document.referrer);
        document.referrer == "http://localhost:3000/packages" ||
        document.referrer == "https://akarii-demo.herokuapp.com/packages"
          ? route.push(document.referrer)
          : route.push("/profile", "/profile", { locale: route.locale });
      }
    }
  };

  const handelRemember = () => {
    rememberME
      ? (setCookie("Name", "", { path: "/" }),
        setCookie("Password", "", { path: "/" }),
        setRememberMe(false))
      : (setCookie("Name", email, { path: "/" }),
        setCookie("Password", password, { path: "/" }),
        setRememberMe(true));
  };
  return (
    <div className="signin-contanier">
      {/* <div className="signin"> */}
      <form
        method="post"
        action="/api/auth/callback/aqari-login-auth"
        onSubmit={async (e) => await handleLogin(e)}
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

        <div className="inputs-group">
          <div className="sign-input sgiIN">
            <div className="sign entry">
              <h2>{sginOb.sn1}</h2>
            </div>
          </div>
          <div className="sign-input mail">
            <h3>{sginOb.sn2}</h3>
            <input
              value={email}
              id="username"
              name="username"
              type="email"
              className="sign-mail"
              required
              placeholder={sginOb.sn2}
              tabIndex={1}
              autoFocus
              onChange={(e) => {
                setEmail(handleChnage(e));
                setShowWrongPassword(true);
              }}
            />
          </div>
          <div className="sign-input password">
            <h3>{sginOb.sn3}</h3>
            <input
              id="passwrod"
              name="password"
              value={password}
              type={showPassword ? "text" : "password"}
              className="sign-password"
              placeholder={sginOb.sn3}
              tabIndex={2}
              onChange={(e) => {
                setPassowrd(handleChnage(e));
                setShowWrongPassword(true);
              }}
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
        </div>
        <div
          style={{
            display: `${showWrongMessage ? "none" : ""}`,
          }}
        >
          <span
            className="error-message"
            style={{
              display: `${showWrongMessage ? "none" : ""}`,
              marginRight: route.locale == "en" ? "-13px" : "4px",
              paddingBottom: "9px",
            }}
          >
            <img
              src="/assets/img/Error.svg"
              alt=""
              style={{
                paddingRight: "4px",
              }}
            />
            {sginOb.sn9}
          </span>
        </div>
        <div className="forget-passwrod">
          <div
            style={{
              PaddingBottom: "15px",
            }}
          >
            <Link href="/signIN/forgetPasswrod">{sginOb.sn4}</Link>
          </div>

          <span onClick={handelRemember}>
            <span className="remember-word">
              {/* <span style={{
                     display:"block"
                 }}></span> */}
              {sginOb.sn5}
            </span>
            <img
              src={`/assets/img/${
                rememberME ? "checked.svg" : "unChecked.svg"
              }`}
              alt=""
            />
          </span>
        </div>
        <div tabIndex={3}>
          <button
            type="submit"
            className="sign-btn"
            style={{
              outline: "none",
              border: "none",
            }}
          >
            {" "}
            {sginOb.sn1}
          </button>
        </div>
      </form>
      <div className="social-sign" style={{ cursor: "pointer" }}>
        <p>{sginOb.sn6}</p>
        <ul className="social-icon">
          {Object.values(providers)
            .filter((q) => q.type !== "credentials")
            .map((provider) => (
              <li
                style={{ cursor: "pointer" }}
                key={provider.name}
                onClick={() => {
                  signIn(provider.id, {
                    callbackUrl: document.referrer,
                  });
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
        {/* <ul className="social-icon" onClick={signIn}>
                <li className="google">
                    <img src="assets/img/google-icon.svg" alt="" />
                </li>
                <li className="face">
                    <img src="assets/img/facebook-2.svg" alt="" />
               
                </li>
                <li className="apple">
                    <img src="assets/img/appSgin.svg" alt="" />
                </li>
           </ul> */}
        <span className="goSignUp">
          <span>{sginOb.sn7}</span>
          <Link href="/signUp">{sginOb.sn8}</Link>
        </span>
      </div>
      {/* </div> */}
    </div>
  );
};
