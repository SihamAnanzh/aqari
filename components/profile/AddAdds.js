import { style } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../stores/auth-context";
import PackgeBox from "../dialogBox/PackgeBox";
import SimpleMap from "../map/MapAdds";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { useCookies } from "react-cookie";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { toBase64 } from "../../convertUrl";

const AddAdds = ({ addAdsOb }) => {
  const route = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["images"]);

  const authCtx = useContext(AuthContext);
  const [showListCategory, setShwoListCategory] = useState(false);
  const [showListType, setShwoListType] = useState(false);
  const [showListNames, setShowListNames] = useState(false);
  const [checkedAdd, setCheckedAdd] = useState(false);
  const [checkedOffice, setCheckedOffice] = useState(false);
  const [checkedConditions, setCheckedConditions] = useState(false);
  const [imageUpLoaded, setImageUpLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState([]);
  const [disable, setdisable] = useState(true);
  const [showDialogBox, setShowDialogiBox] = useState(false);
  const [addTitle, setAddTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [typeEstat, setTypeEstat] = useState("");
  const [city, setCity] = useState("");
  const [space, setSpace] = useState("");
  const [price, setPrice] = useState("");
  const [front, setFront] = useState("");
  const [autoNum, setAutoNum] = useState("");
  const [desc, setDesc] = useState("");
  const [files, setFiles] = useState([]);
  const [adsDataLocal, setAdsDataLoale] = useState();
  const [lat, setLat] = useState(29.3117);
  const [lng, setLng] = useState(47.4818);
  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();
  const [imageThree, setImageThree] = useState();
  const [imageFour, setImageFour] = useState();
  const [imageOneB6, setImageOneB6] = useState();
  const [imageTwoB6, setImageTwoB6] = useState();
  const [imageThreeB6, setImageThreeB6] = useState();
  const [imageFourB6, setImageFourB6] = useState();
  const [regions, setRegions] = useState([]);
  const [items, setItem] = useState([]);
  const [imgList, setImgList] = useState([{}]);
  const [isPremium, setIspremium] = useState(false);
  const [PAl, setPAL] = useState();
  const [paymentId, setPaymentId] = useState();

  const session = useSession();
  const [tempData, setTempData] = useState();

  //ids for api
  const [type_id, setType_id] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [region_id, setRegion_id] = useState("");

  let formData;

  const handelSubmit = (e) => {
    // setFiles([imageOne, imageTwo, setImageThree, imageFour]);
    !disable &&
      (addTitle == "" ||
      desc == "" ||
      space == "" ||
      price == "" ||
      autoNum == "" ||
      lat == "" ||
      lng == "" ||
      phoneNumber == " "
        ? (route.locale == "ar" &&
            swal("تنبيه", "يرجى تعبئة جميع الحقول", "info"),
          route.locale == "en" &&
            swal("warning", "Fill all the field please", "info"))
        : phoneNumber.length < 8
        ? route.locale == "ar"
          ? swal("", "رقم الهاتف خاطئ", "info")
          : swal("", "invalid phone number", "info")
        : ((formData = new FormData()),
          setFiles([imageOneB6, imageTwoB6, setImageThreeB6, imageFourB6]),
          formData.append("title", addTitle),
          formData.append("desc", desc),
          formData.append("area", space),
          formData.append("front", front),
          formData.append("price", price),
          formData.append("currency_id", "1"),
          formData.append("category_id", category_id),
          formData.append("ad_type_id", type_id),
          formData.append("region_id", region_id),
          formData.append("lat", lat),
          formData.append("lng", lng),
          formData.append("phone", phoneNumber),
          formData.append("whatsapp", phoneNumber),
          formData.append("is_premium", isPremium),
          files.map((file) => {
            formData.append("image_files", file);
          }),
          formData.append("auto_number", autoNum),
          axios({
            method: "post",
            url: "https://stagingapi.aqarifinder.com/api/user/ad/add/base_64",
            headers: {
              Authorization: session.data.id,
              "Content-Type": "application/json",
            },
            data: formData,
          }).then((response) => {
            console.log(response);
            response.data.status.code == 200 &&
              (route.locale == "ar"
                ? swal("تهانينا", "تمت إضافة الإعلان بنجاح", "success")
                : swal("'well done", "Ad Added Successfully", "success"),
              setTimeout(() => {
                route.push("/profile/myAdds");
              }, 1000));
          })));
  };

  useEffect(() => {
    axios
      .get("https://stagingapi.aqarifinder.com/api/user/profile", {
        headers: {
          Authorization: session && session.data.id,
        },
      })
      .then((res) => {
        setPAL(res.data.results.premium_ads_left);
        console.log(res);
      });
  }, []);
  useEffect(() => {
    let data;
    let formData = new FormData();
    formData.append("package_id", 1);
    formData.append(
      "callbackurl",
      "https://aqari-demo.herokuapp.com/profile/addAdds"
    );
    console.log(route.query.paymentId + "  rtoue.query");
    let id;
    route.query.paymentId &&
      (session.status == "authenticated" &&
        axios({
          method: "post",
          url: `https://stagingapi.aqarifinder.com/api/user/package/purchase/${route.query.paymentId}`,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: session.data != null && session.data.id,
          },
          data: formData,
        }).then((res) => {
          console.log(
            `https://stagingapi.aqarifinder.com/api/user/package/purchase/${route.query.paymentId}`
          );
          console.log(res);
          swal(res.data.status.message);
          res.data.status.ok ? setCheckedAdd(true) : setCheckedAdd(false);
          console.log(session);
        }),
      //get the id from cokies
      console.log(cookies.id),
      // cookies.id
      (id = cookies.id !== null && cookies.id),
      //clear the cookies
      axios
        .get(`https://stagingapi.aqarifinder.com/api/temp/ads/70`, {
          headers: {
            Authorization: session && session.data.id,
          },
        })
        .then((res) => {
          console.log(res);
          setCookie("id", null, { path: "/" });
          data = {
            adType: res.data.results.ad_type.title,
            address:
              res.data.results.region.country.title +
              " " +
              res.data.results.region.title,
            autoNum: res.data.results.auto_number,
            category: res.data.results.category.title,
            city: res.data.results.region.title,
            desc: res.data.results.desc,
            isFav: res.data.results.is_fav,
            is_premium: res.data.results.is_premium,
            lat: res.data.results.lat,
            lng: res.data.results.lng,
            phone: res.data.results.phone,
            price: res.data.results.price,
            front: res.data.results.front,
            region_id: res.data.results.region.id,
            regionsString: res.data.results.region.title,
            area: res.data.results.area,
            time: "4",
            title: res.data.results.title,
            user_id: res.data.results.user_id,
            views: res.data.results.view_count,
            whatsApp: res.data.results.whatsapp,
            images:
              res.data.results.images.length > 0
                ? res.data.results.images
                : false,
            id: res.data.results.id,
            allData: res.data.results,
            user_id: res.data.results.user_id,
            adTypeId: res.data.results.ad_type_id,
            categoryId: res.data.results.category_id,
          };
          setTempData(data);
          setAddTitle(tempData.title);
          setPhoneNumber(tempData.phone);
          setCategory(tempData.adType);
          setTypeEstat(tempData.category);
          setCategory_id(tempData.categoryId);
          setType_id(tempData.adTypeId);
          setSpace(tempData.area);
          setPrice(tempData.price);
          setFront(tempData.front);
          setAutoNum(tempData.autoNum);
          setDesc(tempData.desc);
          setIspremium(tempData.is_premium);
          setRegion_id(tempData.region_id);
          setCity(tempData.regionsString);
          console.log(tempData);

          /// take the res data and then fill in the filed with
        }));
  }, [route, session.status]);

  const sliceBase64 = (img) => {
    return img.substring(img.indexOf(",") + 1, img.length);
  };

  const handleClickPremium = () => {
    let formData;

    PAl >= 0 &&
      (addTitle == "" ||
      desc == "" ||
      space == "" ||
      price == "" ||
      autoNum == "" ||
      lat == "" ||
      lng == "" ||
      phoneNumber == " "
        ? (route.locale == "ar" &&
            swal("تنبيه", "يرجى تعبئة جميع الحقول", "info"),
          route.locale == "en" &&
            swal("warning", "Fill all the field please", "info"))
        : phoneNumber.length < 8
        ? route.locale == "ar"
          ? swal("", "رقم الهاتف خاطئ", "info")
          : swal("", "invalid phone number", "info")
        : ((formData = new FormData()),
          setFiles([imageOneB6, imageTwoB6, setImageThreeB6, imageFourB6]),
          formData.append("title", addTitle),
          formData.append("desc", desc),
          formData.append("area", space),
          formData.append("front", front),
          formData.append("price", price),
          formData.append("currency_id", "1"),
          formData.append("category_id", category_id),
          formData.append("ad_type_id", type_id),
          formData.append("region_id", region_id),
          formData.append("lat", lat),
          formData.append("lng", lng),
          formData.append("phone", phoneNumber),
          formData.append("whatsapp", phoneNumber),
          formData.append("is_premium", isPremium),
          files.map((file) => {
            formData.append("image_files", file);
          }),
          formData.append("auto_number", autoNum),
          axios({
            method: "post",
            url: "https://stagingapi.aqarifinder.com/api/temp/ad/add",
            headers: {
              "Content-Type": "application/json",
              Authorization: session.data.id,
            },
            data: formData,
          }).then((response) => {
            console.log(response);

            let id = response.data.results;
            console.log(response.data.results);
            // /get id store in cookies
            setCookie("id", id, { path: "/" });
          })));

    PAl <= 0
      ? ((formData = new FormData()),
        formData.append("package_id", 1),
        axios({
          method: "post",
          url: "https://stagingapi.aqarifinder.com/api/user/package/get_link",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: session.data != null && session.data.id,
          },
          data: formData,
        }).then((res) => {
          res.data.status.code == 200 &&
            route.replace(res.data.results.data.paymentURL);
          console.log(res.data.results.data.paymentURL);
        }))
      : (setCheckedAdd(!checkedAdd), setShowDialogiBox(!showDialogBox));
  };

  const handleAddPremAds = () => {
    setIspremium(!isPremium);
  };

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
        {/* <div className="addAdds-heading">
        <h3>{addAdsOb.add13}</h3>
      </div> */}
        <div className="inputs-group addAdds-group">
          <div className="sign-input  addAdds-phone ">
            <h3>{addAdsOb.add1}</h3>
            <input
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              className="catergory-add-arrow"
            />

            <ul
              className="dropdown-category"
              style={{
                display: !showListCategory ? "none" : "",
              }}
            >
              <li
                id="1"
                style={{
                  paddingLeft: route.locale == "en" ? "10px" : "0",
                  paddingRight: route.locale == "ar" ? "10px" : "0",
                }}
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
                style={{
                  paddingLeft: route.locale == "en" ? "10px" : "0",
                  paddingRight: route.locale == "ar" ? "10px" : "0",
                }}
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
              autoComplete="off"
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
              className="add-type-arrow"
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
              autoComplete="off"
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
              className="city-add-arrow"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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

          <div
            className={`sign-input submit-logo ${
              imageUpLoaded ? "office-logo" : ""
            }`}
            style={{
              display: imageUpLoaded ? "none" : "block",
              width: "70vw",
            }}
          >
            <h3 className="img-heading">{addAdsOb.add11}</h3>
            <div className="wrrap-images">
              {!imageOne ? (
                <div
                  className="submit-imgs"
                  onClick={(e) => {
                    document.getElementById("select-file").click();
                  }}
                >
                  <input
                    autoComplete="off"
                    type="file"
                    id="select-file"
                    tabIndex={3}
                    style={{
                      display: "none",
                    }}
                    onChange={(e) => {
                      setImageOne(e.target.files[0]);
                      toBase64(e.target.files[0]).then(async (res) => {
                        let img = await sliceBase64(res);
                        setImageOneB6(img);
                      });
                      console.log(imageOneB6);
                    }}
                  />

                  <img src="/assets/img/img.svg" alt="" />
                  <p>{addAdsOb.pic} 1</p>
                </div>
              ) : (
                <div className="" style={{ position: "relative" }}>
                  <img
                    src={URL.createObjectURL(imageOne)}
                    alt=""
                    className="uploadedImage"
                    style={{ objectFit: "cover" }}
                  />
                  <img
                    src="/assets/img/removeImg.svg"
                    alt=""
                    className="remove-img"
                    onClick={(e) => {
                      setImageOne("");
                    }}
                  />
                </div>
              )}
              {!imageTwo ? (
                <div
                  className="submit-imgs"
                  onClick={(e) => {
                    document.getElementById("select-file-2").click();
                  }}
                >
                  <input
                    autoComplete="off"
                    type="file"
                    id="select-file-2"
                    tabIndex={3}
                    style={{
                      display: "none",
                    }}
                    onChange={(e) => {
                      setImageTwo(e.target.files[0]);
                      toBase64(e.target.files[0]).then(async (res) => {
                        let img = await sliceBase64(res);
                        setImageTwoB6(img);
                      });
                    }}
                  />

                  <img src="/assets/img/img.svg" alt="" />
                  <p>{addAdsOb.pic} 2</p>
                </div>
              ) : (
                <div className="" style={{ position: "relative" }}>
                  <img
                    src={URL.createObjectURL(imageTwo)}
                    alt=""
                    className="uploadedImage"
                    style={{ objectFit: "cover" }}
                  />
                  <img
                    src="/assets/img/removeImg.svg"
                    alt=""
                    className="remove-img"
                    onClick={(e) => {
                      setImageTwo("");
                    }}
                  />
                </div>
              )}
              {!imageThree ? (
                <div
                  className="submit-imgs"
                  onClick={(e) => {
                    document.getElementById("select-file-3").click();
                  }}
                >
                  <input
                    autoComplete="off"
                    type="file"
                    id="select-file-3"
                    tabIndex={3}
                    style={{
                      display: "none",
                    }}
                    onChange={(e) => {
                      setImageThree(e.target.files[0]);
                      toBase64(e.target.files[0]).then(async (res) => {
                        let img = await sliceBase64(res);
                        setImageThreeB6(img);
                      });
                    }}
                  />

                  <img src="/assets/img/img.svg" alt="" />
                  <p>{addAdsOb.pic} 3</p>
                </div>
              ) : (
                <div className="" style={{ position: "relative" }}>
                  <img
                    src={URL.createObjectURL(imageThree)}
                    alt=""
                    className="uploadedImage"
                    style={{ objectFit: "cover" }}
                  />
                  <img
                    src="/assets/img/removeImg.svg"
                    alt=""
                    className="remove-img"
                    onClick={(e) => {
                      setImageThree("");
                    }}
                  />
                </div>
              )}
              {!imageFour ? (
                <div
                  className="submit-imgs"
                  onClick={(e) => {
                    document.querySelector("input#select-file-4").click();
                  }}
                >
                  <input
                    autoComplete="off"
                    type="file"
                    id="select-file-4"
                    tabIndex={3}
                    style={{
                      display: "none",
                    }}
                    onChange={(e) => {
                      setImageFour(e.target.files[0]);
                      toBase64(e.target.files[0]).then(async (res) => {
                        let img = await sliceBase64(res);
                        setImageFourB6(img);
                      });
                    }}
                  />

                  <img src="/assets/img/img.svg" alt="" />
                  <p>{addAdsOb.pic} 4</p>
                </div>
              ) : (
                <div className="" style={{ position: "relative" }}>
                  <img
                    src={URL.createObjectURL(imageFour)}
                    alt=""
                    className="uploadedImage"
                    style={{ objectFit: "cover" }}
                  />
                  <img
                    src="/assets/img/removeImg.svg"
                    alt=""
                    className="remove-img"
                    id="select-file-4"
                    onClick={(e) => {
                      setImageFour("");
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div
            className={`${imageUpLoaded ? "shoUploadedImages" : ""}`}
            style={{
              display: !imageUpLoaded ? "none" : "block",
            }}
          ></div>

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
                handleClickPremium();
              }}
            >
              {showDialogBox && (
                <div
                  className="box"
                  style={{
                    top: "82%",
                  }}
                >
                  <div className="icon-box">
                    <img
                      src="/assets/img/packgeBox.svg"
                      alt=""
                      style={{
                        marginTop: "-32px",
                      }}
                    />
                  </div>
                  <div className="content-box">
                    <p>
                      {route.locale == "ar"
                        ? `تبقى لديك اعلان مميز عدد ${PAl} هل ترغب بالاستمرار ؟`
                        : `You still have ${PAl} premium ads ? Do you want to continue?`}
                    </p>
                  </div>
                  <div className="box-btns">
                    <div
                      className="box-btn signUp-btn"
                      onClick={() => {
                        setShowDialogiBox(!showDialogBox);
                        handleAddPremAds();
                      }}
                    >
                      {/* <Link href='/'>استمرار</Link> */}
                      {route.locale == "ar" ? "استمرار" : "Continue"}
                    </div>
                    <div
                      className="box-btn"
                      onClick={() => {
                        setCheckedAdd(false);
                        setShowDialogiBox(!showDialogBox);
                      }}
                    >
                      <div>{route.locale == "ar" ? "إلغاء" : "Cancel"}</div>
                    </div>
                  </div>
                </div>
              )}

              <img
                src={`/assets/img/${
                  !checkedAdd ? "emptyCheck" : "fullCheck"
                }.svg`}
                alt=""
              />
              <span>{addAdsOb.adSh1}</span>
            </div>
            {/* <div className="post-add chack-groub" onClick={()=>{
           setCheckedOffice(!checkedOffice)
         }}>
         <img src={`/assets/img/${!checkedOffice?'emptyCheck':'fullCheck'}.svg`} alt="" />
         <span>{addAdsOb.adSh2}</span>

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
          {addAdsOb.adBtn}
        </div>
      </div>
    </div>
  );
};

export default AddAdds;
