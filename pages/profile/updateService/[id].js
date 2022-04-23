import React, { useEffect, useContext } from "react";
import Nav from "../../../components/shared/nav/Nav";
import Footer from "../../../components/shared/footer/Footer";
import SubNav from "../../../components/profile/SubNav";
import UpdateService from "../../../components/profile/UpdateService";
import { AuthContext } from "../../../stores/auth-context";
import axios from "axios";
import { getSession, signIn, useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Head from "next/head";
import BackBtn from "../../../components/BackBtn";

const Update = ({ updateData }) => {
  const authCtx = useContext(AuthContext);
  let { t } = useTranslation();
  const route = useRouter();
  const session = useSession();

  useEffect(() => {
    session.data == null && route.push("/signIN");
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

  let title = t("add-service:service-title");
  let phone = t("add-service:phone");
  let serviceType = t("add-service:serviceType");
  let whatsaap = t("add-service:whatsaap");
  let serivceDetails = t("add-service:serivceDetails");
  let pic = t("add-service:pic");
  let city = t("add-service:city");
  let price = t("add-service:price");
  let edit = t("add-service:edit");
  let tearmAndCondition = t("add-service:tearmAndCondition");

  let serviceOb = {
    pro8,
    title,
    phone,
    serviceType,
    whatsaap,
    serivceDetails,
    pic,
    city,
    price,
    edit,
    tearmAndCondition,
  };

  return (
    <>
      <>
        <Head>
          <title>{updateData.title}</title>
          {/* <meta name="description" content={
            updateData&&updateData.map((data) => {
              let content = data.description + ","
              return content
            })
          } /> */}
        </Head>
        <Nav navOb={navOb} />
        <div className="profile-container">
          <h1 className="profile-heading">{pro1}</h1>
          <SubNav proOb={proOb} />
          <UpdateService updateData={updateData} serviceOb={serviceOb} />
        </div>
        <Footer fo1={fo1} />
      </>
    </>
  );
};

export default Update;

export async function getServerSideProps(context) {
  let updateData;
  const { locale } = context;
  const { id } = context.params;
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/signIN",
        permanent: false,
      },
    };
  }
  if (id) {
    await axios
      .get(`https://stagingapi.aqarifinder.com/api/services/${id}`, {
        headers: { lang: locale },
      })
      .then((res) => {
        console.log(res);
        updateData = {
          address: res.data.results.regions_string,
          description: res.data.results.description,
          phone: res.data.results.phone,
          price: res.data.results.price,
          time: "4",
          title: res.data.results.title,
          user_id: res.data.results.user_id,
          views: res.data.results.view_count,
          whatsApp: res.data.results.whatsapp,
          images:
            res.data.results.images.length > 0
              ? res.data.results.images
              : false,
          id: res.data.results.id,
          regionsString: res.data.results.regions_string,
          regionId: res.data.results.region_ids,
          serviceType: res.data.results.service_type.title,
          serviceTypeId: res.data.results.service_type.id,
        };
      });
  }

  return {
    props: {
      updateData,
      ...(await serverSideTranslations(locale, [
        "home",
        "signin",
        "profile",
        "add-service",
      ])),
    },
  };
}
