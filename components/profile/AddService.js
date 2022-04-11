import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../stores/auth-context';
import { useRouter } from 'next/router'
import { FilterContext } from '../../stores/filter';
import axios from 'axios'
import swal from 'sweetalert';
import { useSession } from 'next-auth/react';

const AddService = ({ serviceOb }) => {
  const authCtx = useContext(AuthContext)

  const [checkedConditions, setCheckedConditions] = useState(false)
  const [imageUpLoaded, setImageUpLoaded] = useState(false)
  const [showListService, setShowListService] = useState(false)
  const [service, setService] = useState("")
  const [disable, setdisable] = useState(true)
  const [imageOne, setImageOne] = useState()
  const [imageTwo, setImageTwo] = useState()
  const [imageThree, setImageThree] = useState()
  const [imageFour, setImageFour] = useState()
  const [regions, setRegions] = useState([])
  const [items, setItem] = useState([])
  const [city, setCity] = useState('')
  const [showListNames, setShowListNames] = useState(false)
  const [services, setSerivces] = useState([])
  const [selectItem, setSelectItems] = useState([])
  const [regionsId, setRegionsId] = useState([])
  const filterCtx = useContext(FilterContext)
  const [selection, setSelection] = useState([]);
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [whatsPhone, setWhatsPhone] = useState('')

  const [files, setFiles] = useState([])
  const [selectServId, setSelectServiId] = useState('')
  const [selectCategoryId, setSelectCategoryId] = useState([])
  const route = useRouter()
  useEffect(() => {

    selectItem ?
      selectItem.map(item => {
        toggleAcitveElement(item.id)
      }) : ""
  }, [showListNames]);




  useEffect(() => {

    filterCtx.setRegionsId(regionsId)
  }, [regionsId]);




  const session = useSession()
  let userData = session.data.xyz

  const toggleAcitveElement = (id) => {
    let item = document.getElementById(id)
    item !== null ? item.classList.add('selected') : ""


  }


  useEffect(() => {
    let services = document.querySelectorAll('.profile-list-service')
    services.length > 0 ? [...services].map((serivec) => {
      serivec.classList.remove('.selected')

    }) : ""
  }, [service])
  const handleChange = (e) => {
    setImageUpLoaded(true)
    let file = e.target.files
    setImageSrc(file[0].name)
  }
 

  useEffect(() => {
    const region = axios.get('https://stagingapi.aqarifinder.com/api/region/list/', {
      headers: {
        "lang": route.locale
      },
    })
      .then(res => {
        !res.data.status.message == 'OK' ?"" : setRegions(res.data.results)

      })
  }, [])

  useEffect(() => {
    axios.get('https://stagingapi.aqarifinder.com/api/service_type/list', {
      headers: {
        "lang": route.locale

      },
    })
      .then(res => {
        !res.data.status.message == 'OK' ?"": setSerivces(res.data.results)
      })
  }, [])

  const handelSubmit = (e) => {

    setFiles([imageOne, imageTwo, imageThree, imageFour])
    let formData;
    !disable && (
      title == '' || desc == '' || price == '' || phoneNumber == " " || files.length == 0 ?
      (
        route.locale =='ar'&& swal( 'تحذير', 'يرجى تعبئة جميع الحقول', 'warning'),
        route.locale =='en'&& swal('warning','Fill all field please',  'warning')
      )
        :
        (
          formData = new FormData(),
          formData.append('title', title),
          formData.append('description', desc),
          selectCategoryId.map((categ) => {
            formData.append('region_ids', categ)
          }),
          formData.append('price', price),
          formData.append('service_type_id', selectServId),
          formData.append('phone', phoneNumber),
          formData.append('whatsapp', phoneNumber),
          files.map((file) => {
            formData.append('image_files', file)
          }),

          axios({
            method: "post",
            url: "https://stagingapi.aqarifinder.com/api/user/services/add",
            headers: { "Content-Type": "multipart/form-data", 'Authorization': userData.id },
            data: formData,
          })
            .then((response) => {
              response.data.status.code == 200 ?
                (               
                route.locale == 'ar' &&swal("تهانينا", 'تمت إضافة الخدمة بنجاح', 'success'),
                route.locale == 'en' && ("'well done", 'Serivce Added Successfully', 'success'),
                route.replace('/profile/mySerivces')
                ):swal(response.data.results)
            console.log(response);

             
            })
            .catch((response) => {
              
              route.locale == 'ar' ?
                ("لا يمكنك إضافة في الوقت الحالي", 'الرجاء المحاولة في وقت لاحق', 'error'):
                swal( 'try later',"You can not add at the moment", 'error')
                  })

        )


    )

  }


  return (
    <div>
      <div className='profile-tab add-servie-tab' onClick={(e) => {
        e.target.id !== "serivce-list" ? setShowListService(false) : ""

      }}>
        <div className="signin-contanier addAdds-tab-container ">
          {/* <div className="addAdds-heading">
            <h3>{serviceOb.pro8}</h3>
          </div> */}
          <div className="inputs-group addAdds-group">
            <div className="sign-input  addAdds-phone ">
              <h3>{serviceOb.title}</h3>
              <input type="text" className="sign-mail" placeholder={serviceOb.title} tabIndex={1} autoFocus onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="sign-input  addAdds-phone ">
              <h3>{serviceOb.phone}</h3>
              <input type="text" min={8} className="sign-mail" placeholder={serviceOb.phone} tabIndex={2} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="sign-input  addAdds-phone " style={{ position: 'relative' }}>
              <h3>{serviceOb.serviceType}</h3>
              <input type="text" id='serivce-list' className="sign-mail" placeholder={serviceOb.serviceType} aut tabIndex={3} value={service}
                onClick={() => {
                  setShowListService(!showListService)
                }} />
              <img src="/assets/img/Stroke 1.svg" alt="" className='add-service-stroke-category' />
              {
                <ul className="dropdown-typeList" id='serivce-list' style={{
                  display: !showListService ? 'none' : "",
                  position: "absolute",
                  zIndex: "5"
                }} >

                  {services.map((item) => (
                    <li className='list-item profile-list-service' key={item.id} id={`${item.id} serivce-list`} onClick={(e) => {
                      e.target.classList.add('selected')
                      setService(item.title)
                            
                      let selectInfo = {
                        value: item.title,
                        id: item.id
                      }
                      setSelectServiId(item.id)

                    }

                    }>{item.title}</li>
                  ))}
                </ul>
              }
            </div>

            <div className="sign-input ">
              <h3 style={{
                paddingTop: "20px"
              }}>{serviceOb.whatsaap}</h3>
              <input type="text" min='8' max='12' className="sign-mail" placeholder={serviceOb.whatsaap} tabIndex={4} onChange={e => setWhatsPhone(e.target.value)} />
            </div>
            <div className="sign-input  addAdds-region" id='city-list' style={{ position: 'relative' }} >
              <h3>{serviceOb.city}</h3>
              <input type="text" className="sign-mail" placeholder={serviceOb.city} tabIndex={3} id='city-list' value={[...selection]}
                onChange={e => setCity(e.target.value)}
                onClick={() => {
                  setShowListNames(!showListNames)
                  setShowListService(false)

                }} />
              <img src="/assets/img/Stroke 1.svg" alt="" className='add-service-stroke-city' />
              {
                <ul className="dropdown-typeList" id='city-list' style={{
                  display: !showListNames ? 'none' : "",
                  position: "absolute",
                  zIndex: "5"

                }} >
                  {regions.map((item) => (
                    <li className='list-item' key={item.id} id={item.id} onClick={(e) => {
                      e.target.classList.add('selected')
                      setShowListNames(false)
                      let indexRegion = regionsId.findIndex((el) => el === item.id)
                      let newArray = [...regionsId]
                      newArray.splice(indexRegion, 1)
                      regionsId.push(item.id)
                      toggleAcitveElement(item.id)

                      let selectInfo = {
                        value: item.title,
                        id: item.id
                      }

                      let index = selection.findIndex((el) => el === item.title)
                      if (index == -1) {
                        setSelection(pre => [...pre, item.title])
                        setSelectItems(pre => [...pre, selectInfo])
                        selectCategoryId.push(item.id)


                      } else {
                        e.target.classList.remove('selected')
                        let newArray = [...selection]
                        newArray.splice(index, 1)
                        setSelection(newArray)
                        selectCategoryId.pop(item.id)



                      }





                    }
                    }>{item.title}</li>
                  ))}
                </ul>
              }
            </div>
            <div className="sign-input  addAdds-price">
              <h3>{serviceOb.price}</h3>
              <input type="text" className="sign-mail" placeholder={serviceOb.price} tabIndex={3} onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="sign-input ">
              <h3 style={{
                paddingTop: "20px"
              }}>{serviceOb.serivceDetails}</h3>
              <textarea type="text" className="sign-mail" placeholder={serviceOb.serivceDetails} tabIndex={5} onChange={(e) => setDesc(e.target.value)} />
            </div>

            <div className={`sign-input submit-logo ${imageUpLoaded ? 'office-logo' : ""}`} style={{
              display: imageUpLoaded ? 'none' : "block", width: "66vw"
            }}>
              <h3 >{serviceOb.pic}</h3>
              <div className="wrrap-images">
                {
                  !imageOne ?
                    <div className="submit-imgs" onClick={(e) => {
                      document.getElementById('select-file').click()

                    }}  >
                      <input type="file" id='select-file' tabIndex={3}
                        style={{
                          display: 'none',
                        }}
                        onChange={(e) => {
                          setImageOne(e.target.files[0])
                        }

                        } />

                      <img src="/assets/img/img.svg" alt="" />
                      <p>{serviceOb.pic} 1</p>
                    </div>

                    : <div className="" style={{ position: 'relative' }}>
                      <img src={URL.createObjectURL(imageOne)} alt="" className='uploadedImage' style={{ objectFit: 'cover' }} />
                      <img src="/assets/img/removeImg.svg" alt="" className='remove-img-serivce' onClick={(e) => {
                        setImageOne('')
                      }} />
                    </div>
                }
                {
                  !imageTwo ?
                    <div className="submit-imgs" onClick={(e) => {
                      document.getElementById('select-file-2').click()
                    }}  >
                      <input type="file" id='select-file-2' tabIndex={3}
                        style={{
                          display: 'none',
                        }}
                        onChange={(e) => {
                          setImageTwo(e.target.files[0])




                        }
                        } />

                      <img src="/assets/img/img.svg" alt="" />
                      <p>{serviceOb.pic} 2</p>
                    </div>

                    : <div className="" style={{ position: 'relative' }}>
                      <img src={URL.createObjectURL(imageTwo)} alt="" className='uploadedImage' style={{ objectFit: 'cover' }} />
                      <img src="/assets/img/removeImg.svg" alt="" className='remove-img-serivce' onClick={(e) => {
                        setImageTwo('')
                      }} />
                    </div>
                }
                {
                  !imageThree ?
                    <div className="submit-imgs" onClick={(e) => {
                      document.getElementById('select-file-3').click()
                    }}  >
                      <input type="file" id='select-file-3' tabIndex={3}
                        style={{
                          display: 'none',
                        }}
                        onChange={(e) => {
                          setImageThree(e.target.files[0])



                        }
                        } />

                      <img src="/assets/img/img.svg" alt="" />
                      <p>{serviceOb.pic} 3</p>
                    </div>

                    : <div className="" style={{ position: 'relative' }}>
                      <img src={URL.createObjectURL(imageThree)} alt="" className='uploadedImage' style={{ objectFit: 'cover' }} />
                      <img src="/assets/img/removeImg.svg" alt="" className='remove-img-serivce' onClick={(e) => {
                        setImageThree('')
                      }} />
                    </div>
                }
                {
                  !imageFour ?
                    <div className="submit-imgs" onClick={(e) => {
                      document.querySelector('input#select-file-4').click()
                    }}  >
                      <input type="file" id='select-file-4' tabIndex={3}
                        style={{
                          display: 'none',
                        }}
                        onChange={(e) => {
                          setImageFour(e.target.files[0])



                        }
                        } />

                      <img src="/assets/img/img.svg" alt="" />
                      <p>{serviceOb.pic} 4</p>
                    </div>

                    : <div className="" style={{ position: 'relative' }}>
                      <img src={URL.createObjectURL(imageFour)} alt="" className='uploadedImage' style={{ objectFit: 'cover' }} />
                      <img src="/assets/img/removeImg.svg" alt="" className='remove-img-serivce' id='select-file-4' onClick={(e) => {
                        setImageFour('')
                      }} />
                    </div>
                }
              </div>

            </div>
            <div className={`${imageUpLoaded ? "shoUploadedImages" : ""}`}
              style={{
                display: !imageUpLoaded ? 'none' : "block",


              }}>
            </div>


            <div className="checksbox">
              <div className="conditions chack-groub" style={{ cursor: 'pointer' }} onClick={() => {
                setCheckedConditions(!checkedConditions)
                setdisable(() => {
                  checkedConditions && setdisable(!disable)
                })
              }}>
                <img src={`/assets/img/${!checkedConditions ? 'emptyCheck' : 'fullCheck'}.svg`} alt="" />
                <span>{serviceOb.tearmAndCondition}</span>

              </div>
            </div>
          </div>

          <div className="sign-btn" aria-disabled="true" onClick={handelSubmit} style={{
            backgroundColor: disable ? "#F1E6D3" : "#EDAA43"
          }}>
            {serviceOb.addBtn}
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddService