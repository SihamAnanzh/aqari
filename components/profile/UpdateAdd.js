import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../stores/auth-context";
import PackgeBox from "../dialogBox/PackgeBox";
import SimpleMap from "../map/MapAdds";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
const UpdateAdd = ({ updateData, addAdsOb }) => {
  const [showListCategory, setShwoListCategory] = useState(false);
  const [showListType, setShwoListType] = useState(false);
  const [showListNames, setShowListNames] = useState(false);
  const [checkedAdd, setCheckedAdd] = useState(false);
  const [checkedOffice, setCheckedOffice] = useState(false);
  const [checkedConditions, setCheckedConditions] = useState(false);
  const [disable, setdisable] = useState(true);
  const [showDialogBox, setShowDialogiBox] = useState(false);
  const [addTitle, setAddTitle] = useState(updateData && updateData.title);
  const [phoneNumber, setPhoneNumber] = useState(
    updateData && updateData.phone
  );
  const [category, setCategory] = useState(updateData && updateData.adType);
  const [typeEstat, setTypeEstat] = useState(updateData && updateData.category);
  const [city, setCity] = useState(updateData && updateData.regionsString);
  const [space, setSpace] = useState(updateData && updateData.area);
  const [price, setPrice] = useState(updateData && updateData.price);
  const [front, setFront] = useState(updateData && updateData.front);
  const [autoNum, setAutoNum] = useState(updateData && updateData.autoNum);
  const [desc, setDesc] = useState(updateData && updateData.desc);
  const [regions, setRegions] = useState([]);
  const [items, setItem] = useState([]);
  const [lat, setLat] = useState(updateData && updateData.lat);
  const [lng, setLng] = useState(updateData && updateData.lng);
  const authCtx = useContext(AuthContext);
  //ids for api
  const [type_id, setType_id] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [region_id, setRegion_id] = useState(
    updateData && updateData.region_id
  );
  const route = useRouter();

  const session = useSession();
  const handelSubmit = (e) => {
    let data;
    addTitle == "" ||
      desc == "" ||
      space == "" ||
      front == "" ||
      price == "" ||
      autoNum == "" ||
      phoneNumber == " ",
      lat == " ",
      lng == " "
        ? swal(
            route.locale == "ar"
              ? ("تحذير", "يرجى تعبئة جميع الحقول", "warning")
              : ("تحذير", "Fill all field please", "warning")
          )
        : ((data = {
            id: Number(updateData.id),
            title: addTitle,
            desc: desc,
            region_id: Number(region_id),
            area: Number(space),
            front: front,
            price: Number(price),
            currency_id: 1,
            auto_number: autoNum,
            lat: lat.toString(),
            lng: lng.toString(),
            phone: phoneNumber,
            whatsapp: phoneNumber,
            is_premium: showDialogBox,
            ad_type_id: updateData.adTypeId,
            category_id: updateData.categoryId,
          }),
          axios({
            method: "post",
            url: "https://stagingapi.aqarifinder.com/api/user/ad/update",
            headers: {
              "content-type": "application/json",
              Authorization: session.data.id,
            },
            data: { ...data },
          })
            .then((response) => {
              console.log(response);
              response.data.status.code == 200 &&
                (route.locale == "ar"
                  ? swal("تهانينا", "تمت تعديل الإعلان بنجاح", "success")
                  : swal("well done", "Ad updated Successfully", "success"),
                route.replace("/profile/myAdds"));
            })
            .catch((response) => {
              route.locale == "ar"
                ? swal(
                    "لا يمكنك التعديل في الوقت الحالي",
                    "الرجاء المحاولة في وقت لاحق",
                    "error"
                  )
                : swal("You can not edit at the moment", "try later", "error");
            }));
  };

  useEffect(() => {
    setShowDialogiBox(showDialogBox);
  }, [showDialogBox]);

  useEffect(() => {
    const region = axios
      .get("https://stagingapi.aqarifinder.com/api/region/list/", {
        headers: {
          lang: route.locale,
        },
      })
      .then((res) => {
        !res.data.status.message == "OK" ? "" : setRegions(res.data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://stagingapi.aqarifinder.com/api/category/list", {
        headers: {
          lang: route.locale,
        },
      })
      .then((res) => {
        !res.data.status.message == "OK" ? "" : setItem(res.data.results);
      });
  }, []);

  return (
    <div>
      <div
        className="profile-tab"
        id="profile-tab"
        onClick={(e) => {
          e.target.id !== "category-list"
            ? setShwoListCategory(false)
            : setShwoListCategory(true);
          e.target.id !== "type-list"
            ? setShwoListType(false)
            : setShwoListType(true);
          e.target.id !== "city-list"
            ? setShowListNames(false)
            : setShowListNames(true);
        }}
      >
        <div className="signin-contanier addAdds-tab-container ">
          <div className="addAdds-heading">
            <h3>{addAdsOb.ad13}</h3>
          </div>
          <div className="inputs-group addAdds-group">
            <div className="sign-input  addAdds-phone ">
              <h3>{addAdsOb.add1}</h3>
              <input
                type="text"
                className="sign-mail"
                placeholder={addAdsOb.add1}
                value={addTitle}
                tabIndex={1}
                autoFocus
                onChange={(e) => setAddTitle(e.target.value)}
              />
            </div>
            <div className="sign-input  addAdds-phone ">
              <h3>{addAdsOb.add2}</h3>
              <input
                type="text"
                maxLength={12}
                className="sign-mail"
                placeholder={addAdsOb.add2}
                value={phoneNumber}
                tabIndex={2}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div
              className="sign-input profile-category mail "
              id="category-list"
              style={{ position: "relative" }}
            >
              <h3>{addAdsOb.add3}</h3>
              <input
                type="text"
                className="sign-mail"
                placeholder={addAdsOb.add3}
                tabIndex={3}
                id="category-list"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                onClick={(e) => {
                  setShwoListCategory(!showListCategory);
                  setShwoListType(false);
                  setShowListNames(false);
                }}
              />
              <img
                src="/assets/img/Stroke 1.svg"
                alt=""
                className="add-type-arrow"
              />

              <ul
                className="dropdown-category"
                style={{
                  display: !showListCategory ? "none" : "",
                }}
              >
                <li
                  id="1"
                  onClick={(e) => {
                    setType_id(e.target.id);

                    setCategory(route.locale == "ar" ? "ايجار" : "rent");
                  }}
                  className={`category-item ${
                    category === (route.locale == "ar" ? "ايجار" : "rent")
                      ? "active-category"
                      : ""
                  }`}
                  value={route.locale == "ar" ? "ايجار" : "rent"}
                >
                  {route.locale == "ar" ? "ايجار" : "rent"}
                </li>
                <li
                  id="2"
                  className={`category-item ${
                    category === (route.locale == "ar" ? "بيع" : "selling")
                      ? "active-category"
                      : ""
                  }`}
                  value={route.locale == "ar" ? "يع" : "selling"}
                  onClick={(e) => {
                    setType_id(e.target.id);
                    setCategory(route.locale == "ar" ? "بيع" : "selling");
                  }}
                >
                  {route.locale == "ar" ? "بيع" : "selling"}
                </li>
              </ul>
            </div>
            <div
              className="sign-input addAdds-type"
              id="type-list"
              style={{ position: "relative" }}
            >
              <h3>{addAdsOb.add4}</h3>
              <input
                type="text"
                className="sign-mail"
                placeholder={addAdsOb.add4}
                tabIndex={3}
                id="type-list"
                value={typeEstat}
                onChange={(e) => setTypeEstat(e.target.value)}
                onClick={() => {
                  setShwoListType(!showListType);
                  setShowListNames(false);
                  setShwoListCategory(false);
                }}
              />

              <img
                src="/assets/img/Stroke 1.svg"
                alt=""
                className="city-add-arrow"
              />
              {
                <ul
                  className="dropdown-typeList"
                  id="type-list"
                  style={{
                    display: !showListType ? "none" : "",
                  }}
                >
                  {items.map((item) => (
                    <li
                      className={`list-item ${
                        typeEstat === item.title ? "active-type" : ""
                      }`}
                      key={item.id}
                      id={`${item.id} type-list`}
                      onClick={(e) => {
                        let selectInfo = {
                          value: item.title,
                          id: item.id,
                        };

                        setTypeEstat(item.title);
                        setCategory_id(item.id);
                      }}
                    >
                      <span id="type-list">
                        <img
                          id="type-list"
                          style={{
                            paddingLeft: "10px",
                            width: "20px",
                            height: "20px",
                            objectFit: "cover",
                          }}
                          src={item.logo_url}
                        />
                      </span>
                      {item.title}
                    </li>
                  ))}
                </ul>
              }
            </div>
            <div
              className="sign-input  addAdds-region"
              id="city-list"
              style={{ position: "relative" }}
            >
              <h3>{addAdsOb.add5}</h3>
              <input
                type="text"
                className="sign-mail"
                placeholder={addAdsOb.add5}
                value={city}
                tabIndex={3}
                id="city-list"
                onChange={(e) => setCity(e.target.value)}
                onClick={() => {
                  setShowListNames(!showListNames);
                  setShwoListType(false);
                  setShwoListCategory(false);
                }}
              />
              <img
                src="/assets/img/Stroke 1.svg"
                alt=""
                className="catergory-add-arrow"
              />
              {
                <ul
                  className="dropdown-typeList"
                  id="city-list"
                  style={{
                    display: !showListNames ? "none" : "",
                  }}
                >
                  {regions.map((item) => (
                    <li
                      className={`list-item ${
                        city === item.title ? "active-city" : ""
                      }`}
                      key={item.id}
                      id={`${item.id} city-list`}
                      onClick={(e) => {
                        let selectInfo = {
                          value: item.title,
                          id: item.id,
                        };

                        setCity(item.title);
                        setRegion_id(item.id);
                      }}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              }
            </div>
            <div className="sign-input  addAdds-space">
              <h3>{addAdsOb.add6}</h3>
              <input
                type="text"
                className="sign-mail"
                placeholder={addAdsOb.add6}
                value={space}
                tabIndex={3}
                onChange={(e) => setSpace(e.target.value)}
              />
            </div>
            <div className="sign-input  addAdds-price">
              <h3>{addAdsOb.add7}</h3>
              <input
                type="text"
                className="sign-mail"
                placeholder={addAdsOb.add7}
                tabIndex={3}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="sign-input  addAdds-interface">
              <h3>{addAdsOb.add8}</h3>
              <input
                type="text"
                className="sign-mail"
                placeholder={addAdsOb.add8}
                value={front}
                tabIndex={3}
                onChange={(e) => setFront(e.target.value)}
              />
            </div>
            <div className="sign-input  addAdds-auto-num">
              <h3>{addAdsOb.add9}</h3>
              <input
                type="text"
                className="sign-mail"
                placeholder={addAdsOb.add9}
                value={autoNum}
                tabIndex={3}
                onChange={(e) => setAutoNum(e.target.value)}
              />
            </div>
            <div className="sign-input  addAdds-disc">
              <h3>{addAdsOb.add10}</h3>
              <textarea
                className="sign-mail"
                placeholder={addAdsOb.add10}
                tabIndex={3}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div className="sign-input  addAdds-auto-num">
              <h3>{addAdsOb.add12}</h3>
              <div className="map-adds">
                <SimpleMap getLat={setLat} getLng={setLng} />
              </div>
            </div>
            <div className="checksbox" style={{ cursor: "pointer" }}>
              <div
                className="premium-add chack-groub"
                onClick={() => {
                  setCheckedAdd(authCtx.premiumAdd ? true : false);
                  setShowDialogiBox(!showDialogBox);
                }}
              >
                {authCtx.premiumAdd == 0 ? (
                  <a
                    style={{ textDecoration: "none" }}
                    href="http://localhost:3000/packges"
                    target="_blank"
                  >
                    <img
                      src={`/assets/img/${
                        !checkedAdd ? "emptyCheck" : "fullCheck"
                      }.svg`}
                      alt=""
                    />
                    <span>{addAdsOb.adSh1}</span>
                  </a>
                ) : (
                  ((
                    <img
                      src={`/assets/img/${
                        !checkedAdd ? "emptyCheck" : "fullCheck"
                      }.svg`}
                      alt=""
                    />
                  ),
                  (<span>{addAdsOb.adSh1}</span>))
                )}

                {/* authCtx.premiumAdd >0 && <PackgeBox setShowDialogiBox={setShowDialogiBox} showDialogBox={showDialogBox} count={authCtx.premiumAdd}/> */}
              </div>
              {/* <div className="post-add chack-groub" onClick={()=>{
         setCheckedOffice(!checkedOffice)
       }}>
       <img src={`/assets/img/${!checkedOffice?'emptyCheck':'fullCheck'}.svg`} alt="" />
       <span>نشر الإعلان لدى المكاتب</span>

       </div> */}
              <div
                className="conditions chack-groub"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCheckedConditions(!checkedConditions);
                  setdisable(() => {
                    checkedConditions && setdisable(!disable);
                  });
                }}
              >
                <img
                  src={`/assets/img/${
                    !checkedConditions ? "emptyCheck" : "fullCheck"
                  }.svg`}
                  alt=""
                />
                <span>{addAdsOb.adSh3}</span>
              </div>
            </div>
          </div>

          <div
            className="sign-btn"
            aria-disabled="true"
            onClick={handelSubmit}
            style={{
              backgroundColor: disable ? "#F1E6D3" : "#EDAA43",
            }}
          >
            {addAdsOb.edit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAdd;
