import React, { useEffect, useContext, useState } from "react";
import Nav from "../../components/shared/nav/Nav";
import Footer from "../../components/shared/footer/Footer";
import SubNav from "../../components/profile/SubNav";
import { AuthContext } from "../../stores/auth-context";
import { useRouter } from "next/router";
import MyService from "../../components/profile/MyService";
import axios from "axios";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import BackBtn from "../../components/BackBtn";

const ProfileService = () => {
  const authCtx = useContext(AuthContext);
  const [serviceData, setServicseData] = useState([]);
  const [services, setService] = useState([]);
  const route = useRouter();
  let { t } = useTranslation();
  const session = useSession();
  useEffect(() => {
    console.log(session);
    // if (session.status == "loading" || session.status == "authenticated") {
    if (session.data == null) {
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
  let newestٍervice = t("home:newestٍervice");

  let premium = t("home:premium");
  let hour = t("home:hour");
  let priceCode = t("home:priceCode");
  let adsOb = {
    ad1,
    ad2,
    ad3,
    premium,
    hour,
    priceCode,
    newestٍervice,
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

  useEffect(() => {
    axios
      .get("https://stagingapi.aqarifinder.com/api/user/services/list", {
        headers: {
          lang: route.locale,
          Authorization: session && session.data != null && session.data.id,
        },
      })
      .then((res) => {
        setService(res.data.results);
      });
  }, []);
  useEffect(() => {
    services &&
      services.map((adds) => {
        let data = {
          id: adds.id,
          user_id: adds.user_id,
          address: adds.regions_string,
          images:
            adds.images.length > 0
              ? adds.images.logo_url
              : "/assets/img/home.jpg",
          title: adds.title,
          price: adds.price,
          time: adds.issue_date_string.slice(0, 5),

          views: adds.view_count,
          whatsApp: adds.whatsapp,
          phone: adds.phone,
          disc: adds.description,
          regionsString: adds.regions_string,
          serviceTypeString: adds.service_type.title,
          serviceTypeId: adds.service_type.id,
          regionsId: adds.region_ids,
          singleEstatData: {
            id: adds.id,
            images: adds.images,
            discriptions: adds.description,
            price: adds.price,
            phone: adds.phone,
            whatsApp: adds.whatsapp,
            views: adds.view_count,
            time: adds.issue_date_string.slice(0, 5),
            user_id: adds.user_id,
            regionsString: adds.regions_string,
            serviceTypeString: adds.service_type.title,
            serviceTypeId: adds.service_type.id,
            regionsId: adds.region_ids,
            title: adds.title,
            address: adds.regions_string,
          },
        };

        setServicseData((pre) => [...pre, data]);
      });
  }, [services]);

  return (
    <>
      {session && session.data != null && (
        <>
          <Head>
            <title>{route.locale == "ar" ? "خدماتي" : "My services"}</title>
          </Head>
          <Nav navOb={navOb} />
          <div className="profile-container">
            <h1 className="profile-heading">{pro1}</h1>
            <SubNav proOb={proOb} />
            <MyService serviceData={serviceData} adsOb={adsOb} />
          </div>
          <Footer fo1={fo1} />
        </>
      )}
    </>
  );
};

export default ProfileService;

export async function getServerSideProps(context) {
  const { locale } = context;
  // const session = getSession(context)
  // if (session.data == null) {
  //   context.res.writeHead(303, { Location: "/signIN" });
  //   context.res.redirect("/signIN", 303);
  //   context.res.end();
  // }
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "signin", "profile"])),
    },
  };
}
