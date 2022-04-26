import React, { useEffect, useState } from "react";
import PremuimAdd from "./PremuimAdd";
import Add from "./Add";
import axios from "axios";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";

const Adds = ({ premuimAdds, latestData, ads, premium, adsOb }) => {
  const [latestDataArray, setLatestData] = useState(latestData);
  const [premuimAddsArray, setPremuimAdds] = useState(premuimAdds);
  const [adsArray, setAds] = useState(latestData);
  const [premiumArray, setPremium] = useState(premium);
  const [hasMore, setHasMore] = useState(true);
  const route = useRouter();

  useEffect(() => {
    setLatestData(latestData);
  }, [latestData]);
  const loadMoreHandler = () => {
    let latestData = axios
      .get("https://stagingapi.aqarifinder.com/api/ads/latest/list", {
        headers: {
          lang: route.locale,
          limit: 11,
          offset: latestDataArray.length,
        },
      })
      .then((res) => {
        if (res.data.results.length < 11) {
          setHasMore(false);
        }
        res.data.results.slice(0, 10).map((adds) => {
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
            regionId: adds.region_id,
            is_premium: adds.is_premium,
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
              regionId: adds.region_id,
              is_premium: adds.is_premium,
              isFav: adds.is_fav,
              regionsString: adds.region.title,
              category: adds.category.title,
              adType: adds.ad_type.title,
            },
          };

          setLatestData((pre) => [...pre, data]);
        });
      });
  };

  return (
    <div className="adds-container">
      <h1 className="premium-title">{adsOb.ad1}</h1>
      {premuimAdds &&
        premuimAdds.map((premiumAddsData, index) => (
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
      {premium &&
        premium.map((premiumAddsData) => (
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

      <h1 className="premium-title">{adsOb.ad2}</h1>
      {latestDataArray &&
        latestDataArray.map((addsData) => (
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
      {ads &&
        ads.map((addsData) => (
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
            img={addsData.images}
          />
        ))}

      {hasMore && (
        <div
          className="adds-btn"
          onClick={loadMoreHandler}
          style={{
            cursor: "pointer",
          }}
        >
          {adsOb.ad3}
          <span className="btn-icon">
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
      )}
    </div>
  );
};

export default Adds;
