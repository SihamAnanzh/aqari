import React, { useState, useEffect, useContext } from "react";
import PremuimAdd from "../adds/PremuimAdd";
import Footer from "../shared/footer/Footer";
import Nav from "../shared/nav/Nav";
import Add from "../adds/Add";
import { FilterContext } from "../../stores/filter";
import { TranslateContext } from "../../stores/translate-context";
import BackBtn from "../BackBtn";
import { useRouter } from "next/router";

const SearchResultComponents = ({ navOb, fo1, adsOb }) => {
  const [premuimAdds, setPremuimAdds] = useState([]);
  const [latestData, setLeastestAdd] = useState([]);
  const [localPremuimAdds, setLocalPremuimAdds] = useState([]);
  const [latestLocal, setLeastestLocal] = useState([]);
  const filterCtx = useContext(FilterContext);
  const [type, setType] = useState(filterCtx.typeName);
  const [rent, setRent] = useState(filterCtx.rent);
  const [areas, setAreas] = useState([filterCtx.areaName]);
  const [visible, setVisible] = useState(5);
  const route = useRouter();
  console.log(areas);
  const loadMoreHandler = () => {
    setVisible((pre) => pre + 5);
  };

  useEffect(() => {
    console.log(filterCtx.addsResults.premium_ads);
    if (typeof window !== "undefined") {
      if (filterCtx.addsResults.premium_ads != undefined) {
        localStorage.setItem(
          "premData",
          JSON.stringify(
            filterCtx.addsResults.premium_ads &&
              filterCtx.addsResults.premium_ads
          )
        );
        localStorage.setItem(
          "data",
          JSON.stringify(filterCtx.addsResults.ads && filterCtx.addsResults.ads)
        );
        localStorage.setItem("type", JSON.stringify(filterCtx.typeName));

        localStorage.setItem("rent", JSON.stringify(filterCtx.rent));

        localStorage.setItem("areaNames", JSON.stringify(filterCtx.areaName));

        // latestLocal(JSON.parse(localStorage.getItem("latestLocal")));
      }
      let prem = localStorage.getItem("premData");
      setLocalPremuimAdds(JSON.parse(prem));
      let ads = localStorage.getItem("data");
      setLeastestLocal(JSON.parse(ads));
      let type = localStorage.getItem("type");
      let rent = localStorage.getItem("rent");
      let area = localStorage.getItem("areaNames");

      console.log(area);
      setType(JSON.parse(type));
      setRent(JSON.parse(rent));
      setAreas(JSON.parse(area));
      console.log(areas);
    }
  }, []);

  useEffect(() => {
    localPremuimAdds &&
      localPremuimAdds.map((adds) => {
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
  }, [localPremuimAdds]);

  useEffect(() => {
    latestLocal &&
      latestLocal.map((adds) => {
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
        setLeastestAdd((pre) => [...pre, data]);
        console.log(latestData);
      });
  }, [latestLocal]);
  useEffect(() => {
    filterCtx.addsResults.premium_ads != undefined
      ? filterCtx.addsResults.premium_ads
      : localPremuimAdds &&
        localPremuimAdds.map((adds) => {
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
  }, []);

  useEffect(() => {
    filterCtx.addsResults.ads != undefined
      ? filterCtx.addsResults.ads
      : latestLocal &&
        latestLocal.map((adds) => {
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
          setLeastestAdd((pre) => [...pre, data]);
          console.log(latestData);
        });
  }, []);

  return (
    <div className="results-container">
      <Nav navOb={navOb} />
      <div className="results">
        <h2 className="results-heading">
          {`${type}
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
             ${[...areas]}`}
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

          {
            (console.log(latestData),
            latestData &&
              latestData
                .slice(0, visible)
                .map((addsData) => (
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
                )))
          }
        </div>

        <span className="end-results">{adsOb.ad4}</span>
      </div>
      <Footer fo1={fo1} />
    </div>
  );
};

export default SearchResultComponents;
