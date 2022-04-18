import React, { useContext, useEffect } from "react";
import Nav from "../../components/shared/nav/Nav";
import Footer from "../../components/shared/footer/Footer";
import { SignInComponent } from "../../components/singIN/SignIn";
import {
  getCsrfToken,
  signIn,
  getSession,
  providers,
  useSession,
  getProviders,
  signOut,
} from "next-auth/react";
import { TranslateContext } from "../../stores/translate-context";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { AuthContext } from "../../stores/auth-context";
import Head from "next/head";
import BackBtn from "../../components/BackBtn";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const providers = await getProviders();
  const { locale } = context;

  return {
    props: {
      csrfToken: await getCsrfToken(context),
      providers: providers,
      ...(await serverSideTranslations(locale, ["home", "signin"])),
    },
  };
}

const SignIN = ({ csrfToken, providers }) => {
  let { t } = useTranslation();
  const session = useSession();
  const route = useRouter();

  useEffect(() => {
    if (session && session.data !== null) {
      route.push("/", "/", { locale: route.locale });
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
  };

  return (
    <div>
      {session.data == null && (
        <div>
          <Head>
            <title>{route.locale == "ar" ? "تسجيل دخول" : "sign in"}</title>
            <meta name="description" content="" />
          </Head>
          <Nav navOb={navOb} />
          <SignInComponent
            csrfToken={csrfToken}
            providers={providers}
            sginOb={sginOb}
          />
          <Footer fo1={fo1} />
        </div>
      )}
    </div>
  );
};

export default SignIN;
