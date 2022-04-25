import Link from "next/link";
import React from "react";

const Add = (props) => {
  const img_url =
    props.singleEstate.images && props.singleEstate.images.length > 0
      ? props.singleEstate.images[0].logo_url
      : "/assets/img/placeholder.png";
  return (
    <>
      <Link
        style={{ textDecoration: "none" }}
        href={{
          pathname: `/advertises/${props.add_id}`,
          query: `title=${props.title.trim().replace(" ", "-")}`,
        }}
      >
        <div className="prem-contanier ad-contanier ad-main">
          <div className="img-prem">
            <img
              src={img_url}
              alt={
                props.title.length > 20
                  ? props.title.substr(0, 20 - 1) + "..."
                  : props.title
              }
            />
            {/* <Image
              src={product_image}
              className="js-img"
              alt={
                props.title.length > 20
                  ? props.title.substr(0, 20 - 1) + "..."
                  : props.title
              }
              blurDataURL={"/assets/img/discount-img.jpg"}
              placeholder="blur"
              layout="fill"
              unoptimized
            ></Image> */}
          </div>
          <div className="first-prem">
            <div className="info-prem">
              <div className="title">
                {" "}
                {props.title.length > 30
                  ? props.title.substr(0, 30 - 1) + "..."
                  : props.title}
              </div>
              <div className="address">
                <img src="/assets/img/location-gray.svg" />
                {props.address}
              </div>
              <div className="desc-prem  ">
                {props.disc.length > 90
                  ? props.disc.substr(0, 90 - 1) + "..."
                  : props.disc}
              </div>
            </div>

            <div className="detials">
              <span className="price">
                <span className="number">
                  {new Intl.NumberFormat("en", {
                    maximumSignificantDigits: 3,
                  }).format(props.price)}
                </span>
                {props.adsOb.priceCode}
              </span>
              <span className="time">
                <span className="number">
                  <span className="address-time-icon">
                    <img src="/assets/img/address-hour.svg" />
                  </span>
                  {props.time}
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        href={{
          pathname: `/advertises/${props.add_id}`,
          query: `title=${props.title.trim().replace(" ", "-")}`,
        }}
      >
        <div className="prem-contanier ad-contanier ad-second">
          <div className="first-prem">
            <div className="img-prem">
              <img
                src={
                  props.singleEstate.images[0] &&
                  props.singleEstate.images[0].logo_url
                }
                alt={
                  props.title.length > 20
                    ? props.title.substr(0, 20 - 1) + "..."
                    : props.title
                }
              />
            </div>
            <div className="info-prem">
              <div className="title">
                {" "}
                {props.title.length > 20
                  ? props.title.substr(0, 20 - 1) + "..."
                  : props.title}
              </div>
              <div className="address">
                <img src="/assets/img/location-gray.svg" />
                {props.address}
              </div>
              <div className="detials detials-second-regular">
                <span className="time">
                  <span className="number">
                    <span className="address-time-icon">
                      <img src="/assets/img/address-hour.svg" />
                    </span>
                    {props.time}
                  </span>
                </span>
                <span className="price">
                  <span className="number">
                    {new Intl.NumberFormat("en", {
                      maximumSignificantDigits: 3,
                    }).format(props.price)}
                  </span>
                  {props.adsOb.priceCode}
                </span>
              </div>
            </div>

            <div className="detials detials-main-regular">
              <span className="price">
                <span className="number">{props.price}</span>
                {props.adsOb.priceCode}
              </span>
              <span className="time">
                <span className="number">
                  <span className="address-time-icon">
                    <img src="/assets/img/address-hour.svg" />
                  </span>
                  {props.time}
                </span>
              </span>
            </div>
          </div>
          <div className="desc-prem  ">
            {props.disc.length > 50
              ? props.disc.substr(0, 50 - 1) + "..."
              : props.disc}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Add;
