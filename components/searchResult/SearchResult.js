import React, { useState, useEffect, useContext } from "react";
import PremuimAdd from "../adds/PremuimAdd";
import Footer from "../shared/footer/Footer";
import Nav from "../shared/nav/Nav";
import Add from "../adds/Add";
import { FilterContext } from "../../stores/filter";
import { TranslateContext } from "../../stores/translate-context";
import BackBtn from "../BackBtn";
import { useRouter } from "next/router";
import axios from "axios";

const SearchResultComponents = ({ navOb, fo1, adsOb, tpyeName, areas }) => {
  const [premuimAdds, setPremuimAdds] = useState([]);
  const [latestData, setLeastestAdd] = useState([]);
  const [areaIds, setAreasIds] = useState([]);
  const [rent, setRent] = useState();
  const [areasData, setAreasData] = useState(areas);
  const [hasMore, setHasMore] = useState(true);
  const [id, setIds] = useState();
  const [type, setType] = useState();

  const filterCtx = useContext(FilterContext);
  const route = useRouter();

  console.log(adsOb);
  const loadMoreHandler = async () => {
    let regions_id = JSON.parse(localStorage.getItem("city"));
    console.log(regions_id);

    regions_id.map((res) => {
      console.log(res);
      areaIds.push(Number(res));
    });

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
            limit: 11,
            offset: latestData.length,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.results.ads);
        if (res.data.results.ads.length < 11) {
          setHasMore(false);
        }
        res.data.results.ads.map((adds) => {
          let data = {
            add_id: adds.id,
            user_id: adds.user_id,
            images:
              adds.images.length == 0 ? "/assets/img/home.jpg" : adds.images,
            title: adds.title,
            address: adds.region.country.title + " " + adds.region.title,
            price: adds.price,
            time: adds.issue_date_string.slice(0, 5),
            views: adds.view_count,
            whatsApp: adds.whatsapp,
            phone: adds.phone,
            disc: adds.desc,
            lat: adds.lat,
            lng: adds.lng,
            singleEstatData: {
              id: adds.id,
              images: adds.images,
              title: adds.title,
              address: adds.region.country.title + " " + adds.region.title,
              discriptions: adds.desc,
              city: adds.region.title,
              space: adds.area,
              interface: adds.front,
              price: adds.price,
              autoNumber: adds.auto_number,
              phone: adds.phone,
              whatsApp: adds.whatsapp,
              lat: adds.lat,
              lng: adds.lng,
              views: adds.view_count,
              time: adds.issue_date_string.slice(0, 5),

              user_id: adds.user_id,
            },
          };
          setLeastestAdd((pre) => [...pre, data]);
        });
      });
  };

  useEffect(() => {
    setAreasData(areas);
  }, [areas]);

  useEffect(() => {
    setLeastestAdd(latestData);
  }, [latestData]);

  useEffect(() => {
    filterCtx.addsResults.premium_ads &&
      filterCtx.addsResults.premium_ads.map((adds) => {
        let data = {
          add_id: adds.id,
          user_id: adds.user_id,
          images: adds.images,
          title: adds.title,
          address: adds.region.country.title + " " + adds.region.title,
          price: adds.price,
          time: adds.issue_date_string.slice(0, 5),

          views: adds.view_count,
          whatsApp: adds.whatsapp,
          phone: adds.phone,
          disc: adds.desc,
          lat: adds.lat,
          lng: adds.lng,
          singleEstatData: {
            id: adds.id,
            images: adds.images,
            title: adds.title,
            address: adds.region.country.title + " " + adds.region.title,
            discriptions: adds.desc,
            city: adds.region.title,
            space: adds.area,
            interface: adds.front,
            price: adds.price,
            autoNumber: adds.auto_number,
            phone: adds.phone,
            whatsApp: adds.whatsapp,
            lat: adds.lat,
            lng: adds.lng,
            views: adds.view_count,
            time: adds.issue_date_string.slice(0, 5),
            user_id: adds.user_id,
          },
        };
        setPremuimAdds((pre) => [...pre, data]);
      });
  }, [filterCtx.addsResults.premium_ads]);

  useEffect(() => {
    filterCtx.addsResults.ads &&
      filterCtx.addsResults.ads.map((adds) => {
        let data = {
          add_id: adds.id,
          user_id: adds.user_id,
          images:
            adds.images.length == 0 ? "/assets/img/home.jpg" : adds.images,
          title: adds.title,
          address: adds.region.country.title + " " + adds.region.title,
          price: adds.price,
          time: adds.issue_date_string.slice(0, 5),
          views: adds.view_count,
          whatsApp: adds.whatsapp,
          phone: adds.phone,
          disc: adds.desc,
          lat: adds.lat,
          lng: adds.lng,
          singleEstatData: {
            id: adds.id,
            images: adds.images,
            title: adds.title,
            address: adds.region.country.title + " " + adds.region.title,
            discriptions: adds.desc,
            city: adds.region.title,
            space: adds.area,
            interface: adds.front,
            price: adds.price,
            autoNumber: adds.auto_number,
            phone: adds.phone,
            whatsApp: adds.whatsapp,
            lat: adds.lat,
            lng: adds.lng,
            views: adds.view_count,
            time: adds.issue_date_string.slice(0, 5),

            user_id: adds.user_id,
          },
        };
        setLeastestAdd((pre) => [...pre, data]);
      });
  }, [filterCtx.addsResults.ads]);

  return (
    <div className="results-container">
      <Nav navOb={navOb} />
      <div className="results">
        <h2 className="results-heading">
          {`${tpyeName == undefined ? "" : tpyeName}
           ${
             rent
               ? route.locale == "ar"
                 ? "للإيجار "
                 : "Rent"
               : route.locale == "ar"
               ? "للبيع"
               : "Selling"
           }
            ${route.locale == "ar" ? "في" : "in"}
             ${[...areasData]}`}
        </h2>
        {premuimAdds.length !== 0 && (
          <div className="premium-adds-results">
            <h1 className="premium-title">{adsOb.ad1}</h1>
            {premuimAdds &&
              premuimAdds.map((premiumAddsData) => (
                <PremuimAdd
                  adsOb={adsOb}
                  singleEstate={premiumAddsData.singleEstatData}
                  key={premiumAddsData.add_id}
                  add_id={premiumAddsData.add_id}
                  img={premiumAddsData.img}
                  title={premiumAddsData.title}
                  address={premiumAddsData.address}
                  price={premiumAddsData.price}
                  time={premiumAddsData.time}
                  views={premiumAddsData.views}
                  whatsApp={premiumAddsData.whatsApp}
                  phone={premiumAddsData.phone}
                  disc={premiumAddsData.disc}
                />
              ))}
          </div>
        )}

        <div className="adds-results">
          <h1 className="premium-title">{adsOb.ad2}</h1>

          {latestData &&
            latestData.map((addsData) => (
              <Add
                adsOb={adsOb}
                singleEstate={addsData.singleEstatData}
                add_id={addsData.add_id}
                key={addsData.add_id}
                disc={addsData.disc}
                time={addsData.time}
                price={addsData.price}
                address={addsData.address}
                title={addsData.title}
                img={addsData.img}
              />
            ))}
        </div>
        {hasMore ? (
          <div
            className="adds-btn"
            onClick={loadMoreHandler}
            style={{
              cursor: "pointer",
            }}
          >
            {adsOb.ad3}
            <span
              className="btn-icon"
              style={{
                marginLeft: "6px",
              }}
            >
              <img
                src="/assets/img/+btn.svg"
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "12px",
                  marginTop: "8px",
                  cursor: "pointer",
                }}
              />
            </span>
          </div>
        ) : (
          <span className="end-results">{adsOb.ad4}</span>
        )}
      </div>
      <Footer fo1={fo1} />
    </div>
  );
};

export default SearchResultComponents;
