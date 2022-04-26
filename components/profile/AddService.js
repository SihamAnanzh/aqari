import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../stores/auth-context";
import { useRouter } from "next/router";
import { FilterContext } from "../../stores/filter";
import axios from "axios";
import swal from "sweetalert";
import { useSession } from "next-auth/react";
import { useCookies } from "react-cookie";

const AddService = ({ serviceOb, addAdsOb }) => {
  const authCtx = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies(["images"]);

  const [checkedConditions, setCheckedConditions] = useState(false);
  const [imageUpLoaded, setImageUpLoaded] = useState(false);
  const [showListService, setShowListService] = useState(false);
  const [service, setService] = useState("");
  const [disable, setdisable] = useState(true);
  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();
  const [imageThree, setImageThree] = useState();
  const [imageFour, setImageFour] = useState();
  const [regions, setRegions] = useState([]);
  const [items, setItem] = useState([]);
  const [city, setCity] = useState("");
  const [showListNames, setShowListNames] = useState(false);
  const [services, setSerivces] = useState([]);
  const [selectItem, setSelectItems] = useState([]);
  const [regionsId, setRegionsId] = useState([]);
  const filterCtx = useContext(FilterContext);
  const [selection, setSelection] = useState([]);
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [whatsPhone, setWhatsPhone] = useState("");
  const [showDialogBox, setShowDialogiBox] = useState(false);
  const [checkedAdd, setCheckedAdd] = useState(false);
  const [PAl, setPAL] = useState();
  const [isPremium, setIspremium] = useState(false);

  const [files, setFiles] = useState([]);
  const [selectServId, setSelectServiId] = useState("");
  const [selectCategoryId, setSelectCategoryId] = useState([]);
  const route = useRouter();

  const [makPremAd, setMakePremAd] = useState(false);
  const [makeNormalAd, setMakeNormalAd] = useState(false);
  const [makeAdCancel, setMakeAd] = useState(false);
  const [token, setoken] = useState(null);

  useEffect(() => {
    setoken(cookies.token);
  }, [cookies.token]);

  useEffect(() => {
    selectItem
      ? selectItem.map((item) => {
          toggleAcitveElement(item.id);
        })
      : "";
  }, [showListNames]);

  useEffect(() => {
    filterCtx.setRegionsId(regionsId);
  }, [regionsId]);

  const session = useSession();

  const toggleAcitveElement = (id) => {
    let item = document.getElementById(id);
    item !== null ? item.classList.add("selected") : "";
  };

  useEffect(() => {
    axios
      .get("https://stagingapi.aqarifinder.com/api/user/profile", {
        headers: {
          Authorization: cookies.token,
        },
      })
      .then((res) => {
        setPAL(res.data.results.premium_services_left);
        console.log("PAL" + " " + PAl);
      });
  }, []);

  useEffect(() => {
    let services = document.querySelectorAll(".profile-list-service");
    services.length > 0
      ? [...services].map((serivec) => {
          serivec.classList.remove(".selected");
        })
      : "";
  }, [service]);
  const handleChange = (e) => {
    setImageUpLoaded(true);
    let file = e.target.files;
    setImageSrc(file[0].name);
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
      .get("https://stagingapi.aqarifinder.com/api/service_type/list", {
        headers: {
          lang: route.locale,
        },
      })
      .then((res) => {
        !res.data.status.message == "OK" ? "" : setSerivces(res.data.results);
      });
  }, []);

  const handleclickPrem = (status) => {
    console.log(status);
    if (status == 1) {
      setFiles([imageOne, imageTwo, setImageThree, imageFour]);
      !disable &&
        (title == "" || desc == "" || price == "" || phoneNumber == " "
          ? (route.locale == "ar" &&
              swal("تنبيه", "يرجى تعبئة جميع الحقول", "info"),
            route.locale == "en" &&
              swal("warning", "Fill all the field please", "info"))
          : phoneNumber.length < 8
          ? route.locale == "ar"
            ? swal("", "رقم الهاتف خاطئ", "info")
            : swal("", "invalid phone number", "info")
          : ((formData = new FormData()),
            setFiles([imageOne, imageTwo, setImageThree, imageFour]),
            formData.append("title", title),
            formData.append("description", desc),
            selectCategoryId.map((categ) => {
              formData.append("region_ids", categ);
            }),
            formData.append("price", price),
            formData.append("service_type_id", selectServId),
            formData.append("phone", phoneNumber),
            formData.append("whatsapp", phoneNumber),
            formData.append("is_premium", false),
            files.map((file) => {
              formData.append("image_files", file);
            }),
            axios({
              method: "post",
              url: "https://stagingapi.aqarifinder.com/api/user/services/add",
              headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data",
              },
              data: formData,
            }).then((response) => {
              console.log(response);
              response.data.status.code == 200 &&
                (route.locale == "ar"
                  ? swal("تهانينا", "تمت إضافة الخدمة بنجاح", "success")
                  : swal("'well done", "Service Added Successfully", "success"),
                setTimeout(() => {
                  route.push("/profile/mySerivces");
                }, 1000));
            })));
    } else if (status == 2) {
      return (
        setFiles([imageOne, imageTwo, setImageThree, imageFour]),
        !disable &&
        (title == "" || desc == "" || price == "" || phoneNumber == " ")
          ? (route.locale == "ar" &&
              swal("تنبيه", "يرجى تعبئة جميع الحقول", "info"),
            route.locale == "en" &&
              swal("warning", "Fill all the field please", "info"))
          : phoneNumber.length < 8
          ? route.locale == "ar"
            ? swal("", "رقم الهاتف خاطئ", "info")
            : swal("", "invalid phone number", "info")
          : ((formData = new FormData()),
            setFiles([imageOne, imageTwo, setImageThree, imageFour]),
            formData.append("title", title),
            formData.append("description", desc),
            selectCategoryId.map((categ) => {
              formData.append("region_ids", categ);
            }),
            formData.append("price", price),
            formData.append("service_type_id", selectServId),
            formData.append("phone", phoneNumber),
            formData.append("whatsapp", phoneNumber),
            formData.append("is_premium", true),
            files.map((file) => {
              formData.append("image_files", file);
            }),
            axios({
              method: "post",
              url: "https://stagingapi.aqarifinder.com/api/user/services/add",
              headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data",
              },
              data: formData,
            }).then((response) => {
              setCookie("service_id", response.data.results, { path: "/" });
              console.log(response);
              response.data.status.code == 200
                ? ((formData = new FormData()),
                  formData.append("package_id", 1),
                  formData.append(
                    "callbackurl",
                    route.locale == "ar"
                      ? "https://aqari-demo.herokuapp.com/profile/mySerivces"
                      : "https://aqari-demo.herokuapp.com/en/profile/mySerivces"
                  ),
                  axios({
                    method: "post",
                    url: "https://stagingapi.aqarifinder.com/api/user/package/get_link",
                    headers: {
                      "Content-Type": "multipart/form-data",
                      Authorization: token,
                    },
                    data: formData,
                  }).then((res) => {
                    res.data.status.code == 200 &&
                      route.push(res.data.results.data.paymentURL);
                    console.log(res.data.results.data.paymentURL);
                  }))
                : swal("", "something wrong", "info");
            }))
      );
    } else if (status == 0) {
      return;
    }
  };

  useEffect(async () => {
    console.log(route.query.paymentId + "rtoue.query");
    route.query.paymentId &&
      cookies.token != "null" &&
      (await axios({
        method: "post",
        url: `https://stagingapi.aqarifinder.com/api/user/package/purchase/${route.query.paymentId}`,
        headers: {
          Authorization: cookies.token,
        },
      }).then(async (res) => {
        console.log(res);
        //if the resposent from the payment is success then you need to call the set as premium add and sec back the id of the add

        axios({
          method: "post",
          url: `https://stagingapi.aqarifinder.com/api/user/services/set_premium/${cookies.service_id}/2`,
          headers: {
            Authorization: cookies.token,
          },
        }).then((res) => {
          console.log(res);
          response.data.status.code == 200 &&
            (route.locale == "ar"
              ? swal("تهانينا", "تمت إضافة الخدمة بنجاح", "success")
              : swal("'well done", "Add service Successfully", "success"));

          swal("", res.data.results, "info");
        });
      }));
  }, [route]);

  let formData;
  const handelSubmit = (e) => {
    setFiles([imageOne, imageTwo, setImageThree, imageFour]),
      !disable &&
      (title == "" || desc == "" || price == "" || phoneNumber == " ")
        ? (route.locale == "ar" &&
            swal("تنبيه", "يرجى تعبئة جميع الحقول", "info"),
          route.locale == "en" &&
            swal("warning", "Fill all the field please", "info"))
        : phoneNumber.length < 8
        ? route.locale == "ar"
          ? swal("", "رقم الهاتف خاطئ", "info")
          : swal("", "invalid phone number", "info")
        : checkPremStatus();
  };

  const checkPremStatus = () => {
    if (checkedAdd) {
      //if user has packages add with  premium add
      if (PAl > 0) {
        (formData = new FormData()),
          setFiles([imageOne, imageTwo, setImageThree, imageFour]),
          formData.append("title", title),
          formData.append("description", desc),
          selectCategoryId.map((categ) => {
            formData.append("region_ids", categ);
          }),
          formData.append("price", price),
          formData.append("service_type_id", selectServId),
          formData.append("phone", phoneNumber),
          formData.append("whatsapp", phoneNumber),
          formData.append("is_premium", true),
          files.map((file) => {
            formData.append("image_files", file);
          }),
          axios({
            method: "post",
            url: "https://stagingapi.aqarifinder.com/api/user/services/add",
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
            data: formData,
          }).then((response) => {
            console.log(response);
            response.data.status.code == 200 &&
              (route.locale == "ar"
                ? swal("تهانينا", "تمت إضافة الإعلان بنجاح", "success")
                : swal("'well done", "Ad Added Successfully", "success"),
              setTimeout(() => {
                route.push("/profile/mySerivces");
              }, 1000));
          });
      } else {
        setShowDialogiBox(true);
      }
    } else {
      //add the add without premium status
      (formData = new FormData()),
        setFiles([imageOne, imageTwo, setImageThree, imageFour]),
        formData.append("title", title),
        formData.append("description", desc),
        selectCategoryId.map((categ) => {
          formData.append("region_ids", categ);
        }),
        formData.append("price", price),
        formData.append("service_type_id", selectServId),
        formData.append("phone", phoneNumber),
        formData.append("whatsapp", phoneNumber),
        formData.append("is_premium", false),
        files.map((file) => {
          formData.append("image_files", file);
        }),
        axios({
          method: "post",
          url: "https://stagingapi.aqarifinder.com/api/user/services/add",
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        }).then((response) => {
          console.log(response);
          response.data.status.code == 200 &&
            (route.locale == "ar"
              ? swal("تهانينا", "تمت إضافة الإعلان بنجاح", "success")
              : swal("'well done", "Ad Added Successfully", "success"),
            setTimeout(() => {
              route.push("/profile/mySerivces");
            }, 1000));
        });
    }
  };

  useEffect(() => {
    console.log(checkedAdd);
  }, [checkedAdd]);

  return (
    <div>
      <div
        className="profile-tab add-servie-tab"
        onClick={(e) => {
          e.target.id !== "serivce-list" ? setShowListService(false) : "";
        }}
      >
        <div className="signin-contanier addAdds-tab-container ">
          {/* <div className="addAdds-heading">
            <h3>{serviceOb.pro8}</h3>
          </div> */}
          <div className="inputs-group addAdds-group">
            <div className="sign-input  addAdds-phone ">
              <h3>{serviceOb.title}</h3>
              <input
                autoComplete="off"
                type="text"
                className="sign-mail"
                placeholder={serviceOb.title}
                tabIndex={1}
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="sign-input  addAdds-phone ">
              <h3>{serviceOb.phone}</h3>
              <input
                autoComplete="off"
                type="text"
                min={8}
                className="sign-mail"
                placeholder={serviceOb.phone}
                tabIndex={2}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div
              className="sign-input  addAdds-phone "
              style={{ position: "relative" }}
            >
              <h3>{serviceOb.serviceType}</h3>
              <input
                autoComplete="off"
                type="text"
                id="serivce-list"
                className="sign-mail"
                placeholder={serviceOb.serviceType}
                aut
                tabIndex={3}
                value={service}
                onClick={() => {
                  setShowListService(!showListService);
                }}
              />
              <img
                src="/assets/img/Stroke 1.svg"
                alt=""
                className="add-service-stroke-category"
              />
              {
                <ul
                  className="dropdown-typeList"
                  id="serivce-list"
                  style={{
                    display: !showListService ? "none" : "",
                    position: "absolute",
                    zIndex: "5",
                  }}
                >
                  {services.map((item) => (
                    <li
                      className="list-item profile-list-service"
                      key={item.id}
                      id={`${item.id} serivce-list`}
                      onClick={(e) => {
                        e.target.classList.add("selected");
                        setService(item.title);

                        let selectInfo = {
                          value: item.title,
                          id: item.id,
                        };
                        setSelectServiId(item.id);
                      }}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              }
            </div>

            <div className="sign-input ">
              <h3
                style={{
                  paddingTop: "20px",
                }}
              >
                {serviceOb.whatsaap}
              </h3>
              <input
                autoComplete="off"
                type="text"
                min="8"
                max="12"
                className="sign-mail"
                placeholder={serviceOb.whatsaap}
                tabIndex={4}
                onChange={(e) => setWhatsPhone(e.target.value)}
              />
            </div>
            <div
              className="sign-input  addAdds-region"
              id="city-list"
              style={{ position: "relative" }}
            >
              <h3>{serviceOb.city}</h3>
              <input
                autoComplete="off"
                type="text"
                className="sign-mail"
                placeholder={serviceOb.city}
                tabIndex={5}
                id="city-list"
                value={[...selection]}
                onChange={(e) => setCity(e.target.value)}
                onClick={() => {
                  setShowListNames(!showListNames);
                  setShowListService(false);
                }}
              />
              <img
                src="/assets/img/Stroke 1.svg"
                alt=""
                className="add-service-stroke-city"
              />
              {
                <ul
                  className="dropdown-typeList"
                  id="city-list"
                  style={{
                    display: !showListNames ? "none" : "",
                    position: "absolute",
                    zIndex: "5",
                  }}
                >
                  {regions.map((item) => (
                    <li
                      className="list-item"
                      key={item.id}
                      id={item.id}
                      onClick={(e) => {
                        e.target.classList.add("selected");
                        setShowListNames(false);
                        let indexRegion = regionsId.findIndex(
                          (el) => el === item.id
                        );
                        let newArray = [...regionsId];
                        newArray.splice(indexRegion, 1);
                        regionsId.push(item.id);
                        toggleAcitveElement(item.id);

                        let selectInfo = {
                          value: item.title,
                          id: item.id,
                        };

                        let index = selection.findIndex(
                          (el) => el === item.title
                        );
                        if (index == -1) {
                          setSelection((pre) => [...pre, item.title]);
                          setSelectItems((pre) => [...pre, selectInfo]);
                          selectCategoryId.push(item.id);
                        } else {
                          e.target.classList.remove("selected");
                          let newArray = [...selection];
                          newArray.splice(index, 1);
                          setSelection(newArray);
                          selectCategoryId.pop(item.id);
                        }
                      }}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              }
            </div>
            <div className="sign-input  addAdds-price">
              <h3>{serviceOb.price}</h3>
              <input
                autoComplete="off"
                type="text"
                className="sign-mail"
                placeholder={serviceOb.price}
                tabIndex={6}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="sign-input ">
              <h3
                style={{
                  paddingTop: "20px",
                }}
              >
                {serviceOb.serivceDetails}
              </h3>
              <textarea
                type="text"
                className="sign-mail"
                placeholder={serviceOb.serivceDetails}
                tabIndex={7}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div
              className={`sign-input submit-logo ${
                imageUpLoaded ? "office-logo" : ""
              }`}
              style={{
                marginBottom: "20px",
              }}
            >
              <h3>{serviceOb.pic}</h3>
              <div className="wrrap-images">
                {!imageOne ? (
                  <div
                    className="submit-imgs"
                    onClick={(e) => {
                      document.getElementById("select-file-1").click();
                    }}
                  >
                    <input
                      autoComplete="off"
                      type="file"
                      id="select-file-1"
                      tabIndex={9}
                      style={{
                        display: "none",
                      }}
                      onChange={(e) => {
                        setImageOne(e.target.files[0]);
                      }}
                    />

                    <img src="/assets/img/img.svg" alt="" />
                    <p>{serviceOb.pic} 1</p>
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
                      className="remove-img-serivce"
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
                      tabIndex={9}
                      style={{
                        display: "none",
                      }}
                      onChange={(e) => {
                        setImageTwo(e.target.files[0]);
                      }}
                    />

                    <img src="/assets/img/img.svg" alt="" />
                    <p>{serviceOb.pic} 2</p>
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
                      className="remove-img-serivce"
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
                      tabIndex={10}
                      style={{
                        display: "none",
                      }}
                      onChange={(e) => {
                        setImageThree(e.target.files[0]);
                      }}
                    />

                    <img src="/assets/img/img.svg" alt="" />
                    <p>{serviceOb.pic} 3</p>
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
                      className="remove-img-serivce"
                      onChange={(e) => {
                        let file = e.target.files[0].size;
                        if (file > 10e6) {
                          route.locale == "ar"
                            ? swal(
                                "",
                                "الرجاء تحميل ملف أصغر من 10 ميغا بايت",
                                "info"
                              )
                            : swal(
                                "",
                                "Please upload a file smaller than 10 MB",
                                "info"
                              );
                          return false;
                        }
                        setImageThree(e.target.files[0]);
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
                      tabIndex={11}
                      style={{
                        display: "none",
                      }}
                      onChange={(e) => {
                        setImageFour(e.target.files[0]);
                      }}
                    />

                    <img src="/assets/img/img.svg" alt="" />
                    <p>{serviceOb.pic} 4</p>
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
                      className="remove-img-serivce"
                      id="select-file-4"
                      onChange={(e) => {
                        let file = e.target.files[0].size;
                        if (file > 10e6) {
                          route.locale == "ar"
                            ? swal(
                                "",
                                "الرجاء تحميل ملف أصغر من 10 ميغا بايت",
                                "info"
                              )
                            : swal(
                                "",
                                "Please upload a file smaller than 10 MB",
                                "info"
                              );
                          return false;
                        }
                        setImageFour(e.target.files[0]);
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

            <div className="checksbox" style={{ cursor: "pointer" }}>
              <div className="premium-add chack-groub">
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
                          ? `لا يوجد لديك اعلانات مميزة`
                          : ` You don't have any  premium add?`}
                      </p>
                    </div>
                    <div className="box-btns">
                      <div
                        className="box-btn "
                        onClick={() => {
                          handleclickPrem(1);
                          setShowDialogiBox(!showDialogBox);
                        }}
                      >
                        {/* <Link href='/'>استمرار</Link> */}
                        {route.locale == "ar" ? "إعلان عادي" : "Normal Ad"}
                      </div>
                      <div
                        className="box-btn signUp-btn"
                        onClick={() => {
                          handleclickPrem(2);
                          setShowDialogiBox(!showDialogBox);
                        }}
                      >
                        <div>
                          {route.locale == "ar" ? "إعلان مميز" : "premium Ad"}
                        </div>
                      </div>
                      <div
                        className="box-btn"
                        onClick={() => {
                          setShowDialogiBox(!showDialogBox);
                          handleclickPrem(0);
                        }}
                      >
                        <div>{route.locale == "ar" ? "إلغاء" : "Cancel"}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="conditions chack-groub"
                onClick={() => {
                  setCheckedAdd(!checkedAdd);
                }}
              >
                <img
                  style={{ paddingRight: "5px" }}
                  src={`/assets/img/${
                    checkedAdd ? "fullCheck" : "emptyCheck"
                  }.svg`}
                  alt=""
                />
                <span>{addAdsOb.adSh1}</span>
              </div>
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
            {serviceOb.addBtn}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
