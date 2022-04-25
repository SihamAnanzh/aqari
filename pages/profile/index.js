import React, { useContext, useEffect } from "react";
import Nav from "../../components/shared/nav/Nav";
import Footer from "../../components/shared/footer/Footer";
import SubNav from "../../components/profile/SubNav";
import MyProfile from "../../components/profile/MyPorfile";
import { AuthContext } from "../../stores/auth-context";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession, getSession, signIn } from "next-auth/react";
import Loader from "react-spinners/SyncLoader";
import Head from "next/head";
import BackBtn from "../../components/BackBtn";
import { useCookies } from "react-cookie";

const Index = () => {
  let { t } = useTranslation();
  const route = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const session = useSession();

  useEffect(() => {
    if (cookies.token == "null") {
      route.push(
        `/signIN?callbackurl=/profile`,
        `/signIN?callbackurl=/profile`,
        { locale: route.locale }
      );
    }
  }, [cookies.token]);

  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     route.push(`/signIN?callbackurl=${route.asPath}`);
  //   },
  // });

  // translations

  //nav
  let nav1 = t("home:nav-1");
  let nav2 = t("home:nav-2");
  let nav3 = t("home:nav-3");
  let nav4 = t("home:nav-4");
  let nav5 = t("home:nav-5");
  let nav6 = t("home:nav-6");
  let nav7 = t("home:nav-7");
  let nav8 = t("home:nav-8");
  let nav9 = t("home:nav-9");
  let nav10 = t("home:nav-10");
  let nav11 = t("home:nav-11");

  //banner
  let bn = t("home:banner");
  let navOb = {
    nav1,
    nav2,
    nav3,
    nav4,
    nav5,
    nav6,
    nav7,
    nav8,
    nav9,
    nav10,
    nav11,
  };

  //footer
  let fo1 = t("home:footer");

  //adds section
  let ad1 = t("home:ads-1");
  let ad2 = t("home:ads-2");
  let ad3 = t("home:ads-3");

  let adsOb = {
    ad1,
    ad2,
    ad3,
  };

  //singin
  let sn1 = t("signin:sign-1");
  let sn2 = t("signin:sign-2");
  let sn3 = t("signin:sign-3");
  let sn4 = t("signin:sign-4");
  let sn5 = t("signin:sign-5");
  let sn6 = t("signin:sign-6");
  let sn7 = t("signin:sign-7");
  let sn8 = t("signin:sign-8");
  let sn9 = t("signin:sign-9");
  let sn10 = t("signin:sign-10");
  let sn11 = t("signin:sign-11");
  let sn12 = t("signin:sign-12");

  let sginOb = {
    sn1,
    sn2,
    sn3,
    sn4,
    sn5,
    sn6,
    sn7,
    sn8,
    sn9,
    sn10,
    sn11,
    sn12,
  };

  //profile
  let pro1 = t("profile:pro-1");
  let pro2 = t("profile:pro-2");
  let pro3 = t("profile:pro-3");
  let pro4 = t("profile:pro-4");
  let pro5 = t("profile:pro-5");
  let pro6 = t("profile:pro-6");
  let pro7 = t("profile:pro-7");
  let pro8 = t("profile:pro-8");

  let proOb = {
    pro1,
    pro2,
    pro3,
    pro4,
    pro5,
    pro6,
    pro7,
    pro8,
  };

  if (!session) {
    return <></>;
  }

  return (
    <>
      {cookies.token != "null" && (
        <>
          <Head>
            <title>
              {route.locale == "ar" ? "الملف الشخصي" : "my profile"}
            </title>
          </Head>
          <Nav navOb={navOb} />
          <div className="profile-container">
            <div
              className="profiel-heading-continer"
              style={{
                width: "94%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <h1 className="profile-heading">{pro1}</h1>
            </div>

            <SubNav proOb={proOb} />
            <MyProfile sginOb={sginOb} />
          </div>
          <Footer fo1={fo1} />
        </>
      )}
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  let { locale } = context;
  const session = await getSession(context);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "signin", "profile"])),
    },
  };
}
