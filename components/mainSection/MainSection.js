import React, { useState, useEffect, useContext } from 'react'
import SearchBoxNames from '../searchBox/SearchBoxNames'
import onClickOutside from 'react-onclickoutside';
import SearchBoxTypes from '../searchBox/SearchBoxTypes';
import SearchBoxSerivce from '../searchBox/SearchBoxSerivce';
import Link from 'next/link';
import axios from 'axios';
import { FilterContext } from '../../stores/filter';
import { useRouter } from 'next/router';
import { Filter } from '@mui/icons-material';
import swal from 'sweetalert';
const MainSection = ({ searchOb }) => {
  const [showSearchSelling, setShowSearchSelling] = useState(false)
  const [showSearchRent, setShowSearchRent] = useState(false)
  const [showSearchServics, setShowSearchServics] = useState(false)
  const [showBox, setShowBox] = useState(false)
  const [category, setCategory] = useState()
  const [region, setRegions] = useState([])
  const [services, setSerivces] = useState([])
  const route = useRouter()
  const filterCtx = useContext(FilterContext)

  
  MainSection.handleClickOutside = () => {
    setShowSearchRent(false)
    setShowSearchServics(false)
    setShowSearchSelling(false)
    setShowBox(false)
  }
  console.log(route.locale);

  let regions = filterCtx.regions_id

  const handelClick = () => {
    filterCtx.serivce_id && regions ?
      (
        showSearchServics && axios.post('https://stagingapi.aqarifinder.com/api/services/filter',
          { "service_type_id": filterCtx.serivce_id, "regions": regions },
          {
            headers: {
              "lang": route.locale
            }
          })
          .then(res => {

            console.log(res.data.results);
            filterCtx.setSerivceResutls(res.data.results)
            route.push('/searchResultsService')

          })
      ) :
      filterCtx.type_id && regions ?

        (showSearchRent ?
          axios.post('https://stagingapi.aqarifinder.com/api/ads/filter',
            { "category_id": filterCtx.type_id, "regions": regions, "ad_type_id": 1 },
            {
              headers: {
                "lang": route.locale
              }
            })
            .then(res => {
              console.log(filterCtx);
              console.log(res.data.results);
              filterCtx.setAddsSResutls(res.data.results)
              filterCtx.setSerivceId('')
              filterCtx.setRentValue(true)
              route.replace('/SearchResult')

            }) :

          showSearchSelling &&
          axios.post('https://stagingapi.aqarifinder.com/api/ads/filter',
            { "category_id": filterCtx.type_id, "regions": regions, "ad_type_id": 2 },
            {
              headers: {
                "lang": route.locale
              }
            })
            .then(res => {
              console.log(res.data);
              filterCtx.setAddsSResutls(res.data.results)
              filterCtx.setSerivceId('')
              filterCtx.setRentValue(false)
              route.replace('/SearchResult')

            })

        ) : swal('!Opse', 'Fill in all fields', 'error')

  }


  useEffect(() => {
    axios.get('https://stagingapi.aqarifinder.com/api/service_type/list', {
      headers: {
        "lang": route.locale
      },
    })
      .then(res => {
        !res.data.status.message == 'OK' ? console.log(res.data) : setSerivces(res.data.results)
      })
  }, [])



  useEffect(() => {
    axios.get('https://stagingapi.aqarifinder.com/api/category/list', {
      headers: {
        "lang": route.locale
      },
    })
      .then(res => {

        !res.data.status.message == 'OK' ? console.log(res.data) : setCategory(res.data.results)

      })
  }, [])






  useEffect(() => {

    const region = axios.get('https://stagingapi.aqarifinder.com/api/region/list/', {
      headers: {
        "lang": route.locale
      },
    })
      .then(res => {
        !res.data.status.message == 'OK' ? console.log(res.data) : setRegions(res.data.results)

      })
  }, [])


  return (
    <div className='actions-contaier'>
      <div className={`actions ${showBox ? 'showBox' : ''}`} tabIndex={1} >
        <div className='selling ' onClick={() => {
          setShowSearchRent(false)
          setShowSearchServics(false)
          showSearchSelling ? setShowBox(false) : setShowBox(true)
          setShowSearchSelling(!showSearchSelling)
        }}>
          <span className={`action ${showSearchSelling ? 'acitveAction' : ''}`}>{searchOb.sh1}</span>
        </div>
        <div className='rent' onClick={() => {
          setShowSearchSelling(false)
          setShowSearchServics(false)
          showSearchRent ? setShowBox(false) : setShowBox(true)

          setShowSearchRent(!showSearchRent)
        }} tabIndex={2} >
          <span className={`action ${showSearchRent ? 'acitveAction' : ''}`}>{searchOb.sh2}</span>
        </div>
        <div className='service' onClick={() => {
          setShowSearchSelling(false)
          setShowSearchRent(false)

          showSearchServics ? setShowBox(false) : setShowBox(true)
          setShowSearchServics(!showSearchServics)
        }}>
          <span className={`action ${showSearchServics ? 'acitveAction' : ''}`}>{searchOb.sh3}</span>
        </div>
        <div className='search-div'>
          {(showBox) && !showSearchServics ?
            <div className='serarch'>
              <div className='serachContainer first'>
                <SearchBoxNames regions={region} searchOb={searchOb} />
              </div>
              <div className='serachContainer second'>
                <SearchBoxTypes category={category} searchOb={searchOb} />
              </div>
              {/* <Link className='searchLink' href='/searchResult'> */}
              <div className=' serachContainer btnSearch' onClick={handelClick}  >
                <button style={{
                  cursor: "pointer"
                }}>
                  {searchOb.sh7}        </button>

              </div>
              {/* </Link> */}

            </div> :
            showSearchServics && showBox && <div className='serarch'>
              <div className='serachContainer first'>
                <SearchBoxNames regions={region} searchOb={searchOb} />
              </div>
              <div className='serachContainer second'>
                <SearchBoxSerivce services={services} searchOb={searchOb} />
              </div>
              {/* <Link className='searchLink' href='/searchResult'> */}
              <div className=' serachContainer btnSearch' onClick={handelClick}  >
                <button style={{
                  cursor: "pointer"
                }}>
                  {searchOb.sh7}
                </button>

              </div>
              {/* </Link> */}
            </div>




          }
        </div>
      </div>


    </div>
  )
}
const clickOutsideConfig = {
  handleClickOutside: () => MainSection.handleClickOutside,
};

export default onClickOutside(MainSection, clickOutsideConfig);