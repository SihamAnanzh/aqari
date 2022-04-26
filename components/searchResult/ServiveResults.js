import React, { useState, useEffect, useContext } from "react";
import PremiumService from "../adds/PremiumService";
import Footer from "../shared/footer/Footer";
import Nav from "../shared/nav/Nav";
import Add from "../adds/Add";
import { FilterContext } from "../../stores/filter";
import axios from "axios";

import { useRouter } from "next/router";

const ServiveResults = ({ navOb, adsOb, fo1, areas, service }) => {
  const [premuimAdds, setPremuimAdds] = useState([]);
  const [latestData, setLeastestAdd] = useState([]);
  const filterCtx = useContext(FilterContext);
  const [hasMore, setHasMore] = useState(true);
  const route = useRouter();
  const [areaIds, setAreasIds] = useState([]);
  const [areasData, setAreasData] = useState(areas);

  const [id, setIds] = useState();
  const [rent, setRent] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setLeastestAdd(latestData);
    setHasMore(latestData < 10 ? false : true);
  }, [latestData]);

  const loadMoreHandler = async () => {
    let regions_id = JSON.parse(localStorage.getItem("city"));
    console.log(regions_id);

    regions_id.map((res) => {
      console.log(res);
      areaIds.push(Number(res));
    });

    let id = localStorage.getItem("service");
    setIds(JSON.parse(id));
    let rentValue = localStorage.getItem("rent");
    setRent(JSON.parse(rentValue));

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
            limit: 11,
            offset: latestData.length,
          },
        }
      )
      .then((res) => {
        if (res.data.results.length < 11) {
          setHasMore(false);
        }
        res.data.results.map((adds) => {
          let data = {
            id: adds.id,
            serviceId: adds.service_type_id.id,
            user_id: adds.user_id,
            images:
              adds.images.length > 0
                ? adds.images.logo_url
                : "/assets/img/home.jpg",
            title: adds.title,
            address: adds.service_type.title,
            price: adds.price,
            time: adds.issue_date_string.slice(0, 5),

            views: adds.view_count,
            whatsApp: adds.whatsapp,
            phone: adds.phone,
            disc: adds.description,
            singleEstatData: {
              id: adds.id,
              images: adds.images,
              title: adds.title,
              address: adds.regions_string,
              discriptions: adds.desc,
              price: adds.price,
              phone: adds.phone,
              whatsApp: adds.whatsapp,
              time: adds.issue_date_string.slice(0, 5),

              user_id: adds.user_id,
            },
          };

          setLeastestAdd((pre) => [...pre, data]);
        });
      });
  };
  useEffect(() => {
    filterCtx.serviceResults &&
      filterCtx.serviceResults.map((adds) => {
        let data = {
          id: adds.id,
          serviceId: adds.service_type.id,
          user_id: adds.user_id,
          images:
            adds.images.length > 0
              ? adds.images.logo_url
              : "/assets/img/home.jpg",
          title: adds.title,
          address: adds.service_type.title,
          price: adds.price,
          time: adds.issue_date_string.slice(0, 5),

          views: adds.view_count,
          whatsApp: adds.whatsapp,
          phone: adds.phone,
          disc: adds.description,
          singleEstatData: {
            id: adds.id,
            images: adds.images,
            title: adds.title,
            address: adds.regions_string,
            discriptions: adds.desc,
            price: adds.price,
            phone: adds.phone,
            whatsApp: adds.whatsapp,
            time: adds.issue_date_string.slice(0, 5),

            user_id: adds.user_id,
          },
        };

        setLeastestAdd((pre) => [...pre, data]);
      });
  }, [filterCtx.serviceResults]);

  useEffect(() => {
    filterCtx.serviceResults.premium_ads &&
      filterCtx.serviceResults.premium_ads.map((adds) => {
        let data = {
          id: adds.id,
          serviceId: adds.service_type_id.id,
          user_id: adds.user_id,
          images:
            adds.images.length > 0
              ? adds.images.logo_url
              : "/assets/img/home.jpg",
          title: adds.title,
          address: adds.service_type.title,
          price: adds.price,
          time: adds.issue_date_string.slice(0, 5),

          views: adds.view_count,
          whatsApp: adds.whatsapp,
          phone: adds.phone,
          disc: adds.description,
          singleEstatData: {
            id: adds.id,
            images: adds.images,
            title: adds.title,
            address: adds.regions_string,
            discriptions: adds.desc,
            price: adds.price,
            phone: adds.phone,
            whatsApp: adds.whatsapp,
            time: adds.issue_date_string.slice(0, 5),

            user_id: adds.user_id,
          },
        };

        setPremuimAdds((pre) => [...pre, data]);
      });
    console.log(premuimAdds);
  }, [filterCtx.serviceResults.premium_ads]);
  useEffect(() => {
    console.log(areas);
    setAreasData(areas);
  }, [areas]);

  return (
    <div className="results-container">
      <Nav navOb={navOb} />
      <div className="results">
        <h2 className="results-heading premium-title">
          {adsOb.ad6}
          {`${service == undefined ? "" : service} 
            ${route.locale == "ar" ? "في" : "in"}
             ${[...areasData]}`}
        </h2>
        {/* {
          <div className="premium-adds-results">
            <h1 className="premium-title">{adsOb.ad1}</h1>
            {
              (console.log(premuimAdds),
              premuimAdds &&
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
                )))
            }
          </div>
        } */}

        <div className="adds-results">
          <h1 className="premium-title">{adsOb.ad2}</h1>

          {latestData &&
            latestData.map((addsData, index) => (
              <Add
                adsOb={adsOb}
                singleEstate={addsData.singleEstatData}
                add_id={addsData.add_id}
                key={index}
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

export default ServiveResults;
