import React, { useEffect, useContext, useState } from "react";
import Nav from "../../components/shared/nav/Nav";
import Footer from "../../components/shared/footer/Footer";
import SubNav from "../../components/profile/SubNav";
import AddService from "../../components/profile/AddService";
import { AuthContext } from "../../stores/auth-context";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getSession, signIn, useSession } from "next-auth/react";
import Head from "next/head";
import BackBtn from "../../components/BackBtn";
import { useCookies } from "react-cookie";
const Service = () => {
  const authCtx = useContext(AuthContext);
  const route = useRouter();
  let { t } = useTranslation();
  const session = useSession();

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [token, setoken] = useState(null);

  useEffect(() => {
    setoken(cookies.token);
  }, [cookies.token]);

  useEffect(() => {
    if (token == "null") {
      route.push(
        `/signIN?callbackurl=/profile/addService`,
        `/signIN?callbackurl=/profile/addService`,
        { locale: route.locale }
      );
    }
  }, [token]);

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

  let adSh1 = t("add-ads:ad-sh-1");
  let adSh2 = t("add-ads:ad-sh-2");
  let adSh3 = t("add-ads:ad-sh-3");

  let addAdsOb = {
    adSh1,
    adSh2,
    adSh3,
  };

  let serviceOb = {
    pro8,
    title: t("add-service:service-title"),
    phone: t("add-service:phone"),
    serviceType: t("add-service:serviceType"),
    whatsaap: t("add-service:whatsaap"),
    serivceDetails: t("add-service:serivceDetails"),
    pic: t("add-service:pic"),
    city: t("add-service:city"),
    price: t("add-service:price"),
    tearmAndCondition: t("add-service:tearmAndCondition"),
    addBtn: t("add-service:add"),
  };

  return (
    <>
      {cookies.token != "null" && (
        <>
          <Head>
            <title>{route.locale == "ar" ? "اضف خدمة" : "Add services"}</title>
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
            <AddService addAdsOb={addAdsOb} serviceOb={serviceOb} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Service;

export async function getServerSideProps(context) {
  const { locale } = context;
  const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/signIN?callbackurl=/profile/addService",
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "home",
        "signin",
        "profile",
        "add-service",
        "add-ads",
      ])),
    },
  };
}
