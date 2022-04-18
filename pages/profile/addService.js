import React, { useEffect, useContext } from "react";
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
const Service = () => {
  const authCtx = useContext(AuthContext);
  const route = useRouter();
  let { t } = useTranslation();
  const session = useSession();

  useEffect(() => {
    console.log(session);
    // if (session.status == "loading" || session.status == "authenticated") {
    if (session && session.data == null) {
      route.push(`/signIN`, `/signIN`, { locale: route.locale });
    } else {
      // maybe go to login page
    }
  }, []);

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
      {session && session.data != null && (
        <>
          <Head>
            <title>{route.locale == "ar" ? "اضف خدمة" : "Add services"}</title>
          </Head>
          <Nav navOb={navOb} />
          <div className="profile-container">
            <h1 className="profile-heading">{pro1}</h1>
            <SubNav proOb={proOb} />
            <AddService serviceOb={serviceOb} />
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
  const session = getSession(context);
  // if (session.data == null) {
  //   context.res.writeHead(303, { Location: "/signIN" });
  //   context.res.redirect("/signIN", 303);
  //   context.res.end();
  // }
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "home",
        "signin",
        "profile",
        "add-service",
      ])),
    },
  };
}
