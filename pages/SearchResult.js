import React, { useContext, useEffect, useState } from "react";
import SearchResultComponents from "../components/searchResult/SearchResult";
import NoResults from "../components/searchResult/NoResults";
import { FilterContext } from "../stores/filter";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

const SearchResult = (props) => {
  const filterCtx = useContext(FilterContext);
  const route = useRouter();

  const [premuimAdds, setPremuimAdds] = useState([]);
  const [latestData, setLeastestAdd] = useState([]);
  const [areaIds, setAreasIds] = useState([]);
  const [rent, setRent] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [id, setIds] = useState();
  const [type, setType] = useState();
  const [areas, setAreas] = useState([]);
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
  //addads
  let add1 = t("add-ads:ad-1");
  let add2 = t("add-ads:ad-2");
  let add3 = t("add-ads:ad-3");
  let add4 = t("add-ads:ad-4");
  let add5 = t("add-ads:ad-5");
  let add6 = t("add-ads:ad-6");
  let add7 = t("add-ads:ad-7");
  let add8 = t("add-ads:ad-8");
  let add9 = t("add-ads:ad-9");
  let add10 = t("add-ads:ad-10");
  let add11 = t("add-ads:ad-11");
  let add12 = t("add-ads:ad-12");
  let add13 = t("add-ads:add-13");
  let edit = t("home:edit");

  //add-sh
  let adSh1 = t("add-ads:ad-sh-1");
  let adSh2 = t("add-ads:ad-sh-2");
  let adSh3 = t("add-ads:ad-sh-3");
  let adBtn = t("add-ads:add-btn");

  //adds section
  let ad1 = t("home:ads-1");
  let ad2 = t("home:ads-2");
  let ad3 = t("home:ads-3");
  let premium = t("home:premium");
  let hour = t("home:hour");
  let priceCode = t("home:priceCode");
  let noResults = t("home:ads-5");
  let adsOb = {
    ad1,
    ad2,
    ad3,
    premium,
    hour,
    priceCode,
    noResults,
  };

  let addAdsOb = {
    add1,
    add2,
    add3,
    add4,
    add5,
    add6,
    add7,
    add8,
    add9,
    add10,
    add11,
    add12,
    adSh1,
    adSh2,
    adSh3,
    adBtn,
    add13,
    edit,
    hour,
    priceCode,
  };

  useEffect(async () => {
    let regions_id = localStorage.getItem("city");
    console.log(regions_id);
    areaIds.push(Number(regions_id));
    let id = localStorage.getItem("ads");
    setIds(JSON.parse(id));
    let rentValue = localStorage.getItem("rent");
    setRent(JSON.parse(rentValue));

    await axios
      .post(
        "https://stagingapi.aqarifinder.com/api/ads/filter",
        {
          category_id: Number(id),
          regions: areaIds,
          ad_type_id: rent ? 1 : 2,
        },
        {
          headers: {
            lang: route.locale,
          },
        }
      )
      .then((res) => {
        filterCtx.setAddsSResutls(res.data.results);
        filterCtx.setSerivceId("");
      })
      .then(
        () => console.log(areaIds),
        areaIds.map((name) => {
          axios
            .get(`https://stagingapi.aqarifinder.com/api/region/${name}`, {
              headers: { lang: route.locale },
            })
            .then((res) => {
              console.log(res.data.results.title);
              setAreas((pre) => [...pre, res.data.results.title]);
            });
        }),

        axios
          .get(`https://stagingapi.aqarifinder.com/api/category/${id}`, {
            headers: { lang: route.locale },
          })
          .then((res) => {
            setType(res.data.results.title);
          })
      );

    return () => {
      filterCtx.setAddsSResutls("");
      setAreas("");
      setType("");
    };
  }, []);
  return (
    <>
      <Head>
        <title>{route.locale == "ar" ? "نتائج البحث" : "Search results"}</title>
      </Head>
      {filterCtx.addsResults.premium_ads &&
      filterCtx.addsResults.premium_ads.length == 0 &&
      filterCtx.addsResults.ads &&
      filterCtx.addsResults.ads.length == 0 ? (
        <NoResults navOb={navOb} fo1={fo1} adsOb={adsOb} />
      ) : (
        <SearchResultComponents
          tpyeName={type}
          areas={areas}
          navOb={navOb}
          addAdsOb={addAdsOb}
          fo1={fo1}
          adsOb={adsOb}
        />
      )}
    </>
  );
};

export default SearchResult;

export async function getServerSideProps(context) {
  let { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "signUp", "add-ads"])),
    },
  };

  // make the call her depne on the three value thats is comming from the cookies
}
