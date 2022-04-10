import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import swal from 'sweetalert';

const Packge = (props) => {
    const [showPackgeDetail, setShwoPackgeDetail] = useState(false)
    const [paymentId, setPaymentId] = useState('')
    const session = useSession()
    const route = useRouter()
    let formData = new FormData()
    formData.append('package_id', props.packgeId)
    formData.append('callbackurl', 'https://akarii-demo.herokuapp.com/packages')
    let formDataTow = new FormData()
    formDataTow.append('package_id', props.packgeId)



 
  
    useEffect(() => {
        console.log(route.query.paymentId + "rtoue.query");
        console.log(session);
        route.query.paymentId &&
            (
                session.status == "authenticated"&&
                axios({
                    method: "post",
                    url: `https://stagingapi.aqarifinder.com/api/user/package/purchase/${route.query.paymentId}`,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        'Authorization': session.data != null&& session.data.id 
                    },
                    // data: formDataTow
      
                }).then((res) => {
                    console.log(`https://stagingapi.aqarifinder.com/api/user/package/purchase/${route.query.paymentId}`,)
                    console.log(res);
                    swal(res.data.status.message)
                    console.log(session);

                
                })
      
            )
       }, [route,session])
        
       

    const handleClick = () => {
    console.log(session.data);
        session.data != null ?
            (
                axios({
                    method: "post",
                    url: "https://stagingapi.aqarifinder.com/api/user/package/get_link",
                    headers: {
                        "Content-Type": "multipart/form-data",
                        'Authorization': session.data != null ? session.data.id : route.replace('/signIN')
                    },
                    data: formData

                }).then((res) => {

                    res.data.status.code == 200 && route.replace(res.data.results.data.paymentURL)
                    console.log(res.data.results.data.paymentURL);
                })
            ) : route.replace('/signIN')

    }

    return (
        <>
            <div className='packge'>
                <div className='type'>
                    <div className='packge-img' onClick={() => setShwoPackgeDetail(!showPackgeDetail)}>
                        <img src={props.logo} />
                    </div>
                    <div className='packge-info'>
                        <span className='packge-name'>{props.titleOne}</span>
                        <span className='packge-type'>{props.titleTwo}</span>
                    </div>
                </div>
                <div className='add-type show'>
                    <span className='add-type-first'>
                        <span className='number-adds'>{props.currencyId}</span>{props.titleTwo}
                        <span className='price-adds'>{props.price}</span>{props.currencyTitle}
                    </span>

                </div>
                <div className='add-type hide' onClick={handleClick}>
                    <span className='add-type-first'>
                        <span className='number-adds'>{props.currencyId}</span>{props.titleTwo}
                        <span className='price-adds'>{props.price}</span>{props.currencyTitle}
                    </span>

                </div>
                <div className='subscribe-type'>
                    <button className='subscribe-btn' onClick={handleClick}>{props.btn}</button>
                    {/* <button className='subscribe-btn'>إشتراك</button> */}

                </div>
            </div>


            {showPackgeDetail &&
                <div className={showPackgeDetail ? "overlay" : ""} onClick={() => {
                    setShwoPackgeDetail(false)
                }}>

                    <div className="single-packge">
                        <h3>{props.sginOb.premiumAda}</h3>
                        <img className='packge-img' src={props.logo} alt="" />
                        <button className='btn-packge'
                            onClick={() => setShwoPackgeDetail(!showPackgeDetail)}>{props.sginOb.closeBtn}</button>
                    </div>
                </div>
            }


        </>
    )
}

export default Packge