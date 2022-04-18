import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../stores/auth-context";
import Slideshow from "../imgSlider/ImgSlider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { ArrowBack } from "@mui/icons-material";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapAdds from "../map/MapAdds";

const Marker = ({ children }) => {
  return <div className="">{children}</div>;
};

const Estat = ({ withImg, setOverlay, data, addAdsOb }) => {
  console.log(data);
  const [addToFav, setAddtoFav] = useState(false);
  const [userAdd, setUserAdd] = useState(false);
  const route = useRouter();
  const [allInfo, setAllInfo] = useState({});
  const [lat, setLat] = useState(data.lat);
  const [lng, setLng] = useState(data.lat);

  let session = useSession();

  const center = {
    lat: Number(data.lat),
    lng: Number(data.lat),
  };

  useEffect(() => {
    session.data != null && session.data.xyz.sub == data.user_id
      ? setUserAdd(true)
      : setUserAdd(false);

    axios
      .get(`https://stagingapi.aqarifinder.com/api/ads/${data.add_id}`, {
        headers: {
          Authorization: session.data != null ? session.data.id : null,
          lang: route.locale,
        },
      })
      .then((res) => {
        setAddtoFav(res.data.results.is_fav);
        console.log(res);
      });
  }, []);

  const toggleFavAdds = () => {
    session.data != null
      ? !addToFav
        ? axios
            .post(
              `https://stagingapi.aqarifinder.com/api/user/ad/fav/add/${data.add_id}`,
              null,
              {
                headers: {
                  Authorization: session.data != null ? session.data.id : null,
                },
              }
            )
            .then((res) => {
              setAddtoFav(true);
            })
        : axios
            .post(
              `https://stagingapi.aqarifinder.com/api/user/ad/fav/remove/${data.add_id}`,
              null,
              {
                headers: {
                  Authorization: session.data != null ? session.data.id : null,
                },
              }
            )
            .then((res) => {
              setAddtoFav(false);
            })
      : route.replace("/signIN");
  };

  return (
    <>
      <div
        className="estat-conianer"
        style={{
          paddingTop: !withImg && "5%",
        }}
      >
        <div
          className="imgSliderAdd"
          style={{ position: "relative", direction: "rtl" }}
        >
          {withImg && <Slideshow setOverlay={setOverlay} imgs={data.images} />}
        </div>

        <div className="header-estat">
          <div className="info-estate">
            <div className="estat-address">
              <h3 className="estat-name">{data.title}</h3>
              <h5 className="estate-address">
                <img src="/assets/img/location.svg" alt="" />
                {data.address}
              </h5>
            </div>
            {!userAdd ? (
              <div className="fav-estat" onClick={toggleFavAdds}>
                {addToFav ? (
                  <img src="/assets/img/fav-icon.svg" alt="" />
                ) : (
                  <img src="/assets/img/emptyHearrt.svg" alt="" />
                )}
              </div>
            ) : (
              <h4 className="editAdd">
                <Link
                  href={{
                    pathname: `/profile/updateAdds/${data.add_id}`,
                    query: `/${data.title.trim().replace(" ", "-")}`,
                  }}
                >
                  {addAdsOb.edit}
                </Link>
              </h4>
            )}
          </div>
          <div className="data">
            <div className="data-time">
              <img
                src="/assets/img/time-estat.svg"
                width={8.63}
                height={8.63}
              />
              {data.time}
            </div>
            <div className="data-views">
              <img
                src="/assets/img/view2-01 (2).svg"
                width={12.47}
                height={7.95}
              />

              <span className="number" style={{ paddingRight: "5px" }}>
                {data.views}
              </span>
            </div>
          </div>
          <div className="disc-estate">{data.desc}</div>
        </div>

        <div className="content-estat estat-origin">
          <div className="first-line">
            <div className="city estat-deatils">
              <span className="att">{addAdsOb.add5}</span>
              <span className="">
                <img
                  src="/assets/img/bar.svg"
                  style={{
                    height: "28px",
                    marginTop: "8px",
                  }}
                />
              </span>
              <span>{data.city}</span>
            </div>
            <div className="space estat-deatils">
              <span className="att">{addAdsOb.add6} </span>
              <span className="">
                <img
                  src="/assets/img/bar.svg"
                  style={{
                    height: "28px",
                    marginTop: "8px",
                  }}
                />
              </span>
              <span>
                <span> {data.space} </span>
                {route.locale == "ar" ? "متر" : "meter"}
              </span>
            </div>
            <div className="destination estat-deatils">
              <span className="att">{addAdsOb.add8}</span>
              <span className="">
                <img
                  src="/assets/img/bar.svg"
                  style={{
                    height: "28px",
                    marginTop: "8px",
                    zIndex: "10",
                  }}
                />
              </span>
              <span>{data.interface}</span>
            </div>
          </div>
          <div className="second-line">
            <div className="price estat-deatils">
              <span className="att">{addAdsOb.add7}</span>
              <span className="">
                <img
                  src="/assets/img/bar.svg"
                  style={{
                    height: "28px",
                    marginTop: "8px",
                    zIndex: "10",
                  }}
                />
              </span>
              <span>
                <span>
                  {new Intl.NumberFormat("en", {
                    maximumSignificantDigits: 3,
                  }).format(data.price)}
                </span>{" "}
                {addAdsOb.priceCode}
              </span>
            </div>
            <div className="automated-number estat-deatils">
              <span className="att">{addAdsOb.add9}</span>
              <span className="">
                <img
                  src="/assets/img/bar.svg"
                  style={{
                    height: "28px",
                    marginTop: "8px",
                    zIndex: "10",
                  }}
                />
              </span>
              <span className="autom-value">{data.autoNumber}</span>
            </div>
          </div>
        </div>

        <div className="content-estat estat-fallback">
          <div className="city estat-deatils">
            <span className="att">{addAdsOb.add5}</span>
            <span className="">
              {/* <img src='/assets/img/bar.svg' style={{
                  height: "28px",
                marginTop: "8px",
                zIndex:'10'
                
                }}/>              
                 */}
            </span>
            <span>{data.city}</span>
          </div>
          <div className="space estat-deatils">
            <span className="att">{addAdsOb.add6}</span>
            <span className="">
              {/* <img src='/assets/img/bar.svg' style={{
                  height: "28px",
                marginTop: "8px",
                zIndex:'10'
                
                }}/>               */}
            </span>
            <span>
              <span>{data.space}</span> {route.locale == "ar" ? "متر" : "meter"}
            </span>
          </div>
          <div className="destination estat-deatils">
            <span className="att">{addAdsOb.add8}</span>
            <span className="">
              {/* <img src='/assets/img/bar.svg' style={{
                  height: "28px",
                marginTop: "8px",
                zIndex:'10'
                
                }}/>              
                 */}
            </span>
            <span>{data.interface}</span>
          </div>

          <div className="price estat-deatils">
            <span className="att">{addAdsOb.add7}</span>
            <span className="">
              {/* <img src='/assets/img/bar.svg' style={{
                  height: "28px",
                marginTop: "8px",
                zIndex:'10'
                
                }}/>               */}
            </span>
            <span>
              {new Intl.NumberFormat("en", {
                maximumSignificantDigits: 3,
              }).format(data.price)}
              <span> {addAdsOb.priceCode} </span>
            </span>
          </div>
          <div className=" estat-deatils auto">
            <span className="att">{addAdsOb.add9}</span>
            <span className="">
              {/* <img src='/assets/img/bar.svg'
                style={{
                  height: "28px",
                  marginTop: "8px",
                  zIndex: '10',
                  paddingRight:"30px"
                
                }}/>              
               */}
            </span>
            <span className="">{data.autoNumber}</span>
          </div>
        </div>

        <div className="estat-map map-origin" id="map">
          <div style={{ height: "298px", width: "888px" }}>
            <GoogleMapReact
              draggable
              bootstrapURLKeys={{
                key: "AIzaSyDtymLZiNzrzJMemAUS6ZQyfcgmjgJ1GNc",
              }}
              defaultZoom={10}
              center={center}
              // onChildClick={(ev) => {
              //   setLat(ev.lat);
              //   setLng(ev.lng);
              // }}
            >
              <Marker lat={lat} lng={lng}>
                <div className="">
                  <LocationOnIcon style={{ color: "red" }} fontSize="large" />
                </div>
              </Marker>
            </GoogleMapReact>
          </div>
        </div>
        <div className="estat-map map-copy">
          <div style={{ height: "168px", width: "89vw" }}>
            <GoogleMapReact
              draggable
              bootstrapURLKeys={{
                key: "AIzaSyDtymLZiNzrzJMemAUS6ZQyfcgmjgJ1GNc",
              }}
              defaultZoom={10}
              center={center}
            >
              <Marker lat={lat} lng={lng}>
                <div className="">
                  <LocationOnIcon style={{ color: "red" }} fontSize="large" />
                </div>
              </Marker>
            </GoogleMapReact>
          </div>
        </div>
        <div className="contact-estate">
          <div className="whatsApp">
            <span className="whatsApp-icon">
              <img src="/assets/img/whatsApp.svg" />
            </span>
            <a
              target="_blank"
              style={{ textDecoration: "none", color: "#fff" }}
              href={`https://api.whatsapp.com/send/?phone=+962${data.whatsApp}`}
            >
              {data.whatsApp}
            </a>
          </div>
          <div className="phone">
            <span className="address-phone">
              <img src="/assets/img/phone.svg" />
            </span>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href={`tel:+962${data.phone}`}
            >
              {data.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Estat;
