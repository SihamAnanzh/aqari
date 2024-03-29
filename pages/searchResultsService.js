import React, { useCallback, useContext, useEffect, useState } from "react";
import { FilterContext } from "../stores/filter";
import ServiveResults from "../components/searchResult/ServiveResults";
import NoResults from "../components/searchResult/NoResults";
import { TranslateContext } from "../stores/translate-context";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import BackBtn from "../components/BackBtn";
import axios from "axios";

const SearchResultsService = () => {
  const filterCtx = useContext(FilterContext);
  const route = useRouter();
  const [areas, setAreas] = useState([]);
  const [areaIds, setAreasIds] = useState([]);

  const [id, setIds] = useState();
  const [type, setType] = useState();
  const [service, setService] = useState();
  let { t } = useTranslation();

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
  let premium = t("home:premium");
  let hour = t("home:hour");
  let priceCode = t("home:priceCode");
  let noResults = t("home:ads-5");
  let ad4 = t("home:ads-4");

  let adsOb = {
    ad1,
    ad2,
    ad3,
    ad4,
    premium,
    hour,
    priceCode,
    noResults,
  };
  useEffect(async () => {
    let regions_id = JSON.parse(localStorage.getItem("city"));
    console.log(regions_id);

    regions_id.map((res) => {
      console.log(res);
      areaIds.push(Number(res));
    });

    let id = localStorage.getItem("service");
    setIds(JSON.parse(id));
    console.log(areaIds);
    await axios
      .post(
        "https://stagingapi.aqarifinder.com/api/services/filter",
        {
          service_type_id: Number(id),
          regions: areaIds,
        },
        {
          headers: {
            lang: route.locale,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log("service filter " + res);
        filterCtx.setSerivceResutls(res.data.results);
      })
      .then(
        () => console.log(areaIds),
        areaIds.map((name) => {
          axios
            .get(`https://stagingapi.aqarifinder.com/api/region/${name}`, {
              headers: { lang: route.locale },
            })
            .then((res) => {
              setAreas((pre) => [...pre, res.data.results.title]);

              console.log(areas);
            });
        }),

        axios
          .get(`https://stagingapi.aqarifinder.com/api/service_type/1`, {
            headers: { lang: route.locale },
          })
          .then((res) => {
            console.log(res);
            setService(res.data.results.title);
          })
      );

    filterCtx.setSerivceResutls("");
    setAreas("");
    setType("");
  }, []);

  useEffect(() => {
    setAreasIds(areaIds);
  }, [areaIds]);
  return (
    <>
      <Head>
        <title>{route.locale == "ar" ? "نتائج البحث" : "Search results"}</title>
      </Head>
      {filterCtx.serviceResults.premium_ads &&
      filterCtx.serviceResults.premium_ads.length == 0 &&
      filterCtx.serviceResults.ads &&
      filterCtx.serviceResults.ads.length == 0 ? (
        <NoResults navOb={navOb} fo1={fo1} adsOb={adsOb} />
      ) : (
        <ServiveResults
          service={service}
          areas={areas}
          navOb={navOb}
          fo1={fo1}
          adsOb={adsOb}
        />
      )}
    </>
  );
};

export default SearchResultsService;

export async function getServerSideProps({ locale }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["home", "signUp"])) },
  };
}
